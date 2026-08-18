"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { manifeste } from "@/content/savoir-faire";

gsap.registerPlugin(ScrollTrigger);

export default function Manifeste() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const motsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.matchMedia();

    ctx.add(
      { motionOk: "(prefers-reduced-motion: no-preference)" },
      (context) => {
        const { motionOk } = context.conditions as { motionOk: boolean };
        if (!motionOk) return;

        gsap.fromTo(
          motsRef.current,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 40%",
              scrub: 0.5,
            },
          }
        );
      }
    );

    return () => ctx.revert();
  }, []);

  const mots = manifeste.split(" ");

  return (
    <section
      ref={sectionRef}
      className="flex min-h-[80svh] items-center justify-center bg-noir-ardoise px-6 py-32 md:px-10"
    >
      <p className="font-display max-w-4xl text-center text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.15] tracking-tight">
        {mots.map((mot, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) motsRef.current[i] = el;
            }}
            className="mr-[0.3em] inline-block text-ivoire"
          >
            {mot}
          </span>
        ))}
      </p>
    </section>
  );
}
