import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { MerchantCard } from "@/components/MerchantCard";
import { Banner } from "@/components/Banner";
import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/categories";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SanRafael DigitalMarket — Marketplace digital privado" },
      {
        name: "description",
        content:
          "Plataforma privada para descubrir emprendedores, negocios y empresas. Catálogos, productos, calificaciones y atención directa por WhatsApp.",
      },
      { property: "og:title", content: "SanRafael DigitalMarket" },
      {
        property: "og:description",
        content: "Descubre productos, negocios y emprendedores en un solo lugar.",
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

      {/* BANNER SUPERIOR */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Banner variant="top" label="Banner superior rotativo · Pendiente de cargar" />
      </div>



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
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animation: "var(--animate-fade-up)" }}
          >
            Espacio digital publicitario de{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              San Rafael de Onoto
            </span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
            style={{ animation: "var(--animate-fade-up)", animationDelay: "0.1s" }}
          >
            La plataforma que te muestra el potencial comercial en nuestro municipio.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animation: "var(--animate-fade-up)", animationDelay: "0.2s" }}
          >
            <a href="#categorias" className="btn-glow">
              Explorar categorías
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
          title="Explorar por categorías"
          description="¡Explora libremente nuestro amplio mercado!"
        />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.slug} name={c.name} slug={c.slug} icon={c.icon} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#mas-productos" className="btn-glow">
            Más productos por conocer
          </a>
        </div>
      </section>

      {/* INFORMATIVA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="card-surface mx-auto max-w-4xl p-10 sm:p-14"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.21 0.008 280), oklch(0.18 0.012 285))",
          }}
        >
          <SectionTitle eyebrow="Acerca de" title="Sobre SanRafael DigitalMarket" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            SanRafael DigitalMarket es un espacio digital publicitario privado diseñado para
            impulsar la presencia de emprendedores, negocios locales y empresas dentro del
            municipio. Nuestro objetivo es ofrecer una plataforma moderna, organizada y
            visualmente profesional donde cada comercio pueda mostrar sus productos, servicios y
            catálogos de forma clara y atractiva. Todas las publicaciones pasan por un proceso de
            revisión y diseño para garantizar una experiencia limpia, sin spam y con una
            presentación cuidada. SanRafael DigitalMarket no es un marketplace tradicional: es un
            sistema comercial privado que conecta a los negocios con clientes reales, mostrando el
            verdadero potencial económico de nuestra comunidad.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-[var(--surface-elevated)] p-6">
              <h3 className="text-lg font-semibold">Misión</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Impulsar el crecimiento comercial del municipio mediante una plataforma digital
                organizada, moderna y profesional que conecte negocios reales con clientes reales.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-[var(--surface-elevated)] p-6">
              <h3 className="text-lg font-semibold">Visión</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Convertirnos en el principal espacio digital publicitario del municipio, ofreciendo
                herramientas avanzadas, diseño profesional y un sistema limpio, confiable y
                escalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER ENTRE SECCIONES */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Banner label="Banner entre secciones · Pendiente de cargar" />
      </div>


      {/* PRODUCTOS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Catálogo"
          title="Productos destacados"
          description="Una selección de productos disponibles en la plataforma."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </section>

      {/* MÁS PRODUCTOS POR CONOCER */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Recomendados"
          title="Más productos por conocer"
          description="Descubre nuevas opciones que se incorporan cada semana al catálogo."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCard key={`mas-${i}`} />
          ))}
        </div>
      </section>

      {/* COMERCIOS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Comercios"
          title="Negocios en la plataforma"
          description="Perfiles activos en SanRafael DigitalMarket."
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
