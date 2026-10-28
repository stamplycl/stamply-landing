import { MarkTile } from "@/components/brand/StamplyMark";
import { LINKS, TRIAL } from "@/lib/links";

const COLS = [
  {
    title: "Producto",
    links: [
      { label: "Módulos", href: "/#modulos" },
      { label: "Integraciones", href: "/#integraciones" },
      { label: "Seguridad", href: "/#seguridad" },
      { label: "Preguntas frecuentes", href: "/#faq" },
    ],
  },
  {
    title: "Empieza",
    links: [
      { label: TRIAL.cta, href: LINKS.trial },
      { label: "Agendar demo", href: LINKS.demo },
      { label: "Ingresar", href: LINKS.login },
      { label: "soporte@stamply.cl", href: LINKS.support },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Marco legal", href: "/#legal" },
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Condiciones del Servicio", href: "/terminos" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100 pt-16 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <MarkTile className="w-8 h-8" />
              <span className="font-semibold text-white text-lg">Stamply</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-200 max-w-xs">
              El documento sabe adónde tiene que ir. Gestión integral para receptores judiciales de Chile.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">{c.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-brand-200 hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs leading-relaxed text-brand-200/80 space-y-3">
          <p>
            Stamply es una herramienta de gestión y apoyo para el trabajo del receptor judicial. No es un organismo
            público ni está afiliado al Poder Judicial, al Servicio de Impuestos Internos, a Google ni a Mercado Pago;
            sus nombres se usan solo para describir integraciones. La fe pública, el contenido de cada actuación y su
            firma son siempre responsabilidad exclusiva del receptor, conforme al Código Orgánico de Tribunales.
          </p>
          <p>© {new Date().getFullYear()} Stamply. Hecho en Chile.</p>
        </div>
      </div>
    </footer>
  );
}
