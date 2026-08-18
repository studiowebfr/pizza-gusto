"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaFrame from "@/components/MediaFrame";
import SignatureCircle, { type VarianteCercle } from "@/components/SignatureCircle";

gsap.registerPlugin(ScrollTrigger);

interface Panneau {
  titre: string;
  texte: string;
  variante: VarianteCercle;
  image: string;
}

const PANNEAUX: Panneau[] = [
  { titre: "La farine", texte: "Les meilleures farines italiennes, choisies pour leur force et leur régularité.", variante: "pate", image: "/media/images/farine.jpg" },
  { titre: "Le pâton", texte: "Abaissé à la main, selon les techniques boulangères des écoles italiennes.", variante: "pizza", image: "/media/images/paton.jpg" },
  { titre: "Le four", texte: "Une chaleur vive, quelques minutes, la croûte qui se marque.", variante: "four", image: "/media/images/four.jpg" },
  { titre: "La sortie", texte: "Sortie à la pelle, tranchée, prête à être emportée.", variante: "cadran", image: "/media/images/sortie.jpg" },
];

export default function PanneauxEpingles() {
  // Épinglage en CSS pur (`sticky`), jamais via l'option `pin` de GSAP :
  // celle-ci reparente le nœud DOM dans un « pin-spacer » que React ignore,
  // ce qui fait planter le démontage (removeChild) au changement de page.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pisteRef = useRef<HTMLDivElement>(null);
  const [panneauActif, setPanneauActif] = useState(0);

  useEffect(() => {
    const ctx = gsap.matchMedia();

    ctx.add(
      {
        motionOk: "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
      },
      (context) => {
        const { motionOk } = context.conditions as { motionOk: boolean };
        if (!motionOk || !wrapperRef.current || !pisteRef.current) return;

        const piste = pisteRef.current;
        const distance = () => piste.scrollWidth - piste.clientWidth;

        gsap.to(piste, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setPanneauActif(
                Math.min(
                  PANNEAUX.length - 1,
                  Math.floor(self.progress * PANNEAUX.length)
                )
              );
            },
          },
        });
      }
    );

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative bg-noir-fumee lg:h-[400vh]"
    >
      {/* `overflow-hidden` doit rester sur l'élément sticky lui-même, jamais
          sur un de ses ancêtres : un ancêtre avec `overflow` autre que
          `visible` casse le calcul de `position: sticky` dans les
          navigateurs, et l'épinglage ne tient plus jusqu'au bout du scroll. */}
      <div className="overflow-hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
        <div className="absolute right-6 top-6 z-10 hidden lg:block lg:right-10 lg:top-10">
          <SignatureCircle variante={PANNEAUX[panneauActif].variante} taille={64} />
        </div>

        <div className="px-6 pt-16 lg:px-10">
          <p className="eyebrow">Du pâton à la pizza</p>
        </div>

        <div
          ref={pisteRef}
          className="mt-8 flex flex-col gap-3 px-6 pb-16 lg:mt-12 lg:h-[70vh] lg:flex-row lg:gap-3 lg:px-10 lg:pb-0"
        >
          {PANNEAUX.map((panneau) => (
            <div
              key={panneau.titre}
              className="flex flex-col gap-5 lg:h-full lg:w-[70vw] lg:shrink-0 lg:flex-row lg:items-end lg:gap-8"
            >
              <MediaFrame
                legende={panneau.titre}
                variante="ambre"
                image={panneau.image}
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:flex-1"
              />
              <div className="flex max-w-sm flex-col gap-2 pb-2 lg:pb-10">
                <span className="lg:hidden">
                  <SignatureCircle variante={panneau.variante} taille={40} />
                </span>
                <h3 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
                  {panneau.titre}
                </h3>
                <p className="text-sm leading-relaxed text-gris-perle">{panneau.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
