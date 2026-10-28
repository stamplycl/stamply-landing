"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform, animate,
} from "framer-motion";
import {
  Banknote, Check, ClipboardCheck, CloudUpload, FileSignature,
  Mail, MapPin, PenTool, ShieldCheck, Sparkles, Stamp, Wifi,
} from "lucide-react";

// Todas las maquetas usan datos ficticios: nunca RUT, nombres ni domicilios reales.

/** Avanza un índice en ciclo; se queda en el último paso con reduced-motion. */
function useStep(count: number, ms = 1800) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? count - 1 : 0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((s) => (s + 1) % count), ms);
    return () => clearInterval(t);
  }, [count, ms, reduce]);
  return step;
}

/**
 * Ventana de la app: encabezado índigo como la barra de Stamply, flota suave y
 * gira unos grados siguiendo el mouse (UI flotante).
 */
export function Frame({ title, children, badge }: { title: string; children: React.ReactNode; badge?: React.ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 160, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 160, damping: 18 });

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="[perspective:1200px]">
      <motion.div
        animate={reduce ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          ref={ref}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="mock overflow-hidden w-full"
        >
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-800">
            <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
            <span className="w-2.5 h-2.5 rounded-full bg-seal" />
            <span className="ml-3 text-[11px] font-semibold text-brand-50 truncate">{title}</span>
            {badge && <span className="ml-auto">{badge}</span>}
          </div>
          <div className="p-4 sm:p-5 min-h-[270px] bg-white">{children}</div>
        </motion.div>
      </motion.div>
    </div>
  );
}

