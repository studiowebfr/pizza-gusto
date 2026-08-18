import { horaires, type JourHoraire } from "@/content/site";

const FUSEAU = "Europe/Paris";

function minutesDepuisMinuit(heure: string): number {
  const [h, m] = heure.split(":").map(Number);
  return h * 60 + m;
}

function maintenantAParis(): { jourIndex: number; minutes: number } {
  const formatteur = new Intl.DateTimeFormat("fr-FR", {
    timeZone: FUSEAU,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });

  const parts = formatteur.formatToParts(new Date());
  const heure = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");

  // Weekday index robuste : dérivé d'une date construite explicitement dans le fuseau Paris.
  const dateParis = new Date(
    new Date().toLocaleString("en-US", { timeZone: FUSEAU })
  );
  const jourIndex = dateParis.getDay();

  return { jourIndex, minutes: heure * 60 + minute };
}

export function jourIndexParis(): number {
  return maintenantAParis().jourIndex;
}

export interface EtatOuverture {
  ouvert: boolean;
  libelle: string;
}

export function etatOuvertureActuel(joursHoraires: JourHoraire[] = horaires): EtatOuverture {
  const { jourIndex, minutes } = maintenantAParis();
  const jour = joursHoraires[jourIndex];

  if (!jour.ferme) {
    for (const creneau of jour.creneaux) {
      const debut = minutesDepuisMinuit(creneau.ouverture);
      const fin = minutesDepuisMinuit(creneau.fermeture);
      if (minutes >= debut && minutes < fin) {
        return { ouvert: true, libelle: "Ouvert maintenant" };
      }
    }

    // Un créneau à venir aujourd'hui ?
    const prochain = jour.creneaux.find(
      (c) => minutesDepuisMinuit(c.ouverture) > minutes
    );
    if (prochain) {
      return { ouvert: false, libelle: `Ouvre à ${prochain.ouverture}` };
    }
  }

  // Sinon, on cherche le prochain jour ouvert.
  for (let decalage = 1; decalage <= 7; decalage++) {
    const indexSuivant = (jourIndex + decalage) % 7;
    const jourSuivant = joursHoraires[indexSuivant];
    if (!jourSuivant.ferme && jourSuivant.creneaux.length > 0) {
      return {
        ouvert: false,
        libelle: `Ouvre ${jourSuivant.jour.toLowerCase()} à ${jourSuivant.creneaux[0].ouverture}`,
      };
    }
  }

  return { ouvert: false, libelle: "Fermé" };
}
