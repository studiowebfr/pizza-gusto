import { Bodoni_Moda, Petit_Formal_Script, Jost } from "next/font/google";

// Bodoni Moda — display. Née à Parme, ville des Championnats du monde de pizza :
// le lien avec la maison n'est pas cosmétique.
export const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Petit Formal Script — mots isolés en surimpression uniquement (3 mots max).
export const script = Petit_Formal_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

// Jost — corps de texte, eyebrows, navigation.
export const utilitaire = Jost({
  subsets: ["latin"],
  variable: "--font-utilitaire",
  weight: ["300", "400", "500"],
  display: "swap",
});
