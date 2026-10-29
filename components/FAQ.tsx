"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TRIAL } from "@/lib/links";

const FAQS = [
  { q: "¿Cómo funciona la prueba gratuita?", a: `${TRIAL.period} gratis, sin tarjeta. Te ayudamos a importar tus encargos y modelos.` },
  { q: "¿Los estampes firmados tienen validez legal?", a: "Sí. La Firma Electrónica Avanzada equivale a la manuscrita (Ley N° 19.799) y usas tu propio certificado." },
  { q: "¿El estampe inteligente redacta por mí?", a: "Te asiste desde tus modelos y sugiere correcciones. El texto final lo decides tú." },
  { q: "¿Los cobros salen de mi Gmail?", a: "No. Salen del correo de cobranza de Stamply. Tu Gmail solo envía lo que tú decides." },
  { q: "¿Funciona en terreno sin internet?", a: "Sí. La ruta queda en tu teléfono, registras resultados y se sincronizan al volver la señal." },
  { q: "¿Mis datos están seguros?", a: "Cada oficina está aislada, tus claves se guardan cifradas y cumplimos la ley chilena de datos." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">Lo que nos preguntan los receptores.</h2>
        </ScrollReveal>

        <div className="mt-10 divide-y divide-slate-100 border-y border-slate-100">
          {FAQS.map((faq, i) => (
            <div key={faq.q}>
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-slate-900">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 shrink-0 text-brand-400 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
