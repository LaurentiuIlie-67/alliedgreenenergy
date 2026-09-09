"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { Loader2, CheckCircle2, Paperclip } from "lucide-react";
import { sendAuditRequest } from "@/app/actions/audit";

const initialState = { success: false, error: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-green btn-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 size={16} className="spin" /> Se trimite...
        </>
      ) : (
        "Vreau Prelevarea Probei"
      )}
    </button>
  );
}

export default function AuditForm() {
  const [state, formAction] = useActionState(sendAuditRequest, initialState);

  return (
    <div className="smart-form">
      <h3 style={{ marginBottom: ".5rem" }}>Solicită Auditul de Calitate & Diagnoza de Eficiență</h3>
      <p className="audit-form-subtitle">
        Prelevăm proba, o analizăm în laboratorul propriu și îți livrăm Raportul Sintetic în 48-72 de ore.
      </p>

      <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="audit-name">Nume și prenume</label>
            <input id="audit-name" name="name" type="text" required placeholder="Ex: Ion Popescu" />
          </div>
          <div className="form-group">
            <label htmlFor="audit-company">Compania / CUI</label>
            <input id="audit-company" name="company" type="text" required placeholder="Ex: SC Agro-Industria SRL" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="audit-phone">Telefon de contact</label>
            <input id="audit-phone" name="phone" type="tel" required placeholder="07xx xxx xxx" />
          </div>
          <div className="form-group">
            <label htmlFor="audit-email">Email de afaceri</label>
            <input id="audit-email" name="email" type="email" required placeholder="contact@compania-ta.ro" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="audit-equipment">Tip echipament / sector</label>
            <select id="audit-equipment" name="equipmentType" defaultValue="">
              <option value="">Selectează...</option>
              <option>Stație Asfalt / Baze de producție</option>
              <option>Uscător Cereale / Producție agricolă</option>
              <option>Cazan Abur / Apă Caldă</option>
              <option>Cuptor Industrial / Altele</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="audit-consumption">Consum estimat lunar</label>
            <select id="audit-consumption" name="consumption" defaultValue="">
              <option value="">Selectează...</option>
              <option>Sub 5 tone</option>
              <option>5 – 20 tone</option>
              <option>20 – 50 tone</option>
              <option>Peste 50 tone (VIP)</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="audit-burner">Brand & model arzător</label>
            <input id="audit-burner" name="burnerModel" type="text" placeholder="Ex: Riello 40 N20 / Baltur" />
          </div>
          <div className="form-group">
            <label htmlFor="audit-viscosity">Vâscozitate maximă admisă</label>
            <input id="audit-viscosity" name="viscosity" type="text" placeholder="Ex: max 6 cSt la 50°C" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="audit-address">Adresa completă pentru preluarea probei de către curier</label>
          <textarea id="audit-address" name="address" rows={3} required placeholder="Str. Industriilor Nr. 10, Depozit / Hală Centrală, Jud. ..." />
        </div>

        <div className="form-group">
          <label htmlFor="audit-photo">
            <Paperclip size={13} style={{ verticalAlign: "-2px", marginRight: "4px" }} />
            Poză cu plăcuța/eticheta tehnică a arzătorului (opțional)
          </label>
          <input id="audit-photo" name="photo" type="file" accept="image/*,.pdf" />
        </div>

        <label className="contact-checkbox">
          <input type="checkbox" name="consent" />
          <span>
            Sunt de acord cu condițiile programului de audit: înțeleg că laboratorul va emite gratuit
            Raportul Sintetic de Diagnoză (Semafor de Calitate), iar Buletinul Oficial cu valorile
            complete va fi eliberat la prima comandă de testare, conform{" "}
            <Link href="/politica-confidentialitate" target="_blank">Politicii de Confidențialitate</Link>.
          </span>
        </label>

        <SubmitButton />

        {state.success && (
          <div className="contact-status contact-status-success">
            <CheckCircle2 size={16} />
            <span>Mulțumim! Solicitarea a fost trimisă. Te contactăm în curând pentru prelevarea probei.</span>
          </div>
        )}

        {state.error && (
          <div className="contact-status contact-status-error">
            <span>{state.error}</span>
          </div>
        )}

      </form>
    </div>
  );
}
