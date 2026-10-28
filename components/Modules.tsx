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
    body: "Ingresa la causa con su ROL, competencia y tribunal. Stamply detecta duplicados antes de crearla y completa casi por sí sola el resto desde el expediente electrónico del Poder Judicial: carátula, materia, partes y representantes. Todo queda en un mismo espacio de trabajo, junto a domicilios, documentos e historial.",
    points: ["Sin causas duplicadas", "Datos completados desde el expediente", "RUT verificado automáticamente", "Importación de encargos desde planillas"],
    Mock: CausasMock,
  },
  {
    id: "tramites",
    n: "02",
    name: "Trámites",
    title: "Todo lo que hay que hacer, con su plazo.",
    body: "Cada causa genera sus trámites —búsquedas, notificaciones personales, del Art. 44 y por cédula, requerimientos de pago, embargos, lanzamientos y trámites ante el Conservador de Bienes Raíces— con estado, responsable y plazo visibles para toda la oficina.",
    highlight: { title: "Del terreno a la oficina, al instante", text: "Registras el resultado desde la ruta y la oficina lo ve en el momento: en línea, o apenas vuelve la señal. Sin llamadas, sin notas en papel, sin esperar a que vuelvas." },
    points: ["Resultado de terreno en tiempo real", "Plazos a la vista y alertas", "Trámites ante el Conservador (CBR)", "Arancel aplicado automáticamente"],
    Mock: TramitesMock,
  },
  {
    id: "ruta",
    n: "03",
    name: "Ruta inteligente",
    title: "Tu ruta del día, ordenada antes de salir.",
    body: "El motor de rutas prioriza las diligencias por urgencia, cercanía, valor económico e incertidumbre, y las agrupa por domicilio para aprovechar cada visita y recorrer lo mínimo. Exporta la ruta a tu app preferida —Spoke, Waze o Google Maps— o imprímela junto a sus documentos con tu membrete, en un clic.",
    highlight: { title: "Recorrido en vivo, aunque no haya internet", text: "Navegación con GPS y voz hasta cada domicilio. Si te quedas sin señal no pierdes nada: la ruta queda guardada cifrada en tu teléfono, registras resultados igual y todo se sincroniza solo al volver la conexión." },
    points: ["Agrupación por domicilio", "Exporta a Spoke, Waze o Google Maps", "Impresión con membrete en un clic", "Recorrido en vivo con GPS y voz"],
    Mock: RutaMock,
  },
  {
    id: "estampe",
    n: "04",
    name: "Estampe inteligente",
    title: "Estampes correctos en minutos.",
    body: "Del resultado de la diligencia a un estampe redactado desde tu propia biblioteca de modelos, con género, número y concordancia correctos. La redacción asistida revisa solo lo que agregaste y sugiere correcciones mínimas; tú decides el texto final. Agrega imágenes y Stamply las ordena, y combina varios PDF en un solo documento.",
    points: ["Biblioteca de modelos de la oficina", "Corrección de género y concordancia", "Imágenes ordenadas automáticamente", "Combina PDF en un solo documento"],
    Mock: EstampeMock,
  },
  {
    id: "firmas",
    n: "05",
    name: "Firma Electrónica Avanzada",
    title: "Firma sin salir del flujo.",
    body: "Firma con tu Firma Electrónica Avanzada cualquier documento subido a Stamply, uno o en lote. Déjala activa en la oficina y firma desde el teléfono, o autoriza a tu equipo con permisos que defines y revocas: siempre queda en posesión del receptor y su oficina. Tras cada firma, Stamply verifica que el certificado esté vigente y autenticado y que el documento no haya cambiado, y deja registro de esa verificación.",
    points: ["Firma cualquier documento subido", "Firma remota desde el teléfono", "Delegación a la oficina con permisos", "Certificado verificado y autenticado"],
    Mock: FirmasMock,
  },
  {
    id: "pjud",
    n: "06",
    name: "Documentos y PJUD",
    title: "Nada se pierde. Nada se queda sin subir.",
    body: "Lo firmado queda con respaldo seguro en Stamply y, además, en tu Google Drive, marcado según su estado en el Poder Judicial. Con tu Clave Poder Judicial, guardada cifrada, Stamply consulta el expediente en la Oficina Judicial Virtual para que sepas qué está subido y qué falta.",
    points: ["Respaldo seguro en Stamply y en Drive", "Control de lo subido al PJUD", "Consulta de expedientes en la OJV", "Cartas certificadas y documentos operativos"],
    Mock: DocumentosMock,
  },
  {
    id: "cobranza",
    n: "07",
    name: "Cobranza automática",
    title: "Cobra lo que diligenciaste.",
    body: "El arancel se aplica solo a cada diligencia realizada y alimenta la liquidación del cliente. Cada semana Stamply envía el cobro desde su propio correo de cobranza —nunca desde tu Gmail—, concilia la cartola con los pagos recibidos, asocia cada pago a su boleta de honorarios con SII y mantiene al día el balance de cuenta de cada cliente.",
    points: ["Arancel automático", "Balance de cuenta por cliente", "Cobro automático por correo", "Conciliación bancaria y boletas SII"],
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
            Siete módulos conectados. Lo que ingresas una vez avanza solo a la etapa siguiente, sin volver a digitar.
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
