import { useState } from "react";
import { Star } from "lucide-react";
import { INSTITUTIONAL_PENDING } from "@/lib/whatsapp";
import { RatingStars } from "@/components/RatingStars";
import { RatingDialog } from "@/components/RatingDialog";
import { useRatingSummary } from "@/lib/ratings";

export function MerchantCard({ id, nombre }: { id?: string; nombre?: string }) {
  const [openRating, setOpenRating] = useState(false);
  const { average, count, refresh } = useRatingSummary("negocio", id);

  return (
    <article className="card-surface overflow-hidden">
      <div className="empty-slot h-32 rounded-none border-x-0 border-t-0">
        Foto de portada del local
      </div>

      <div className="relative px-5 pb-5">
        <div
          className="empty-slot absolute -top-8 left-5 h-16 w-16 rounded-full"
          style={{ boxShadow: "0 0 0 4px var(--surface)" }}
        >
          Logo
        </div>

        <div className="mt-12 flex flex-col gap-2.5">
          <div className="field-slot">{nombre ?? "Nombre del comercio"}</div>
          <div className="field-slot">Ubicación</div>
          <div className="field-slot" title={INSTITUTIONAL_PENDING}>
            Número de contacto pendiente
          </div>
          <div className="field-slot min-h-[4.5rem]">Descripción corta (opcional)</div>

          <div className="flex items-center justify-between pt-1">
            <RatingStars average={average} count={count} />
            <button
              type="button"
              onClick={() => id && setOpenRating(true)}
              disabled={!id}
              title={!id ? "Disponible cuando el negocio esté registrado" : "Calificar negocio"}
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
            style={{
              background: "linear-gradient(135deg, oklch(0.65 0.18 155 / 0.55), oklch(0.70 0.18 165 / 0.55))",
            }}
          >
            Contacto pendiente
          </button>
        </div>
      </div>

      {id && (
        <RatingDialog
          open={openRating}
          onOpenChange={setOpenRating}
          target="negocio"
          id={id}
          itemName={nombre}
          onSubmitted={refresh}
        />
      )}
    </article>
  );
}
