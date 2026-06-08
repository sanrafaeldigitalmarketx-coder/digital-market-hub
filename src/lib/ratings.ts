import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export type RatingTarget = "negocio" | "producto";

export type RatingSummary = { average: number; count: number };

export function useRatingSummary(target: RatingTarget, id?: string | null) {
  const [summary, setSummary] = useState<RatingSummary>({ average: 0, count: 0 });
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    const res =
      target === "negocio"
        ? await supabase.from("ratings_negocios").select("estrellas").eq("negocio_id", id)
        : await supabase.from("ratings_productos").select("estrellas").eq("producto_id", id);
    if (!res.error && res.data) {
      const count = res.data.length;
      const average = count
        ? res.data.reduce((a, r) => a + (r.estrellas as number), 0) / count
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
  const text = comentario.trim() || null;
  const { error } =
    target === "negocio"
      ? await supabase
          .from("ratings_negocios")
          .insert({ negocio_id: id, estrellas, comentario: text })
      : await supabase
          .from("ratings_productos")
          .insert({ producto_id: id, estrellas, comentario: text });
  if (error) throw error;
}
