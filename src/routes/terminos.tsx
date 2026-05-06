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

function TerminosPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Términos y Condiciones</h1>
        <div className="card-surface mt-8 min-h-[300px] p-8 text-sm text-muted-foreground">
          Espacio reservado para los términos y condiciones.
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
