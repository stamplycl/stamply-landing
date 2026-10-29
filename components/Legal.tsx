import { ArrowUpRight } from "lucide-react";
import { PhotoTraceScene } from "./court/photo-trace-scene";
import { AiChipMark } from "./court/ai-chip-mark";
import ScrollReveal from "./ScrollReveal";
import { LINKS } from "@/lib/links";

// Cada norma va con lo que Stamply hace al respecto, sin afirmar certificaciones que no tiene.
const NORMS = [
  {
    law: "Código Orgánico de Tribunales",
    ref: "Arts. 389 y siguientes",
    what: "La fe pública es siempre del receptor. Stamply ordena y asiste.",
  },
  {
    law: "Ley N° 20.886",
    ref: "Tramitación digital de los procedimientos judiciales",
    what: "Actuaciones firmadas electrónicamente. Stamply controla qué falta subir.",
  },
  {
    law: "Ley N° 19.799",
    ref: "Documentos electrónicos y firma electrónica",
    what: "Vale como firma manuscrita. Usas tu propio certificado acreditado.",
  },
  {
    law: "Código de Procedimiento Civil",
    ref: "Notificaciones, Arts. 40, 44 y 48",
    what: "Estampes y trámites siguen cada notificación, incluido el Art. 44.",
  },
  {
    law: "Ley N° 19.628 y Ley N° 21.719",
    ref: "Protección de datos personales",
    what: "Datos aislados por oficina y minimizados. Preparados para la nueva ley.",
  },
  {
    law: "Ley sobre Impuesto a la Renta",
    ref: "Boletas de honorarios y retención",
    what: "Retención de honorarios vigente, asociada a tu boleta SII.",
  },
];

export default function Legal() {
  return (
    <section id="legal" className="relative scroll-mt-20 overflow-hidden text-white bg-[linear-gradient(112deg,#1b148f_0%,#221ab7_35%,#2920df_74%,#7670e1_100%)]">
      {/* Sala de la Corte Suprema en trazos animados, con el mismo motion del acceso a app.stamply.cl.
          Ocupa todo el ancho y se funde en los cuatro bordes para que no se note dónde termina. */}
      <div className="absolute inset-x-0 top-0 h-[620px] sm:h-[780px] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_10%,#000_55%,transparent_100%)]">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,#000_12%,#000_88%,transparent_100%)]">
          <PhotoTraceScene src="/auth/sala-corte-suprema.jpg" />
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_84%_25%,rgb(176_164_239/.22),transparent_57%)]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 pt-[380px] sm:pt-[560px] pb-24">
        <ScrollReveal>
          <p className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-wider text-brand-50">
            <span className="w-[7px] h-[7px] rounded-[1px] bg-seal" aria-hidden="true" /> Marco legal chileno
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold max-w-3xl">
            Construido sobre las normas que rigen tu oficio.
          </h2>
          <p className="mt-4 text-brand-50/90 max-w-2xl">Stamply respeta la ley y tu criterio.</p>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NORMS.map((n, i) => (
            <ScrollReveal key={n.law} delay={i * 60}>
              <div className="h-full rounded-2xl bg-white/[0.07] border border-white/15 backdrop-blur-sm p-6">
                <p className="text-lg font-semibold">{n.law}</p>
                <p className="text-xs text-seal mt-1">{n.ref}</p>
                <p className="mt-3 text-sm text-brand-50/90 leading-relaxed">{n.what}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/15 pt-8">
          <div className="flex items-center gap-3 text-sm text-brand-75">
            <span className="w-6 h-6 text-seal"><AiChipMark /></span>
            Tecnología para tu oficio. El mismo acceso que verás al ingresar.
          </div>
          <a href={LINKS.login} className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-medium hover:border-seal hover:text-[#fff6cc] transition-colors w-fit">
            Ir a app.stamply.cl <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <p className="mt-6 text-xs text-brand-100/70 max-w-3xl">
          Esta sección es informativa y no constituye asesoría legal. Las referencias normativas indican el marco en que
          opera la plataforma; su aplicación a cada caso corresponde al receptor y a los tribunales.
        </p>
      </div>
    </section>
  );
}
