
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { DM_Serif_Display } from "next/font/google";
import { CalendarCheck } from "lucide-react";

const brandFont = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const PHONE_E164 = "543794395617"; 
const SECTIONS = ["home", "services", "about", "approach", "faq", "contacto"];

export default function Header() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (n): n is HTMLElement => !!n
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0.01,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const waHref = useMemo(() => {
    const t = encodeURIComponent("Hola, me gustaría agendar una consulta.");
    return `https://wa.me/${PHONE_E164}?text=${t}`;
  }, []);

  const linkBase =
    "relative px-1 py-1 transition-colors text-sm focus:outline-none";
  const underline =
    'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-[color:var(--accent)] after:transition-all after:duration-300';

  return (
    <header
      className="sticky top-0 z-40 bg-[color:var(--header-bg)] 
      backdrop-blur border-b border-[color:var(--brand)]/25 
      shadow-[0_1px_0_0_rgba(204,122,94,0.10)]"
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="#home"
          className={`text-slate-900 ${brandFont.className} text-2xl md:text-3xl leading-none tracking-tight`}
        >
          Psico <span className="text-brand-500">MVC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a
            href="#home"
            className={`${linkBase} ${underline} ${
              active === "home"
                ? "text-[color:var(--accent)] after:w-full"
                : "hover:text-brand-600 after:w-0 hover:after:w-full"
            }`}
          >
            Inicio
          </a>
          <a
            href="#services"
            className={`${linkBase} ${underline} ${
              active === "services"
                ? "text-[color:var(--accent)] after:w-full"
                : "hover:text-brand-600 after:w-0 hover:after:w-full"
            }`}
          >
            Servicios
          </a>
          <a
            href="#about"
            className={`${linkBase} ${underline} ${
              active === "about"
                ? "text-[color:var(--accent)] after:w-full"
                : "hover:text-brand-600 after:w-0 hover:after:w-full"
            }`}
          >
            Sobre mí
          </a>
          <a
            href="#approach"
            className={`${linkBase} ${underline} ${
              active === "approach"
                ? "text-[color:var(--accent)] after:w-full"
                : "hover:text-brand-600 after:w-0 hover:after:w-full"
            }`}
          >
            Cómo trabajo
          </a>
          <a
            href="#faq"
            className={`${linkBase} ${underline} ${
              active === "faq"
                ? "text-[color:var(--accent)] after:w-full"
                : "hover:text-brand-600 after:w-0 hover:after:w-full"
            }`}
          >
            Preguntas
          </a>
          <a
            href="#contacto"
            className={`${linkBase} ${underline} ${
              active === "contacto"
                ? "text-[color:var(--accent)] after:w-full"
                : "hover:text-brand-600 after:w-0 hover:after:w-full"
            }`}
          >
            Contacto
          </a>
        </nav>

        <Link
          href={waHref}
          target="_blank"
          className="
            inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-white
            shadow-sm hover:opacity-90 transition
          "
          style={{ background: "#5A7577" }}
        >
          <CalendarCheck className="size-4" aria-hidden />
          Agenda tu cita!
        </Link>
      </div>
    </header>
  );
}
