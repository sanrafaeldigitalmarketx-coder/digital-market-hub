import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export type RatingTarget = "negocio" | "producto";

export type RatingSummary = { average: number; count: number };

const tableFor = (t: RatingTarget) =>
  t === "negocio" ? "ratings_negocios" : "ratings_productos";
const fkFor = (t: RatingTarget) => (t === "negocio" ? "negocio_id" : "producto_id");

export function useRatingSummary(target: RatingTarget, id?: string | null) {
  const [summary, setSummary] = useState<RatingSummary>({ average: 0, count: 0 });
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    const { data, error } = await supabase
      .from(tableFor(target))
      .select("estrellas")
      .eq(fkFor(target), id);
    if (!error && data) {
      const count = data.length;
      const average = count
        ? data.reduce((a, r) => a + (r.estrellas as number), 0) / count
        : 0;
      setSummary({ average, count });
    }
    setLoading(false);
  }, [target, id]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { ...summary, loading, refresh };
}

export async function submitRating(
  target: RatingTarget,
  id: string,
  estrellas: number,
  comentario: string,
) {
  const payload = { estrellas, comentario: comentario.trim() || null, [fkFor(target)]: id };
  const { error } = await supabase.from(tableFor(target)).insert(payload);
  if (error) throw error;
}
