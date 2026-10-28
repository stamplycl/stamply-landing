"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TRIAL } from "@/lib/links";

const FAQS = [
  { q: "¿Para quién es Stamply?", a: "Para receptores judiciales de Chile y sus equipos de oficina. Está pensado para el oficio: causas, trámites, estampes, firmas, PJUD y cobranza del receptor, no es una herramienta genérica adaptada." },
  { q: "¿Cómo funciona la prueba gratuita?", a: `Tienes ${TRIAL.period} para usar Stamply con tu oficina, sin tarjeta de crédito. Te ayudamos a importar tus encargos y a configurar tus modelos de estampe para que pruebes con tu trabajo real.` },
  { q: "¿Los estampes firmados con Stamply tienen validez legal?", a: "La validez la da tu firma electrónica avanzada, que según la Ley N° 19.799 equivale a la firma manuscrita. Stamply firma con tu propio certificado; no reemplaza tu certificado ni tu responsabilidad como ministro de fe." },
  { q: "¿El estampe inteligente redacta por mí?", a: "Te asiste: parte de tus modelos, ajusta género y concordancia y sugiere correcciones mínimas sobre lo que agregaste. Tú revisas y decides el texto final antes de firmar. Los datos personales se reemplazan por marcadores antes de procesarse." },
  { q: "¿Qué hace Stamply con mi Clave Poder Judicial?", a: "La guarda cifrada y la usa solo para consultar tus causas en la Oficina Judicial Virtual. Puedes eliminarla cuando quieras desde la configuración." },
  { q: "¿Cómo funciona la firma?", a: "Con tu Firma Electrónica Avanzada puedes firmar cualquier documento subido a Stamply. La conectas mediante la app de escritorio y puedes dejarla activa para firmar desde el teléfono, o autorizar a personas de tu oficina con permisos que defines y revocas. El certificado y el PIN siempre quedan en posesión del receptor y su oficina." },
  { q: "¿Los cobros salen de mi Gmail?", a: "No. Los cobros automáticos se envían desde el servicio de correo de cobranza de Stamply, con tus datos bancarios y el detalle en Excel. Tu Gmail se usa solo para los envíos que tú decides, y Stamply nunca lee tu bandeja." },
  { q: "¿Se conecta con el SII y con Mercado Pago?", a: "Con el SII, importas tu informe de boletas de honorarios y Stamply las asocia a cada liquidación. La integración con Mercado Pago para pagos en línea está en desarrollo." },
  { q: "¿Puedo usarlo en terreno desde el celular?", a: "Sí. Stamply se instala en el celular como app (PWA), te guía con recorrido en vivo y voz, y no pierde la ruta aunque te quedes sin internet: registras resultados igual, guardados cifrados en el teléfono, y se sincronizan solos al volver la señal." },
  { q: "¿Mis datos cumplen la ley chilena?", a: "Tratamos los datos conforme a la Ley N° 19.628 y estamos preparando la operación para la Ley N° 21.719. Cada oficina está aislada y puedes ejercer tus derechos según nuestra Política de Privacidad." },
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
