"use server";

import { Resend } from "resend";

export async function sendContactEmail({ deptLabel, name, email, message, extraDetails }) {
  if (!name || !email) {
    return { success: false, error: "Numele și emailul sunt obligatorii." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY nu este configurată în .env.local");
    return { success: false, error: "Formularul nu este configurat încă. Te rugăm să ne contactezi telefonic." };
  }

  const detailsText = extraDetails.length
    ? extraDetails.map(({ label, value }) => `${label}: ${value}`).join("\n") + "\n\n"
    : "";

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Allied Green Energy <onboarding@resend.dev>",
      to: "office@alliedgreenco.ro",
      replyTo: email,
      subject: `Solicitare nouă: ${deptLabel}`,
      text: `Departament: ${deptLabel}\nNume: ${name}\nEmail: ${email}\n\n${detailsText}Mesaj:\n${message || "(fără mesaj)"}`,
    });
    return { success: true };
  } catch (err) {
    console.error("Eroare trimitere email:", err);
    return { success: false, error: "A apărut o eroare la trimitere. Încearcă din nou." };
  }
}
