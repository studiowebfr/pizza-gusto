"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const LIENS = [
  { href: "/la-carte", label: "La Carte" },
  { href: "/le-savoir-faire", label: "Savoir-Faire" },
  { href: "/nous-trouver", label: "Nous Trouver" },
];

export default function Header() {
  const [descendu, setDescendu] = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);

  useEffect(() => {
    const onScroll = () => setDescendu(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le défilement de la page derrière le menu plein écran, et
  // referme le menu automatiquement si l'écran repasse en desktop.
  useEffect(() => {
    if (!menuOuvert) return;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => setMenuOuvert(false);
    media.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = "";
      media.removeEventListener("change", onChange);
    };
  }, [menuOuvert]);

  const fondSolide = descendu || menuOuvert;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        fondSolide ? "bg-noir-ardoise/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-3xl tracking-tight text-ivoire md:text-4xl lg:text-[2.75rem]"
          onClick={() => setMenuOuvert(false)}
        >
          Gusto
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Navigation principale">
          {LIENS.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="eyebrow eyebrow--nav transition-colors hover:text-or-clair"
            >
              {lien.label}
            </Link>
          ))}
          <a
            href={site.telephoneHref}
            className="rounded-full bg-or-patine px-6 py-3 text-sm font-medium tracking-[0.06em] text-noir-ardoise shadow-[0_0_24px_rgba(185,138,72,0.35)] transition-transform hover:scale-[1.03] hover:bg-or-clair"
          >
            {site.telephone}
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 flex flex-col gap-1.5 md:hidden"
          aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOuvert}
          onClick={() => setMenuOuvert((v) => !v)}
        >
          <span
            className={`block h-px w-7 bg-ivoire transition-transform ${menuOuvert ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-7 bg-ivoire transition-opacity ${menuOuvert ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-7 bg-ivoire transition-transform ${menuOuvert ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>
    </header>

    {/* Rendu hors du <header> : celui-ci prend `backdrop-blur` quand le menu
        est ouvert, ce qui crée un nouveau contexte de positionnement pour
        ses enfants `fixed` et les piège dans sa propre hauteur (~68px) au
        lieu de couvrir tout l'écran. */}
    <nav
      aria-label="Navigation principale mobile"
      className={`fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-noir-ardoise px-8 transition-opacity duration-300 md:hidden ${
        menuOuvert ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {LIENS.map((lien) => (
        <Link
          key={lien.href}
          href={lien.href}
          className="font-display text-4xl tracking-tight text-ivoire"
          tabIndex={menuOuvert ? 0 : -1}
          onClick={() => setMenuOuvert(false)}
        >
          {lien.label}
        </Link>
      ))}
      <a
        href={site.telephoneHref}
        tabIndex={menuOuvert ? 0 : -1}
        className="mt-4 w-fit rounded-full bg-or-patine px-6 py-3 text-sm font-medium tracking-[0.06em] text-noir-ardoise shadow-[0_0_24px_rgba(185,138,72,0.35)]"
      >
        {site.telephone}
      </a>
    </nav>
    </>
  );
}
