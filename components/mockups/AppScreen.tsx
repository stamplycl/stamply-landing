"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bell, ChevronRight, ClipboardCheck, FileSignature, FileText, FolderOpen, Home, LayoutGrid, Mail, MapPin,
  MessageSquare, Navigation, PenTool, Plus, Route, Search, Settings, Stamp, UploadCloud, Users, Wallet, WifiOff,
} from "lucide-react";
import { MarkTile } from "@/components/brand/StamplyMark";

// Réplica del inicio de app.stamply.cl (dashboard) con datos ficticios: nunca
// mostrar RUT, nombres ni domicilios reales. Se dibuja a 1240 px y se escala al
// ancho disponible, como una captura nítida; en móvil no baja de 0,5 y se recorta.
const BASE_WIDTH = 1240;
const BASE_HEIGHT = 640;

function Sidebar() {
  const items = [FolderOpen, Stamp, PenTool, Mail, FileText, Route, Wallet, Users];
  return (
    <aside className="w-[64px] shrink-0 bg-brand-800 flex flex-col items-center py-3 gap-2.5">
      <MarkTile className="w-9 h-9" />
      <span className="w-8 h-8 rounded-lg bg-white/10 text-[10px] font-bold text-white flex items-center justify-center mb-1">RE</span>
      <span className="w-11 h-11 rounded-xl bg-white text-brand-500 flex items-center justify-center"><Home className="w-[18px] h-[18px]" /></span>
      {items.map((Icon, i) => (
        <span key={i} className="w-11 h-11 rounded-xl flex items-center justify-center text-brand-100"><Icon className="w-[18px] h-[18px]" /></span>
      ))}
      <span className="mt-auto w-11 h-11 rounded-xl flex items-center justify-center text-brand-100"><Settings className="w-[18px] h-[18px]" /></span>
    </aside>
  );
}

