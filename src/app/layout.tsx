import type { Metadata } from "next";
import { display, script, utilitaire } from "@/lib/fonts";
import { schemaRestaurant } from "@/lib/schema";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import CookieBanner from "@/components/CookieBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const URL_SITE = "https://pizzagusto-besancon.fr";

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  title: {
    default: "Pizza Gusto — Pizzeria artisanale à Besançon",
    template: "%s — Pizza Gusto",
  },
  description:
    "Pizza Gusto, pizzeria artisanale à Besançon. Pâte et sauce « Gusto », pizzaïolo champion du monde. Vente à emporter, place Leclerc.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Pizza Gusto",
    url: URL_SITE,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${script.variable} ${utilitaire.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-noir-ardoise text-ivoire antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaRestaurant()) }}
        />
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
