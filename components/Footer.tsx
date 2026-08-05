import BoltMark from "@/components/BoltMark";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BoltMark className="w-7 h-7" />
          <span className="font-bold text-slate-800">Stamply</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-xs text-slate-400">
          <a href="https://app.stamply.cl/solicitar-acceso" className="hover:text-violet-600 transition-colors">
            Solicitar acceso
          </a>
          <a href="mailto:soporte@stamply.cl" className="hover:text-violet-600 transition-colors">
            soporte@stamply.cl
          </a>
          <a href="/privacidad" className="hover:text-violet-600 transition-colors">
            Privacidad
          </a>
          <a href="/terminos" className="hover:text-violet-600 transition-colors">
            Condiciones
          </a>
        </div>

        <p className="text-xs text-slate-300">
          © {new Date().getFullYear()} Stamply. Hecho en Chile.
        </p>
      </div>
    </footer>
  );
}
