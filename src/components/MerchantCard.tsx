import { getWhatsAppUrl } from "@/lib/whatsapp";

export function MerchantCard() {
  return (
    <article className="card-surface overflow-hidden">
      <div className="empty-slot h-32 rounded-none border-x-0 border-t-0">
        Foto de portada del local
      </div>

      <div className="relative px-5 pb-5">
        <div
          className="empty-slot absolute -top-8 left-5 h-16 w-16 rounded-full"
          style={{ boxShadow: "0 0 0 4px var(--surface)" }}
        >
          Logo
        </div>

        <div className="mt-12 flex flex-col gap-2.5">
          <div className="field-slot">Nombre del comercio</div>
          <div className="field-slot">Ubicación</div>
          <div className="field-slot">Número de teléfono</div>
          <div className="field-slot min-h-[4.5rem]">Descripción corta (opcional)</div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full rounded-full py-2.5 text-sm font-semibold text-white text-center transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, oklch(0.65 0.18 155), oklch(0.70 0.18 165))",
              boxShadow: "0 0 18px -6px oklch(0.70 0.18 155)",
            }}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
