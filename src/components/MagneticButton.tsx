"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variante?: "plein" | "contour";
  ariaLabel?: string;
}

const AMPLITUDE = 6;

export default function MagneticButton({
  href,
  children,
  className = "",
  variante = "plein",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${relX * AMPLITUDE * 2}px, ${
      relY * AMPLITUDE * 2
    }px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const base =
    "group relative inline-flex items-center justify-center overflow-hidden px-10 py-4 eyebrow eyebrow--sans-trait transition-transform duration-200 ease-out";

  const variantes: Record<string, string> = {
    plein: "border border-or-patine text-or-clair",
    contour: "border border-ivoire/30 text-ivoire",
  };

  return (
    <a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, variantes[variante], className)}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 translate-y-full bg-or-patine transition-transform duration-300 ease-out group-hover:translate-y-0"
      />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-noir-ardoise">
        {children}
      </span>
    </a>
  );
}
