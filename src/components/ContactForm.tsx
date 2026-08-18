"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaContact, type DonneesContact } from "@/lib/contact-schema";

type Etat = "repos" | "envoi" | "succes" | "erreur";

export default function ContactForm() {
  const [etat, setEtat] = useState<Etat>("repos");
  const [erreurServeur, setErreurServeur] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DonneesContact>({
    resolver: zodResolver(schemaContact),
  });

  const onSubmit = async (donnees: DonneesContact) => {
    setEtat("envoi");
    setErreurServeur(null);
    try {
      const reponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donnees),
      });
      if (!reponse.ok) {
        const corps = await reponse.json().catch(() => null);
        throw new Error(corps?.erreur ?? "L'envoi a échoué.");
      }
      setEtat("succes");
      reset();
    } catch (erreur) {
      setEtat("erreur");
      setErreurServeur(
        erreur instanceof Error ? erreur.message : "L'envoi a échoué."
      );
    }
  };

  if (etat === "succes") {
    return (
      <div role="status" className="border border-or-patine/40 px-6 py-8 text-center">
        <p className="font-display text-xl text-or-clair">Message envoyé.</p>
        <p className="mt-2 text-sm text-gris-perle">
          Nous vous répondrons dans les meilleurs délais. Pour une commande, appelez
          directement le restaurant.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="nom" className="eyebrow eyebrow--sans-trait text-gris-perle">
            Nom
          </label>
          <input
            id="nom"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.nom)}
            aria-describedby={errors.nom ? "nom-erreur" : undefined}
            className="border-b border-ivoire/30 bg-transparent py-2 text-ivoire outline-none transition-colors focus:border-or-clair"
            {...register("nom")}
          />
          {errors.nom && (
            <p id="nom-erreur" className="text-xs text-braise">
              {errors.nom.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="eyebrow eyebrow--sans-trait text-gris-perle">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-erreur" : undefined}
            className="border-b border-ivoire/30 bg-transparent py-2 text-ivoire outline-none transition-colors focus:border-or-clair"
            {...register("email")}
          />
          {errors.email && (
            <p id="email-erreur" className="text-xs text-braise">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="telephone" className="eyebrow eyebrow--sans-trait text-gris-perle">
          Téléphone
        </label>
        <input
          id="telephone"
          type="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.telephone)}
          aria-describedby={errors.telephone ? "telephone-erreur" : undefined}
          className="border-b border-ivoire/30 bg-transparent py-2 text-ivoire outline-none transition-colors focus:border-or-clair"
          {...register("telephone")}
        />
        {errors.telephone && (
          <p id="telephone-erreur" className="text-xs text-braise">
            {errors.telephone.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow eyebrow--sans-trait text-gris-perle">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-erreur" : undefined}
          className="resize-none border-b border-ivoire/30 bg-transparent py-2 text-ivoire outline-none transition-colors focus:border-or-clair"
          {...register("message")}
        />
        {errors.message && (
          <p id="message-erreur" className="text-xs text-braise">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consentement"
          type="checkbox"
          aria-invalid={Boolean(errors.consentement)}
          aria-describedby={errors.consentement ? "consentement-erreur" : undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-or-patine"
          {...register("consentement")}
        />
        <label htmlFor="consentement" className="text-xs leading-relaxed text-gris-perle">
          J&apos;accepte que ces informations soient utilisées pour me répondre. Aucune
          autre utilisation n&apos;en sera faite.
        </label>
      </div>
      {errors.consentement && (
        <p id="consentement-erreur" className="-mt-4 text-xs text-braise">
          {errors.consentement.message}
        </p>
      )}

      {etat === "erreur" && erreurServeur && (
        <p role="alert" className="text-sm text-braise">
          {erreurServeur}
        </p>
      )}

      <button
        type="submit"
        disabled={etat === "envoi"}
        className="eyebrow eyebrow--sans-trait w-fit border border-or-patine px-8 py-3 text-or-clair transition-colors hover:bg-or-patine hover:text-noir-ardoise disabled:opacity-50"
      >
        {etat === "envoi" ? "Envoi en cours" : "Envoyer la demande"}
      </button>
    </form>
  );
}
