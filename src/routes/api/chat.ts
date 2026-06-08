import { createFileRoute } from "@tanstack/react-router";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { generateText } from "ai";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

async function buildContext(question: string): Promise<string> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const q = question.toLowerCase();
  const term = q.replace(/[%_]/g, "").slice(0, 80);
  const like = `%${term}%`;

  const [negociosRes, productosRes] = await Promise.all([
    supabaseAdmin
      .from("negocios")
      .select("id, nombre, descripcion, categoria, direccion, telefono")
      .or(
        `nombre.ilike.${like},descripcion.ilike.${like},categoria.ilike.${like},direccion.ilike.${like}`,
      )
      .limit(8),
    supabaseAdmin
      .from("productos")
      .select("id, nombre, descripcion, precio, negocio_id")
      .or(`nombre.ilike.${like},descripcion.ilike.${like}`)
      .limit(8),
  ]);

  const negocios = negociosRes.data ?? [];
  const productos = productosRes.data ?? [];

  // If nothing matched, give general counts so the AI can answer with totals.
  if (negocios.length === 0 && productos.length === 0) {
    const [{ count: nc }, { count: pc }] = await Promise.all([
      supabaseAdmin.from("negocios").select("*", { count: "exact", head: true }),
      supabaseAdmin.from("productos").select("*", { count: "exact", head: true }),
    ]);
    return `Catálogo actual: ${nc ?? 0} negocios y ${pc ?? 0} productos registrados. No se encontraron coincidencias para la búsqueda.`;
  }

  const negocioIds = negocios.map((n) => n.id);
  const productoIds = productos.map((p) => p.id);

  const [ratingsNeg, ratingsProd] = await Promise.all([
    negocioIds.length
      ? supabaseAdmin
          .from("ratings_negocios")
          .select("negocio_id, estrellas")
          .in("negocio_id", negocioIds)
      : Promise.resolve({ data: [] as Array<{ negocio_id: string; estrellas: number }> }),
    productoIds.length
      ? supabaseAdmin
          .from("ratings_productos")
          .select("producto_id, estrellas")
          .in("producto_id", productoIds)
      : Promise.resolve({ data: [] as Array<{ producto_id: string; estrellas: number }> }),
  ]);

  const avg = (arr: number[]) =>
    arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1) : "sin opiniones";

  const negLines = negocios.map((n) => {
    const stars = (ratingsNeg.data ?? [])
      .filter((r) => r.negocio_id === n.id)
      .map((r) => r.estrellas);
    return `- NEGOCIO: ${n.nombre} | Categoría: ${n.categoria ?? "-"} | Dirección: ${n.direccion ?? "-"} | Tel: ${n.telefono ?? "-"} | Descripción: ${n.descripcion ?? "-"} | Calificación: ${avg(stars)} (${stars.length} opiniones)`;
  });

  const prodLines = productos.map((p) => {
    const stars = (ratingsProd.data ?? [])
      .filter((r) => r.producto_id === p.id)
      .map((r) => r.estrellas);
    return `- PRODUCTO: ${p.nombre} | Precio: ${p.precio ?? "-"} | Descripción: ${p.descripcion ?? "-"} | Calificación: ${avg(stars)} (${stars.length} opiniones)`;
  });

  return [...negLines, ...prodLines].join("\n");
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { messages?: ChatMessage[] };
        const messages = Array.isArray(body.messages) ? body.messages : [];
        const lastUser = [...messages].reverse().find((m) => m.role === "user");
        if (!lastUser?.content) {
          return new Response(JSON.stringify({ error: "Mensaje vacío" }), { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response(JSON.stringify({ error: "Falta LOVABLE_API_KEY" }), { status: 500 });
        }

        let context = "";
        try {
          context = await buildContext(lastUser.content);
        } catch (e) {
          console.error("buildContext error", e);
          context = "No se pudo consultar la base de datos.";
        }

        const system = `Eres el asistente oficial de SanRafael DigitalMarket, la plataforma comercial del municipio San Rafael de Onoto. Responde SOLO usando la información del CONTEXTO. Si no hay datos suficientes, responde exactamente: "No tengo información sobre eso todavía." No inventes negocios, productos, precios ni calificaciones. Sé breve, claro y amable.

CONTEXTO:
${context}`;

        const gateway = createLovableAiGatewayProvider(key);
        try {
          const { text } = await generateText({
            model: gateway("google/gemini-3-flash-preview"),
            system,
            messages: messages.map((m) => ({ role: m.role, content: m.content })),
          });
          return new Response(JSON.stringify({ text }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (e: unknown) {
          const err = e as { statusCode?: number; status?: number; message?: string };
          const status = err.statusCode ?? err.status ?? 500;
          if (status === 429) {
            return new Response(
              JSON.stringify({
                error: "Demasiadas consultas en este momento. Intenta de nuevo en un minuto.",
              }),
              { status: 429 },
            );
          }
          if (status === 402) {
            return new Response(
              JSON.stringify({ error: "Servicio de IA sin créditos. Contacta al administrador." }),
              { status: 402 },
            );
          }
          console.error("AI gateway error", e);
          return new Response(
            JSON.stringify({ error: err.message ?? "Error generando respuesta" }),
            { status: 500 },
          );
        }
      },
    },
  },
});
