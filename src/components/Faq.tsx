// src/components/Faq.tsx
"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  { q: "¿La primera sesión cómo es?", a: "Respuesta pendiente." },
  { q: "¿Atendés online?", a: "Respuesta pendiente." },
  { q: "¿Trabajás con obras sociales?", a: "Respuesta pendiente." },
  { q: "¿Honorarios y formas de pago?", a: "Respuesta pendiente." },
  { q: "¿Cancelaciones y reprogramaciones?", a: "Respuesta pendiente." },
];

export default function Faq() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-16 bg-[color:var(--tint)]/70">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-[11px] tracking-[0.18em] uppercase text-[color:var(--brand)]">
          Preguntas frecuentes
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-[color:var(--accent)]">
          Resolvé tus dudas
        </h2>
        <p className="mt-2 text-[color:var(--accent)]/80">
          Información práctica sobre la atención. Si tenés otra consulta, escribime por WhatsApp.
        </p>

        <Accordion.Root
          type="single"
          collapsible
          className="mt-8 space-y-3"
          aria-label="Preguntas frecuentes"
        >
          {FAQS.map((f, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="
                rounded-2xl bg-[color:var(--surface)]
                ring-1 ring-[color:var(--muted)]/55 shadow-sm
                focus-within:ring-[color:var(--brand)]/50
              "
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="
                    group w-full px-5 py-4 text-left flex items-center gap-3
                    transition-colors
                    focus:outline-none
                  "
                >
                  <span
                    className="
                      inline-flex size-8 items-center justify-center rounded-lg
                      bg-[color:var(--tint)] ring-1 ring-[color:var(--brand)]/20
                      text-[color:var(--brand)]
                      shrink-0
                    "
                    aria-hidden
                  >
                    <HelpCircle className="size-4" />
                  </span>

                  <span className="flex-1 font-medium text-[color:var(--accent)]">
                    {f.q}
                  </span>

                  <ChevronDown
                    className="
                      size-5 shrink-0 text-[color:var(--accent)]/60
                      transition-transform duration-200
                      group-data-[state=open]:rotate-180
                    "
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>

              <div className="px-5">
                <div
                  className="
                    h-[2px] rounded-full
                    bg-[color:var(--muted)]/50
                    data-[state=open]:bg-[color:var(--brand)]
                  "
                  data-state={"closed"}
                />
              </div>

              <Accordion.Content
                className="
                  px-5 pb-5 pt-3 text-[color:var(--accent)]/85
                  data-[state=closed]:hidden
                "
              >
                {f.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <p className="mt-6 text-sm text-[color:var(--accent)]/75">
          ¿Seguís con dudas?{" "}
          <a
            href="https://wa.me/543794395617?text=Hola,%20tengo%20una%20consulta%20sobre%20la%20atención."
            target="_blank"
            className="font-semibold text-[color:var(--brand)] hover:underline underline-offset-4"
          >
            Escribime por WhatsApp
          </a>
          .
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </section>
  );
}
