"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Características", href: "#caracteristicas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav className="w-full max-w-6xl flex items-center justify-between bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-3 shadow-[0_2px_20px_-4px_rgba(109,40,217,0.12)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">Stamply</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-violet-700 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://cal.com/stamply/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm py-2 px-4"
          >
            Agendar demo
          </a>
          <a
            href="https://app.stamply.cl/solicitar-acceso"
            className="btn-ai text-sm py-2 px-4"
          >
            Solicitar acceso
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-20 inset-x-4 bg-white rounded-2xl border border-slate-200 shadow-xl p-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-violet-700"
            >
              {l.label}
            </a>
          ))}
          <hr className="border-slate-100" />
          <a
            href="https://cal.com/stamply/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm justify-center"
          >
            Agendar demo
          </a>
          <a
            href="https://app.stamply.cl/solicitar-acceso"
            className="btn-ai text-sm justify-center"
          >
            Solicitar acceso
          </a>
        </div>
      )}
    </header>
  );
}
