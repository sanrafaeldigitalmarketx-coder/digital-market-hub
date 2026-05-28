import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/noticias/$slug")({
  component: NoticiaDetallePage,
  head: () => ({
    meta: [
      { title: "Noticia — San Rafael de Onoto" },
      {
        name: "description",
        content: "Detalle de la noticia municipal pendiente de cargar.",
      },
    ],
  }),
});

function NoticiaDetallePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/noticias"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Volver a Noticias
        </Link>

        <div className="empty-slot mt-6 aspect-[16/9] w-full rounded-xl">
          Imagen principal de la noticia
        </div>

        <div className="mt-6 space-y-3">
          <div className="field-slot">Fecha de publicación</div>
          <div className="field-slot text-2xl font-bold sm:text-3xl">
            Título de la noticia
          </div>
          <div className="field-slot min-h-[14rem]">
            Cuerpo del texto de la noticia pendiente de cargar por la Alcaldía del
            Municipio San Rafael de Onoto.
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold">Galería (opcional)</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="empty-slot aspect-square rounded-xl">
                Imagen {i + 1}
              </div>
            ))}
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
