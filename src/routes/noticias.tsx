import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Banner } from "@/components/Banner";

export const Route = createFileRoute("/noticias")({
  component: NoticiasPage,
  head: () => ({
    meta: [
      { title: "Noticias Municipales — San Rafael de Onoto" },
      {
        name: "description",
        content:
          "Noticias oficiales del Municipio San Rafael de Onoto, Estado Portuguesa.",
      },
      { property: "og:title", content: "Noticias Municipales — San Rafael de Onoto" },
      {
        property: "og:description",
        content: "Comunicados y noticias institucionales del Municipio.",
      },
    ],
  }),
});

function NewsCard({ slug }: { slug: string }) {
  return (
    <article className="card-surface flex flex-col overflow-hidden">
      <div className="empty-slot aspect-[16/9] rounded-none border-x-0 border-t-0">
        Imagen de la noticia
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="field-slot">Fecha de publicación</div>
        <div className="field-slot text-base font-semibold">Título de la noticia</div>
        <div className="field-slot min-h-[5rem]">
          Resumen breve de la noticia pendiente de cargar.
        </div>
        <Link
          to="/noticias/$slug"
          params={{ slug }}
          className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          style={{
            background: "var(--gradient-brand)",
            boxShadow: "0 0 18px -6px var(--brand-blue)",
          }}
        >
          Leer más
        </Link>
      </div>
    </article>
  );
}

function NoticiasPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Banner variant="top" label="Banner superior · Pendiente de cargar" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "var(--brand-blue)",
              background: "oklch(0.70 0.18 240 / 0.12)",
              border: "1px solid oklch(0.70 0.18 240 / 0.3)",
            }}
          >
            Alcaldía
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Noticias Municipales</h1>
          <p className="mt-3 text-muted-foreground">
            Información pendiente de cargar por la Alcaldía del Municipio San Rafael de
            Onoto.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsCard key={i} slug={`noticia-${i + 1}`} />
          ))}
        </div>

        <div className="mt-12">
          <Banner label="Banner entre secciones · Pendiente de cargar" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
