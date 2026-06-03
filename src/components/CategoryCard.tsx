import { Link } from "@tanstack/react-router";

export function CategoryCard({ name, slug }: { name?: string; slug?: string }) {
  const content = (
    <>
      <div
        className="empty-slot h-16 w-16 rounded-2xl"
        aria-label="Icono de categoría"
      >
        Icono
      </div>
      <div className="field-slot w-full text-center">
        {name ?? "Nombre de la categoría"}
      </div>
    </>
  );

  if (slug) {
    return (
      <Link
        to="/categorias/$slug"
        params={{ slug }}
        className="card-surface flex flex-col items-center gap-4 p-6 text-center transition-transform hover:-translate-y-1"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="card-surface flex flex-col items-center gap-4 p-6 text-center">
      {content}
    </div>
  );
}
