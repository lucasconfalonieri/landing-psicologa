
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Instagram, MessageCircle } from "lucide-react";

const PHONE_E164 = "543794395617";
const WA_TEXT = encodeURIComponent("Hola, me gustaría agendar una sesión.");

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t bg-[color:var(--tint)]/80 text-[color:var(--accent)] relative overflow-hidden">
      <div className="pointer-events-none select-none absolute right-[-40px] bottom-[-30px] md:right-4 md:bottom-4">
        <Image
          src="/brand/logo-azul.png" 
          alt=""
          width={420}
          height={420}
          className="opacity-10 md:opacity-15 rotate-[8deg]"
          aria-hidden
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-[220px] h-12 md:w-[280px] md:h-14">
            <Image
              src="/brand/logo-azul-wordmark.png" 
              alt="María Victoria Confalonieri"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="mt-3 text-sm md:text-base text-[color:var(--accent)]/80 max-w-xl">
            Psicóloga — Corrientes, Argentina · Atención online y presencial.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`https://wa.me/${PHONE_E164}?text=${WA_TEXT}`}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
              style={{ background: "var(--brand)" }}
              aria-label="Chatear por WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </Link>
            <Link
              href="https://www.instagram.com/psico.mv.confalonieri/"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ring-1 ring-[color:var(--muted)]/60 bg-[color:var(--surface)] hover:bg-white transition"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="size-4" aria-hidden />
              Instagram
            </Link>
          </div>


          <div className="mt-8 w-full border-t border-[color:var(--muted)]/50 pt-3 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[color:var(--accent)]/70">
              © {year} Maria Victoria Confalonieri — Psicóloga. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/legal/privacidad"
                className="hover:underline underline-offset-4 decoration-[color:var(--brand)] hover:text-[color:var(--brand)]"
              >
                Privacidad
              </Link>
              <a
                href="#home"
                className="inline-flex items-center gap-1 hover:underline underline-offset-4 decoration-[color:var(--brand)] hover:text-[color:var(--brand)]"
                aria-label="Volver arriba"
                title="Volver arriba"
              >
                <ArrowUp className="size-4" />
                Arriba
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
