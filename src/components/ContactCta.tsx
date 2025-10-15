
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";

const PHONE_E164 = "543794395617"; 
const WA_TEXT = encodeURIComponent("Hola, me gustaría agendar una sesión.");

export default function ContactCta() {
  return (
    <section id="contacto" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">¿Empezamos?</h2>
            <p className="mt-3 text-slate-700">
              Escribime y coordinamos tu primera consulta. Atención en Corrientes (AR) y modalidad online.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[color:var(--brand)]">•</span>
                <span>Enfoque basado en evidencia (TCC + herramientas sistémicas y psicoeducación).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[color:var(--brand)]">•</span>
                <span>Atención particular. Online o presencial según disponibilidad.</span>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`https://wa.me/${PHONE_E164}?text=${WA_TEXT}`}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90"
                style={{ background: "var(--brand)" }}
              >
                <MessageCircle className="size-5" />
                Chatear por WhatsApp
              </Link>

              <Link
                href="https://www.instagram.com/psico.mv.confalonieri/"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold hover:bg-white/60"
              >
                <Instagram className="size-5" />
                Instagram
              </Link>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-[color:var(--accent)]" />
                <span>+54 379 4395617</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-[color:var(--accent)]" />
                <span>Corrientes, Argentina · Online</span>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Este contenido es informativo y no sustituye la atención de urgencia. Ante una emergencia,
              contactá a los servicios locales de salud.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5">
            <div className="rounded-xl p-4 bg-[color:var(--peach)]/40 ring-1 ring-[color:var(--muted)]/60">
              <h3 className="text-lg font-semibold text-slate-900">Coordiná tu primera sesión</h3>
              <p className="mt-2 text-slate-700">
                Contame brevemente tu motivo de consulta y tu disponibilidad. Te respondo por WhatsApp.
              </p>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Los datos que compartas por WhatsApp se tratan con confidencialidad y sólo para coordinar turnos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
