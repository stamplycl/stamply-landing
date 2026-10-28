"use client";

import { useEffect, useRef } from "react";
import { createPhotoTracePainter, loadPhotoLuma } from "./photo-traces";

/**
 * Fotografía convertida en grabado de trazos animado (mismo motion que el login).
 * Mientras carga, o sin canvas, se ve la foto en duotono índigo como respaldo.
 */
export function PhotoTraceScene({ src, className = "" }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const node = ref.current;
    const canvas = canvasRef.current;
    if (!node || !canvas) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let disposed = false;
    let frame = 0;
    let last = 0;
    let clock = 0;
    let painter: ReturnType<typeof createPhotoTracePainter> = null;

    const canAnimate = () => visible && !document.hidden && !preference.matches;
    const paint = () => painter?.draw(clock);
    const tick = (now: number) => {
      frame = 0;
      if (disposed || !canAnimate() || !painter) return;
      if (now - last >= 1000 / 30) {
        clock += Math.min(0.1, (now - last) / 1000);
        paint();
        last = now;
      }
      frame = requestAnimationFrame(tick);
    };
    const resize = () => {
      if (!painter || !node.clientWidth || !node.clientHeight) return;
      painter.resize(node.clientWidth, node.clientHeight);
      paint();
    };
    const sync = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (!painter) return;
      paint();
      if (canAnimate()) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    loadPhotoLuma(src)
      .then((luma) => {
        if (disposed) return;
        painter = createPhotoTracePainter(canvas, luma);
        if (!painter) return;
        resize();
        node.dataset.renderer = "traces";
        sync();
      })
      .catch(() => {
        // Queda la foto en duotono como respaldo.
      });

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    const sizeObserver = new ResizeObserver(() => resize());
    observer.observe(node);
    sizeObserver.observe(node);
    document.addEventListener("visibilitychange", sync);
    preference.addEventListener("change", sync);
    return () => {
      disposed = true;
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      sizeObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      preference.removeEventListener("change", sync);
    };
  }, [src]);

  return (
    <div ref={ref} className={`group absolute inset-0 ${className}`} data-renderer="photo" aria-hidden="true">
      {/* Respaldo y textura: la foto real, tenue y en duotono, bajo los trazos */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity grayscale scale-[1.06] transition-opacity duration-700 group-data-[renderer=traces]:opacity-[0.16]"
        style={{ backgroundImage: `url(${src})` }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700 group-data-[renderer=traces]:opacity-100" />
    </div>
  );
}
