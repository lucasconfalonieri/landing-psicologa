
import { CalendarDays, Target, HeartHandshake } from "lucide-react";

type Step = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const STEPS: Step[] = [
  {
    title: "Primera consulta",
    desc:
      "Exploramos tu motivo, historia y objetivos. Acordamos expectativas y modalidad (online/presencial).",
    icon: CalendarDays,
  },
  {
    title: "Plan terapéutico",
    desc:
      "Definimos frecuencia, encuadre y herramientas basadas en evidencia (TCC, recursos sistémicos y psicoeducación).",
    icon: Target,
  },
  {
    title: "Proceso y seguimiento",
    desc:
      "Sesiones focalizadas, tareas entre sesiones si aplica y evaluación periódica de avances.",
    icon: HeartHandshake,
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="
        py-16
        bg-[color:var(--tint)]/90
      "
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[color:var(--accent)]">
            Cómo trabajo
          </h2>
          <p className="mt-3 text-[color:var(--accent)]/80">
            Un proceso claro y acompañado en tres etapas, con comunicación transparente y enfoque basado en evidencia.
          </p>
        </div>

        <ol
          className="relative mt-10 grid gap-8 md:grid-cols-3"
          aria-label="Etapas del proceso terapéutico"
        >
          <span
            aria-hidden
            className="
              hidden md:block
              absolute left-0 right-0 top-[52px]
              h-[2px] bg-[color:var(--muted)]/50
            "
          />

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title} className="group relative">
                <span
                  aria-hidden
                  className="
                    hidden md:block
                    absolute left-1/2 -translate-x-1/2 top-[44px]
                    size-3 rounded-full bg-[color:var(--brand)]/80 ring-4 ring-[color:var(--tint)]
                  "
                />

                <article
                  className="
                    h-full rounded-2xl bg-[color:var(--surface)]
                    p-6 shadow-sm ring-1 ring-[color:var(--muted)]/50
                    transition-transform hover:-translate-y-0.5 hover:shadow-md
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        inline-flex size-9 items-center justify-center rounded-full text-white font-semibold
                        shadow-sm
                      "
                      style={{ background: "var(--brand)" }}
                    >
                      {i + 1}
                    </span>

                    <span
                      className="
                        inline-flex size-9 items-center justify-center rounded-full
                        bg-[color:var(--tint)] ring-1 ring-[color:var(--brand)]/20 text-[color:var(--brand)]
                      "
                      aria-hidden
                    >
                      <Icon className="size-5" />
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-[color:var(--accent)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[color:var(--accent)]/80">
                    {s.desc}
                  </p>

                  <div
                    className="
                      mt-4 h-1 rounded-full bg-[color:var(--muted)]/50
                      transition-colors group-hover:bg-[color:var(--brand)]
                    "
                  />
                </article>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-sm text-[color:var(--accent)]/70">
          El objetivo es que el proceso sea claro, medible y ajustado a tus necesidades.
        </p>
      </div>
    </section>
  );
}
