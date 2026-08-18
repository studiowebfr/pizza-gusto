"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXTE =
  "Champion du Monde · Champion d'Europe · Champion de France · Il Valore Della Tradizione · ";

export default function Marquee() {
  const pisteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const piste = pisteRef.current;
    if (!piste) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let minuteur: ReturnType<typeof setTimeout>;

    const trigger = ScrollTrigger.create({
      trigger: piste,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        piste.style.animationDirection = self.direction === 1 ? "normal" : "reverse";
        piste.style.animationDuration = "12s";
        clearTimeout(minuteur);
        minuteur = setTimeout(() => {
          piste.style.animationDuration = "32s";
        }, 300);
      },
    });

    return () => {
      trigger.kill();
      clearTimeout(minuteur);
    };
  }, []);

  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-or-patine/25 bg-noir-ardoise py-6">
      <div ref={pisteRef} className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((rep) => (
          <span
            key={rep}
            className="font-display px-4 text-[clamp(1.5rem,4vw,2.75rem)] uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_var(--or-patine)]"
          >
            {TEXTE.repeat(4)}
          </span>
        ))}
      </div>
    </section>
  );
}
