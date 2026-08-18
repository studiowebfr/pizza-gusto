"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useClientValue } from "@/lib/useMediaQuery";

const CLE_SESSION = "pizza-gusto-preloader-vu";
const MOT = "GUSTO";

export default function Preloader() {
  // Pendant le rendu serveur / la première hydratation, on suppose le
  // préchargeur déjà vu (repli `true`) pour ne jamais le faire clignoter :
  // la vraie valeur ne peut être lue qu'après montage (sessionStorage).
  const dejaVu = useClientValue(
    () => Boolean(sessionStorage.getItem(CLE_SESSION)),
    true
  );
  const [terminee, setTerminee] = useState(false);
  const compteurRef = useRef<HTMLSpanElement>(null);
  const rideauRef = useRef<HTMLDivElement>(null);
  const lettresRef = useRef<HTMLSpanElement[]>([]);

  const visible = !dejaVu && !terminee;

  useEffect(() => {
    if (!visible) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const termine = () => {
      sessionStorage.setItem(CLE_SESSION, "1");
      setTerminee(true);
    };

    if (reduceMotion) {
      const t = setTimeout(termine, 400);
      return () => clearTimeout(t);
    }

    const compteur = { valeur: 0 };
    const tl = gsap.timeline({ onComplete: termine });

    tl.fromTo(
      lettresRef.current,
      { clipPath: "inset(100% 0 0 0)" },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 0.7,
        ease: "expo.out",
        stagger: 0.04,
      }
    );

    tl.to(
      compteur,
      {
        valeur: 100,
        duration: 1.3,
        ease: "power2.inOut",
        onUpdate: () => {
          if (compteurRef.current) {
            compteurRef.current.textContent = String(
              Math.round(compteur.valeur)
            ).padStart(2, "0");
          }
        },
      },
      "-=0.3"
    );

    tl.to(rideauRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: "expo.inOut",
    });

    const secours = setTimeout(termine, 2200);

    return () => {
      tl.kill();
      clearTimeout(secours);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={rideauRef}
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-noir-ardoise"
      role="presentation"
    >
      <div className="font-display text-[clamp(3rem,12vw,7rem)] leading-none tracking-tight text-ivoire">
        {MOT.split("").map((lettre, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) lettresRef.current[i] = el;
            }}
            className="inline-block"
          >
            {lettre}
          </span>
        ))}
      </div>
      <div className="absolute bottom-10 right-10 font-display text-or-patine">
        <span ref={compteurRef}>00</span>
      </div>
    </div>
  );
}
