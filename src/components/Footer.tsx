
import Link from "next/link";
import { Instagram, MessageCircle, ArrowUp } from "lucide-react";

const PHONE_E164 = "543794336568"; 
const WA_TEXT = encodeURIComponent("Hola, me gustaría agendar una sesión.");

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="#home" className="font-semibold text-slate-900">
              Psico <span className="text-brand-500">MVC</span>
            </Link>
            <p className="mt-3 text-sm text-slate-600">
              Psicóloga — Corrientes, Argentina · Atención online y presencial.
            </p>
          </div>

          <nav className="text-sm">
            <h3 className="font-medium text-slate-900">Secciones</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li><a href="#services" className="hover:text-brand-600">Servicios</a></li>
              <li><a href="#about" className="hover:text-brand-600">Sobre mí</a></li>
              <li><a href="#approach" className="hover:text-brand-600">Cómo trabajo</a></li>
              <li><a href="#testimonios" className="hover:text-brand-600">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-brand-600">Preguntas</a></li>
              <li><a href="#contacto" className="hover:text-brand-600">Contacto</a></li>
            </ul>
          </nav>

          <div className="text-sm">
            <h3 className="font-medium text-slate-900">Información</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>Matrícula: —</li>
              <li>
                <Link href="/legal/privacidad" className="hover:text-brand-600">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-t pt-4">
          <p className="text-xs text-slate-500">
            © {year} Maria Victoria Confalonieri — Psicóloga. Todos los derechos reservados.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-brand-600"
            aria-label="Volver arriba"
            title="Volver arriba"
          >
            <ArrowUp className="size-4" />
            Arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
