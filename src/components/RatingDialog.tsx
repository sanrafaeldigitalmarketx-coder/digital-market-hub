import { useState } from "react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { submitRating, type RatingTarget } from "@/lib/ratings";
import { toast } from "sonner";

export function RatingDialog({
  open,
  onOpenChange,
  target,
  id,
  itemName,
  onSubmitted,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  target: RatingTarget;
  id: string;
  itemName?: string;
  onSubmitted?: () => void;
}) {
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);
  const [comentario, setComentario] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (stars < 1) {
      toast.error("Selecciona al menos una estrella");
      return;
    }
    setSubmitting(true);
    try {
      await submitRating(target, id, stars, comentario);
      toast.success("¡Gracias por tu calificación!");
      setStars(0);
      setComentario("");
      onSubmitted?.();
      onOpenChange(false);
    } catch (e) {
      console.error(e);
      toast.error("No se pudo enviar la calificación");
    } finally {
      setSubmitting(false);
    }
  };

  const label = target === "negocio" ? "negocio" : "producto";
  const current = hover || stars;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="card-surface border-border/60 bg-[var(--surface)] text-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Calificar {label}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {itemName ? `Comparte tu opinión sobre ${itemName}.` : `Comparte tu opinión sobre este ${label}.`}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-1 py-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                type="button"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setStars(i)}
                className="p-1 transition-transform hover:scale-110"
                aria-label={`${i} estrellas`}
              >
                <Star
                  width={32}
                  height={32}
                  className={
                    i <= current
                      ? "fill-[oklch(0.80_0.16_85)] stroke-[oklch(0.80_0.16_85)]"
                      : "stroke-muted-foreground/60"
                  }
                />
              </button>
            ))}
          </div>

          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            maxLength={1000}
            placeholder="Escribe un comentario (opcional)"
            className="min-h-[88px] w-full resize-none rounded-lg border border-border/60 bg-[oklch(0.18_0.008_280)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--brand-blue)] focus:outline-none"
          />
        </div>

        <DialogFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[var(--surface-elevated)]"
          >
            Cancelar
          </button>
          <button
            type="button"
            disabled={submitting}
            onClick={handleSubmit}
            className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: "var(--gradient-brand)" }}
          >
            {submitting ? "Enviando..." : "Enviar"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
