export function CategoryCard() {
  return (
    <div className="card-surface flex flex-col items-center gap-4 p-6 text-center">
      <div
        className="empty-slot h-16 w-16 rounded-2xl"
        aria-label="Icono de categoría"
      >
        Icono
      </div>
      <div className="field-slot w-full text-center">Nombre de la categoría</div>
    </div>
  );
}
