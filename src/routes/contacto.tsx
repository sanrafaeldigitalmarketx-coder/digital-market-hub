import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Información de contacto institucional pendiente de cargar por la Alcaldía del Municipio San Rafael de Onoto.",
      },
    ],
  }),
});

function ContactoPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Contacto institucional</h1>
        <p className="mt-3 text-muted-foreground">
          Información pendiente de cargar por la Alcaldía del Municipio San Rafael de
          Onoto.
        </p>

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
            Aviso
          </span>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            Los canales oficiales de atención serán publicados por la Alcaldía del
            Municipio San Rafael de Onoto.
          </p>

          <button
            type="button"
            disabled
            aria-disabled="true"
            className="btn-glow mt-6 inline-flex cursor-not-allowed opacity-60"
            title="Información pendiente de cargar por la Alcaldía del Municipio San Rafael de Onoto."
          >
            Canal de contacto pendiente
          </button>
        </div>

        <div className="card-surface mt-8 space-y-3 p-8">
          <div className="field-slot">WhatsApp oficial pendiente</div>
          <div className="field-slot">Correo institucional pendiente</div>
          <div className="field-slot">Dirección oficial pendiente</div>
          <div className="field-slot min-h-[6rem]">
            Información pendiente de cargar por la Alcaldía del Municipio San Rafael de
            Onoto.
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
