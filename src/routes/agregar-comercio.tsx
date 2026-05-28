import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CATEGORIES } from "@/lib/categories";

export const Route = createFileRoute("/agregar-comercio")({
  component: AgregarComercioPage,
  head: () => ({
    meta: [
      { title: "Agregar comercio — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Formulario interno para registrar nuevos comercios por categoría en el Municipio San Rafael de Onoto.",
      },
    ],
  }),
});

function AgregarComercioPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/categorias"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Categorías
        </Link>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Agregar comercio</h1>
        <p className="mt-3 text-muted-foreground">
          Formulario interno. La conexión con base de datos será habilitada por la
          Alcaldía del Municipio San Rafael de Onoto.
        </p>

        <form
          className="card-surface mt-10 space-y-5 p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field label="Nombre del comercio">
            <input type="text" className="input-field" placeholder="Nombre" />
          </Field>

          <Field label="Logo">
            <input type="file" accept="image/*" className="input-field" />
          </Field>

          <Field label="Foto principal">
            <input type="file" accept="image/*" className="input-field" />
          </Field>

          <Field label="Categoría">
            <select className="input-field" defaultValue="">
              <option value="" disabled>
                Selecciona una categoría
              </option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug} className="bg-background">
                  {c.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Ubicación">
            <input type="text" className="input-field" placeholder="Dirección o sector" />
          </Field>

          <Field label="WhatsApp">
            <input type="tel" className="input-field" placeholder="Número de contacto" />
          </Field>

          <Field label="Descripción">
            <textarea className="input-field min-h-[120px]" placeholder="Descripción del comercio" />
          </Field>

          <button
            type="submit"
            className="btn-glow w-full justify-center"
          >
            Guardar comercio
          </button>
        </form>
      </section>

      <SiteFooter />

      <style>{`
        .input-field {
          width: 100%;
          background: oklch(0.18 0.012 285 / 0.6);
          border: 1px solid oklch(0.62 0.22 285 / 0.3);
          border-radius: 0.5rem;
          padding: 0.6rem 0.85rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-field:focus {
          border-color: oklch(0.62 0.22 285 / 0.7);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
