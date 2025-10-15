
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="#home" className="font-semibold">
          Psico <span className="text-brand-500">MVC</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-brand-600">Servicios</a>
          <a href="#about" className="hover:text-brand-600">Sobre mí</a>
          <a href="#approach" className="hover:text-brand-600">Cómo trabajo</a>
          <a href="#faq" className="hover:text-brand-600">Preguntas</a>
          <a href="#contacto" className="hover:text-brand-600">Contacto</a>
        </nav>

        <Link
          href={`https://wa.me/543794395617?text=${encodeURIComponent("Hola, me gustaría agendar una consulta.")}`}
          target="_blank"
          className="inline-flex items-center px-4 py-2 rounded-lg font-medium text-white hover:opacity-90"
          style={{ background: "var(--accent)" }}
        >
          WhatsApp
        </Link>
      </div>
    </header>
  );
}
