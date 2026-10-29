"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { MarkTile } from "@/components/brand/StamplyMark";
import ScrollReveal from "./ScrollReveal";
import { SignatureMini } from "./mockups/ModuleMockups";

type Integration = {
  name: string;
  sub: string;
  d: string;
  /** Logo oficial en /public/integrations; si falta, se usa `Icon` sobre índigo. */
  logo?: string;
  /** Fondo del recuadro del logo (el del Poder Judicial es blanco y necesita fondo oscuro). */
  logoBg?: string;
  logoClass?: string;
  /** Ilustración animada propia cuando no hay logo de un tercero. */
  Visual?: () => React.ReactElement;
  soon?: boolean;
};

const INTEGRATIONS: Integration[] = [
  { name: "Poder Judicial", sub: "Oficina Judicial Virtual", logo: "/integrations/pjud-blanco.png", logoBg: "#0B2A5B", logoClass: "h-10", d: "Expedientes y control de lo subido, con tu clave cifrada." },
  { name: "Servicio de Impuestos Internos", sub: "Boletas de honorarios", logo: "/integrations/sii.jpg", logoClass: "h-10", d: "Boletas de honorarios asociadas a cada cobro." },
  { name: "Gmail", sub: "Envíos desde tu cuenta", logo: "/integrations/gmail.svg", logoClass: "h-9", d: "Envía documentos desde tu cuenta. Solo envío, nunca lectura." },
  { name: "Google Drive", sub: "Respaldo documental", logo: "/integrations/google-drive.svg", logoClass: "h-9", d: "Respaldo de tus documentos, ordenado por causa." },
  { name: "Google Maps", sub: "Ruta inteligente", logo: "/integrations/google-maps.svg", logoClass: "h-10", d: "Domicilios en el mapa y navegación en vivo." },
  { name: "Firma Electrónica Avanzada", sub: "Tu certificado, en tu poder", Visual: SignatureMini, d: "En la oficina, desde el teléfono o delegada." },
  { name: "Mercado Libre · Mercado Pago", sub: "Próximamente", logo: "/integrations/mercado-libre.png", logoBg: "#FFE600", logoClass: "h-11", soon: true, d: "Pagos en línea que se concilian solos." },
  { name: "Tu página de receptor", sub: "Próximamente", Visual: ReceptorPage, soon: true, d: "Tu web profesional, asesorada por Stamply." },
];

/** Mini sitio del receptor, del mismo alto que los recuadros de logo. */
function ReceptorPage() {
  const reduce = useReducedMotion();
  return (
    <div className="h-16 rounded-xl border border-brand-100 bg-white overflow-hidden flex flex-col">
      <div className="flex items-center gap-1 bg-brand-800 px-2 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
        <span className="ml-1.5 flex-1 rounded bg-white/15 px-1.5 text-[8px] leading-[14px] text-brand-50 truncate">tu-nombre.stamply.cl</span>
      </div>
      <div className="flex-1 flex items-center gap-2 px-2.5 bg-gradient-to-r from-brand-50 to-white">
        <span className="w-7 h-7 rounded-full bg-brand-400 text-white text-[10px] font-bold flex items-center justify-center shrink-0">RE</span>
        <div className="min-w-0 flex-1">
          <div className="h-1.5 w-16 rounded bg-brand-200" />
          <div className="mt-1 flex gap-0.5">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-2.5 h-2.5 fill-seal text-seal" />)}</div>
        </div>
        <motion.span
          animate={reduce ? {} : { scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="rounded-md bg-seal px-1.5 py-1 text-[8px] font-bold text-brand-900 whitespace-nowrap"
        >
          Encargar
        </motion.span>
      </div>
    </div>
  );
}

function LogoBox({ x }: { x: Integration }) {
  if (x.Visual) return <x.Visual />;
  return (
    <div
      className="h-16 rounded-xl flex items-center justify-center px-4 border border-slate-100"
      style={{ background: x.logoBg ?? "#fff" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- logos estáticos pequeños, sin optimización necesaria */}
      <img src={x.logo} alt={`Logo ${x.name}`} className={`${x.logoClass} w-auto object-contain`} loading="lazy" />
    </div>
  );
}

export default function Integrations() {
  const reduce = useReducedMotion();
  return (
    <section id="integraciones" className="py-24 px-4 bg-brand-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-center">
          <ScrollReveal>
            <span className="inline-flex rounded-full bg-brand-400 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">Integraciones</span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold text-brand-900 max-w-3xl leading-[1.05]">
              Conectado con los servicios que ya usas en <span className="text-brand-400">Chile</span>.
            </h2>
            <p className="mt-5 text-brand-800/80 text-lg max-w-2xl">Sin cambiar de banco, correo ni certificado.</p>
          </ScrollReveal>

          {/* Núcleo: Stamply al centro con órbitas de conexión */}
          <div className="relative mx-auto w-[240px] h-[240px]" aria-hidden="true">
            {[0, 1, 2].map((r) => (
              <motion.div
                key={r}
                className="absolute inset-0 m-auto rounded-full border-2 border-brand-100"
                style={{ width: 110 + r * 64, height: 110 + r * 64 }}
                animate={reduce ? {} : { rotate: r % 2 ? -360 : 360 }}
                transition={{ duration: 30 + r * 10, repeat: Infinity, ease: "linear" }}
              >
                <span className={`absolute -top-2 left-1/2 w-4 h-4 rounded-full ${r === 2 ? "bg-seal" : "bg-brand-400"}`} />
              </motion.div>
            ))}
            <div className="absolute inset-0 m-auto w-20 h-20">
              <MarkTile className="w-20 h-20 drop-shadow-xl" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INTEGRATIONS.map((x, i) => (
            <ScrollReveal key={x.name} delay={i * 50}>
              <motion.div whileHover={reduce ? {} : { y: -4, rotate: i % 2 ? 0.6 : -0.6 }} className={`h-full rounded-2xl bg-white p-4 transition-shadow ${x.soon ? "border-2 border-dashed border-seal-deep" : "border border-brand-100 shadow-[4px_4px_0_#C3C1F6] hover:shadow-[6px_6px_0_#9D98F0]"}`}>
                <LogoBox x={x} />
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <p className="font-bold text-brand-900 leading-tight">{x.name}</p>
                  {x.soon && <span className="rounded-full bg-seal px-2 py-0.5 text-[10px] font-bold uppercase text-brand-900">Próximamente</span>}
                </div>
                {!x.soon && <p className="text-xs font-semibold text-brand-400 mt-0.5">{x.sub}</p>}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-brand-800/60">
          Los logos del Poder Judicial, el Servicio de Impuestos Internos, Gmail, Google Drive, Google Maps y Mercado Libre
          pertenecen a sus respectivos titulares y se muestran solo para identificar las integraciones. Stamply no está
          afiliado ni patrocinado por ellos.
        </p>
      </div>
    </section>
  );
}
