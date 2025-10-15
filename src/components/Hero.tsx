
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="pt-16 pb-20">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs tracking-widest text-teal uppercase">Psicóloga</span>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-[1.1] text-slate-900">
            Maria Victoria Confalonieri
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700">
            Psicoterapia basada en evidencia para adultos y adolescentes. Atención en Corrientes (AR) y modalidad online.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`https://wa.me/543794395617?text=${encodeURIComponent("Hola, quisiera coordinar una primera sesión.")}`}
              target="_blank"
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90"
              style={{ background: "var(--brand)" }}
            >
              Agendar por WhatsApp
            </Link>
            <a href="#services" className="inline-flex items-center px-6 py-3 rounded-xl border font-semibold">
              Ver servicios
            </a>
          </div>

          <div className="mt-5 flex gap-2 text-sm">
            <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--peach)]/60">Particular</span>
            <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--muted)]/60">Online y presencial</span>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-teal/20">
          <Image src="/hero.jpg" alt="Consultorio" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
