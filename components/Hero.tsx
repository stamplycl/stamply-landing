"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, FileSignature, Landmark, Navigation, ShieldCheck, Sparkles, WifiOff } from "lucide-react";
import { AnimatedSheet } from "@/components/brand/StamplyMark";
import { LINKS, TRIAL } from "@/lib/links";

const FLOW = ["Causa", "Trámite", "Ruta", "Estampe", "Firma", "PJUD", "Cobro"];

const CHIPS = [
  { Icon: FileSignature, label: "Firma Electrónica Avanzada" },
  { Icon: Navigation, label: "Recorrido en vivo" },
  { Icon: WifiOff, label: "Funciona sin internet" },
  { Icon: Sparkles, label: "Estampe inteligente" },
  { Icon: Landmark, label: "PJUD y SII" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-4 overflow-hidden bg-[linear-gradient(180deg,#EAE9FC_0%,#F4F4F8_100%)]">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-400 text-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_#221AB7]">
            <span className="w-2 h-2 rounded-[2px] bg-seal" aria-hidden="true" /> Para receptores judiciales de Chile
          </span>
          <h1 className="mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.2rem] font-bold leading-[1.02] text-brand-900">
            El documento sabe{" "}
            <span className="text-brand-400 [box-decoration-break:clone] bg-[linear-gradient(transparent_68%,rgb(255_212_59/.75)_68%,rgb(255_212_59/.75)_92%,transparent_92%)] bg-no-repeat bg-left-bottom [background-size:100%_100%] motion-safe:animate-[stamply-highlight_0.8s_0.5s_both_cubic-bezier(.65,0,.35,1)]">
              adónde tiene que ir.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-800/85 leading-relaxed max-w-xl">
            Un solo sistema para llevar cada diligencia <strong className="text-brand-900">desde el encargo hasta el cobro</strong>:
            ruta del día, estampe inteligente, Firma Electrónica Avanzada, seguimiento en el Poder Judicial y boletas de honorarios con SII.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {CHIPS.map(({ Icon, label }, i) => (
              <motion.li
                key={label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-100 px-3 py-1.5 text-xs font-semibold text-brand-700"
              >
                <Icon className="w-3.5 h-3.5 text-brand-400" /> {label}
              </motion.li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={LINKS.trial} className="btn-primary !text-base !px-6 !py-3.5">
              {TRIAL.cta} <ArrowRight className="w-4 h-4" />
            </a>
            <a href={LINKS.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost !text-base !px-6 !py-3.5">
              <CalendarDays className="w-4 h-4" /> Agendar demo
            </a>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-700">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            Sin tarjeta de crédito. Te acompañamos en la puesta en marcha.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-brand-200/50 blur-3xl" aria-hidden="true" />
          <motion.div
            initial={reduce ? false : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div animate={reduce ? {} : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <AnimatedSheet className="w-56 sm:w-72" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* La ruta completa, en una línea: lo que Stamply conecta sin volver a digitar */}
      <div className="relative max-w-6xl mx-auto mt-20">
        <ol className="flex flex-wrap items-center justify-center gap-y-3 text-sm font-bold">
          {FLOW.map((step, i) => (
            <motion.li
              key={step}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i }}
              className="flex items-center"
            >
              <span
                className={`rounded-full px-4 py-2 ${
                  i === FLOW.length - 1 ? "bg-seal text-brand-900" : "bg-brand-400 text-white"
                }`}
              >
                {step}
              </span>
              {i < FLOW.length - 1 && <span className="w-5 sm:w-9 h-0.5 bg-brand-300 mx-1" aria-hidden="true" />}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
