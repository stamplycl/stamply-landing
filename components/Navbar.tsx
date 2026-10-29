"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MarkTile } from "@/components/brand/StamplyMark";
import { LINKS, TRIAL } from "@/lib/links";

const NAV_LINKS = [
  { label: "Módulos", href: "/#modulos" },
  { label: "Integraciones", href: "/#integraciones" },
  { label: "Marco legal", href: "/#legal" },
  { label: "Preguntas", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-3">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between bg-white/90 backdrop-blur-md border border-slate-200/70 rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_-12px_rgba(19,15,103,0.18)]">
          <Link href="/" className="flex items-center gap-2 select-none" aria-label="Stamply, inicio">
            <MarkTile className="w-8 h-8" />
            <span className="font-semibold text-slate-900 text-lg tracking-tight">Stamply</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 mx-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-500 hover:text-brand-400 font-medium transition-colors whitespace-nowrap">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href={LINKS.login} className="text-sm font-medium text-slate-500 hover:text-brand-400 transition-colors px-3 py-2 whitespace-nowrap">
              Ingresar
            </a>
            <a href={LINKS.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2 !px-4 !text-sm">
              Agendar demo
            </a>
            <a href={LINKS.trial} className="btn-primary !py-2 !px-4 !text-sm">
              {TRIAL.cta}
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 bg-white rounded-2xl border border-slate-100 shadow-xl p-5 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 hover:text-brand-400 py-1">
                {l.label}
              </a>
            ))}
            <hr className="border-slate-100 my-1" />
            <a href={LINKS.login} className="text-sm font-medium text-slate-700 py-1">Ingresar</a>
            <a href={LINKS.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost">Agendar demo</a>
            <a href={LINKS.trial} className="btn-primary">{TRIAL.cta}</a>
          </div>
        )}
      </div>
    </header>
  );
}
