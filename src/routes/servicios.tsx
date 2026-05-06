import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MerchantCard } from "@/components/MerchantCard";

export const Route = createFileRoute("/servicios")({
  component: ServiciosPage,
  head: () => ({
    meta: [
      { title: "Servicios — SanRafael DigitalMarket" },
      { name: "description", content: "Servicios y comercios disponibles en SanRafael DigitalMarket." },
    ],
  }),
});

function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Servicios</h1>
        <p className="mt-3 text-muted-foreground">Espacio listo para los comercios y servicios.</p>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <MerchantCard key={i} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
