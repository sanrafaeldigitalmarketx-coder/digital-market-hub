import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/planes")({
  component: PlanesPage,
  head: () => ({
    meta: [
      { title: "Planes y Tarifas — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Planes para emprendedores, negocios locales y empresas. Catálogos, fotos, diseño, geolocalización y prioridad según el plan.",
      },
      { property: "og:title", content: "Planes y Tarifas — SanRafael DigitalMarket" },
      {
        property: "og:description",
        content: "Elige el plan ideal para publicar tu negocio en SanRafael DigitalMarket.",
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
    name: "Básico",
    price: "$15",
    pitch: "Ideal para empezar a mostrar tu emprendimiento.",
    features: [
      "1 catálogo",
      "4 productos",
      "2 fotos por producto",
      "Sin diseño incluido",
      "Sin prioridad",
      "Sin geolocalización",
    ],
  },
  {
    name: "Estándar",
    price: "$20",
    pitch: "Más espacio y mejor posición en la plataforma.",
    features: [
      "2 catálogos",
      "8 productos",
      "Fotos ilimitadas",
      "Mejor posición",
      "Sin diseño incluido",
      "Sin geolocalización",
    ],
  },
  {
    name: "Premium",
    price: "$25",
    pitch: "Todo lo necesario para destacar como emprendedor.",
    features: [
      "Catálogos ilimitados",
      "Productos ilimitados",
      "Diseño incluido",
      "Tarjeta grande",
      "Prioridad",
      "Geolocalización básica",
    ],
    highlight: true,
  },
];

const negocios: Plan[] = [
  {
    name: "Básico",
    price: "$25",
    pitch: "Presencia esencial para tu negocio local.",
    features: [
      "3 catálogos",
      "6 productos",
      "Sin diseño incluido",
      "Sin prioridad",
      "Sin geolocalización",
    ],
  },
  {
    name: "Estándar",
    price: "$35",
    pitch: "Más catálogos, diseño básico y mejor posición.",
    features: [
      "5 catálogos",
      "12 productos",
      "Diseño básico",
      "Mejor posición",
      "Sin geolocalización",
    ],
  },
  {
    name: "Premium",
    price: "$45",
    pitch: "Aparición en portada y geolocalización inteligente.",
    features: [
      "Catálogos ilimitados",
      "Productos ilimitados",
      "Diseño completo",
      "Geolocalización inteligente",
      "Recomendados",
      "Banners",
      "Prioridad total",
      "Aparición en portada",
    ],
    highlight: true,
  },
];

const empresas: Plan[] = [
  {
    name: "Estándar",
    price: "$50",
    pitch: "Catálogos ilimitados con diseño básico y estadísticas.",
    features: [
      "Catálogos ilimitados",
      "Productos ilimitados",
      "Diseño básico",
      "Estadísticas básicas",
    ],
  },
  {
    name: "Premium",
    price: "$60",
    pitch: "Diseño completo, banners y prioridad total.",
    features: [
      "Diseño completo",
      "Banners",
      "Aparición en portada",
      "Geolocalización inteligente",
      "Recomendados",
      "Prioridad total",
    ],
    highlight: true,
  },
  {
    name: "Élite",
    price: "$70",
    pitch: "El paquete máximo, con banner exclusivo y campaña mensual.",
    features: [
      "Todo lo del Premium",
      "Banner exclusivo en portada",
      "Banner exclusivo en categorías",
      "Tarjeta gigante",
      "Campaña mensual",
      "Publicación en Novedades",
      "Revisión visual completa",
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

function PlanCard({ plan, segment }: { plan: Plan; segment: string }) {
  const message = `Hola Jovany, me interesa el plan ${plan.name} (${plan.price}) de ${segment}.`;
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
          Recomendado
        </span>
      )}

      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span
          className="text-4xl font-bold tracking-tight"
          style={{
            backgroundImage: "var(--gradient-brand)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {plan.price}
        </span>
        <span className="text-xs text-muted-foreground">/ mes</span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{plan.pitch}</p>

      <ul className="mt-5 flex-1 space-y-2.5 text-sm">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckIcon />
            <span className="text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={getWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        style={{ background: "var(--gradient-brand)" }}
      >
        <MessageCircle size={16} /> Contratar plan
      </a>
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
  cols: "3";
}) {
  const grid = cols === "3" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "";
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
          <PlanCard key={p.name} plan={p} segment={title} />
        ))}
      </div>
    </section>
  );
}

function PlanesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

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
            Elige tu{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              plan ideal
            </span>
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Publicaciones controladas por el administrador. Solo escribe por WhatsApp y enviamos
            tu material a producción.
          </p>
        </div>
      </section>

      <Block
        eyebrow="Bloque 1"
        title="Emprendedores Independientes"
        description="Para vendedores particulares y proyectos personales."
        plans={emprendedores}
        cols="3"
      />

      <Block
        eyebrow="Bloque 2"
        title="Negocios Locales"
        description="Para comercios establecidos con presencia física o digital."
        plans={negocios}
        cols="3"
      />

      <Block
        eyebrow="Bloque 3"
        title="Empresas Grandes"
        description="Para marcas con catálogos amplios y campañas activas."
        plans={empresas}
        cols="3"
      />

      <section className="mx-auto max-w-3xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div
          className="card-surface p-8 text-center sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.21 0.008 280), oklch(0.18 0.012 285))",
            borderColor: "oklch(0.62 0.22 285 / 0.35)",
          }}
        >
          <h3 className="text-xl font-semibold sm:text-2xl">¿Tienes dudas sobre qué plan elegir?</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Conversa directamente con el administrador y te recomendamos el plan que mejor se
            ajusta a tu negocio.
          </p>
          <a
            href={getWhatsAppUrl("Hola Jovany, necesito ayuda para elegir un plan.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-6 inline-flex items-center gap-2"
          >
            <MessageCircle size={18} /> Contactar al administrador
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
