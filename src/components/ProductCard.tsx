import { useState } from "react";
import { Star } from "lucide-react";
import { INSTITUTIONAL_PENDING } from "@/lib/whatsapp";
import { RatingStars } from "@/components/RatingStars";
import { RatingDialog } from "@/components/RatingDialog";
import { useRatingSummary } from "@/lib/ratings";

export function ProductCard({ id, nombre }: { id?: string; nombre?: string }) {
  const [openRating, setOpenRating] = useState(false);
  const { average, count, refresh } = useRatingSummary("producto", id);

  return (
    <article className="card-surface flex flex-col overflow-hidden">
      <div className="border-b border-border/60 px-4 py-3">
        <div className="field-slot">Nombre del comercio</div>
      </div>

      <div className="empty-slot mx-4 mt-4 aspect-[4/3] w-[calc(100%-2rem)]">
        Foto del producto
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="field-slot">{nombre ?? "Nombre del producto"}</div>
        <div className="field-slot" style={{ color: "var(--brand-blue)" }}>
          Precio u oferta
        </div>
        <div className="field-slot">Ubicación del comercio</div>
        <div className="field-slot">Número de contacto</div>
        <div className="field-slot">Formato de negociación</div>

        <div className="flex items-center justify-between pt-1">
          <RatingStars average={average} count={count} />
          <button
            type="button"
            onClick={() => id && setOpenRating(true)}
            disabled={!id}
            title={!id ? "Disponible cuando el producto esté registrado" : "Calificar producto"}
            className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-[var(--surface-elevated)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="inline-flex items-center gap-1">
              <Star size={12} /> Calificar
            </span>
          </button>
        </div>

        <button
          type="button"
          disabled
          aria-disabled="true"
          title={INSTITUTIONAL_PENDING}
          className="mt-2 w-full cursor-not-allowed rounded-full py-2.5 text-sm font-semibold text-white/80 text-center opacity-60"
          style={{ background: "var(--gradient-brand)" }}
        >
          Contacto pendiente
        </button>
      </div>

      {id && (
        <RatingDialog
          open={openRating}
          onOpenChange={setOpenRating}
          target="producto"
          id={id}
          itemName={nombre}
          onSubmitted={refresh}
        />
      )}
    </article>
  );
}
