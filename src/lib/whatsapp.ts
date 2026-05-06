// Contacto único del gestor del marketplace.
// Para cambiar el número, edita solo este archivo.
export const WHATSAPP_NUMBER = "584161334998"; // +58 416 133 4998

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, quiero publicar mi comercio en SanRafael DigitalMarket.";

export function getWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
