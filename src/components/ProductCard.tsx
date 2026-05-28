import { INSTITUTIONAL_PENDING } from "@/lib/whatsapp";

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
          disabled
          aria-disabled="true"
          title={INSTITUTIONAL_PENDING}
          className="mt-2 w-full cursor-not-allowed rounded-full py-2.5 text-sm font-semibold text-white/80 text-center opacity-60"
          style={{
            background: "var(--gradient-brand)",
          }}
        >
          Contacto pendiente
        </button>
      </div>
    </article>
  );
}
