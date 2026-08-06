import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  { icon: "⚖️", title: "Gestión de causas", description: "Registra, organiza y administra todas tus causas. Encuéntralas al instante con filtros y etiquetas personalizadas." },
  { icon: "⚡", title: "Estampe inteligente con IA", description: "Genera estampes de diligencias en segundos con asistencia inteligente de IA. Simplifica tu gestión: revisa y firma." },
  { icon: "🛣️", title: "Ruta inteligente", description: "Organiza tus diligencias considerando distintos factores para optimizar tu planificación y realiza el recorrido con tu aplicación favorita." },
  { icon: "📄", title: "Documentos digitales", description: "Almacena, organiza y firma documentos desde cualquier lugar. Mantén tu documentación protegida y segura en Stamply." },
  { icon: "💰", title: "Control de cobranza", description: "Realiza seguimiento de tus pagos y saldos por causa. Emite boletas, automatiza cobros y genera informes para tu contabilidad." },
  { icon: "👥", title: "Trabajo en equipo", description: "Agrega colaboradores con permisos personalizados, habilita la firma de documentos y coordina tu equipo mediante chat interno." },
];

export default function Features() {
  return (
    <section id="caracteristicas" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-violet-100">
              Características
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Todo lo que tu oficina necesita
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto leading-relaxed">
              Diseñado para receptores judiciales y sus equipos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-violet-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(109,40,217,0.15)] hover:-translate-y-1 h-full">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-100 group-hover:border-violet-100 flex items-center justify-center text-xl mb-4 shadow-sm transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
