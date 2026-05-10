const STEPS = [
  {
    step: "01",
    title: "Solicita acceso",
    description:
      "Completa el formulario de solicitud con tus datos profesionales. El equipo de Stamply revisará tu información y te contactará.",
  },
  {
    step: "02",
    title: "Configura tu oficina",
    description:
      "Ingresa los datos de tu oficina, agrega a tu equipo y personaliza la plataforma con tu membrete y datos de timbre.",
  },
  {
    step: "03",
    title: "Importa tus causas",
    description:
      "Registra tus causas activas o impórtalas desde el sistema del Poder Judicial. La IA extrae los datos relevantes automáticamente.",
  },
  {
    step: "04",
    title: "Opera con eficiencia",
    description:
      "Genera estampes, planifica rutas, administra documentos y controla tu cobranza desde un solo panel.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 bg-[#f8f7ff]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-violet-100">
            Cómo funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Empieza en minutos
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto leading-relaxed">
            Sin instalaciones ni configuraciones complejas. Stamply funciona desde el navegador.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-violet-200 via-indigo-300 to-violet-200" />

          {STEPS.map((s) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl bg-white border border-violet-100 shadow-[0_4px_20px_-4px_rgba(109,40,217,0.2)] flex items-center justify-center mb-5">
                <span className="text-lg font-bold bg-gradient-to-br from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  {s.step}
                </span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
