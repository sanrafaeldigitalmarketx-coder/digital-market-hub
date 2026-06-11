// Contacto privado del administrador de SanRafael DigitalMarket.
// Responsable: Jovany Gonzalez.
export const ADMIN_NAME = "Jovany Gonzalez";
export const ADMIN_EMAIL = "sanrafaeldigitalmarketx@gmail.com";
export const ADMIN_DESIGN_EMAIL = "jovanygonzalez.gfxdesigner@gmail.com";
export const ADMIN_WHATSAPP_DISPLAY = "+58 416-1334998";
export const ADMIN_WHATSAPP_NUMBER = "584161334998";

// Mensaje mostrado en tooltips para tarjetas/productos hasta que el admin las publique.
export const INSTITUTIONAL_PENDING =
  "Para publicar tu negocio o producto, contacta al administrador por WhatsApp.";

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
