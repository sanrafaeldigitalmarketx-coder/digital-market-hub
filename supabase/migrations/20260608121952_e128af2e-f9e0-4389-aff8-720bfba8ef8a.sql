
CREATE TABLE public.negocios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  categoria TEXT,
  direccion TEXT,
  telefono TEXT,
  imagen TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.negocios TO anon, authenticated;
GRANT ALL ON public.negocios TO service_role;
ALTER TABLE public.negocios ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Negocios visibles para todos" ON public.negocios FOR SELECT USING (true);

CREATE TABLE public.productos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  negocio_id UUID REFERENCES public.negocios(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  precio NUMERIC(12,2),
  imagen TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.productos TO anon, authenticated;
GRANT ALL ON public.productos TO service_role;
ALTER TABLE public.productos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Productos visibles para todos" ON public.productos FOR SELECT USING (true);

CREATE TABLE public.ratings_negocios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  negocio_id UUID NOT NULL REFERENCES public.negocios(id) ON DELETE CASCADE,
  estrellas SMALLINT NOT NULL CHECK (estrellas BETWEEN 1 AND 5),
  comentario TEXT,
  fecha TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.ratings_negocios TO anon, authenticated;
GRANT ALL ON public.ratings_negocios TO service_role;
ALTER TABLE public.ratings_negocios ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Calificaciones de negocios visibles" ON public.ratings_negocios FOR SELECT USING (true);
CREATE POLICY "Cualquiera puede calificar un negocio" ON public.ratings_negocios FOR INSERT WITH CHECK (
  estrellas BETWEEN 1 AND 5 AND (comentario IS NULL OR char_length(comentario) <= 1000)
);
CREATE INDEX ratings_negocios_negocio_idx ON public.ratings_negocios(negocio_id);

CREATE TABLE public.ratings_productos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  producto_id UUID NOT NULL REFERENCES public.productos(id) ON DELETE CASCADE,
  estrellas SMALLINT NOT NULL CHECK (estrellas BETWEEN 1 AND 5),
  comentario TEXT,
  fecha TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.ratings_productos TO anon, authenticated;
GRANT ALL ON public.ratings_productos TO service_role;
ALTER TABLE public.ratings_productos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Calificaciones de productos visibles" ON public.ratings_productos FOR SELECT USING (true);
CREATE POLICY "Cualquiera puede calificar un producto" ON public.ratings_productos FOR INSERT WITH CHECK (
  estrellas BETWEEN 1 AND 5 AND (comentario IS NULL OR char_length(comentario) <= 1000)
);
CREATE INDEX ratings_productos_producto_idx ON public.ratings_productos(producto_id);
