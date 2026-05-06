import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto — SanRafael DigitalMarket" },
      { name: "description", content: "Contacta con SanRafael DigitalMarket." },
    ],
  }),
});

function ContactoPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Contacto</h1>
        <p className="mt-3 text-muted-foreground">Espacio listo para tu información de contacto.</p>
        <div className="card-surface mt-10 space-y-3 p-8">
          <div className="field-slot">Correo electrónico</div>
          <div className="field-slot">Teléfono / WhatsApp</div>
          <div className="field-slot">Dirección</div>
          <div className="field-slot min-h-[6rem]">Mensaje o información adicional</div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
