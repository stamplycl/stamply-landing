import { ArrowRight, CalendarDays, Mail } from "lucide-react";
import { AnimatedSheet } from "@/components/brand/StamplyMark";
import ScrollReveal from "./ScrollReveal";
import { LINKS, TRIAL } from "@/lib/links";

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-brand-800 px-6 sm:px-14 py-14 overflow-hidden grid md:grid-cols-[1fr_auto] gap-10 items-center shadow-[10px_10px_0_#221AB7]">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                Deja que cada documento llegue a su destino.
              </h2>
              <p className="mt-4 text-brand-100 leading-relaxed max-w-lg">
                {TRIAL.period} gratis con tus causas reales. Sin tarjeta.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={LINKS.trial} className="inline-flex items-center gap-2 rounded-[10px] bg-seal px-6 py-3 font-semibold text-brand-900 hover:-translate-y-0.5 transition-transform">
                  Comenzar prueba gratis <ArrowRight className="w-4 h-4" />
                </a>
                <a href={LINKS.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-[10px] border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
                  <CalendarDays className="w-4 h-4" /> Hablar con nosotros
                </a>
              </div>
              <a href={LINKS.support} className="mt-6 inline-flex items-center gap-2 text-sm text-brand-200 hover:text-white">
                <Mail className="w-4 h-4" /> soporte@stamply.cl
              </a>
            </div>
            <AnimatedSheet className="w-36 sm:w-44 mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
