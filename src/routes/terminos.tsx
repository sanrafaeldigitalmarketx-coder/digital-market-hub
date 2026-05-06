import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terminos")({
  component: TerminosPage,
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — SanRafael DigitalMarket" },
      { name: "description", content: "Términos y condiciones de uso de SanRafael DigitalMarket." },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function TerminosPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Términos y Condiciones</h1>
        <div className="card-surface mt-8 p-8">
          <p className="text-sm leading-relaxed text-foreground">
            <strong>Términos y Condiciones – SanRafael DigitalMarket</strong>
            <br />
            Al utilizar los servicios de SanRafael DigitalMarket, el usuario acepta los
            siguientes términos:
          </p>

          <Section title="1. Publicación de comercios">
            Para aparecer en la plataforma, el comerciante debe elegir un plan y cancelar
            la tarifa correspondiente. El administrador se encarga de recibir, editar,
            diseñar y subir el contenido.
          </Section>

          <Section title="2. Responsabilidad del contenido">
            El comerciante es responsable del contenido que envía. SanRafael DigitalMarket
            no se hace responsable por información falsa, imágenes no autorizadas o
            material que viole derechos de terceros.
          </Section>

          <Section title="3. No se garantizan ventas">
            La plataforma ofrece visibilidad, no resultados comerciales garantizados.
          </Section>

          <Section title="4. No hay reembolsos">
            Una vez que el contenido ha sido publicado, no se realizan reembolsos.
          </Section>

          <Section title="5. Modificaciones">
            El administrador puede actualizar tarifas, planes o condiciones en cualquier
            momento.
          </Section>

          <Section title="6. Aceptación">
            Al contratar un plan, el comerciante acepta estos términos en su totalidad.
          </Section>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
