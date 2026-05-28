import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/planes")({
  component: PlanesPage,
  head: () => ({
    meta: [
      { title: "Planes y Tarifas — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Planes y tarifas pendientes de cargar por la Alcaldía del Municipio San Rafael de Onoto.",
      },
      { property: "og:title", content: "Planes y Tarifas — SanRafael DigitalMarket" },
      {
        property: "og:description",
        content: "Planes pendientes de definir por la Alcaldía del Municipio.",
      },
    ],
  }),
});

type Plan = {
  name: string;
  pitch: string;
  features: string[];
  highlight?: boolean;
};

const emprendedores: Plan[] = [
  { name: "Plan Básico", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"] },
  { name: "Plan Estándar", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"] },
  { name: "Plan Premium", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"], highlight: true },
  { name: "Plan Élite", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"] },
];

const comercios: Plan[] = [
  { name: "Plan Básico", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente"] },
  { name: "Plan Estándar", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"] },
  { name: "Plan Premium", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"], highlight: true },
  { name: "Plan Élite", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"] },
];

const empresas: Plan[] = [
  { name: "Plan Estándar", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente"] },
  { name: "Plan Premium", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"], highlight: true },
  { name: "Plan Élite", pitch: "Información pendiente de cargar.", features: ["Pendiente", "Pendiente", "Pendiente"] },
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
          Destacado
        </span>
      )}

      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span
          className="text-2xl font-bold tracking-tight text-muted-foreground"
        >
          Tarifa pendiente
        </span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{plan.pitch}</p>

      <ul className="mt-5 space-y-2.5 text-sm">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckIcon />
            <span className="text-muted-foreground">{f}</span>
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
            Planes{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              institucionales
            </span>
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Información pendiente de cargar por la Alcaldía del Municipio San Rafael de
            Onoto.
          </p>
        </div>
      </section>

      <Block
        eyebrow="Bloque 1"
        title="Emprendedores Independientes"
        description="Información pendiente de cargar por la Alcaldía del Municipio."
        plans={emprendedores}
        cols="4"
      />

      <Block
        eyebrow="Bloque 2"
        title="Comerciantes / Negocios Locales"
        description="Información pendiente de cargar por la Alcaldía del Municipio."
        plans={comercios}
        cols="4"
      />

      <Block
        eyebrow="Bloque 3"
        title="Empresas Grandes"
        description="Información pendiente de cargar por la Alcaldía del Municipio."
        plans={empresas}
        cols="3"
      />

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
            Información pendiente de cargar por la Alcaldía del Municipio San Rafael de
            Onoto.
          </p>

          <button
            type="button"
            disabled
            aria-disabled="true"
            className="btn-glow mt-6 inline-flex cursor-not-allowed text-base opacity-60"
            title="Información pendiente de cargar por la Alcaldía del Municipio San Rafael de Onoto."
          >
            Contacto institucional pendiente
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
