import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Banner } from "@/components/Banner";

export const Route = createFileRoute("/cultura")({
  component: CulturaPage,
  head: () => ({
    meta: [
      { title: "Cultura y Turismo — San Rafael de Onoto" },
      {
        name: "description",
        content:
          "Lugares turísticos, historia, tradiciones y festividades del Municipio San Rafael de Onoto.",
      },
      { property: "og:title", content: "Cultura y Turismo — San Rafael de Onoto" },
      {
        property: "og:description",
        content: "Descubre la cultura, el turismo y la historia del Municipio.",
      },
    ],
  }),
});

function PlaceCard({ kind }: { kind: string }) {
  return (
    <article className="card-surface overflow-hidden">
      <div className="empty-slot aspect-[16/10] rounded-none border-x-0 border-t-0">
        Imagen — {kind}
      </div>
      <div className="flex flex-col gap-2.5 p-5">
        <div className="field-slot text-base font-semibold">Título</div>
        <div className="field-slot min-h-[5rem]">Descripción pendiente de cargar.</div>
        <div className="field-slot">Ubicación (opcional)</div>
      </div>
    </article>
  );
}

function Block({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
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
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((kind, i) => (
          <PlaceCard key={`${kind}-${i}`} kind={kind} />
        ))}
      </div>
    </section>
  );
}

function CulturaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Cultura y Turismo</h1>
          <p className="mt-4 text-muted-foreground">
            Información pendiente de cargar por la Alcaldía del Municipio San Rafael de
            Onoto.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <Banner label="Banner publicitario · Pendiente de cargar" />
      </div>

      <Block
        eyebrow="Turismo"
        title="Lugares turísticos"
        items={["Lugar 1", "Lugar 2", "Lugar 3"]}
      />
      <Block
        eyebrow="Historia"
        title="Historia del Municipio"
        items={["Hito 1", "Hito 2", "Hito 3"]}
      />
      <Block
        eyebrow="Tradiciones"
        title="Tradiciones locales"
        items={["Tradición 1", "Tradición 2", "Tradición 3"]}
      />
      <Block
        eyebrow="Festividades"
        title="Festividades del Municipio"
        items={["Festividad 1", "Festividad 2", "Festividad 3"]}
      />

      <SiteFooter />
    </div>
  );
}
