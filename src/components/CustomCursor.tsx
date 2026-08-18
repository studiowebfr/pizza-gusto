"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [survolMedia, setSurvolMedia] = useState(false);
  const actif = useMediaQuery("(pointer: fine)");

  useEffect(() => {
    if (!actif) return;

    document.body.classList.add("curseur-actif");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const anime = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(anime);
    };

    const onOver = (event: PointerEvent) => {
      const cible = (event.target as HTMLElement)?.closest("[data-cursor='voir']");
      setSurvolMedia(Boolean(cible));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    frame = requestAnimationFrame(anime);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(frame);
      document.body.classList.remove("curseur-actif");
    };
  }, [actif]);

  if (!actif) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full border border-or-patine bg-or-patine/90 transition-[width,height] duration-300 ease-out"
      style={{
        width: survolMedia ? 48 : 8,
        height: survolMedia ? 48 : 8,
      }}
    >
      {survolMedia && (
        <span className="eyebrow eyebrow--sans-trait text-[0.55rem] tracking-[0.2em] text-noir-ardoise">
          VOIR
        </span>
      )}
    </div>
  );
}
