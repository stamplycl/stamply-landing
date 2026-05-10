const FEATURES = [
  {
    icon: "⚖️",
    title: "Gestión de causas",
    description:
      "Registra y administra todas tus causas judiciales en un solo lugar. Filtra por tribunal, estado y fecha con búsqueda instantánea.",
  },
  {
    icon: "⚡",
    title: "Estampe inteligente con IA",
    description:
      "Genera estampes de diligencias en segundos con inteligencia artificial. Rellena datos automáticamente desde el expediente y edita antes de firmar.",
  },
  {
    icon: "🛣️",
    title: "Ruta inteligente",
    description:
      "Optimiza el orden de tus notificaciones del día. La plataforma agrupa las diligencias por zona geográfica para ahorrarte tiempo en terreno.",
  },
  {
    icon: "📄",
    title: "Documentos digitales",
    description:
      "Almacena, organiza y firma documentos desde la plataforma. Imprime con membrete oficial directamente desde cualquier causa.",
  },
  {
    icon: "💰",
    title: "Control de cobranza",
    description:
      "Lleva el seguimiento de honorarios, pagos recibidos y saldos pendientes por causa. Genera informes para tu contabilidad.",
  },
  {
    icon: "👥",
    title: "Trabajo en equipo",
    description:
      "Agrega funcionarios y colaboradores a tu oficina. Cada rol tiene sus propios permisos y visibilidad sobre las causas.",
  },
];

export default function Features() {
  return (
    <section id="caracteristicas" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-violet-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(109,40,217,0.15)] hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-100 group-hover:border-violet-100 flex items-center justify-center text-xl mb-4 shadow-sm transition-colors">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
