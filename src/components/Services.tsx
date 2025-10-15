
export default function Services() {
  const items = [
    { title: "Terapia individual (adultos y adolescentes)", desc: "Proceso personalizado con enfoque integrativo y herramientas prácticas." },
    { title: "Infanto-juvenil", desc: "Acompañamiento con participación de referentes y psicoeducación." },
    { title: "Modalidad online y presencial", desc: "Atención en Corrientes y por videollamada segura." },
    { title: "Enfoques (TCC, sistémica, etc.)", desc: "Intervenciones basadas en evidencia adaptadas a tu objetivo." },
  ];

  return (
    <section id="services" className="py-14 bg-[color:var(--muted)]/30">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">Servicios</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
