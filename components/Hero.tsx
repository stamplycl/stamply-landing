import { ArrowRight, CalendarDays, Check } from "lucide-react";
import AppScreen from "@/components/mockups/AppScreen";
import { LINKS, TRIAL } from "@/lib/links";

const TRUST = [`${TRIAL.period} gratis`, "Sin tarjeta de crédito", "Hecho en Chile"];

export default function Hero() {


  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-4 overflow-hidden bg-[linear-gradient(180deg,#EAE9FC_0%,#F4F4F8_70%)]">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <span style={{ animationDelay: "0s" }} className="motion-safe:animate-[stamply-rise_0.6s_both_ease-out] inline-flex items-center gap-2 rounded-full bg-brand-400 text-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_#221AB7]"
        >
          <span className="w-2 h-2 rounded-[2px] bg-seal" aria-hidden="true" /> Software para receptores judiciales en Chile
        </span>

        <h1 style={{ animationDelay: "0.1s" }} className="motion-safe:animate-[stamply-rise_0.6s_both_ease-out] mt-6 text-[2.5rem] sm:text-6xl lg:text-[4.4rem] font-bold leading-[1.02] text-brand-900">
          Todo lo que necesita tu oficina.{" "}
          <span className="text-brand-400 [box-decoration-break:clone] bg-[linear-gradient(transparent_68%,rgb(255_212_59/.75)_68%,rgb(255_212_59/.75)_92%,transparent_92%)] bg-no-repeat bg-left-bottom [background-size:100%_100%] motion-safe:animate-[stamply-highlight_0.8s_0.6s_both_cubic-bezier(.65,0,.35,1)]">
            En un solo lugar.
          </span>
        </h1>

        <p style={{ animationDelay: "0.2s" }} className="motion-safe:animate-[stamply-rise_0.6s_both_ease-out] mt-6 text-lg sm:text-xl text-brand-800/80 max-w-2xl mx-auto">
          Un espacio de trabajo para gestionar causas, diligencias, estampes y cobranzas, diseñado para{" "}
          <strong className="text-brand-900">receptores judiciales</strong>.
        </p>

        <div style={{ animationDelay: "0.3s" }} className="motion-safe:animate-[stamply-rise_0.6s_both_ease-out] mt-8 flex flex-wrap justify-center gap-3">
          <a href={LINKS.trial} className="btn-primary !text-base !px-6 !py-3.5">
            {TRIAL.cta} <ArrowRight className="w-4 h-4" />
          </a>
          <a href={LINKS.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost !text-base !px-6 !py-3.5">
            <CalendarDays className="w-4 h-4" /> Agendar demo
          </a>
        </div>

        <ul style={{ animationDelay: "0.4s" }} className="motion-safe:animate-[stamply-rise_0.6s_both_ease-out] mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-medium text-brand-700">
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-400" /> {t}</li>
          ))}
        </ul>
      </div>

      <div style={{ animationDelay: "0.45s" }} className="motion-safe:animate-[stamply-rise_0.9s_both_cubic-bezier(.22,1,.36,1)] relative max-w-5xl mx-auto mt-14">
        <AppScreen />
      </div>
    </section>
  );
}
