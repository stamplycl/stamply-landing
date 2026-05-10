import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  { icon: "⚖️", title: "Gestión de causas",         description: "Registra y administra todas tus causas judiciales. Filtra por tribunal, estado y fecha con búsqueda instantánea." },
  { icon: "⚡", title: "Estampe inteligente con IA", description: "Genera estampes de diligencias en segundos. La IA rellena los datos desde el expediente y tú solo firmas." },
  { icon: "🛣️", title: "Ruta inteligente",           description: "Optimiza el orden de tus notificaciones del día. Stamply agrupa las diligencias por zona geográfica." },
  { icon: "📄", title: "Documentos digitales",       description: "Almacena, organiza y firma documentos. Imprime con membrete oficial directamente desde cualquier causa." },
  { icon: "💰", title: "Control de cobranza",        description: "Seguimiento de honorarios, pagos y saldos por causa. Genera informes para tu contabilidad." },
  { icon: "👥", title: "Trabajo en equipo",          description: "Agrega funcionarios y colaboradores. Cada rol tiene sus propios permisos sobre las causas." },
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
              Todo lo que necesita tu oficina judicial
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto leading-relaxed">
              Diseñado específicamente para receptores judiciales y sus equipos en Chile.
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
