import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ADMIN_NAME,
  ADMIN_EMAIL,
  ADMIN_DESIGN_EMAIL,
  ADMIN_WHATSAPP_DISPLAY,
  getWhatsAppUrl,
} from "@/lib/whatsapp";
import { MessageCircle, Mail, Palette } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Contacta al administrador de SanRafael DigitalMarket. WhatsApp, correo oficial y correo de diseño.",
      },
      { property: "og:title", content: "Contacto — SanRafael DigitalMarket" },
      {
        property: "og:description",
        content: "Atención directa con el administrador de la plataforma.",
      },
    ],
  }),
});

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-border/60 bg-[var(--surface-elevated)] p-4 transition-all hover:-translate-y-0.5 hover:border-[oklch(0.62_0.22_285_/_0.5)]"
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
        style={{ background: "var(--gradient-brand)" }}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium text-foreground">{value}</div>
      </div>
    </a>
  );
}

function ContactoPage() {
  const waMessage = "Hola Jovany, vengo desde SanRafael DigitalMarket.";
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <span
            className="rounded-full px-4 py-1.5 text-xs font-medium"
            style={{
              color: "white",
              background: "oklch(0.62 0.22 285 / 0.15)",
              border: "1px solid oklch(0.62 0.22 285 / 0.4)",
            }}
          >
            Atención directa
          </span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            Habla con el{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              administrador
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            {ADMIN_NAME} responde personalmente cada solicitud de publicación, plan o soporte.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <ContactRow
            icon={<MessageCircle size={20} />}
            label="WhatsApp"
            value={ADMIN_WHATSAPP_DISPLAY}
            href={getWhatsAppUrl(waMessage)}
          />
          <ContactRow
            icon={<Mail size={20} />}
            label="Correo oficial"
            value={ADMIN_EMAIL}
            href={`mailto:${ADMIN_EMAIL}`}
          />
          <ContactRow
            icon={<Palette size={20} />}
            label="Correo de diseño"
            value={ADMIN_DESIGN_EMAIL}
            href={`mailto:${ADMIN_DESIGN_EMAIL}`}
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href={getWhatsAppUrl(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2"
          >
            <MessageCircle size={18} /> Contactar al administrador
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
