import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacidad")({
  component: PrivacidadPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidad — SanRafael DigitalMarket" },
      { name: "description", content: "Política de privacidad de SanRafael DigitalMarket." },
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

function PrivacidadPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Política de Privacidad</h1>
        <div className="card-surface mt-8 p-8">
          <p className="text-sm leading-relaxed text-foreground">
            <strong>Política de Privacidad – SanRafael DigitalMarket</strong>
            <br />
            Esta Política de Privacidad explica cómo se recopila, utiliza y protege la
            información proporcionada por los usuarios y comerciantes.
          </p>

          <Section title="1. Información recopilada">
            <ul className="list-disc space-y-1 pl-5">
              <li>Nombre</li>
              <li>WhatsApp</li>
              <li>Correo electrónico</li>
              <li>Ubicación</li>
              <li>Información adicional enviada voluntariamente</li>
              <li>Materiales o contenido para la publicación</li>
            </ul>
            <p className="mt-2">No se recopilan datos financieros.</p>
          </Section>

          <Section title="2. Uso de la información">
            La información se utiliza para contactar al comerciante, gestionar su
            publicación y mantener comunicación relacionada con el servicio. No se
            comparte con terceros.
          </Section>

          <Section title="3. Protección de datos">
            La información es manejada de forma privada y segura. Solo el administrador
            tiene acceso.
          </Section>

          <Section title="4. Derechos del usuario">
            El usuario puede solicitar corrección, eliminación o retiro de su comercio.
          </Section>

          <Section title="5. Responsabilidad del contenido">
            El comerciante es responsable del material que envía. El administrador puede
            rechazar contenido inapropiado.
          </Section>

          <Section title="6. Actualizaciones">
            La política puede actualizarse en cualquier momento.
          </Section>

          <Section title="7. Contacto">
            <ul className="space-y-1">
              <li>WhatsApp: +58 416 133 4898</li>
              <li>Correo: jovanygonzalez.gfxdesigner@gmail.com</li>
              <li>Ubicación: San Rafael de Onoto, Estado Portuguesa, Venezuela</li>
            </ul>
          </Section>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
