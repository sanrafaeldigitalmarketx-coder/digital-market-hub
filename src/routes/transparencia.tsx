import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/transparencia")({
  component: TransparenciaPage,
  head: () => ({
    meta: [
      { title: "Transparencia Municipal — San Rafael de Onoto" },
      {
        name: "description",
        content:
          "Documentos públicos del Municipio San Rafael de Onoto: presupuestos, proyectos, informes y contrataciones.",
      },
      {
        property: "og:title",
        content: "Transparencia Municipal — San Rafael de Onoto",
      },
      {
        property: "og:description",
        content: "Acceso público a documentos e informes municipales.",
      },
    ],
  }),
});

function DocBlock({ title }: { title: string }) {
  return (
    <article className="card-surface p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Documentos PDF pendientes de cargar por la Alcaldía del Municipio.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="empty-slot flex h-20 items-center justify-center rounded-lg text-xs"
          >
            PDF {i + 1} — Espacio para subir documento
          </div>
        ))}
      </div>
    </article>
  );
}

function TransparenciaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Transparencia Municipal</h1>
          <p className="mt-4 text-muted-foreground">
            Información pendiente de cargar por la Alcaldía del Municipio San Rafael de
            Onoto.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DocBlock title="Presupuestos" />
          <DocBlock title="Proyectos" />
          <DocBlock title="Informes" />
          <DocBlock title="Contrataciones" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
