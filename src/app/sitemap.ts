import type { MetadataRoute } from "next";

const URL_SITE = "https://pizzagusto-besancon.fr";

const PAGES = [
  { chemin: "/", priorite: 1 },
  { chemin: "/la-carte", priorite: 0.9 },
  { chemin: "/le-savoir-faire", priorite: 0.7 },
  { chemin: "/formules-et-menus", priorite: 0.7 },
  { chemin: "/lasagnes-et-salades", priorite: 0.6 },
  { chemin: "/carte-sans-porc", priorite: 0.6 },
  { chemin: "/nous-trouver", priorite: 0.8 },
  { chemin: "/mentions-legales", priorite: 0.1 },
  { chemin: "/vie-privee", priorite: 0.1 },
  { chemin: "/cookies", priorite: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ chemin, priorite }) => ({
    url: `${URL_SITE}${chemin}`,
    lastModified: new Date("2026-08-16"),
    priority: priorite,
  }));
}
