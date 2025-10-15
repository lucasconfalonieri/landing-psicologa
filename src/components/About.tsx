
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-6 grid items-center gap-10 md:grid-cols-[minmax(280px,420px)_1fr]">
        <div className="justify-self-center md:justify-self-start">
          <div className="relative w-[78vw] max-w-[360px] md:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-[color:var(--muted)]/70 shadow-sm">
            <Image
              src="/portrait.jpg"
              alt="Psicóloga Maria Victoria Confalonieri"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 78vw, 420px"
              priority
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex rounded-full px-3 py-1 bg-[color:var(--peach)]/60">
              Psicóloga
            </span>
            <span className="inline-flex rounded-full px-3 py-1 bg-[color:var(--muted)]/60">
              Corrientes · Online
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Sobre mí</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Soy Maria Victoria Confalonieri, Psicóloga. Trabajo con adultos y adolescentes desde un marco basado en evidencia
            (TCC, enfoques sistémicos y psicoeducación). Acompaño procesos de ansiedad, estrés,
            autoestima y vínculos, con mirada cálida y profesional.
          </p>

          <ul className="mt-5 space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="mt-1 text-[color:var(--brand)]">•</span>
              <span>Atención en Corrientes (AR) y online</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-[color:var(--brand)]">•</span>
              <span>Particular</span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}
