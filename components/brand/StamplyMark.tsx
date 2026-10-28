"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { STAMPLY_BRAND, STAMPLY_MARK, STAMPLY_MARK_TILE_SCALE, STAMPLY_SHEET_VIEWBOX } from "@/lib/stamply-mark";

/** Ruta en S del isotipo: doblez (origen) → S → sello (destino). Igual que la pantalla de carga de la app. */
const ROUTE = "M420 138L135 170L135 282L382 226L382 342L96 374";

/** Logo compacto: isotipo blanco sobre cuadrado índigo (mismo dibujo que el favicon). */
export function MarkTile({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <rect width="512" height="512" rx="114" fill={STAMPLY_BRAND.indigo} />
      <g transform={`translate(256 256) scale(${STAMPLY_MARK_TILE_SCALE}) translate(-256 -256)`}>
        <path d={STAMPLY_MARK.body} fill="#FFFFFF" />
        <path d={STAMPLY_MARK.fold} fill={STAMPLY_BRAND.foldOnBrand} />
        <path d={STAMPLY_MARK.dest} fill={STAMPLY_BRAND.dest} />
      </g>
    </svg>
  );
}

/**
 * Hoja con sombra dura y la ruta dibujándose del doblez al sello, que se estampa al final.
 * `loop` repite el ciclo (hero y CTA); sin loop se dibuja una vez al entrar en pantalla.
 */
export function AnimatedSheet({ className = "w-40", loop = true }: { className?: string; loop?: boolean }) {
  const id = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const repeat = loop && !reduce ? { repeat: Infinity, repeatDelay: 1.4 } : {};

  return (
    <svg viewBox={STAMPLY_SHEET_VIEWBOX} className={className} aria-hidden="true">
      <defs>
        <mask id={`route-${id}`} maskUnits="userSpaceOnUse" x="80" y="60" width="352" height="400">
          <motion.path
            d={ROUTE}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={132}
            strokeLinejoin="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: !loop }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1], ...repeat }}
          />
        </mask>
      </defs>
      <path d={STAMPLY_MARK.sheetShadow} fill={STAMPLY_BRAND.sheetShadow} />
      <path d={STAMPLY_MARK.sheet} fill={STAMPLY_BRAND.sheet} />
      <g mask={`url(#route-${id})`}>
        <path d={STAMPLY_MARK.body} fill="#FFFFFF" />
        <path d={STAMPLY_MARK.fold} fill={STAMPLY_BRAND.foldOnSheet} />
      </g>
      <motion.path
        d={STAMPLY_MARK.dest}
        fill={STAMPLY_BRAND.destOnLight}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
        whileInView={{ scale: [0.4, 1.12, 1], opacity: 1 }}
        viewport={{ once: !loop }}
        transition={{ delay: 1.45, duration: 0.45, ...(loop && !reduce ? { repeat: Infinity, repeatDelay: 2.55 } : {}) }}
      />
    </svg>
  );
}
