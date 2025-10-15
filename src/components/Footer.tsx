
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { DM_Serif_Display } from "next/font/google";

const brand = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  const year = new Date().getFullYear();

  const hoverUnderline =
    "hover:underline underline-offset-4 decoration-[color:var(--accent)]";

  return (
    <footer className="border-t bg-[color:var(--muted)]/60 text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              href="#home"
              className={`${brand.className} text-[22px] leading-none text-slate-900`}
            >
              Psico <span className="text-brand-500">MVC</span>
            </Link>
            <p className="mt-2 text-sm">
              Psicóloga — Corrientes, Argentina · Atención online y presencial.
            </p>
          </div>

          <nav className="text-sm">
            <h3 className="font-medium text-slate-900">Secciones</h3>
            <ul className="mt-2 space-y-1.5">
              <li><a href="#services" className={`hover:text-brand-700 ${hoverUnderline}`}>Servicios</a></li>
              <li><a href="#about" className={`hover:text-brand-700 ${hoverUnderline}`}>Sobre mí</a></li>
              <li><a href="#approach" className={`hover:text-brand-700 ${hoverUnderline}`}>Cómo trabajo</a></li>
              <li><a href="#testimonios" className={`hover:text-brand-700 ${hoverUnderline}`}>Testimonios</a></li>
              <li><a href="#faq" className={`hover:text-brand-700 ${hoverUnderline}`}>Preguntas</a></li>
              <li><a href="#contacto" className={`hover:text-brand-700 ${hoverUnderline}`}>Contacto</a></li>
            </ul>
          </nav>

          <div className="text-sm">
            <h3 className="font-medium text-slate-900">Información</h3>
            <ul className="mt-2 space-y-1.5">
              <li>Matrícula: —</li>
              <li>
                <Link href="/legal/privacidad" className={`hover:text-brand-700 ${hoverUnderline}`}>
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-[color:var(--brand)]/20 pt-3">
          <p className="text-xs text-slate-700">
            © {year} Maria Victoria Confalonieri — Psicóloga. Todos los derechos reservados.
          </p>
          <a
            href="#home"
            className={`inline-flex items-center gap-1 text-xs text-slate-700 hover:text-brand-700 ${hoverUnderline}`}
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
