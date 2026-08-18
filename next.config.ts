import type { NextConfig } from "next";

// Redirections 301 depuis les anciennes URLs du site 2014 (indexé depuis 2014 : SEO à préserver).
const anciennesUrls: Array<{ source: string; destination: string }> = [
  { source: "/index.html", destination: "/" },
  { source: "/carte-pizza.html", destination: "/la-carte" },
  { source: "/menus.html", destination: "/formules-et-menus" },
  { source: "/sandwich-pizza.html", destination: "/formules-et-menus" },
  { source: "/pizza-plaque.html", destination: "/formules-et-menus" },
  { source: "/menus-lasagnes-salades.html", destination: "/lasagnes-et-salades" },
  { source: "/ciabatta.html", destination: "/formules-et-menus" },
  { source: "/pizza-sans-porc.html", destination: "/carte-sans-porc" },
  { source: "/savoir-faire.html", destination: "/le-savoir-faire" },
  { source: "/plan.html", destination: "/nous-trouver" },
  { source: "/contact.html", destination: "/nous-trouver" },
  { source: "/infos.html", destination: "/nous-trouver" },
  { source: "/mentions.html", destination: "/mentions-legales" },
  { source: "/pizza-caviar.html", destination: "/le-savoir-faire" },
  { source: "/article-est-republicain-2.html", destination: "/le-savoir-faire" },
  { source: "/article-est-republicain-3.html", destination: "/le-savoir-faire" },
];

// Bascule activée uniquement pour la démo statique GitHub Pages : celle-ci
// ne peut pas exécuter de serveur (ni redirections, ni /api, ni
// optimisation d'image à la volée). Le vrai déploiement (Vercel) tourne
// sans cette variable et garde toutes les fonctionnalités serveur.
const pourGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = pourGithubPages ? "/pizza-gusto" : "";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    unoptimized: pourGithubPages,
  },
  ...(pourGithubPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: basePath,
        // GitHub Pages sert des fichiers statiques (pas de réécriture
        // d'URL) : sans le "/" final, les liens vers /la-carte cherchent un
        // fichier "la-carte" au lieu du dossier "la-carte/index.html".
        trailingSlash: true,
      }
    : {
        async redirects() {
          return anciennesUrls.map(({ source, destination }) => ({
            source,
            destination,
            permanent: true,
          }));
        },
      }),
};

export default nextConfig;