const Pill = ({ tone, children }: { tone: "brand" | "ok" | "warn" | "err" | "muted"; children: React.ReactNode }) => {
  const tones = {
    brand: "bg-brand-50 text-brand-500",
    ok: "bg-emerald-50 text-emerald-700",
    warn: "bg-amber-50 text-amber-700",
    err: "bg-red-50 text-red-600",
    muted: "bg-slate-100 text-slate-500",
  };
  return <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap ${tones[tone]}`}>{children}</span>;
};

const LiveBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white whitespace-nowrap">
    <span className="relative flex w-1.5 h-1.5">
      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
      <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
    </span>
    {label}
  </span>
);

/* 1 · Causas: escribes ROL, competencia y tribunal; Stamply revisa duplicados y completa el resto */
const CAUSA_INPUT: [string, string][] = [["ROL", "C-4821-2026"], ["Competencia", "Civil"], ["Tribunal", "2° Juzgado Civil de Ejemplo"]];
const CAUSA_AUTO: [string, string][] = [["Carátula", "Banco Ejemplo S.A. con Rojas"], ["Materia", "Juicio ejecutivo"], ["Partes", "María Rojas (demo) y 1 más"]];

export function CausasMock() {
  // 0 escribes · 1 revisa duplicados · 2 completa desde el expediente · 3 causa creada
  const step = useStep(4, 2400);
  return (
    <Frame title="Nueva causa">
      <p className="text-[10px] font-bold uppercase tracking-wider text-brand-400 mb-1.5">Tú ingresas</p>
      <div className="grid grid-cols-3 gap-2">
        {CAUSA_INPUT.map(([k, v]) => (
          <div key={k} className="rounded-lg border border-brand-200 bg-white px-2.5 py-2 min-w-0">
            <p className="text-[10px] text-slate-400">{k}</p>
            <p className="text-xs font-bold text-brand-900 tabular truncate">{v}</p>
          </div>
        ))}
      </div>

      <div className="my-3 flex items-center gap-2 text-[11px] font-semibold">
        <span className="h-px flex-1 bg-brand-100" />
        <AnimatePresence mode="wait">
          <motion.span
            key={step}
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            className={step === 3 ? "text-emerald-600" : "text-brand-500"}
          >
            {["Escribiendo…", "Revisando duplicados…", "Completando desde el expediente…", "Sin duplicados · causa lista"][step]}
          </motion.span>
        </AnimatePresence>
        <span className="h-px flex-1 bg-brand-100" />
      </div>

      <p className="text-[10px] font-bold uppercase tracking-wider text-brand-400 mb-1.5">Stamply completa</p>
      <div className="space-y-1.5">
        {CAUSA_AUTO.map(([k, v], i) => (
          <div key={k} className="flex items-center justify-between gap-2 rounded-lg bg-brand-50/60 px-3 py-2">
            <span className="text-[11px] text-slate-500">{k}</span>
            {step >= 2 ? (
              <motion.span
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.35 }}
                className="text-xs font-semibold text-brand-900 truncate"
              >
                {v}
              </motion.span>
            ) : (
              <span className="h-2.5 w-28 rounded bg-brand-100 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* 2 · Trámite: réplica de la tarjeta real (encabezado, notificado, domicilio y secuencia) */
const PASOS = [
  { k: "Resultado", Icon: ClipboardCheck, done: "Positiva · 10:42" },
  { k: "Estampe", Icon: Stamp, done: "Redactado" },
  { k: "Firma", Icon: PenTool, done: "Firmado" },
  { k: "Cobranza", Icon: Banknote, done: "En liquidación" },
];

export function TramitesMock() {
  const step = useStep(5, 1500);
  return (
    <Frame title="C-4821-2026 · Trámites" badge={<LiveBadge label="Desde terreno" />}>
      <div className="rounded-xl border border-[#E2E2E9] overflow-hidden">
        <motion.div className="h-1 bg-brand-400 origin-left" animate={{ scaleX: (step + 1) / 5 }} transition={{ duration: 0.6 }} />
        <div className="flex items-center justify-between gap-2 px-3 py-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-lg border border-[#E2E2E9] flex items-center justify-center text-blue-600 shrink-0">
              <FileSignature className="w-4 h-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-bold text-slate-900 truncate">Notificación Art. 44 CPC</p>
              <p className="text-[11px] text-slate-400">Plazo: <span className="font-semibold text-amber-700">vence en 3 días</span></p>
            </div>
          </div>
          <Pill tone={step >= 4 ? "ok" : "brand"}>{step >= 4 ? "Completado" : "En curso"}</Pill>
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] border-t border-slate-100">
          <div className="p-3 space-y-2 min-w-0">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 p-2">
              <span className="w-7 h-7 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 flex items-center justify-center shrink-0">MR</span>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase text-slate-400">Notificado</p>
                <p className="text-[11px] font-semibold text-slate-800 truncate">María Rojas (demo)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 p-2">
              <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><MapPin className="w-3.5 h-3.5" /></span>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase text-slate-400">Domicilio</p>
                <p className="text-[11px] font-semibold text-slate-800 truncate">Calle Ejemplo 123, Ficticia</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F6F8] border-l border-[#ECECF1] p-2.5 flex flex-col gap-1.5 min-w-0">
            {PASOS.map(({ k, Icon, done }, i) => {
              const ok = step > i;
              return (
                <motion.div key={k} animate={{ scale: step === i ? 1.04 : 1 }} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${step === i ? "bg-white shadow-sm" : ""}`}>
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${ok ? "bg-emerald-500 text-white" : step === i ? "bg-brand-400 text-white" : "bg-white text-slate-400 border border-slate-200"}`}>
                    {ok ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-800 leading-tight">{k}</p>
                    <p className="text-[10px] text-slate-400 leading-tight truncate">{ok ? done : step === i ? "En curso" : "Pendiente"}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} className="mt-3 flex items-center gap-2.5 rounded-xl bg-brand-900 px-3 py-2.5 text-white">
            <Wifi className="w-4 h-4 text-seal shrink-0" />
            <p className="text-[11px] leading-snug"><span className="font-bold">Resultado recibido en la oficina</span> · registrado en terreno a las 10:42, sincronizado al instante.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Frame>
  );
}

/* 3 · Ruta inteligente: «Armar ruta» ordena el recorrido y muestra el antes y el después */
const STOPS: [number, number][] = [[40, 190], [300, 50], [95, 140], [262, 120], [150, 160], [205, 95]];
const ORDER_BEFORE = [0, 1, 2, 3, 4, 5];
const ORDER_AFTER = [0, 2, 4, 5, 3, 1];
const pathOf = (order: number[]) => "M" + order.map((i) => STOPS[i].join(" ")).join(" L");

function CountUp({ from, to, run, suffix = "" }: { from: number; to: number; run: boolean; suffix?: string }) {
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!run) return;
    const c = animate(from, to, { duration: 1.6, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [run, from, to]);
  return <>{(run ? v : from) + suffix}</>;
}

type RutaFase = "antes" | "optimizando" | "optimizada";

export function RutaMock() {
  const reduce = useReducedMotion();
  const [fase, setFase] = useState<RutaFase>(reduce ? "optimizada" : "antes");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  function optimizar() {
    timers.current.forEach(clearTimeout);
    setFase("antes");
    timers.current = [
      setTimeout(() => setFase("optimizando"), 500),
      setTimeout(() => setFase("optimizada"), 1900),
    ];
  }

  // Se demuestra sola al entrar en pantalla; luego el usuario puede repetirla.
  useEffect(() => {
    const el = ref.current;
    if (reduce || !el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { optimizar(); io.disconnect(); }
    }, { threshold: 0.6 });
    io.observe(el);
    const pending = timers.current;
    return () => { io.disconnect(); pending.forEach(clearTimeout); };
  }, [reduce]);

  const ok = fase === "optimizada";
  const order = ok ? ORDER_AFTER : ORDER_BEFORE;

  return (
    <Frame title="Ruta del día · 6 domicilios" badge={<LiveBadge label="En vivo" />}>
      <div ref={ref} className="grid sm:grid-cols-[1.35fr_1fr] gap-4">
        <div className="relative rounded-xl bg-[#EEF0F6] overflow-hidden h-[220px]">
          <svg viewBox="0 0 340 230" className="absolute inset-0 w-full h-full">
            {[30, 80, 130, 180].map((y) => <line key={y} x1="0" x2="340" y1={y} y2={y + 20} stroke="#fff" strokeWidth="7" />)}
            {[60, 140, 220, 290].map((x) => <line key={x} y1="0" y2="230" x1={x} x2={x - 25} stroke="#fff" strokeWidth="7" />)}
            {/* Recorrido sin ordenar: se desvanece mientras se dibuja el optimizado */}
            <motion.path
              d={pathOf(ORDER_BEFORE)} fill="none" stroke="#F87171" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" strokeLinejoin="round"
              animate={{ opacity: ok ? 0 : fase === "optimizando" ? 0.35 : 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.path
              d={pathOf(ORDER_AFTER)} fill="none" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              initial={false}
              animate={{ pathLength: ok ? 1 : 0, opacity: ok ? 1 : 0 }}
              transition={{ duration: ok ? 2.2 : 0.3, ease: [0.65, 0, 0.35, 1] }}
            />
            {STOPS.map(([x, y], s) => {
              const n = order.indexOf(s);
              return (
                <g key={s}>
                  <circle cx={x} cy={y} r="10" fill={ok && n === order.length - 1 ? "#F2B200" : "#4F46E5"} stroke="#fff" strokeWidth="2.5" />
                  <text x={x} y={y + 3.5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">{n + 1}</text>
                </g>
              );
            })}
          </svg>
          <AnimatePresence>
            {fase === "optimizando" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[1px]">
                <span className="flex items-center gap-2 rounded-full bg-brand-900 px-3 py-1.5 text-[11px] font-semibold text-white">
                  <motion.span className="w-3 h-3 rounded-full border-2 border-white/30 border-t-seal" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                  Optimizando recorrido…
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-2">
          {/* Antes y después: el beneficio en dos cifras */}
          <div className="rounded-xl border border-slate-100 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tiempo en ruta</p>
            <p className={`text-2xl font-bold tabular ${ok ? "text-brand-500" : "text-slate-800"}`}>
              <CountUp from={250} to={166} run={ok} suffix=" min" />
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-2">Distancia</p>
            <p className={`text-lg font-bold tabular ${ok ? "text-brand-500" : "text-slate-800"}`}>
              <CountUp from={62} to={38} run={ok} suffix=" km" />
            </p>
          </div>
          <AnimatePresence>
            {ok && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: [0.6, 1.08, 1] }} exit={{ opacity: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="rounded-lg bg-seal px-3 py-1.5 text-center text-xs font-bold text-brand-900"
              >
                Ganaste 1 h 24 min · ejemplo
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            type="button" whileTap={{ scale: 0.96 }} onClick={optimizar}
            disabled={fase === "optimizando"}
            className="btn-primary !w-full !py-2 !text-xs mt-auto disabled:opacity-70"
          >
            {ok ? "Armar de nuevo" : "Armar ruta"}
          </motion.button>
        </div>
      </div>
    </Frame>
  );
}

/* 4 · Estampe inteligente: redacción pausada y una corrección mínima de concordancia */
const ESTAMPE_A = "Certifico: que hoy, a las 10:42 horas, en el domicilio de calle Ejemplo N° 123, comuna de Ficticia, busqué a doña María Demo, demandada de autos, a fin de notificarle personalmente, no siendo ";
const ESTAMPE_B = ". Se me informó que la demandada reside en el lugar y se encuentra en el lugar del juicio. Doy fe.";
/** Ticks de 55 ms: escritura y luego una pausa larga antes de la corrección y del reinicio. */
const TICK_MS = 55;

export function EstampeMock() {
  const reduce = useReducedMotion();
  const total = ESTAMPE_A.length + 6 + ESTAMPE_B.length;
  const fixAt = total + 30; // ~1,6 s después de terminar de escribir
  const end = fixAt + 90; // la corrección queda ~5 s a la vista
  const [n, setN] = useState(reduce ? end : 0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setN((v) => (v >= end ? 0 : v + (v < total ? 2 : 1))), TICK_MS);
    return () => clearInterval(t);
  }, [reduce, total, end]);

  const corrected = n >= fixAt;
  const a = ESTAMPE_A.slice(0, n);
  const showWord = n > ESTAMPE_A.length;
  const b = ESTAMPE_B.slice(0, Math.max(0, n - ESTAMPE_A.length - 6));

  return (
    <Frame title="Estampe · Búsqueda negativa">
      <div className="flex flex-wrap gap-1.5 mb-3">
        <Pill tone="muted">Resultado: No habida</Pill>
        <Pill tone="muted">Género: Femenino</Pill>
        <Pill tone="brand"><Sparkles className="w-3 h-3" /> Redacción asistida</Pill>
      </div>
      <div className="rounded-lg bg-slate-50 border border-slate-100 p-3.5 font-serif text-[13px] leading-relaxed text-slate-700 min-h-[160px]">
        {a}
        {showWord && (
          corrected ? (
            <>
              <motion.span initial={{ opacity: 1 }} animate={{ opacity: 0.55 }} transition={{ duration: 0.8 }} className="line-through decoration-red-400 text-red-400 mr-1">habido</motion.span>
              <motion.span
                initial={{ opacity: 0, backgroundColor: "rgba(255,212,59,0.9)" }}
                animate={{ opacity: 1, backgroundColor: "rgba(255,212,59,0.3)" }}
                transition={{ duration: 1.4, delay: 0.3 }}
                className="rounded px-0.5 font-semibold text-brand-700"
              >
                habida
              </motion.span>
            </>
          ) : "habido"
        )}
        {b}
        {n < total && <span className="inline-block w-1.5 h-4 bg-brand-400 align-middle ml-0.5" />}
      </div>
      <p className={`mt-2 text-[11px] font-semibold text-brand-500 transition-opacity duration-700 ${corrected ? "opacity-100" : "opacity-0"}`}>
        Concordancia corregida · tú decides si la aceptas
      </p>
    </Frame>
  );
}

/* 5 · Firma Electrónica Avanzada: bandejas y firma activa */
export function FirmasMock() {
  const step = useStep(4, 1800);
  const trays = ["Por autorizar", "Por firmar", "Por subir al PJUD", "Subido"];
  return (
    <Frame title="Firmas · Lote de hoy">
      <div className="grid grid-cols-4 gap-1.5 mb-4">
        {trays.map((t, i) => (
          <div key={t} className={`rounded-lg px-1.5 py-2 text-center transition-colors ${i === step ? "bg-brand-400 text-white" : "bg-slate-50 text-slate-500"}`}>
            <p className="text-[10px] font-semibold leading-tight">{t}</p>
            <p className="text-sm font-bold tabular mt-0.5">{i === step ? 8 : i < step ? 0 : 8 - i}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 rounded-xl border border-slate-100 p-4">
        <motion.div
          animate={step === 1 ? { rotate: [0, -6, 6, 0] } : {}}
          transition={{ duration: 0.7 }}
          className="w-12 h-12 rounded-xl bg-brand-900 text-seal flex items-center justify-center shrink-0"
        >
          <FileSignature className="w-6 h-6" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-slate-800">Firma Electrónica Avanzada activa</p>
          <p className="text-[11px] text-slate-400">Certificado vigente · firma remota habilitada</p>
          <div className="mt-2 h-1.5 rounded bg-slate-100 overflow-hidden">
            <motion.div key={step} className="h-full bg-brand-400" initial={{ width: 0 }} animate={{ width: step >= 1 ? "100%" : "0%" }} transition={{ duration: 1.3 }} />
          </div>
        </div>
        <PenTool className="w-5 h-5 text-brand-400 shrink-0" />
      </div>
      <p className={`mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 transition-opacity duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
        <ShieldCheck className="w-3.5 h-3.5" /> Certificado verificado y autenticado · documento íntegro
      </p>
    </Frame>
  );
}

