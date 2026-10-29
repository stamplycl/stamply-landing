import { Building, EyeOff, KeyRound, Lock, ShieldCheck, UserCog } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ITEMS = [
  { Icon: Building, t: "Cada oficina, aislada", d: "Nadie de otra oficina ve tus causas." },
  { Icon: EyeOff, t: "Datos protegidos", d: "Los datos personales se ocultan antes de procesarse." },
  { Icon: Lock, t: "Credenciales cifradas", d: "Tus claves se guardan cifradas." },
  { Icon: KeyRound, t: "Tu firma es tuya", d: "Siempre en poder del receptor y su oficina." },
  { Icon: UserCog, t: "Roles del oficio", d: "Cada acción queda registrada." },
  { Icon: ShieldCheck, t: "Tus derechos", d: "Acceso, rectificación y supresión de tus datos." },
];

export default function Security() {
  return (
    <section id="seguridad" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow">Seguridad y privacidad</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900 max-w-3xl">
            Lo que notificas es confidencial. Lo tratamos así.
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map((x, i) => (
            <ScrollReveal key={x.t} delay={i * 60}>
              <div className="h-full rounded-2xl bg-white border border-slate-200 p-6">
                <x.Icon className="w-6 h-6 text-brand-400" />
                <p className="mt-4 font-semibold text-slate-900">{x.t}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
