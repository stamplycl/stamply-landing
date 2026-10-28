import { Building, EyeOff, KeyRound, Lock, ShieldCheck, UserCog } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ITEMS = [
  { Icon: Building, t: "Cada oficina, aislada", d: "Las causas viven en un espacio propio por oficina, con políticas de acceso a nivel de base de datos. Nadie de otra oficina las ve." },
  { Icon: EyeOff, t: "IA con datos protegidos", d: "RUT, nombres y domicilios se reemplazan por marcadores antes de enviarse al modelo de IA, y Stamply no usa tus datos para entrenar modelos." },
  { Icon: Lock, t: "Credenciales cifradas", d: "La Clave Poder Judicial y los accesos a Google se guardan cifrados (AES-256-GCM) y solo se usan para la tarea que autorizaste." },
  { Icon: KeyRound, t: "Tu firma es tuya", d: "Tu Firma Electrónica Avanzada queda siempre en posesión del receptor y su oficina. Stamply envía el documento a firmar y verifica que vuelva intacto." },
  { Icon: UserCog, t: "Roles del oficio", d: "El receptor firma y autoriza. El asistente prepara, ordena y marca. Cada acción queda registrada." },
  { Icon: ShieldCheck, t: "Tus derechos sobre los datos", d: "Acceso, rectificación, supresión y portabilidad según la ley chilena, descritos en nuestra Política de Privacidad." },
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