/** Firma que se dibuja y sello que cae, en el tamaño del recuadro de logo de Integraciones. */
export function SignatureMini() {
  const reduce = useReducedMotion();
  const loop = reduce ? {} : { repeat: Infinity, repeatDelay: 1.8 };
  return (
    <div className="h-16 rounded-xl bg-brand-800 flex items-center justify-center gap-3 px-4 overflow-hidden">
      <svg viewBox="0 0 80 28" className="w-24 h-9">
        <line x1="2" y1="25" x2="78" y2="25" stroke="#7670EB" strokeWidth="1" strokeDasharray="2 3" />
        <motion.path
          d="M4 20 C 10 4, 14 26, 22 13 S 32 2, 37 16 S 50 22, 55 8 L 76 11"
          fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut", ...loop }}
        />
      </svg>
      <motion.span
        className="w-8 h-8 rounded-lg bg-seal flex items-center justify-center shrink-0"
        initial={{ scale: reduce ? 1 : 0 }} animate={{ scale: [0.4, 1.12, 1] }}
        transition={{ delay: 1.3, duration: 0.45, ...(reduce ? {} : { repeat: Infinity, repeatDelay: 2.75 }) }}
      >
        <Check className="w-4 h-4 text-brand-900" />
      </motion.span>
    </div>
  );
}

