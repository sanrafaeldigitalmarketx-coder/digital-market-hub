import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CATEGORIES } from "@/lib/categories";

export const Route = createFileRoute("/categorias")({
  component: CategoriasPage,
  head: () => ({
    meta: [
      { title: "Categorías — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Explora todas las categorías de comercios del Municipio San Rafael de Onoto.",
      },
      { property: "og:title", content: "Categorías — SanRafael DigitalMarket" },
      {
        property: "og:description",
        content: "Comercios organizados por categoría profesional.",
      },
    ],
  }),
});

function CategoriasPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "var(--brand-blue)",
              background: "oklch(0.70 0.18 240 / 0.12)",
              border: "1px solid oklch(0.70 0.18 240 / 0.3)",
            }}
          >
            Marketplace
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Categorías</h1>
          <p className="mt-3 text-muted-foreground">
            Selecciona una categoría para ver los comercios disponibles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to="/categorias/$slug"
              params={{ slug: cat.slug }}
              className="card-surface flex h-28 items-center justify-center p-4 text-center text-sm font-semibold transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-glow-purple)" }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
