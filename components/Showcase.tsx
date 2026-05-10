import ScrollReveal from "./ScrollReveal";
import EstampeMockup from "./EstampeMockup";
import RutaMockup from "./RutaMockup";

const ITEMS = [
  {
    tag: "Estampe inteligente",
    title: "De la causa al estampe en segundos",
    description:
      "La IA de Stamply analiza los datos del expediente y redacta el estampe de diligencia automáticamente. Tú solo revisas, editas si es necesario y firmas. El documento queda guardado y listo para imprimir con tu membrete.",
    badge: "✦ Inteligencia Artificial",
    mockup: <EstampeMockup />,
    direction: "left" as const,
    mockupDirection: "right" as const,
    reverse: false,
  },
  {
    tag: "Ruta inteligente",
    title: "Optimiza tu día de notificaciones",
    description:
      "Ingresa tus causas del día y Stamply agrupa automáticamente las diligencias por zona geográfica, minimizando distancia y tiempo en terreno. La IA sugiere el orden óptimo y tú partes con el recorrido listo.",
    badge: "🗺️ Planificación con IA",
    mockup: <RutaMockup />,
    direction: "right" as const,
    mockupDirection: "left" as const,
    reverse: true,
  },
];

export default function Showcase() {
  return (
    <section className="py-24 px-4 space-y-32">
      {ITEMS.map((item) => (
        <div
          key={item.tag}
          className={`max-w-6xl mx-auto flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
        >
          {/* Text */}
          <ScrollReveal direction={item.direction} className="flex-1 space-y-5">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-violet-100">
                {item.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {item.title}
            </h2>
            <p className="text-slate-500 leading-relaxed text-[1.0625rem]">
              {item.description}
            </p>
            <ul className="space-y-2.5">
              {BULLETS[item.tag].map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Mockup */}
          <ScrollReveal direction={item.mockupDirection} delay={120} className="flex-1 w-full">
            {item.mockup}
          </ScrollReveal>
        </div>
      ))}
    </section>
  );
}

const BULLETS: Record<string, string[]> = {
  "Estampe inteligente": [
    "Redacción automática según tipo de diligencia",
    "Edición libre antes de firmar",
    "Impresión directa con membrete personalizado",
    "Historial de estampes por causa",
  ],
  "Ruta inteligente": [
    "Agrupación automática por zona geográfica",
    "Orden optimizado para minimizar recorrido",
    "Seguimiento en tiempo real del avance del día",
    "Registro automático de cada diligencia completada",
  ],
};
