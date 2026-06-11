import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ADMIN_NAME, ADMIN_EMAIL } from "@/lib/whatsapp";

export const Route = createFileRoute("/privacidad")({
  component: PrivacidadPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidad — SanRafael DigitalMarket" },
      {
        name: "description",
        content:
          "Cómo SanRafael DigitalMarket trata los datos personales de usuarios y negocios.",
      },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-surface p-6 sm:p-8">
      <h2 className="text-lg font-semibold sm:text-xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function PrivacidadPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl">Política de Privacidad</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Plataforma privada administrada por {ADMIN_NAME}.
        </p>

        <div className="mt-8 space-y-4">
          <Section title="1. Datos que recopilamos">
            <p>
              De los usuarios: nombre, correo o WhatsApp y contraseña al registrarse. De los
              negocios: nombre del negocio, categoría, correo, WhatsApp y contraseña. También
              guardamos los comentarios y calificaciones que decides publicar.
            </p>
          </Section>

          <Section title="2. Cómo usamos tus datos">
            <p>
              Tus datos se usan exclusivamente para que la plataforma funcione: mostrar tu
              comentario, recomendarte productos, contactarte sobre tu plan o responder tus
              solicitudes. No vendemos ni cedemos información a terceros.
            </p>
          </Section>

          <Section title="3. Cookies y métricas">
            <p>
              Usamos almacenamiento local del navegador para mantener tu sesión y mejorar las
              recomendaciones del asistente SanRafi. No utilizamos rastreadores publicitarios de
              terceros.
            </p>
          </Section>

          <Section title="4. Seguridad">
            <p>
              Las contraseñas se almacenan cifradas. El acceso a la base de datos está restringido
              al administrador.
            </p>
          </Section>

          <Section title="5. Tus derechos">
            <p>
              Puedes solicitar en cualquier momento la eliminación o corrección de tus datos
              escribiendo a {ADMIN_EMAIL}.
            </p>
          </Section>

          <Section title="6. Cambios">
            <p>
              Esta política puede actualizarse. La versión vigente es la publicada en esta página.
            </p>
          </Section>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
