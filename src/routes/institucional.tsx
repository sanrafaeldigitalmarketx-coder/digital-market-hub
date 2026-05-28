import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/institucional")({
  component: InstitucionalPage,
  head: () => ({
    meta: [
      { title: "Portal Institucional — Alcaldía San Rafael de Onoto" },
      {
        name: "description",
        content:
          "Portal Institucional de la Alcaldía del Municipio San Rafael de Onoto: misión, visión, autoridades y dependencias.",
      },
      {
        property: "og:title",
        content: "Portal Institucional — Alcaldía San Rafael de Onoto",
      },
      {
        property: "og:description",
        content:
          "Misión, visión, autoridades, dependencias, horarios y contactos oficiales.",
      },
    ],
  }),
});

function InfoBlock({ title, minH = "min-h-[7rem]" }: { title: string; minH?: string }) {
  return (
    <div className="card-surface p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className={`field-slot mt-3 ${minH}`}>
        Información pendiente de cargar por la Alcaldía del Municipio San Rafael de Onoto.
      </div>
    </div>
  );
}

function InstitucionalPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Portal Institucional</h1>
          <p className="mt-4 text-muted-foreground">
            Alcaldía del Municipio San Rafael de Onoto · Estado Portuguesa
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoBlock title="Misión" />
          <InfoBlock title="Visión" />
          <InfoBlock title="Autoridades" minH="min-h-[10rem]" />
          <InfoBlock title="Dependencias" minH="min-h-[10rem]" />
          <InfoBlock title="Horarios de atención" />
          <InfoBlock title="Contactos oficiales" />
        </div>

        <div className="card-surface mt-6 p-6">
          <h2 className="text-lg font-semibold">Enlaces a trámites</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="field-slot">
                Trámite {i + 1} — Pendiente
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
