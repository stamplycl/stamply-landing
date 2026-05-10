"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  { q: "¿Quién puede usar Stamply?",                    a: "Stamply está diseñado exclusivamente para receptores judiciales y sus equipos en Chile. El acceso es mediante solicitud y revisión previa." },
  { q: "¿Cómo funciona el estampe inteligente con IA?", a: "La IA sugiere el estampe según el tipo de trámite y los datos del expediente. Puedes editar el texto antes de confirmar y firmar digitalmente." },
  { q: "¿Los documentos están seguros?",                a: "Sí. Los documentos se almacenan encriptados. Solo tú y los miembros autorizados de tu equipo pueden acceder a ellos." },
  { q: "¿Puedo usar Stamply desde el celular?",         a: "Stamply funciona desde cualquier navegador moderno en computador, tablet o celular. No requiere instalación." },
  { q: "¿Tiene costo?",                                 a: "Actualmente Stamply opera con acceso por invitación durante su fase de lanzamiento. Agenda una demo para conocer los planes disponibles." },
  { q: "¿Puedo agregar a mi equipo?",                   a: "Sí. Como receptor titular puedes invitar a funcionarios y colaboradores, asignando permisos específicos para cada rol." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-violet-100">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              ¿Tienes dudas?
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50 hover:border-violet-100 transition-colors">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-slate-800">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
