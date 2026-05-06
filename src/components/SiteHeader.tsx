import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Inicio", to: "/" as const },
  { label: "Catálogo", to: "/catalogo" as const },
  { label: "Servicios", to: "/servicios" as const },
  { label: "Planes", to: "/planes" as const },
  { label: "Contacto", to: "/contacto" as const },
  { label: "Términos", to: "/terminos" as const },
  { label: "Privacidad", to: "/privacidad" as const },
];

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl"
      style={{
        backgroundColor: "oklch(0.13 0.005 280 / 0.85)",
        borderBottom: "1px solid oklch(0.62 0.22 285 / 0.25)",
        boxShadow: "0 1px 0 oklch(0.62 0.22 285 / 0.15), 0 8px 24px -12px oklch(0 0 0 / 0.6)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden"
            style={{
              background: "oklch(1 0 0 / 0.04)",
              boxShadow: "var(--shadow-glow-purple)",
              border: "1px solid oklch(0.62 0.22 285 / 0.35)",
            }}
          >
            <img
              src={logo}
              alt="SanRafael DigitalMarket"
              className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
            />
          </span>
          <span className="text-base font-bold tracking-tight sm:text-lg">
            SanRafael <span style={{ color: "var(--brand-blue)" }}>DigitalMarket</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:text-foreground sm:text-sm"
              activeProps={{
                style: {
                  color: "white",
                  background: "oklch(0.62 0.22 285 / 0.18)",
                  boxShadow: "inset 0 0 0 1px oklch(0.62 0.22 285 / 0.4)",
                },
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
