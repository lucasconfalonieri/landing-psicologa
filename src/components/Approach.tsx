
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
    <section id="approach" className="py-16 bg-[color:var(--peach)]/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Cómo trabajo</h2>
          <p className="mt-3 text-slate-700">
            Un proceso claro y acompañado en tres etapas, con comunicación transparente y
            enfoque basado en evidencia.
          </p>
        </div>

        <ol
          className="relative mt-10 grid gap-8 md:grid-cols-3"
          aria-label="Etapas del proceso terapéutico"
        >
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title} className="group relative">
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] right-0 h-[2px] bg-[color:var(--muted)]/70"
                  />
                )}

                <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5 h-full">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-full text-white font-semibold"
                      style={{ background: "var(--brand)" }}>
                      {i + 1}
                    </span>
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-[color:var(--muted)]/60 text-[color:var(--accent)]">
                      <Icon className="size-5" aria-hidden />
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{s.desc}</p>

                  <div className="mt-4 h-1 rounded-full bg-[color:var(--muted)]/60 group-hover:bg-[color:var(--accent)]/70 transition-colors" />
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-sm text-slate-600">
          El objetivo es que el proceso sea claro, medible y ajustado a tus necesidades.
        </p>
      </div>
    </section>
  );
}
