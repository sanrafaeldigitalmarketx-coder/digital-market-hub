import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terminos")({
  component: TerminosPage,
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Términos y Condiciones pendientes de cargar por la Alcaldía del Municipio San Rafael de Onoto.",
      },
    ],
  }),
});

function TerminosPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Términos y Condiciones</h1>
        <div className="card-surface mt-8 p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Contenido pendiente de cargar por la Alcaldía del Municipio San Rafael de
            Onoto.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
