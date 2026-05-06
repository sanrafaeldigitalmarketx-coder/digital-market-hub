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

function PrivacidadPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Política de Privacidad</h1>
        <div className="card-surface mt-8 min-h-[300px] p-8 text-sm text-muted-foreground">
          Espacio reservado para la política de privacidad.
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
