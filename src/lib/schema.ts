import { horaires, site } from "@/content/site";

const JOURS_SCHEMA = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function schemaRestaurant() {
  const openingHoursSpecification = horaires
    .filter((jour) => !jour.ferme)
    .flatMap((jour) =>
      jour.creneaux.map((creneau) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: JOURS_SCHEMA[horaires.indexOf(jour)],
        opens: creneau.ouverture,
        closes: creneau.fermeture,
      }))
    );

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.nom,
    description:
      "Pizzeria artisanale à Besançon, vente à emporter. Pâte et sauce « Gusto » préparées par un pizzaïolo champion.",
    telephone: site.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.adresse.ligne1}, ${site.adresse.ligne2}`,
      postalCode: site.adresse.codePostal,
      addressLocality: site.adresse.ville,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    servesCuisine: ["Pizza", "Italienne"],
    openingHoursSpecification,
    priceRange: "€€",
    hasMenu: "https://pizzagusto-besancon.fr/la-carte",
    paymentAccepted: site.paiement.join(", "),
    acceptsReservations: "False",
  };
}