function Topbar() {
  return (
    <div className="h-14 bg-white border-b border-[#E7E7EE] flex items-center gap-2 px-6 text-[13px]">
      <Home className="w-4 h-4 text-slate-400" />
      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
      <span className="font-semibold text-slate-800">Inicio</span>
      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-2 w-[300px] h-9 rounded-lg border border-[#E2E2E9] bg-[#FAFAFC] px-3 text-slate-400">
          <Search className="w-4 h-4" /> Buscar en Stamply
          <span className="ml-auto rounded border border-slate-200 px-1 text-[10px]">⌘K</span>
        </div>
        <Plus className="w-5 h-5 text-slate-500" />
        <LayoutGrid className="w-5 h-5 text-slate-500" />
        <MessageSquare className="w-5 h-5 text-slate-500" />
        <span className="relative"><Bell className="w-5 h-5 text-slate-500" /><span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-seal border-2 border-white" /></span>
        <span className="w-8 h-8 rounded-lg bg-brand-400 text-white text-[11px] font-bold flex items-center justify-center">RE</span>
      </div>
    </div>
  );
}

/** Indicador del día: responde «¿qué falta por estampar, firmar o subir?». */
function Stat({ Icon, label, value, tag, tone }: { Icon: typeof Stamp; label: string; value: number; tag: string; tone: string }) {
  return (
    <div className="rounded-xl bg-white border border-[#E7E7EE] p-4">
      <div className="flex items-center justify-between">
        <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${tone}`}><Icon className="w-[18px] h-[18px]" /></span>
        <span className="rounded border border-[#E7E7EE] px-1.5 text-[10px] font-bold tracking-wider text-slate-400">{tag}</span>
      </div>
      <p className="mt-3 text-[28px] font-bold text-slate-900 tabular leading-none">{value}</p>
      <p className="mt-1.5 text-[10.5px] font-bold uppercase tracking-[0.06em] text-slate-500">{label}</p>
    </div>
  );
}

const HOY = [
  { t: "Notificación Art. 44", c: "C-4821-2026", plazo: "Vence hoy", tone: "bg-red-50 text-red-600" },
  { t: "Requerimiento de pago", c: "C-3907-2026", plazo: "Vence mañana", tone: "bg-amber-50 text-amber-700" },
  { t: "1° Búsqueda", c: "C-5130-2026", plazo: "En 3 días", tone: "bg-slate-100 text-slate-600" },
  { t: "Embargo", c: "C-1288-2026", plazo: "En 5 días", tone: "bg-slate-100 text-slate-600" },
];

const BARS = [42, 58, 50, 66, 74, 61, 80];

function DashboardView() {
  return (
    <div className="flex-1 bg-[#F4F4F8] px-6 py-4 overflow-hidden">
      <div className="flex items-end gap-3">
        <div>
          <p className="text-[22px] font-bold text-slate-900">Buenos días, Receptora</p>
          <p className="text-[13px] text-slate-500">Tienes 4 diligencias para hoy. <span className="ml-1 rounded-md bg-brand-50 px-1.5 py-0.5 text-[11px] font-semibold text-brand-500">Martes 3 de noviembre</span></p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        <Stat Icon={ClipboardCheck} label="Resultados por estampar" value={6} tag="STAMP" tone="bg-brand-50 text-brand-500" />
        <Stat Icon={FileSignature} label="Pendientes de firma" value={8} tag="FEA" tone="bg-amber-50 text-amber-600" />
        <Stat Icon={UploadCloud} label="Por subir a PJUD" value={3} tag="PJUD" tone="bg-sky-50 text-sky-600" />
        <div className="rounded-xl bg-brand-800 p-4 text-white">
          <div className="flex items-center justify-between">
            <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center"><Route className="w-[18px] h-[18px]" /></span>
            <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> En curso</span>
          </div>
          <p className="mt-3 text-[15px] font-bold">Ruta de hoy</p>
          <p className="text-[12px] text-brand-100">Parada 2 de 6 · 38 km</p>
          <div className="mt-2 h-1.5 rounded-full bg-white/15"><div className="h-full w-1/3 rounded-full bg-seal" /></div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1.25fr_1fr] gap-3">
        {/* ¿Qué debo hacer hoy? ¿Qué está por vencer? */}
        <div className="rounded-xl bg-white border border-[#E7E7EE] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-semibold text-slate-900">Diligencias por vencer</p>
            <span className="text-[12px] font-semibold text-brand-500">Ver todas</span>
          </div>
          <div className="mt-3 divide-y divide-[#F0F0F4]">
            {HOY.map((d) => (
              <div key={d.c} className="flex items-center gap-3 py-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#F4F4F8] text-slate-500 flex items-center justify-center"><FileText className="w-4 h-4" /></span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-slate-800">{d.t}</p>
                  <p className="text-[11px] text-slate-400 tabular">{d.c}</p>
                </div>
                <span className={`ml-auto rounded-full px-2 py-0.5 text-[11px] font-semibold ${d.tone}`}>{d.plazo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ¿Qué tengo pendiente de cobro? */}
        <div className="rounded-xl bg-white border border-[#E7E7EE] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-semibold text-slate-900">Flujo de cobranza</p>
            <span className="rounded-md bg-[#F4F4F8] px-2 py-0.5 text-[11px] text-slate-500">Mensual</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-orange-50 p-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-orange-600">Por cobrar</p>
              <p className="text-[18px] font-bold text-slate-900 tabular">$ 1.240.000</p>
            </div>
            <div className="rounded-lg bg-emerald-50 p-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Pagado</p>
              <p className="text-[18px] font-bold text-slate-900 tabular">$ 2.860.000</p>
            </div>
          </div>
          <div className="mt-4 flex items-end gap-2 h-[92px]">
            {BARS.map((h, i) => (
              <div key={i} className="flex-1 h-full flex flex-col justify-end gap-0.5">
                <div className="rounded-sm bg-orange-300" style={{ height: `${h * 0.35}%` }} />
                <div className="rounded-sm bg-brand-400" style={{ height: `${h * 0.65}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-3 text-[10px] text-slate-500">
            <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-sm bg-brand-400" /> Liquidaciones</span>
            <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-sm bg-orange-300" /> Pendientes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Teléfono con el modo terreno: ruta en vivo, siguiente parada y registro sin señal. */
function PhoneRoute() {
  const reduce = useReducedMotion();
  const stops: [number, number][] = [[30, 150], [62, 112], [104, 128], [130, 84], [168, 96], [190, 52]];
  return (
    <div className="w-[220px] rounded-[34px] bg-brand-950 p-2 shadow-[0_30px_60px_-20px_rgba(4,3,22,0.6)]">
      <div className="rounded-[27px] bg-white overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-2.5 pb-1 text-[10px] font-semibold text-slate-800">
          <span>09:41</span>
          <span className="w-16 h-4 rounded-full bg-brand-950" />
          <span className="flex items-center gap-1 text-amber-600"><WifiOff className="w-3 h-3" /></span>
        </div>
        <div className="px-3 pb-2 flex items-center justify-between">
          <p className="text-[13px] font-bold text-slate-900">Ruta de hoy</p>
          <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700">EN VIVO</span>
        </div>
        <div className="relative mx-3 h-[170px] rounded-xl bg-[#EEF0F6] overflow-hidden">
          <svg viewBox="0 0 220 180" className="absolute inset-0 w-full h-full">
            {[30, 70, 110, 150].map((y) => <line key={y} x1="0" x2="220" y1={y} y2={y + 14} stroke="#fff" strokeWidth="6" />)}
            {[50, 110, 170].map((x) => <line key={x} y1="0" y2="180" x1={x} x2={x - 18} stroke="#fff" strokeWidth="6" />)}
            <path d={"M" + stops.map((p) => p.join(" ")).join(" L")} fill="none" stroke="#C3C1F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <motion.path
              d={"M" + stops.slice(0, 3).map((p) => p.join(" ")).join(" L")} fill="none" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: reduce ? 1 : 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            {stops.map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="8" fill={i < 2 ? "#10B981" : i === 2 ? "#4F46E5" : i === stops.length - 1 ? "#F2B200" : "#9D98F0"} stroke="#fff" strokeWidth="2" />
                <text x={x} y={y + 3} textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">{i + 1}</text>
              </g>
            ))}
            <motion.circle
              r="5" fill="#2920DF" stroke="#fff" strokeWidth="2"
              initial={{ cx: 62, cy: 112 }}
              animate={reduce ? {} : { cx: [62, 104], cy: [112, 128] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 1 }}
            />
          </svg>
        </div>
        <div className="m-3 rounded-xl border border-brand-100 p-2.5">
          <p className="text-[9px] font-bold uppercase tracking-wider text-brand-400">Siguiente · parada 3</p>
          <p className="text-[12px] font-bold text-slate-900 flex items-center gap-1"><MapPin className="w-3 h-3 text-brand-400" /> Calle Ejemplo 45</p>
          <p className="text-[10px] text-slate-400">Notificación Art. 44 · 6 min</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <span className="flex items-center justify-center gap-1 rounded-lg bg-brand-400 py-1.5 text-[10px] font-bold text-white"><Navigation className="w-3 h-3" /> Navegar</span>
            <span className="flex items-center justify-center gap-1 rounded-lg bg-brand-50 py-1.5 text-[10px] font-bold text-brand-500"><ClipboardCheck className="w-3 h-3" /> Registrar</span>
          </div>
        </div>
        <div className="mx-3 mb-3 rounded-lg bg-amber-50 px-2 py-1.5 text-[9.5px] font-semibold text-amber-800 flex items-center gap-1.5">
          <WifiOff className="w-3 h-3 shrink-0" /> Sin señal · se sincroniza al volver
        </div>
      </div>
    </div>
  );
}

/** Escritorio con el dashboard al fondo y el teléfono con la ruta superpuesto a la derecha. */
export default function AppScreen() {
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, Math.max(0.5, e.contentRect.width / BASE_WIDTH))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative sm:pr-16 lg:pr-24">
      <div className="rounded-2xl border border-white/60 bg-white/70 p-2 shadow-[0_40px_80px_-30px_rgba(19,15,103,0.45)] backdrop-blur">
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="mx-auto rounded-md bg-slate-100 px-3 py-0.5 text-[11px] text-slate-500">app.stamply.cl</span>
        </div>
        <div ref={box} className="rounded-xl overflow-hidden border border-[#E7E7EE]" style={{ height: BASE_HEIGHT * scale }}>
          <div className="flex origin-top-left" style={{ width: BASE_WIDTH, height: BASE_HEIGHT, transform: `scale(${scale})` }}>
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
              <Topbar />
              <DashboardView />
            </div>
          </div>
        </div>
      </div>

      {/* Segunda capa: el teléfono en terreno */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:block absolute right-0 -bottom-10 origin-bottom-right sm:scale-[0.8] lg:scale-100"
      >
        <motion.div animate={reduce ? {} : { y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <PhoneRoute />
        </motion.div>
      </motion.div>
    </div>
  );
}
