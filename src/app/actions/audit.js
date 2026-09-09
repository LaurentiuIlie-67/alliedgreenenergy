"use server";

import { Resend } from "resend";

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;

export async function sendAuditRequest(prevState, formData) {
  const name = formData.get("name")?.trim();
  const company = formData.get("company")?.trim();
  const phone = formData.get("phone")?.trim();
  const email = formData.get("email")?.trim();
  const equipmentType = formData.get("equipmentType")?.trim();
  const consumption = formData.get("consumption")?.trim();
  const burnerModel = formData.get("burnerModel")?.trim();
  const viscosity = formData.get("viscosity")?.trim();
  const address = formData.get("address")?.trim();
  const consent = formData.get("consent");
  const photo = formData.get("photo");

  if (!name || !company || !phone || !email || !address) {
    return { success: false, error: "Completează toate câmpurile obligatorii." };
  }

  if (!consent) {
    return { success: false, error: "Trebuie să fii de acord cu condițiile programului de audit." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY nu este configurată în .env.local");
    return { success: false, error: "Formularul nu este configurat încă. Te rugăm să ne contactezi telefonic." };
  }

  const detailLines = [
    `Companie / CUI: ${company}`,
    `Telefon: ${phone}`,
    `Email: ${email}`,
    `Tip echipament / sector: ${equipmentType || "(nespecificat)"}`,
    `Consum estimat lunar: ${consumption || "(nespecificat)"}`,
    `Brand & model arzător: ${burnerModel || "(nespecificat)"}`,
    `Vâscozitate maximă admisă: ${viscosity || "(nespecificat)"}`,
    `Adresă preluare probă: ${address}`,
  ];

  const attachments = [];
  if (photo && typeof photo === "object" && photo.size > 0) {
    if (photo.size > MAX_ATTACHMENT_BYTES) {
      return { success: false, error: "Poza atașată este prea mare (max. 5MB)." };
    }
    const buffer = Buffer.from(await photo.arrayBuffer());
    attachments.push({ filename: photo.name || "eticheta-arzator.jpg", content: buffer });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Allied Green Energy <onboarding@resend.dev>",
      to: "office@alliedgreenco.ro",
      replyTo: email,
      subject: `Solicitare Audit de Calitate Combustibil: ${company}`,
      text: `Solicitare Audit de Calitate & Diagnoză de Eficiență\n\nNume: ${name}\n${detailLines.join("\n")}`,
      attachments,
    });
    return { success: true };
  } catch (err) {
    console.error("Eroare trimitere email audit:", err);
    return { success: false, error: "A apărut o eroare la trimitere. Încearcă din nou." };
  }
}
