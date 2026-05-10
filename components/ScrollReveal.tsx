"use client";

import { useEffect, useRef, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const INITIAL: Record<Direction, string> = {
  up:    "opacity-0 translate-y-10",
  left:  "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  none:  "opacity-0",
};

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.remove("opacity-0", "translate-y-10", "-translate-x-10", "translate-x-10");
            el.classList.add("opacity-100", "translate-y-0", "translate-x-0");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${INITIAL[direction]} transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