/* 6 · Documentos y PJUD: cada documento avanza de firmado a subido */
export function DocumentosMock() {
  const step = useStep(4, 1900);
  const docs = ["Estampe búsqueda 1ª.pdf", "Estampe Art. 44.pdf", "Acta requerimiento.pdf"];
  const subidos = Math.min(step, docs.length);
  return (
    <Frame title="Documentos · C-4821-2026">
      <div className="space-y-2">
        {docs.map((d, i) => (
          <div key={d} className="flex items-center justify-between gap-2 rounded-lg border border-slate-100 px-3 py-2.5">
            <span className="text-xs font-medium text-slate-700 truncate">{d}</span>
            <div className="flex gap-1 shrink-0">
              <Pill tone="ok"><Check className="w-3 h-3" /> Firmado</Pill>
              <Pill tone="brand"><ShieldCheck className="w-3 h-3" /> Respaldado</Pill>
              {i < subidos ? <Pill tone="ok"><CloudUpload className="w-3 h-3" /> En PJUD</Pill> : <Pill tone="warn">Por subir</Pill>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <p className="text-xs font-semibold text-slate-600">Al día en el Poder Judicial</p>
          <p className="text-sm font-bold text-brand-900 tabular">{subidos} de {docs.length}</p>
        </div>
        <div className="mt-1.5 h-2.5 rounded-full bg-slate-100 overflow-hidden">
          <motion.div className={`h-full rounded-full ${subidos === docs.length ? "bg-emerald-500" : "bg-brand-400"}`} animate={{ width: `${(subidos / docs.length) * 100}%` }} transition={{ duration: 0.8 }} />
        </div>
      </div>
    </Frame>
  );
}

/* 7 · Cobranza: liquidación de un cliente y el correo de cobro enviado */
export function CobranzaMock() {
  const step = useStep(2, 3200);
  const rows = [
    ["C-4821-2026", "Notificación Art. 44", 48000],
    ["C-3907-2026", "Búsqueda positiva", 32000],
    ["C-5130-2026", "Requerimiento de pago", 54000],
  ] as const;
  const total = rows.reduce((s, r) => s + r[2], 0);
  const fmt = (v: number) => "$ " + v.toLocaleString("es-CL");
  return (
    <Frame title="Cobranza · Financiera Austral (demo)">
      <div className="rounded-lg border border-slate-100 overflow-hidden">
        {rows.map(([rol, t, v]) => (
          <div key={rol} className="flex items-center justify-between px-3 py-2 text-[11px] even:bg-slate-50/70">
            <span className="font-semibold text-slate-700 tabular">{rol}</span>
            <span className="text-slate-400 flex-1 px-2 truncate">{t}</span>
            <span className="font-semibold text-slate-800 tabular">{fmt(v)}</span>
          </div>
        ))}
        <div className="flex items-center justify-between bg-brand-900 px-3 py-2 text-white">
          <span className="text-[11px] font-semibold">Total con arancel aplicado</span>
          <span className="text-sm font-bold tabular">{fmt(total)}</span>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5 }}
          className="mt-4 flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50 p-3"
        >
          <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${step ? "bg-emerald-500" : "bg-brand-400"} text-white`}>
            {step ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
          </span>
          <p className="text-xs font-semibold text-brand-900">
            {step ? "Pago recibido y conciliado · boleta de honorarios asociada" : "Correo de cobranza enviado a las 09:00 hrs."}
          </p>
        </motion.div>
      </AnimatePresence>
    </Frame>
  );
}
