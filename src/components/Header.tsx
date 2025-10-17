"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { CalendarPlus } from "lucide-react";

const PHONE_E164 = "543794395617";
const SECTIONS = ["home", "services", "about", "approach", "faq", "contacto"];

export default function Header() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (n): n is HTMLElement => !!n
    );
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { root: null, rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const waHref = useMemo(() => {
    const t = encodeURIComponent("Hola, me gustaría agendar una consulta.");
    return `https://wa.me/${PHONE_E164}?text=${t}`;
  }, []);

  const linkBase = "relative px-1 py-1 transition-colors text-sm focus:outline-none font-medium";
  const underline = 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-[color:var(--brand)] after:transition-all after:duration-300';

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--muted)]/70 backdrop-blur border-b border-[color:var(--muted)]/60 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image src="/brand/logo-azul.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="font-script text-2xl md:text-3xl lg:text-4xl tracking-tight leading-none text-[color:var(--accent)]">
            María Victoria Confalonieri
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[color:var(--accent)]/85">
          {[
            ["home", "Inicio"],
            ["services", "Servicios"],
            ["about", "Sobre mí"],
            ["approach", "Cómo trabajo"],
            ["faq", "Preguntas"],
            ["contacto", "Contacto"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${linkBase} ${underline} ${
                active === id
                  ? "text-[color:var(--brand)] after:w-full"
                  : "hover:text-[color:var(--brand)] after:w-0 hover:after:w-full"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <Link
          href={waHref}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-display text-white shadow-sm hover:opacity-90 transition"
          style={{ background: "var(--brand)" }}
        >
          <CalendarPlus />
          Agenda tu cita
        </Link>
      </div>
    </header>
  );
}
