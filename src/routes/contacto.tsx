import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto — SanRafael DigitalMarket" },
      { name: "description", content: "Contacta con SanRafael DigitalMarket para publicar tu comercio." },
    ],
  }),
});

function ContactoPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Contacto</h1>
        <p className="mt-3 text-muted-foreground">
          Toda publicación se gestiona directamente conmigo.
        </p>

        {/* Aviso informativo del modelo de gestión */}
        <div
          className="card-surface mt-10 p-8"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.21 0.008 280), oklch(0.18 0.012 285))",
            borderColor: "oklch(0.62 0.22 285 / 0.35)",
          }}
        >
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "var(--brand-blue)",
              background: "oklch(0.70 0.18 240 / 0.12)",
              border: "1px solid oklch(0.70 0.18 240 / 0.3)",
            }}
          >
            ¿Cómo publicar?
          </span>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            Para publicar su comercio en <strong>SanRafael DigitalMarket</strong>, primero
            debe elegir un plan y cancelar la tarifa correspondiente. Después del pago, yo
            me encargo de recibir su material, editarlo, diseñarlo y subirlo a la
            plataforma.
          </p>

          <a
            href="https://wa.me/584161334998"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-6 inline-flex"
          >
            Escribirme por WhatsApp
          </a>
        </div>

        {/* Datos de contacto del gestor */}
        <div className="card-surface mt-8 space-y-3 p-8">
          <div className="field-slot">WhatsApp: +58 416 133 4898</div>
          <div className="field-slot">
            Correo electrónico: jovanygonzalez.gfxdesigner@gmail.com
          </div>
          <div className="field-slot">
            Ubicación: San Rafael de Onoto, Estado Portuguesa, Venezuela
          </div>
          <div className="field-slot min-h-[6rem]">
            Atención personalizada para comerciantes, emprendedores y empresas que desean
            aparecer en SanRafael DigitalMarket.
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
