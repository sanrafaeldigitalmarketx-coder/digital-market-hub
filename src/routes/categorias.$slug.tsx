import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MerchantCard } from "@/components/MerchantCard";
import { getCategoryBySlug } from "@/lib/categories";

export const Route = createFileRoute("/categorias/$slug")({
  component: CategoriaDetallePage,
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.category.name} — SanRafael DigitalMarket`
          : "Categoría — SanRafael DigitalMarket",
      },
      {
        name: "description",
        content: loaderData
          ? `Comercios de la categoría ${loaderData.category.name} en el Municipio San Rafael de Onoto.`
          : "Comercios por categoría.",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Categoría no encontrada</h1>
        <Link to="/" className="mt-6 inline-block text-sm text-muted-foreground underline">
          Volver al inicio
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function CategoriaDetallePage() {
  const { category } = Route.useLoaderData();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Volver al inicio
        </Link>

        <div className="mt-4">
          <h1 className="text-3xl font-bold sm:text-4xl">{category.name}</h1>
          <p className="mt-2 text-muted-foreground">
            Comercios pendientes de cargar en esta categoría.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <MerchantCard key={i} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
