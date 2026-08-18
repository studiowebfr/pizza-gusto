import type { MetadataRoute } from "next";

// Contenu purement statique (aucune donnée de requête) : nécessaire pour
// rester compatible avec un export statique (`output: "export"`).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://pizzagusto-besancon.fr/sitemap.xml",
  };
}
