import { z } from "zod";

export const schemaContact = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom (2 caractères minimum)."),
  email: z.email("Adresse e-mail invalide."),
  telephone: z
    .string()
    .trim()
    .min(10, "Numéro de téléphone incomplet.")
    .regex(/^[0-9+().\s-]+$/, "Utilisez uniquement des chiffres et les caractères + ( ) . -"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères."),
  consentement: z.literal(true, {
    error: "Le consentement est nécessaire pour vous répondre.",
  }),
});

export type DonneesContact = z.infer<typeof schemaContact>;
