import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer
      className="mt-24"
      style={{
        backgroundColor: "oklch(0.13 0.005 280)",
        borderTop: "1px solid oklch(0.62 0.22 285 / 0.25)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              S
            </span>
            <span className="text-sm font-semibold">
              SanRafael <span style={{ color: "var(--brand-blue)" }}>DigitalMarket</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/privacidad" className="text-muted-foreground transition-colors hover:text-foreground">
              Política de Privacidad
            </Link>
            <Link to="/terminos" className="text-muted-foreground transition-colors hover:text-foreground">
              Términos y Condiciones
            </Link>
            <Link to="/contacto" className="text-muted-foreground transition-colors hover:text-foreground">
              Contacto
            </Link>
          </nav>
        </div>

        <div
          className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground"
          style={{ borderColor: "oklch(0.62 0.22 285 / 0.15)" }}
        >
          © 2026 — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
