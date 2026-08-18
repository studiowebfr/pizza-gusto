"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaFrame from "@/components/MediaFrame";

gsap.registerPlugin(ScrollTrigger);

interface Specialite {
  nom: string;
  prix: string;
  legende: string;
  facteurParallaxe: number;
  className: string;
  image?: string;
}

const SPECIALITES: Specialite[] = [
  {
    nom: "Burrata",
    prix: "15 €",
    legende: "Burrata crémeuse, jambon de pays, roquette — spécialité de Corato.",
    facteurParallaxe: 0.06,
    className: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto",
    image: "/media/images/burrata.jpg",
  },
  {
    nom: "Tartufo",
    prix: "15 €",
    legende: "Crème de truffe, pommes de terre, champignons, roquette — spécialité de Corato.",
    facteurParallaxe: 0.1,
    // `md:aspect-auto` est essentiel : sans lui, `aspect-square` force une
    // hauteur calculée sur la largeur de colonne (~445px), bien supérieure
    // à la ligne de grille `md:auto-rows-[220px]` — la carte déborde alors
    // sur la suivante et la recouvre.
    className: "aspect-square md:aspect-auto",
    image: "/media/images/tartufo.jpg",
  },
  {
    nom: "Mamamia",
    prix: "13,50 / 14,50 €",
    legende: "Jambon de pays, mozzarella di Bufala, pesto de basilic.",
    facteurParallaxe: 0.1,
    className: "aspect-square md:aspect-auto",
    image: "/media/images/mamamia.jpg",
  },
  {
    nom: "La Francomtoise",
    prix: "13,50 / 14,50 €",
    legende: "Saucisse de Morteau, pommes de terre, cancoillotte — la seule pizza franc-comtoise de la carte.",
    facteurParallaxe: 0.14,
    // `col-span-3` (pleine largeur) : avec `col-span-2`, la 3e colonne de
    // cette dernière ligne restait vide — un carré mort sans raison d'être.
    className: "md:col-span-3 aspect-[21/9]",
  },
];

function Carte({ specialite }: { specialite: Specialite }) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.matchMedia();
    ctx.add({ motionOk: "(prefers-reduced-motion: no-preference)" }, (context) => {
      const { motionOk } = context.conditions as { motionOk: boolean };
      if (!motionOk || !imageRef.current) return;
      gsap.to(imageRef.current, {
        yPercent: specialite.facteurParallaxe * 100,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [specialite.facteurParallaxe]);

  return (
    <Link
      href="/la-carte"
      data-cursor="voir"
      className={`group relative block overflow-hidden ${specialite.className}`}
    >
      <div ref={imageRef} className="absolute inset-[-8%]">
        <MediaFrame
          legende={specialite.legende}
          variante="ambre"
          image={specialite.image}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-noir-ardoise/85 via-noir-ardoise/10 to-transparent" />
      <span className="pointer-events-none absolute inset-0 border border-or-patine opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <h3 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
          {specialite.nom}
        </h3>
        <p className="font-display text-or-clair">{specialite.prix}</p>
      </div>
    </Link>
  );
}

export default function MosaiqueSpecialites() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <p className="eyebrow">Spécialités de la maison</p>
      <h2 className="font-display mt-3 max-w-xl text-[clamp(2rem,4.5vw,3.25rem)] leading-[0.95] tracking-tight">
        Trois spécialités de Corato, un franc-comtois d&apos;exception
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-[220px]">
        {SPECIALITES.map((specialite) => (
          <Carte key={specialite.nom} specialite={specialite} />
        ))}
      </div>
    </section>
  );
}
