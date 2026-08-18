"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/content/site";
import MediaFrame from "@/components/MediaFrame";
import SignatureCircle from "@/components/SignatureCircle";
import EtatOuvertureBadge from "@/components/EtatOuvertureBadge";

const LETTRES = ["G", "U", "S", "T"];

function LettreO({
  registrer,
}: {
  registrer: (el: HTMLSpanElement | null) => void;
}) {
  return (
    <span
      ref={registrer}
      className="relative -ml-[0.07em] inline-block h-[0.62em] w-[0.62em] shrink-0 self-center"
    >
      <span className="block h-full w-full animate-spin-slow">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="47" fill="none" stroke="var(--or-clair)" strokeWidth="9" />
          <circle
            cx="50"
            cy="50"
            r="27"
            fill="none"
            stroke="var(--or-patine)"
            strokeWidth="3"
            opacity="0.6"
          />
          {/* Repère excentré : rend la rotation perceptible sur une forme
              autrement parfaitement symétrique. */}
          <circle cx="50" cy="4" r="6" fill="var(--ivoire)" />
        </svg>
      </span>
    </span>
  );
}

export default function Hero() {
  const lettresRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.matchMedia();

    ctx.add(
      { motionOk: "(prefers-reduced-motion: no-preference)" },
      (context) => {
        const { motionOk } = context.conditions as { motionOk: boolean };
        if (!motionOk) return;

        gsap.fromTo(
          lettresRef.current,
          { clipPath: "inset(100% 0 0 0)", yPercent: 20 },
          {
            clipPath: "inset(0% 0 0 0)",
            yPercent: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.04,
            delay: 0.3,
          }
        );
      }
    );

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      <MediaFrame
        legende="Un pâton de pâte « Gusto » abaissé à la main, au ralenti, avant l'enfournement."
        variante="ambre"
        className="absolute inset-0 h-full w-full"
        video={{
          mp4: "/media/video/hero.mp4",
          webm: "/media/video/hero.webm",
          poster: "/media/video/hero-poster.jpg",
        }}
      >
        <div data-cursor="voir" className="absolute inset-0" />
      </MediaFrame>

      <div className="absolute inset-0 bg-gradient-to-t from-noir-ardoise via-noir-ardoise/30 to-noir-ardoise/10" />

      <div className="relative z-10 flex w-full flex-col gap-10 px-6 pb-16 md:px-10 md:pb-20">
        <div>
          <p className="font-script text-[clamp(1.75rem,5vw,3.25rem)] leading-none text-or-clair">
            Tradizione
          </p>
          <h1
            aria-label="Gusto"
            className="font-display -mt-2 text-[clamp(4rem,16vw,12rem)] leading-[0.82] tracking-tight text-ivoire md:-mt-6"
          >
            <span aria-hidden="true" className="inline-flex items-baseline">
              {LETTRES.map((lettre, i) => (
                <span
                  key={lettre + i}
                  ref={(el) => {
                    if (el) lettresRef.current[i] = el;
                  }}
                  className="inline-block"
                >
                  {lettre}
                </span>
              ))}
              <LettreO
                registrer={(el) => {
                  if (el) lettresRef.current[LETTRES.length] = el;
                }}
              />
            </span>
          </h1>
          <p className="eyebrow mt-4">Pizza Artisanale · Besançon · À Emporter</p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex items-center gap-4">
            <SignatureCircle variante="sceau" taille={128} />
            <div className="max-w-[10rem] text-xs leading-relaxed text-gris-perle">
              Francis Winkelmann, pizzaïolo — titres revendiqués par la maison.
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 border border-or-patine/30 px-5 py-4 md:items-end">
            <p className="eyebrow eyebrow--sans-trait text-ivoire">Mardi – Samedi · 11h / 18h</p>
            <EtatOuvertureBadge />
            <a href={site.telephoneHref} className="mt-1 text-sm text-or-clair hover:underline">
              {site.telephone}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 md:bottom-10">
        <SignatureCircle variante="amorce" taille={28} />
      </div>
    </section>
  );
}
