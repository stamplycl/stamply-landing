"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const HIDDEN: Record<Direction, string> = {
  up:    "opacity-0 translate-y-10",
  left:  "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  none:  "opacity-0",
};

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Rendered VISIBLE by default so the server HTML (first paint) never shows a
  // blank section. The hidden/animated state is applied client-side only for
  // elements that start below the fold — see the effect below.
  const [hidden, setHidden] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: keep everything visible, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already in the viewport on load (above the fold): leave it visible so the
    // first screen paints instantly. No reveal animation, no blank flash.
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) return;

    // Below the fold: hide it (off-screen, so the change is invisible to the
    // user) and reveal it once it scrolls into view.
    setHidden(true);
    setAnimate(true);

    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setHidden(false), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${animate ? "transition-all duration-700 ease-out" : ""} ${hidden ? HIDDEN[direction] : ""} ${className}`}
    >
      {children}
    </div>
  );
}
