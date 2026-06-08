import { Star } from "lucide-react";

export function RatingStars({
  average,
  count,
  size = 14,
}: {
  average: number;
  count: number;
  size?: number;
}) {
  const rounded = Math.round(average);
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            width={size}
            height={size}
            className={
              i <= rounded
                ? "fill-[oklch(0.80_0.16_85)] stroke-[oklch(0.80_0.16_85)]"
                : "stroke-muted-foreground/50"
            }
          />
        ))}
      </div>
      <span>
        {count > 0 ? `${average.toFixed(1)} · ${count} ${count === 1 ? "opinión" : "opiniones"}` : "Aún sin opiniones"}
      </span>
    </div>
  );
}
