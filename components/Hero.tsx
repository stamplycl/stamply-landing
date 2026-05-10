import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16">
      {/* Plus decorators */}
      <Plus className="top-24 left-[8%]" />
      <Plus className="top-24 right-[8%]" />
      <Plus className="bottom-24 left-[12%]" />
      <Plus className="bottom-24 right-[12%]" />

      {/* Badge */}
      <div className="animate-fade-up relative z-10 mb-6 inline-flex items-center gap-2 bg-white/90 border border-violet-200 rounded-full px-4 py-1.5 text-xs font-semibold text-violet-700 shadow-sm backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
        Plataforma exclusiva para receptores judiciales
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-up relative z-10 text-center font-bold text-slate-900 leading-[1.1] tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)", animationDelay: "80ms" }}
      >
        La forma moderna de{" "}
        <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          gestionar tu oficina
        </span>
        <br />
        judicial
      </h1>

      {/* Subheadline */}
      <p
        className="animate-fade-up relative z-10 mt-6 text-center text-slate-500 max-w-xl leading-relaxed"
        style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", animationDelay: "160ms" }}
      >
        Stamply centraliza tus causas, genera estampes con inteligencia artificial,
        administra documentos y coordina tu equipo — todo desde un solo lugar.
      </p>

      {/* CTAs */}
      <div
        className="animate-fade-up relative z-10 mt-9 flex flex-wrap items-center justify-center gap-3"
        style={{ animationDelay: "240ms" }}
      >
        <a href="https://app.stamply.cl/solicitar-acceso" className="btn-ai">
          Solicitar acceso
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="https://cal.com/stamply/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <Calendar className="w-4 h-4" />
          Agendar demo
        </a>
      </div>

      {/* App mockup */}
      <div
        className="animate-fade-up relative z-10 mt-16 w-full max-w-5xl"
        style={{ animationDelay: "360ms" }}
      >
        <div className="relative mx-auto">
          {/* Floating cards */}
          <FloatingCard
            className="absolute -left-4 top-8 animate-float-slow"
            style={{ animationDelay: "0s" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                <span className="text-violet-600 text-sm">⚡</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">Estampe generado</p>
                <p className="text-[10px] text-slate-400">con IA en 3 segundos</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            className="absolute -right-4 top-12 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 text-sm">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">Causa notificada</p>
                <p className="text-[10px] text-slate-400">Expediente actualizado</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            className="absolute -left-2 bottom-12 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {["#7c3aed", "#4f46e5", "#6d28d9"].map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="text-[11px] font-semibold text-slate-700">+48 receptores activos</p>
            </div>
          </FloatingCard>

          {/* Main UI screenshot placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(109,40,217,0.25)] border border-white/80">
            <AppPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <div className={`absolute w-5 h-5 opacity-20 ${className ?? ""}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[1.5px] bg-violet-700 rounded" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-[1.5px] bg-violet-700 rounded" />
      </div>
    </div>
  );
}

function FloatingCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`hidden lg:flex bg-white/95 backdrop-blur-sm border border-white shadow-[0_8px_30px_-8px_rgba(15,23,42,0.18)] rounded-2xl px-4 py-3 items-center z-20 ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

function AppPreview() {
  return (
    <div className="bg-[#f8f7ff] w-full" style={{ minHeight: 420 }}>
      {/* Topbar */}
      <div className="flex items-center justify-between bg-white border-b border-slate-100 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-indigo-600" />
          <span className="text-xs font-bold text-slate-800">Stamply</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-20 h-5 rounded-md bg-slate-100" />
          <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center">
            <span className="text-violet-600 text-[10px] font-bold">DB</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-0" style={{ minHeight: 380 }}>
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col gap-1 w-44 bg-white border-r border-slate-100 p-3 pt-4">
          {[
            { icon: "⊞", label: "Dashboard", active: true },
            { icon: "⚖", label: "Causas", active: false },
            { icon: "📄", label: "Documentos", active: false },
            { icon: "🛣", label: "Ruta inteligente", active: false },
            { icon: "💰", label: "Cobranza", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                item.active
                  ? "bg-violet-50 text-violet-700"
                  : "text-slate-400"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 p-5 space-y-4">
          <div>
            <p className="text-[10px] text-slate-400 font-medium">Buen día</p>
            <p className="text-sm font-bold text-slate-800">Lorenzo Vidal Araya 👋</p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Causas activas", value: "142", color: "bg-violet-500" },
              { label: "Tramitadas hoy", value: "18",  color: "bg-indigo-500" },
              { label: "Pendientes",     value: "7",   color: "bg-amber-400" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm"
              >
                <div className={`w-6 h-1.5 rounded-full ${s.color} mb-2`} />
                <p className="text-xl font-bold text-slate-800">{s.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Recent causas */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-4 py-2.5 border-b border-slate-50 flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-700">Causas recientes</p>
              <div className="text-[10px] text-violet-600 font-medium cursor-pointer">Ver todas</div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { rol: "C-2241-2024", tribunal: "1° Juz. Civil Santiago", estado: "En tramitación" },
                { rol: "C-0892-2024", tribunal: "Juz. Letras Laboral",    estado: "Notificada" },
                { rol: "C-3107-2025", tribunal: "2° Juz. Civil Santiago", estado: "Pendiente" },
              ].map((c) => (
                <div key={c.rol} className="px-4 py-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold text-slate-700">{c.rol}</p>
                    <p className="text-[10px] text-slate-400">{c.tribunal}</p>
                  </div>
                  <span
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                      c.estado === "Notificada"
                        ? "bg-emerald-50 text-emerald-600"
                        : c.estado === "Pendiente"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-violet-50 text-violet-600"
                    }`}
                  >
                    {c.estado}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
