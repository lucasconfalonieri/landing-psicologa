
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        pt-16 pb-20
        bg-[color:var(--bg)]
      "
    >
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[16px] tracking-[0.18em] uppercase text-[color:var(--brand)]">
            Psicóloga
          </span>

  
          <h1 className="mt-2 font-display text-4xl md:text-6xl leading-[1.08] text-[color:var(--accent)]">
            <span className="relative inline-block">
              María Victoria
              <span
                className="
                  absolute left-0 -bottom-1 block h-2 w-full
                  bg-[color:var(--tint)]/80
                  rounded-md
                  -z-10
                "
                aria-hidden
              />
            </span>
            <br />
            <span className="relative inline-block">
              Confalonieri
              <span
                className="
                  absolute left-0 -bottom-1 block h-2 w-3/4
                  bg-[color:var(--brand)]/25
                  rounded-md
                  -z-10
                "
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-2 font-script text-[clamp(18px,3.2vw,26px)] text-[color:var(--brand)]">
            Acompañarte con calidez y evidencia.
          </p>


          <p className="mt-4 text-[color:var(--accent)]/85 text-lg md:text-xl">
            Psicoterapia basada en evidencia para adultos y adolescentes.
            Atención en Corrientes (AR) y modalidad online.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`https://wa.me/543794395617?text=${encodeURIComponent(
                "Hola, quisiera coordinar una primera sesión."
              )}`}
              target="_blank"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white
                shadow-sm hover:opacity-90 transition
              "
              style={{ background: "var(--brand)" }}
            >
              <MessageCircle className="size-5" aria-hidden />
              Agendar por WhatsApp
            </Link>

            <a
              href="#services"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                ring-1 ring-[color:var(--muted)]/60 bg-[color:var(--surface)]
                text-[color:var(--accent)] hover:bg-white transition
              "
            >
              Ver servicios
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--tint)]/80 text-[color:var(--accent)]/90">
              Particular
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--muted)]/45 text-[color:var(--accent)]/90">
              Online y presencial
            </span>
          </div>
        </div>

        <div
          className="
            relative aspect-[4/3] rounded-3xl overflow-hidden
            ring-1 ring-[color:var(--brand)]/25 shadow-sm
            hover:shadow-md transition
          "
        >
          <Image
            src="/hero.jpg"
            alt="Consultorio"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
