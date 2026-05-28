import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/mapa")({
  component: MapaPage,
  head: () => ({
    meta: [
      { title: "Mapa del Municipio — San Rafael de Onoto" },
      {
        name: "description",
        content:
          "Ubicación del Municipio San Rafael de Onoto, Estado Portuguesa, Venezuela.",
      },
      { property: "og:title", content: "Mapa del Municipio — San Rafael de Onoto" },
      {
        property: "og:description",
        content: "Mapa y ubicación oficial del Municipio.",
      },
    ],
  }),
});

function MapaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Mapa del Municipio</h1>
          <p className="mt-4 text-muted-foreground">
            San Rafael de Onoto · Estado Portuguesa · Venezuela
          </p>
        </div>

        <div
          className="card-surface mt-10 overflow-hidden p-0"
          style={{ borderColor: "oklch(0.62 0.22 285 / 0.35)" }}
        >
          <iframe
            title="Mapa de San Rafael de Onoto"
            src="https://www.google.com/maps?q=San+Rafael+de+Onoto,+Portuguesa,+Venezuela&output=embed"
            className="h-[480px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="card-surface mt-6 p-6">
          <h2 className="text-lg font-semibold">Instrucciones de llegada</h2>
          <div className="field-slot mt-3 min-h-[6rem]">
            Información pendiente de cargar por la Alcaldía del Municipio San Rafael de
            Onoto.
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
