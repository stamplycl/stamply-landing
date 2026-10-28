"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Calculator, MessagesSquare, Scale, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MORE = [
  "Clientes y mandantes", "Biblioteca de modelos de estampe", "Importación de encargos", "Cartas certificadas",
  "Documentos operativos", "Búsqueda global", "Notificaciones push", "App móvil instalable", "App de escritorio para firma",
];

/** Mini-escenas animadas de cada función de oficina. */
function ChatScene() {
  const reduce = useReducedMotion();
  const msgs = [
    { me: false, t: "¿Quedó la búsqueda de Rojas?" },
    { me: true, t: "Sí, positiva. Ya está el estampe 👌" },
    { me: false, t: "Perfecto, la firmo ahora." },
  ];
  return (
    <div className="space-y-1.5">
      {msgs.map((m, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, y: 8, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.5 }}
          className={`max-w-[85%] rounded-2xl px-3 py-1.5 text-[11px] ${m.me ? "ml-auto bg-brand-400 text-white rounded-br-sm" : "bg-white text-slate-700 rounded-bl-sm"}`}
        >
          {m.t}
        </motion.div>
      ))}
    </div>
  );
}

function CbrScene() {
  const reduce = useReducedMotion();
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-16 h-20 rounded-md bg-white shadow-sm p-1.5">
        {[0, 1, 2, 3, 4].map((l) => <div key={l} className="h-1 rounded bg-slate-200 mb-1" style={{ width: `${92 - l * 10}%` }} />)}
        <motion.div
          initial={reduce ? false : { scale: 2, opacity: 0, rotate: -20 }}
          whileInView={{ scale: 1, opacity: 1, rotate: -8 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 14 }}
          className="absolute right-1 bottom-1 rounded border-2 border-red-500 px-1 text-[8px] font-bold text-red-500"
        >
          INSCRITO
        </motion.div>
      </div>
      <div className="text-[11px] text-brand-100 leading-snug">Inscripciones, certificados y alzamientos ante el Conservador, con su propio seguimiento.</div>
    </div>
  );
}

function ArancelScene() {
  const rows = [["Notificación personal", "$ 32.000"], ["Búsqueda adicional", "$ 16.000"], ["Requerimiento de pago", "$ 54.000"]];
  return (
    <div className="space-y-1">
      {rows.map(([k, v], i) => (
        <motion.div key={k} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.25 }} className="flex justify-between rounded-md bg-white px-2.5 py-1 text-[11px]">
          <span className="text-slate-500">{k}</span>
          <span className="font-bold text-brand-700 tabular">{v}</span>
        </motion.div>
      ))}
      <p className="text-[10px] text-brand-100 pt-1">Montos de ejemplo · se aplica tu arancel configurado</p>
    </div>
  );
}

function BalanceScene() {
  return (
    <div>
      <div className="flex justify-between text-[11px] text-brand-100"><span>Financiera Austral (demo)</span><span className="font-bold text-white tabular">$ 1.240.000</span></div>
      <div className="mt-2 h-3 rounded-full bg-white/15 overflow-hidden flex">
        <motion.div className="h-full bg-emerald-400" initial={{ width: 0 }} whileInView={{ width: "62%" }} viewport={{ once: true }} transition={{ duration: 1.1 }} />
        <motion.div className="h-full bg-seal" initial={{ width: 0 }} whileInView={{ width: "26%" }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.5 }} />
      </div>
      <div className="mt-2 flex gap-3 text-[10px] text-brand-100">
        <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-sm bg-emerald-400" /> Pagado</span>
        <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-sm bg-seal" /> Por cobrar</span>
        <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-sm bg-white/20" /> Por liquidar</span>
      </div>
    </div>
  );
}

function UsersScene() {
  const reduce = useReducedMotion();
  const people = [["RJ", "Receptor", "bg-seal text-brand-900"], ["AS", "Asistente", "bg-white text-brand-700"], ["CT", "Terreno", "bg-white text-brand-700"], ["PM", "Cobranza", "bg-white text-brand-700"]];
  return (
    <div className="flex flex-wrap gap-2">
      {people.map(([ini, role, cls], i) => (
        <motion.div
          key={ini}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className="flex items-center gap-1.5 rounded-full bg-white/10 pl-1 pr-2.5 py-1"
        >
          <span className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center ${cls}`}>{ini}</span>
          <span className="text-[11px] text-white font-medium">{role}</span>
        </motion.div>
      ))}
    </div>
  );
}

const FEATURES = [
  { Icon: MessagesSquare, t: "Chat interno", d: "Conversa con tu equipo sobre cada causa sin salir de Stamply, y con soporte cuando lo necesites.", Scene: ChatScene, wide: true },
  { Icon: Building2, t: "Conservador de Bienes Raíces", d: "Los trámites ante el CBR viven junto a la causa.", Scene: CbrScene },
  { Icon: Calculator, t: "Arancel automático", d: "Cada diligencia toma su valor según tu arancel, sin calcular a mano.", Scene: ArancelScene },
  { Icon: Scale, t: "Balance de cuenta por cliente", d: "Lo diligenciado, lo cobrado y lo pagado de cada cliente, siempre cuadrado.", Scene: BalanceScene },
  { Icon: Users, t: "Multiusuario con roles", d: "Receptor, asistentes y equipo de terreno, cada uno con sus permisos. Cada acción queda registrada.", Scene: UsersScene },
];

export default function Office() {
  return (
    <section className="py-24 px-4 bg-brand-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="inline-flex rounded-full bg-seal text-brand-900 px-3 py-1 text-xs font-bold uppercase tracking-wider">Toda la oficina</span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-bold max-w-3xl leading-[1.05]">
            Un equipo, <span className="text-brand-200">una sola oficina digital.</span>
          </h2>
          <p className="mt-5 text-lg text-brand-100/85 max-w-2xl">
            Más allá de la diligencia: lo que tu oficina necesita para coordinarse, cobrar y crecer.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {FEATURES.map(({ Icon, t, d, Scene, wide }, i) => (
            <ScrollReveal key={t} delay={i * 70} className={wide ? "md:col-span-2" : ""}>
              <motion.div whileHover={{ y: -4, rotate: -0.4 }} className="h-full rounded-2xl bg-white/[0.06] border border-white/10 p-6 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-400 flex items-center justify-center shadow-[3px_3px_0_#221AB7]"><Icon className="w-5 h-5" /></span>
                  <p className="text-lg font-bold">{t}</p>
                </div>
                <p className="mt-3 text-sm text-brand-100/85 leading-relaxed">{d}</p>
                <div className="mt-5 rounded-xl bg-brand-800/80 p-4 mt-auto">
                  <Scene />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
          <ScrollReveal className="md:col-span-3">
            <div className="rounded-2xl border border-white/10 p-5 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-seal mr-2">Y además</span>
              {MORE.map((m) => (
                <span key={m} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-50">{m}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
