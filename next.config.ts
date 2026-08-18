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

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return anciennesUrls.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
