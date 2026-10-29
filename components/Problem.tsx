import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PAINS = [
  { k: "Causas en planillas", d: "Duplicadas y desactualizadas." },
  { k: "Estampes a mano", d: "Cada uno, redactado de nuevo." },
  { k: "Rutas improvisadas", d: "Vueltas de más y plazos que se escapan." },
  { k: "Firmas fuera del flujo", d: "Exportar, firmar, renombrar, subir." },
  { k: "PJUD sin control", d: "¿Se subió? Revisar causa por causa." },
  { k: "Cobranza desconectada", d: "Pagos que no cuadran con lo diligenciado." },
];

export default function Problem() {
  return (
    <section className="py-24 px-4 bg-brand-900 text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex rounded-full bg-red-500/15 text-red-300 border border-red-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Antes de Stamply
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-bold max-w-3xl leading-[1.05]">
            El oficio es preciso. <span className="text-brand-200">Las herramientas, no.</span>
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAINS.map((p, i) => (
            <ScrollReveal key={p.k} delay={i * 70}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition-colors">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4" />
                  </span>
                  <p className="text-lg font-bold">{p.k}</p>
                </div>
                <p className="mt-3 text-sm text-brand-100/80 leading-relaxed">{p.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="mt-14 text-center text-2xl sm:text-3xl font-bold">
            Con Stamply, <span className="text-seal">cada documento sigue su ruta.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
