import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, telephone, service, message } = await request.json();
  try {
    // 1. Bevestigingsmail naar de klant
    const { error: confirmError } = await resend.emails.send({
      from: "MFK Stukadoors <mfk@contact.mfkstukadoors.be>",
      to: email,
      template: {
        id: "confirmation-email",
        variables: { name, email, telephone, service, message },
      },
    });

    if (confirmError) {
      return Response.json({ error: confirmError }, { status: 500 });
    }

    // 2. Offerte-info naar Furkan
    const { error: offerteError } = await resend.emails.send({
      from: "MFK Stukadoors <mfk@contact.mfkstukadoors.be>",
      to: "furkankarakocfurkan@hotmail.com",
      template: {
        id: "offerte-email",
        variables: { name, email, telephone, service, message },
      },
    });

    if (offerteError) {
      return Response.json({ error: offerteError }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
