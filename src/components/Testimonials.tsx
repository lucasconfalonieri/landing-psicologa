
import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;      
  rating?: number;     
  avatarInitials?: string;
};

const TESTIMONIALS: Testimonial[] = [
  { quote: "Testimonio pendiente.", author: "Iniciales, edad", rating: 5, avatarInitials: "MV" },
  { quote: "Testimonio pendiente.", author: "Iniciales, edad", rating: 5, avatarInitials: "AR" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-16 " 
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[color:var(--accent)]">
            Testimonios
          </h2>
          <p className="mt-1 font-script text-[clamp(18px,3vw,24px)] text-[color:var(--brand)]">
            Experiencias compartidas con consentimiento.
          </p>
          <p className="mt-2 text-[color:var(--accent)]/80 text-base">
            Se publican con resguardo de identidad.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="
                relative rounded-2xl bg-[color:var(--surface)]
                p-6 shadow-sm ring-1 ring-[color:var(--muted)]/55
                transition-transform hover:-translate-y-0.5 hover:shadow-md
              "
              aria-label={`Testimonio ${i + 1}`}
            >
              <Quote className="size-6 text-[color:var(--brand)]/80" aria-hidden />

              <p className="mt-3 italic text-[color:var(--accent)]">
                “{t.quote}”
              </p>

              <div className="mt-5 flex items-center gap-3">
                {t.avatarInitials ? (
                  <div
                    className="inline-flex size-9 items-center justify-center rounded-full text-white font-semibold ring-2 ring-[color:var(--tint)]"
                    style={{ background: "var(--brand)" }}
                    aria-hidden
                  >
                    {t.avatarInitials}
                  </div>
                ) : null}

                <div className="flex-1">
                  <div className="text-sm font-medium text-[color:var(--accent)]">— {t.author}</div>
                  {typeof t.rating === "number" && t.rating > 0 && (
                    <div className="mt-1 flex items-center gap-0.5" aria-label={`${t.rating} de 5`}>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`size-4 ${
                            idx < (t.rating ?? 0)
                              ? "fill-[color:var(--brand)] text-[color:var(--brand)]"
                              : "text-[color:var(--muted)]"
                          }`}
                          aria-hidden
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <span
                aria-hidden
                className="
                  pointer-events-none absolute left-6 right-6 bottom-3 h-[2px]
                  rounded-full bg-[color:var(--muted)]/50 group-hover:bg-[color:var(--brand)]
                "
              />
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-[color:var(--accent)]/70">
          Los testimonios no constituyen garantía de resultados. Cada proceso es personal.
        </p>
      </div>
    </section>
  );
}
