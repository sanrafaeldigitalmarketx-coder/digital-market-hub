import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MerchantCard } from "@/components/MerchantCard";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";

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
        <Link to="/categorias" className="mt-6 inline-block text-sm text-muted-foreground underline">
          Volver a Categorías
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
          to="/categorias"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Todas las categorías
        </Link>

        <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">{category.name}</h1>
            <p className="mt-2 text-muted-foreground">
              Comercios pendientes de cargar en esta categoría.
            </p>
          </div>

          {/* Filtro automático por categoría */}
          <div className="card-surface flex items-center gap-3 p-3">
            <label htmlFor="cat-filter" className="text-xs text-muted-foreground">
              Cambiar categoría:
            </label>
            <select
              id="cat-filter"
              className="rounded-md bg-transparent px-2 py-1 text-sm"
              style={{ border: "1px solid oklch(0.62 0.22 285 / 0.4)" }}
              defaultValue={category.slug}
              onChange={(e) => {
                const slug = e.target.value;
                if (slug && slug !== category.slug) {
                  window.location.href = `/categorias/${slug}`;
                }
              }}
            >
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug} className="bg-background text-foreground">
                  {c.name}
                </option>
              ))}
            </select>
          </div>
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
