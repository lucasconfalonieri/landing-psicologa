// src/app/legal/privacidad/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Psicóloga Maria Victoria Confalonieri",
  description:
    "Política de privacidad: qué datos tratamos, con qué finalidad, tus derechos y cómo contactarnos.",
};

const LAST_UPDATED = "15/10/2025"; 

export default function PrivacidadPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">Política de privacidad</h1>
          <p className="mt-3 text-slate-700">
            Esta política explica cómo tratamos tu información cuando navegás el sitio y cuando te
            contactás por WhatsApp o redes sociales.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h3 className="font-medium text-slate-900">Responsable</h3>
            <p className="mt-1 text-sm text-slate-700">
              Psic. Maria Victoria Confalonieri (en adelante, “la Profesional”).<br />
              <span className="text-slate-500">Matrícula:</span> — 
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <h3 className="font-medium text-slate-900">Contacto</h3>
            <p className="mt-1 text-sm text-slate-700">
              WhatsApp: +54 379 439 5617<br />
              Instagram:{" "}
              <Link
                href="https://www.instagram.com/psico.mv.confalonieri/"
                target="_blank"
                className="underline hover:text-[color:var(--brand)]"
              >
                @psico.mv.confalonieri
              </Link>
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-semibold text-slate-900">Qué datos tratamos</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            <li>
              <span className="font-medium">Datos de contacto</span> que vos nos brindás al escribir
              (nombre, teléfono, usuario de red social).
            </li>
            <li>
              <span className="font-medium">Mensajes</span> que enviás por WhatsApp/Instagram
              (motivo de consulta, disponibilidad, etc.).
            </li>
            <li>
              <span className="font-medium">Datos técnicos</span> básicos de navegación (p. ej.,
              tipo de dispositivo, páginas visitadas). No realizamos perfiles avanzados.
            </li>
          </ul>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-slate-900">Para qué usamos tus datos</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Responder consultas y coordinar turnos.</li>
              <li>Brindar información sobre modalidad de atención.</li>
              <li>Mejorar la comunicación y la experiencia del sitio.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-slate-900">Base legal</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Tu <span className="font-medium">consentimiento</span> al contactarnos.</li>
              <li>
                <span className="font-medium">Ejecución de la relación profesional</span> para
                coordinar la atención.
              </li>
              <li>
                <span className="font-medium">Interés legítimo</span> en mantener la seguridad y
                funcionamiento del sitio.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-semibold text-slate-900">Conservación y terceros</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>
              Conservamos la información el tiempo necesario para responder tu consulta y cumplir
              obligaciones legales/profesionales aplicables.
            </li>
            <li>
              Si nos escribís por WhatsApp o Instagram, tus datos se tratan también bajo las{" "}
              <Link
                href="https://www.whatsapp.com/legal/"
                target="_blank"
                className="underline hover:text-[color:var(--brand)]"
              >
                políticas de WhatsApp
              </Link>{" "}
              y{" "}
              <Link
                href="https://help.instagram.com/"
                target="_blank"
                className="underline hover:text-[color:var(--brand)]"
              >
                políticas de Instagram
              </Link>
              .
            </li>
            <li>
              No vendemos tu información. Podremos compartirla si hay obligación legal o para
              resguardar derechos y seguridad.
            </li>
          </ul>
        </section>

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-semibold text-slate-900">Tus derechos</h2>
          <p className="mt-2 text-slate-700">
            Podés solicitar acceso, rectificación, actualización, oposición o supresión de tus datos.
            Para ejercerlos, escribinos por WhatsApp o Instagram.
          </p>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-slate-900">Seguridad y confidencialidad</h3>
            <p className="mt-2 text-slate-700">
              Aplicamos medidas razonables para proteger la información. Los intercambios en
              mensajerías y redes dependen también de las medidas de esas plataformas.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-slate-900">Menores de edad</h3>
            <p className="mt-2 text-slate-700">
              La atención infanto-juvenil requiere consentimiento de madre/padre/tutor y
              resguardo específico de la información.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-[color:var(--muted)]/60 bg-[color:var(--peach)]/30 p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Importante ante situaciones de urgencia
          </h2>
          <p className="mt-2 text-slate-700">
            Este sitio es informativo y no reemplaza la atención de urgencia. Ante una emergencia,
            comunicate con los servicios locales de salud o líneas de asistencia correspondientes.
          </p>
        </section>

        <p className="mt-8 text-xs text-slate-500">
          Última actualización: {LAST_UPDATED}. Esta política puede modificarse para reflejar cambios
          normativos o de servicio.
        </p>
      </div>
    </main>
  );
}
