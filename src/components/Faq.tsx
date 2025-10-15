
"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

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
    <section id="faq" className="py-16 bg-[color:var(--muted)]/30">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Preguntas frecuentes</h2>
        <p className="mt-3 text-slate-700">
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
              className="rounded-2xl bg-white ring-1 ring-black/5"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="group w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-slate-900">{f.q}</span>
                  <ChevronDown className="size-5 shrink-0 text-slate-500 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-5 pb-5 pt-0 text-slate-700 data-[state=closed]:hidden">
                {f.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </section>
  );
}
