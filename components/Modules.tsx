import { Check, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  CausasMock, CobranzaMock, DocumentosMock, EstampeMock, FirmasMock, RutaMock, TramitesMock,
} from "./mockups/ModuleMockups";

const MODULES = [
  {
    id: "causas",
    n: "01",
    name: "Causas",
    title: "Cada causa, una sola vez.",
    body: "Ingresa ROL, competencia y tribunal. Stamply evita duplicados y completa el resto desde el expediente electrónico.",
    points: ["Sin duplicados", "Datos desde el expediente", "RUT verificado"],
    Mock: CausasMock,
  },
  {
    id: "tramites",
    n: "02",
    name: "Trámites",
    title: "Todo lo que hay que hacer, con su plazo.",
    body: "Búsquedas, notificaciones, embargos y trámites ante el CBR, con estado y plazo a la vista de toda la oficina.",
    highlight: { title: "Del terreno a la oficina, al instante", text: "La oficina ve el resultado apenas lo registras. Sin señal, llega al volver la conexión." },
    points: ["Plazos y alertas", "Trámites CBR", "Arancel automático"],
    Mock: TramitesMock,
  },
  {
    id: "ruta",
    n: "03",
    name: "Ruta inteligente",
    title: "Tu ruta del día, ordenada antes de salir.",
    body: "Prioriza por urgencia, cercanía y valor, y agrupa por domicilio para recorrer lo mínimo.",
    highlight: { title: "Recorrido en vivo, aunque no haya internet", text: "GPS y voz hasta cada domicilio. Sin señal, la ruta sigue en tu teléfono." },
    points: ["Spoke, Waze o Google Maps", "Impresión con membrete", "Agrupada por domicilio"],
    Mock: RutaMock,
  },
  {
    id: "estampe",
    n: "04",
    name: "Estampe inteligente",
    title: "Estampes correctos en minutos.",
    body: "Desde tus modelos, con género y concordancia correctos. Tú decides el texto final.",
    points: ["Tus modelos", "Imágenes ordenadas", "PDF combinado"],
    Mock: EstampeMock,
  },
  {
    id: "firmas",
    n: "05",
    name: "Firma Electrónica Avanzada",
    title: "Firma sin salir del flujo.",
    body: "Firma cualquier documento, uno o en lote: en la oficina, desde el teléfono o delegada con permisos.",
    points: ["Firma remota", "Delegación con permisos", "Certificado verificado"],
    Mock: FirmasMock,
  },
  {
    id: "pjud",
    n: "06",
    name: "Documentos y PJUD",
    title: "Nada se pierde. Nada se queda sin subir.",
    body: "Respaldo seguro en Stamply y en tu Drive, y el control de lo subido a la Oficina Judicial Virtual.",
    points: ["Respaldo seguro", "Control PJUD", "Cartas certificadas"],
    Mock: DocumentosMock,
  },
  {
    id: "cobranza",
    n: "07",
    name: "Cobranza automática",
    title: "Cobra lo que diligenciaste.",
    body: "El arancel se aplica solo, el cobro sale cada semana desde Stamply y cada pago se cuadra con su boleta.",
    points: ["Cobro automático", "Conciliación bancaria", "Boletas con SII"],
    Mock: CobranzaMock,
  },
];


export default function Modules() {
  return (
    <section id="modulos" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex rounded-full bg-brand-400 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">El recorrido</span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-bold text-brand-900 max-w-3xl leading-[1.05]">
            Del encargo al cobro, <span className="text-brand-400">en un solo lugar.</span>
          </h2>
          <p className="mt-5 text-lg text-brand-800/80 max-w-2xl">
            Siete módulos conectados. Lo ingresas una vez y avanza solo.
          </p>
        </ScrollReveal>

        <nav className="mt-10 flex flex-wrap gap-2" aria-label="Módulos">
          {MODULES.map((m) => (
            <a key={m.id} href={`#${m.id}`} className="rounded-full border border-brand-100 bg-white px-3.5 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-400 hover:text-white hover:border-brand-400 transition-colors">
              <span className="tabular text-brand-300 mr-1.5 font-bold">{m.n}</span>{m.name}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-24 sm:space-y-32">
          {MODULES.map((m, i) => (
            <article key={m.id} id={m.id} className="scroll-mt-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction={i % 2 ? "right" : "left"} className={i % 2 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-brand-400 text-white font-bold tabular flex items-center justify-center shadow-[3px_3px_0_#221AB7]">{m.n}</span>
                  <span className="rounded-full bg-brand-50 text-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">{m.name}</span>
                </div>
                <h3 className="mt-5 text-3xl sm:text-4xl font-bold text-brand-900 leading-tight">{m.title}</h3>
                <p className="mt-4 text-brand-800/80 leading-relaxed">{m.body}</p>
                {m.highlight && (
                  <div className="mt-5 rounded-xl bg-brand-900 text-white p-4 flex gap-3 border-l-4 border-seal">
                    <Zap className="w-5 h-5 text-seal shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">{m.highlight.title}</p>
                      <p className="mt-1 text-sm text-brand-100/90 leading-relaxed">{m.highlight.text}</p>
                    </div>
                  </div>
                )}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {m.points.map((p) => (
                    <li key={p} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-100 px-3 py-1.5 text-xs font-semibold text-brand-700">
                      <Check className="w-3.5 h-3.5 text-brand-400 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <m.Mock />
              </ScrollReveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
