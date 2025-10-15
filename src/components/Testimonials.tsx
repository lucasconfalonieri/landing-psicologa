
import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;    
  rating?: number;    
  avatarInitials?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Testimonio pendiente.",
    author: "Iniciales, edad",
    rating: 5,
    avatarInitials: "MV",
  },
  {
    quote: "Testimonio pendiente.",
    author: "Iniciales, edad",
    rating: 5,
    avatarInitials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Testimonios</h2>
          <p className="mt-3 text-slate-700">
            Experiencias de pacientes (se publican con consentimiento y resguardo de identidad).
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5"
              aria-label={`Testimonio ${i + 1}`}
            >
              <Quote className="size-6 text-[color:var(--accent)]/80" aria-hidden />

              <p className="mt-3 text-slate-800 italic">
                “{t.quote}”
              </p>

              <div className="mt-5 flex items-center gap-3">
                {t.avatarInitials ? (
                  <div
                    className="inline-flex size-9 items-center justify-center rounded-full text-white font-semibold"
                    style={{ background: "var(--accent)" }}
                    aria-hidden
                  >
                    {t.avatarInitials}
                  </div>
                ) : null}

                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-900">— {t.author}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
