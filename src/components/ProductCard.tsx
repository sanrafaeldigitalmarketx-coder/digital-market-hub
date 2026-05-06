export function ProductCard() {
  return (
    <article className="card-surface flex flex-col overflow-hidden">
      <div className="border-b border-border/60 px-4 py-3">
        <div className="field-slot">Nombre del comercio</div>
      </div>

      <div className="empty-slot mx-4 mt-4 aspect-[4/3] w-[calc(100%-2rem)]">
        Foto del producto
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="field-slot">Nombre del producto</div>
        <div className="field-slot" style={{ color: "var(--brand-blue)" }}>
          Precio u oferta
        </div>
        <div className="field-slot">Ubicación del comercio</div>
        <div className="field-slot">Número de contacto</div>
        <div className="field-slot">Formato de negociación</div>

        <button
          type="button"
          className="mt-2 w-full rounded-full py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          style={{
            background: "var(--gradient-brand)",
            boxShadow: "0 0 18px -6px var(--brand-blue)",
          }}
        >
          Ver comercio · Contactar
        </button>
      </div>
    </article>
  );
}
