import alimentosIcon from "@/assets/categories/alimentos.png.asset.json";

export type Category = {
  slug: string;
  name: string;
  icon?: string;
};

export const CATEGORIES: Category[] = [
  { slug: "alimentos", name: "Alimentos y Víveres", icon: alimentosIcon.url },
  { slug: "ferreteria", name: "Ferretería y Construcción" },
  { slug: "repuestos", name: "Repuestos y Accesorios" },
  { slug: "farmacias", name: "Farmacias" },
  { slug: "centros-medicos", name: "Centros Médicos" },
  { slug: "laboratorios", name: "Laboratorios Clínicos" },
  { slug: "hoteles", name: "Hoteles y Posadas" },
  { slug: "comida-rapida", name: "Comida Rápida y Restaurantes" },
  { slug: "moda", name: "Moda y Accesorios" },
  { slug: "belleza", name: "Belleza y Cuidado Personal" },
  { slug: "servicios-profesionales", name: "Servicios Profesionales" },
  { slug: "hogar", name: "Hogar y Limpieza" },
  { slug: "tecnologia", name: "Tecnología y Electrónica" },
  { slug: "transporte", name: "Transporte y Delivery" },
  { slug: "mascotas", name: "Mascotas" },
  { slug: "generales", name: "Comercios Generales" },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
