import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-[#f8f7ff]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-3xl px-8 py-16 overflow-hidden shadow-[0_20px_60px_-15px_rgba(109,40,217,0.5)]">
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-white/5" />

          <h2 className="relative text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Transforma tu oficina judicial hoy
          </h2>
          <p className="relative mt-4 text-violet-200 leading-relaxed max-w-lg mx-auto">
            Únete a los receptores que ya usan Stamply para trabajar con más orden,
            velocidad y menos papel.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://app.stamply.cl/solicitar-acceso"
              className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold rounded-xl px-6 py-3 text-[0.9375rem] shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
            >
              Solicitar acceso
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://cal.com/stamply/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold rounded-xl px-6 py-3 text-[0.9375rem] border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4" />
              Agendar demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
