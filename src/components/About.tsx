
import Image from "next/image";
import { MapPin, Globe, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 ">
      <div className="mx-auto max-w-6xl px-6 grid items-center gap-10 md:grid-cols-[minmax(280px,420px)_1fr]">
        <div className="justify-self-center md:justify-self-start">
          <div
            className="
              relative w-[78vw] max-w-[340px] md:max-w-[400px] aspect-[4/5]
              rounded-3xl overflow-hidden
              ring-1 ring-[color:var(--brand)]/25 shadow-sm
            "
          >
            <Image
              src="/portrait.jpg"
              alt="Psicóloga Maria Victoria Confalonieri"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 78vw, 400px"
              priority
            />
          </div>
          

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="inline-block rounded-full px-3 py-1 bg-[color:var(--tint)]/80 text-[color:var(--accent)]/90">
              Psicóloga
            </span>
            <span className="inline-block rounded-full px-3 py-1 bg-[color:var(--muted)]/45 text-[color:var(--accent)]/90">
              Corrientes · Online
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[color:var(--accent)]">
            Sobre mí
          </h2>

          <p className="mt-2 font-script text-[clamp(18px,3vw,24px)] text-[color:var(--brand)]">
            Un espacio cálido, profesional y basado en evidencia.
          </p>

          <p className="mt-4 text-[color:var(--accent)]/85 leading-relaxed">
            Soy <span className="font-semibold">María Victoria Confalonieri</span>, Psicóloga. Trabajo con adultos y adolescentes desde un
            marco basado en evidencia (TCC, enfoques sistémicos y psicoeducación). Acompaño procesos de
            ansiedad, estrés, autoestima y vínculos, con una mirada cercana y profesional.
          </p>

          <ul className="mt-5 space-y-3 text-[color:var(--accent)]/90">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 text-[color:var(--brand)]" aria-hidden />
              <span>Atención presencial en Corrientes (AR) y modalidad online.</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 size-5 text-[color:var(--brand)]" aria-hidden />
              <span>Encuadres claros, objetivos compartidos y seguimiento de avances.</span>
            </li>
            <li className="flex items-start gap-3">
              <HeartHandshake className="mt-0.5 size-5 text-[color:var(--brand)]" aria-hidden />
              <span>Vínculo terapéutico respetuoso, confidencial y centrado en vos.</span>
            </li>
          </ul>


        
          <div className="mt-6 rounded-2xl bg-[color:var(--surface)] p-4 ring-1 ring-[color:var(--muted)]/60">
            <p className="text-sm text-[color:var(--accent)]/80">
              Matrícula: — · Actualizaciones y formación continua en TCC y sistemas.
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
}
