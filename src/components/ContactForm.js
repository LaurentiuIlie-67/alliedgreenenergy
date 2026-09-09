"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Truck, Microscope, Star, Flame, Phone, Mail, Fuel, Beaker, ShieldCheck, Factory, Loader2, CheckCircle2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

const DEPTS = [
  { id: "colectare",          label: "Colectare",          icon: <Truck size={15} />,      cls: "g" },
  { id: "laborator",          label: "Laborator",          icon: <Microscope size={15} />, cls: "b" },
  { id: "fleet-gold",         label: "Fleet Gold",         icon: <Star size={15} />,       cls: "y" },
  { id: "echipamente-termice",label: "Echipamente Termice",icon: <Flame size={15} />,      cls: "r" },
  { id: "combustibil",        label: "Combustibil",        icon: <Fuel size={15} />,       cls: "g" },
  { id: "ulei-baza",          label: "Ulei de Bază",       icon: <Beaker size={15} />,     cls: "b" },
  { id: "mentenanta-premium", label: "Mentenanță Premium", icon: <ShieldCheck size={15} />,cls: "y" },
  { id: "mw-heavy-duty",      label: "Industrial MW",      icon: <Factory size={15} />,    cls: "r" },
];

const EXTRA_FIELDS = {
  colectare: [
    { name: "location",  label: "Localitate / Județ",          placeholder: "ex. Cluj-Napoca, Cluj",          type: "text" },
    { name: "oilType",   label: "Tipul de ulei uzat",           placeholder: "ex. ulei motor, ulei hidraulic", type: "text" },
    { name: "quantity",  label: "Cantitate estimată (litri)",   placeholder: "ex. 500",                        type: "text" },
    { name: "frequency", label: "Frecvență ridicare",           placeholder: "Săptămânal / Lunar / La cerere", type: "text" },
  ],
  laborator: [
    { name: "equipment", label: "Tip echipament / motor",       placeholder: "ex. Scania R500, excavator Caterpillar", type: "text" },
    { name: "machines",  label: "Număr de utilaje",             placeholder: "ex. 12",                        type: "text" },
    { name: "urgency",   label: "Urgență",                      placeholder: "Standard (24h) / Urgent (12h)", type: "text" },
  ],
  "fleet-gold": [
    { name: "company",   label: "Nume companie",                placeholder: "ex. Trans SRL",                 type: "text" },
    { name: "machines",  label: "Număr de utilaje / camioane",  placeholder: "ex. 25",                        type: "text" },
    { name: "quotation", label: "Vreau o cotație pentru analiza flotei mele",                                  type: "checkbox" },
  ],
  "echipamente-termice": [
    { name: "company",      label: "Nume companie",                                                                          placeholder: "ex. Hală Producție SRL", type: "text" },
    { name: "fuelType",     label: "Tipul de combustibil utilizat în prezent",                                               placeholder: "ex. motorină, gaz natural", type: "text" },
    { name: "hasRiello",    label: "Dețin deja echipament termic și vreau combustibil + service gratuit",                    type: "checkbox" },
    { name: "wantsPackage", label: "Vreau o ofertă integrată (Echipament termic + Combustibil Allied)",                      type: "checkbox" },
    { name: "wantsSla",     label: "Vreau informații despre abonamentul SLA Premium (timp de răspuns garantat 24-48h)",      type: "checkbox" },
  ],
  combustibil: [
    { name: "company",   label: "Nume companie",                placeholder: "ex. Hală Producție SRL",         type: "text" },
    { name: "quantity",  label: "Cantitate comandă (litri)",     placeholder: "ex. 2500",                       type: "text" },
    { name: "delivery",  label: "Modalitate de livrare dorită",  placeholder: "Cisternă / IBC sigilat",         type: "text" },
    { name: "frequency", label: "Tip comandă",                   placeholder: "Comandă unică / Livrare programată", type: "text" },
  ],
  "ulei-baza": [
    { name: "company",        label: "Nume companie",                          placeholder: "ex. Lubrifianți SRL",  type: "text" },
    { name: "classification", label: "Clasificare dorită",                     placeholder: "Group I / Group II",   type: "text" },
    { name: "quantity",       label: "Cantitate estimată (litri)",             placeholder: "ex. 1000",             type: "text" },
    { name: "usage",          label: "Utilizare preconizată",                  placeholder: "ex. producție lubrifianți", type: "text" },
  ],
  "mentenanta-premium": [
    { name: "company",  label: "Nume companie",                placeholder: "ex. Brutăria Ana SRL",              type: "text" },
    { name: "power",    label: "Putere echipament (kW)",       placeholder: "ex. 150",                           type: "text" },
    { name: "package",  label: "Pachet dorit",                 placeholder: "Basic / Pro / Premium 24/7",        type: "text" },
    { name: "monthly",  label: "Consum lunar aproximativ",     placeholder: "ex. 5.000 litri",                   type: "text" },
  ],
  "mw-heavy-duty": [
    { name: "company",  label: "Nume companie",                placeholder: "ex. Fabrica Nord SRL",              type: "text" },
    { name: "power",    label: "Putere echipament (kW / MW)",  placeholder: "ex. 2 MW",                          type: "text" },
    { name: "fuelType", label: "Tip combustibil",               placeholder: "CLU / Motorină / Păcură",           type: "text" },
    { name: "phone",    label: "Telefon",                       placeholder: "07xx xxx xxx",                      type: "text" },
  ],
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const deptParam = searchParams.get("dept");
  const initialDept = DEPTS.some((d) => d.id === deptParam) ? deptParam : "colectare";
  const [dept, setDept] = useState(initialDept);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [extra, setExtra] = useState({});
  const [consent, setConsent] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleExtra(e) {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setExtra({ ...extra, [e.target.name]: val });
  }

  function handleDept(id) {
    setDept(id);
    setExtra({});
    setStatus(null);
  }

  const activeDept = DEPTS.find((d) => d.id === dept);
  const extraFields = EXTRA_FIELDS[dept] || [];

  function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!consent) {
      setStatus("error");
      setErrorMsg("Trebuie să fii de acord cu prelucrarea datelor pentru a trimite formularul.");
      return;
    }

    const extraDetails = extraFields
      .map((f) => {
        const val = extra[f.name];
        if (val === undefined || val === "" || val === false) return null;
        return { label: f.label, value: f.type === "checkbox" ? "Da" : val };
      })
      .filter(Boolean);

    startTransition(async () => {
      const result = await sendContactEmail({
        deptLabel: activeDept.label,
        name: form.name,
        email: form.email,
        message: form.message,
        extraDetails,
      });

      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setExtra({});
        setConsent(false);
      } else {
        setStatus("error");
        setErrorMsg(result.error);
      }
    });
  }

  return (
    <div className="contact-layout">

      <div>
        <div className="dept-section">
          <h3>Alege departamentul</h3>

          <div className="dept-btns">
            {DEPTS.map((d) => (
              <button
                key={d.id}
                type="button"
                className={`dept-btn ${d.cls}${dept === d.id ? ` dept-btn-active` : ""}`}
                onClick={() => handleDept(d.id)}
              >
                {d.icon} {d.label}
              </button>
            ))}
          </div>
        </div>

        <div className="contact-lines">

          <div className="contact-line">
            <div className="contact-line-icon">
              <Phone size={18} />
            </div>
            <div>
              <strong>Telefon</strong>
              <span>+40 700 000 000</span>
            </div>
          </div>

          <div className="contact-line">
            <div className="contact-line-icon">
              <Mail size={18} />
            </div>
            <div>
              <strong>Email</strong>
              <span>office@alliedgreenco.ro</span>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div className="smart-form">
          <h3>Solicitare: {activeDept.label}</h3>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Nume</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Numele tău"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="adresa@email.ro"
                />
              </div>
            </div>

            {extraFields.map((f) =>
              f.type === "checkbox" ? (
                <label key={f.name} className="contact-checkbox">
                  <input
                    type="checkbox"
                    name={f.name}
                    checked={extra[f.name] || false}
                    onChange={handleExtra}
                  />
                  <span>{f.label}</span>
                </label>
              ) : (
                <div key={f.name} className="form-group">
                  <label htmlFor={`extra-${f.name}`}>{f.label}</label>
                  <input
                    id={`extra-${f.name}`}
                    name={f.name}
                    type={f.type}
                    value={extra[f.name] || ""}
                    onChange={handleExtra}
                    placeholder={f.placeholder}
                  />
                </div>
              )
            )}

            <div className="form-group">
              <label htmlFor="contact-message">Mesaj</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Detalii suplimentare..."
              />
            </div>

            <label className="contact-checkbox">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>
                Sunt de acord cu prelucrarea datelor mele cu caracter personal, conform{" "}
                <Link href="/politica-confidentialitate" target="_blank">Politicii de Confidențialitate</Link>.
              </span>
            </label>

            <button type="submit" className="btn btn-green btn-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 size={16} className="spin" /> Se trimite...
                </>
              ) : (
                "Trimite Solicitarea"
              )}
            </button>

            {status === "success" && (
              <div className="contact-status contact-status-success">
                <CheckCircle2 size={16} />
                <span>Mulțumim! Solicitarea a fost trimisă. Te contactăm în curând.</span>
              </div>
            )}

            {status === "error" && (
              <div className="contact-status contact-status-error">
                <span>{errorMsg}</span>
              </div>
            )}

          </form>
        </div>
      </div>

    </div>
  );
}
