import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { MerchantCard } from "@/components/MerchantCard";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SanRafael DigitalMarket — Marketplace digital moderno" },
      {
        name: "description",
        content:
          "Plataforma moderna para negocios, servicios y productos digitales en SanRafael. Conecta comerciantes y clientes en un solo lugar.",
      },
      { property: "og:title", content: "SanRafael DigitalMarket" },
      {
        property: "og:description",
        content: "Tu plataforma moderna para negocios, servicios y productos digitales.",
      },
    ],
  }),
});

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center" style={{ animation: "var(--animate-fade-up)" }}>
      <span
        className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
        style={{
          color: "var(--brand-blue)",
          background: "oklch(0.70 0.18 240 / 0.12)",
          border: "1px solid oklch(0.70 0.18 240 / 0.3)",
        }}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <span
            className="rounded-full px-4 py-1.5 text-xs font-medium"
            style={{
              color: "white",
              background: "oklch(0.62 0.22 285 / 0.15)",
              border: "1px solid oklch(0.62 0.22 285 / 0.4)",
              animation: "var(--animate-fade-in)",
            }}
          >
            Marketplace digital · Hecho en Venezuela
          </span>

          <h1
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animation: "var(--animate-fade-up)" }}
          >
            SanRafael{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              DigitalMarket
            </span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
            style={{ animation: "var(--animate-fade-up)", animationDelay: "0.1s" }}
          >
            Tu plataforma moderna para negocios, servicios y productos digitales.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animation: "var(--animate-fade-up)", animationDelay: "0.2s" }}
          >
            <a href="#categorias" className="btn-glow">
              Explorar marketplace
            </a>
            <Link
              to="/planes"
              className="rounded-full px-6 py-3 text-sm font-semibold transition-colors"
              style={{
                color: "white",
                border: "1px solid oklch(0.70 0.18 240 / 0.4)",
                background: "oklch(0.21 0.008 280 / 0.6)",
              }}
            >
              Soy comerciante
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section id="categorias" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Categorías"
          title="Categorías destacadas"
          description="Espacios listos para tus categorías personalizadas."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CategoryCard key={i} />
          ))}
        </div>
      </section>

      {/* INFORMATIVA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="card-surface mx-auto max-w-4xl p-10 text-center sm:p-14"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.21 0.008 280), oklch(0.18 0.012 285))",
          }}
        >
          <SectionTitle eyebrow="Acerca de" title="Sobre SanRafael DigitalMarket" />
          <div className="mt-8 min-h-[140px] rounded-xl border border-dashed border-border/70 p-8 text-sm text-muted-foreground">
            Espacio reservado para tu texto descriptivo.
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Catálogo"
          title="Productos destacados"
          description="Tarjetas vacías listas para llenar con tus productos."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </section>

      {/* COMERCIANTES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Comerciantes"
          title="Comercios en la plataforma"
          description="Perfiles de comercio listos para personalizar."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <MerchantCard key={i} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
