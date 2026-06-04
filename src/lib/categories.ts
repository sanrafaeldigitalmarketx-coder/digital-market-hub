import alimentosIcon from "@/assets/categories/alimentos.png.asset.json";
import ferreteriaIcon from "@/assets/categories/ferreteria.png.asset.json";
import repuestosIcon from "@/assets/categories/repuestos.png.asset.json";
import farmaciasIcon from "@/assets/categories/farmacias.png.asset.json";
import centrosMedicosIcon from "@/assets/categories/centros-medicos.png.asset.json";
import laboratoriosIcon from "@/assets/categories/laboratorios.png.asset.json";

export type Category = {
  slug: string;
  name: string;
  icon?: string;
};

export const CATEGORIES: Category[] = [
  { slug: "alimentos", name: "Alimentos y Víveres", icon: alimentosIcon.url },
  { slug: "ferreteria", name: "Ferretería y Construcción", icon: ferreteriaIcon.url },
  { slug: "repuestos", name: "Repuestos y Accesorios", icon: repuestosIcon.url },
  { slug: "farmacias", name: "Farmacias", icon: farmaciasIcon.url },
  { slug: "centros-medicos", name: "Centros Médicos", icon: centrosMedicosIcon.url },
  { slug: "laboratorios", name: "Laboratorios Clínicos", icon: laboratoriosIcon.url },
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
