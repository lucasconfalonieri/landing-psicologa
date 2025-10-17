
import { Brain, User, Users, Video } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const ITEMS: Service[] = [
  {
    title: "Terapia individual (adultos y adolescentes)",
    desc: "Proceso personalizado con enfoque integrativo y herramientas prácticas.",
    icon: User,
  },
  {
    title: "Infanto-juvenil",
    desc: "Acompañamiento con participación de referentes y psicoeducación.",
    icon: Users,
  },
  {
    title: "Modalidad online y presencial",
    desc: "Atención en Corrientes y por videollamada segura.",
    icon: Video,
  },
  {
    title: "Enfoques (TCC, sistémica, etc.)",
    desc: "Intervenciones basadas en evidencia adaptadas a tu objetivo.",
    icon: Brain,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        py-16
        bg-[color:var(--tint)]/60
        [@supports(backdrop-filter:blur(0))]:bg-[color:var(--tint)]/90
      "
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[color:var(--accent)]">
            Servicios
          </h2>
          <p className="mt-2 text-[color:var(--accent)]/80">
            Opciones de atención pensadas para distintas etapas y necesidades.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ title, desc, icon: Icon }) => (
            <article
              key={title}
              className="
                group relative rounded-2xl bg-[color:var(--surface)]
                p-6 shadow-sm ring-1 ring-[color:var(--muted)]/50
                transition-transform hover:-translate-y-0.5 hover:shadow-md
              "
            >
              <div
                className="
                  inline-flex items-center justify-center
                  rounded-xl p-2.5 ring-1 ring-[color:var(--brand)]/20
                  mb-4
                "
                style={{ background: "var(--tint)" }}
                aria-hidden
              >
                <Icon className="size-5 text-[color:var(--brand)]" />
              </div>

              <h3 className="font-display text-lg font-semibold text-[color:var(--accent)]">
                {title}
              </h3>
              <p className="mt-2 text-[color:var(--accent)]/75">{desc}</p>

              <span
                className="
                  pointer-events-none absolute left-6 right-6 bottom-3 h-[2px]
                  rounded-full bg-[color:var(--muted)]/50
                  transition-colors group-hover:bg-[color:var(--brand)]
                "
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
