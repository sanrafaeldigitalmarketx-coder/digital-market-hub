import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ADMIN_NAME, ADMIN_EMAIL } from "@/lib/whatsapp";

export const Route = createFileRoute("/terminos")({
  component: TerminosPage,
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Términos y condiciones de uso de la plataforma privada SanRafael DigitalMarket.",
      },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-surface p-6 sm:p-8">
      <h2 className="text-lg font-semibold sm:text-xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function TerminosPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Términos y Condiciones</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última actualización: 2026 · Plataforma privada administrada por {ADMIN_NAME}.
        </p>

        <div className="mt-8 space-y-4">
          <Section title="1. Naturaleza de la plataforma">
            <p>
              SanRafael DigitalMarket es una plataforma <strong>100% privada</strong>. No pertenece
              ni representa a ninguna alcaldía, municipio o institución pública. Es administrada de
              forma independiente por {ADMIN_NAME}.
            </p>
          </Section>

          <Section title="2. Uso del servicio">
            <p>
              El acceso al contenido es libre. Para publicar negocios, productos o catálogos es
              obligatorio contratar un plan y enviar el material al administrador. Los usuarios y
              negocios <strong>no pueden publicar directamente</strong>; toda publicación se realiza
              mediante el administrador.
            </p>
          </Section>

          <Section title="3. Comentarios y calificaciones">
            <p>
              Solo se permite un comentario por producto. Todos los comentarios pueden ser
              moderados, editados o eliminados si incumplen las normas básicas de respeto, veracidad
              o si constituyen spam.
            </p>
          </Section>

          <Section title="4. Planes y pagos">
            <p>
              Los precios y beneficios de cada plan se detallan en la sección Planes. El pago
              habilita la publicación durante el período acordado con el administrador. No se
              ofrecen reembolsos una vez iniciada la publicación, salvo acuerdo expreso.
            </p>
          </Section>

          <Section title="5. Responsabilidad del contenido">
            <p>
              Cada negocio es responsable de la veracidad de la información que entrega para ser
              publicada. La plataforma se reserva el derecho de rechazar contenido engañoso,
              ilegal u ofensivo.
            </p>
          </Section>

          <Section title="6. Modificaciones">
            <p>
              Estos términos pueden actualizarse en cualquier momento. La versión vigente es la
              publicada en esta página. Para consultas escribe a {ADMIN_EMAIL}.
            </p>
          </Section>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
