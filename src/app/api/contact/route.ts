import { NextResponse } from "next/server";
import { Resend } from "resend";
import { schemaContact } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const corps = await request.json().catch(() => null);
  const analyse = schemaContact.safeParse(corps);

  if (!analyse.success) {
    return NextResponse.json(
      { erreur: "Formulaire invalide.", details: analyse.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { nom, email, telephone, message } = analyse.data;
  const cle = process.env.RESEND_API_KEY;
  const destinataire = process.env.CONTACT_EMAIL_TO;

  if (!cle || !destinataire) {
    console.warn(
      "[/api/contact] RESEND_API_KEY ou CONTACT_EMAIL_TO manquant — message reçu mais non transmis par e-mail.",
      { nom, email, telephone }
    );
    return NextResponse.json({ ok: true, transmis: false });
  }

  try {
    const resend = new Resend(cle);
    await resend.emails.send({
      from: "Pizza Gusto <site@pizzagusto-besancon.fr>",
      to: destinataire,
      replyTo: email,
      subject: `Demande de contact — ${nom}`,
      text: `Nom : ${nom}\nE-mail : ${email}\nTéléphone : ${telephone}\n\nMessage :\n${message}`,
    });
    return NextResponse.json({ ok: true, transmis: true });
  } catch (erreur) {
    console.error("[/api/contact] Échec de l'envoi Resend", erreur);
    return NextResponse.json(
      { erreur: "L'envoi a échoué. Merci de nous appeler directement." },
      { status: 502 }
    );
  }
}
