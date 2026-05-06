import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/planes")({
  component: PlanesPage,
  head: () => ({
    meta: [
      { title: "Planes y Tarifas — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Conoce los planes y tarifas para emprendedores, comercios y empresas en SanRafael DigitalMarket.",
      },
      { property: "og:title", content: "Planes y Tarifas — SanRafael DigitalMarket" },
      {
        property: "og:description",
        content:
          "Planes flexibles para emprendedores, negocios locales y empresas grandes.",
      },
    ],
  }),
});

type Plan = {
  name: string;
  price: string;
  pitch: string;
  features: string[];
  highlight?: boolean;
};

const emprendedores: Plan[] = [
  {
    name: "Plan Básico",
    price: "$15",
    pitch:
      "Perfecto para emprendedores que solo quieren aparecer en la página sin diseño adicional.",
    features: [
      "Publicación sin diseño",
      "Contenido enviado por el cliente",
      "Ubicación estándar",
      "Ideal para comenzar rápido",
    ],
  },
  {
    name: "Plan Estándar",
    price: "$20",
    pitch: "La opción ideal para mejorar tu presencia con un diseño básico y atractivo.",
    features: ["Diseño básico", "Portada o flyer", "Edición ligera", "Ubicación media"],
  },
  {
    name: "Plan Premium",
    price: "$25",
    pitch:
      "Destaca entre los demás con un diseño completo y una presentación más profesional.",
    features: [
      "Diseño completo",
      "Mini catálogo (3 imágenes)",
      "Ubicación destacada",
      "Más visualizaciones",
    ],
    highlight: true,
  },
  {
    name: "Plan Élite",
    price: "$40",
    pitch: "Máxima presencia para emprendedores que quieren verse como marcas.",
    features: [
      "Diseño completo",
      "Publicidad interna",
      "Ubicación superior",
      "Actualizaciones semanales",
    ],
  },
];

const comercios: Plan[] = [
  {
    name: "Plan Básico",
    price: "$20",
    pitch: "Presencia garantizada para tu negocio sin necesidad de diseño.",
    features: ["Publicación sin diseño", "Ubicación estándar"],
  },
  {
    name: "Plan Estándar",
    price: "$25",
    pitch: "Mejora la imagen de tu negocio con un diseño básico y profesional.",
    features: ["Diseño básico", "Edición ligera", "Ubicación media"],
  },
  {
    name: "Plan Premium",
    price: "$30",
    pitch: "Haz que tu negocio destaque con un diseño completo y un mini catálogo.",
    features: [
      "Diseño completo",
      "Mini catálogo",
      "Ubicación destacada",
      "Más visualizaciones",
    ],
    highlight: true,
  },
  {
    name: "Plan Élite",
    price: "$50",
    pitch: "Visibilidad superior para negocios que quieren dominar la plataforma.",
    features: [
      "Diseño completo",
      "Banner interno",
      "Ubicación fija arriba",
      "Publicidad interna",
    ],
  },
];

const empresas: Plan[] = [
  {
    name: "Plan Estándar",
    price: "$30",
    pitch: "Presencia profesional para empresas que quieren estar en la plataforma.",
    features: ["Publicación + diseño básico", "Ubicación media"],
  },
  {
    name: "Plan Premium",
    price: "$50",
    pitch: "Diseño completo y publicidad interna para empresas que buscan impacto.",
    features: [
      "Diseño completo",
      "Mini catálogo",
      "Publicidad interna",
      "Ubicación destacada",
    ],
    highlight: true,
  },
  {
    name: "Plan Élite",
    price: "$70",
    pitch: "La máxima visibilidad para empresas que quieren liderar la plataforma.",
    features: [
      "Banner principal",
      "Publicidad interna",
      "Actualizaciones semanales",
      "Atención prioritaria",
      "Ubicación superior fija",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="var(--brand-blue)" strokeWidth="1.4" opacity="0.5" />
      <path
        d="M6 10.5l2.6 2.5L14 7.5"
        stroke="var(--brand-blue)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className="card-surface relative flex flex-col p-6 transition-all hover:-translate-y-1"
      style={
        plan.highlight
          ? {
              borderColor: "oklch(0.62 0.22 285 / 0.55)",
              boxShadow: "var(--shadow-glow-purple)",
              background:
                "linear-gradient(160deg, oklch(0.22 0.012 285), oklch(0.18 0.012 285))",
            }
          : undefined
      }
    >
      {plan.highlight && (
        <span
          className="absolute -top-3 right-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
          style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow-purple)" }}
        >
          Más popular
        </span>
      )}

      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span
          className="text-4xl font-extrabold tracking-tight"
          style={{
            backgroundImage: "var(--gradient-brand)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {plan.price}
        </span>
        <span className="text-xs text-muted-foreground">/ único</span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{plan.pitch}</p>

      <ul className="mt-5 space-y-2.5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Block({
  eyebrow,
  title,
  description,
  plans,
  cols,
}: {
  eyebrow: string;
  title: string;
  description: string;
  plans: Plan[];
  cols: "3" | "4";
}) {
  const grid =
    cols === "4"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{
            color: "var(--brand-blue)",
            background: "oklch(0.70 0.18 240 / 0.12)",
            border: "1px solid oklch(0.70 0.18 240 / 0.3)",
          }}
        >
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </div>

      <div className={`mt-10 grid gap-6 ${grid}`}>
        {plans.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </div>
    </section>
  );
}

function PlanesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <span
            className="rounded-full px-4 py-1.5 text-xs font-medium"
            style={{
              color: "white",
              background: "oklch(0.62 0.22 285 / 0.15)",
              border: "1px solid oklch(0.62 0.22 285 / 0.4)",
            }}
          >
            Planes y Tarifas
          </span>
          <h1
            className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animation: "var(--animate-fade-up)" }}
          >
            Elige el plan{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ideal para ti
            </span>
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Tarifas claras y planes pensados para emprendedores, comercios locales y
            empresas grandes.
          </p>
        </div>
      </section>

      <Block
        eyebrow="Bloque 1"
        title="Emprendedores Independientes"
        description="Planes accesibles para quienes están comenzando o trabajan por cuenta propia."
        plans={emprendedores}
        cols="4"
      />

      <Block
        eyebrow="Bloque 2"
        title="Comerciantes / Negocios Locales"
        description="Para tiendas, locales y comercios establecidos que quieren crecer."
        plans={comercios}
        cols="4"
      />

      <Block
        eyebrow="Bloque 3"
        title="Empresas Grandes"
        description="Visibilidad superior para empresas que quieren liderar la plataforma."
        plans={empresas}
        cols="3"
      />

      {/* INFO + CTA */}
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div
          className="card-surface p-8 text-center sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.21 0.008 280), oklch(0.18 0.012 285))",
            borderColor: "oklch(0.62 0.22 285 / 0.35)",
          }}
        >
          <p className="text-base leading-relaxed text-foreground">
            Para publicar su comercio en <strong>SanRafael DigitalMarket</strong>, primero
            debe elegir un plan y cancelar la tarifa correspondiente. Después del pago, yo
            me encargo de recibir su material, diseñarlo (según el plan) y publicarlo en
            la plataforma.
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Lee toda la información y contáctame para saber más.
          </p>

          <a
            href={getWhatsAppUrl(
              "Hola, quiero más información sobre los planes de SanRafael DigitalMarket.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-6 inline-flex text-base"
          >
            Contactarme para saber más
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
