import Link from "next/link";
import { Flame, Wrench, ShieldCheck, Truck, Check, BadgeCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Programul Partener Allied — Energie Rerafinată & Mentenanță Inclusă",
  description: "Treci pe Ecotherm Light 4 și primești service gratuit la instalația ta termică. Manoperă 0 lei, piese la preț de producător. Allied Total Care: energie rerafinată, mentenanță inclusă, risc zero.",
  keywords: "programul partener allied, ecotherm light 4, service gratuit arzatoare, combustibil industrial, allied total care, mentenanta inclusa",
};

export default function PartenerAlliedPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Programul Partener Allied</span>
          </div>

          <div className="page-hero-tag">
            Allied Total Care
          </div>

          <h1>
            Producem și comercializăm combustibil lichid optimizat
            {/* <br /> */}
            <em> și garantăm funcționarea centralei tale.</em>
          </h1>

          <p>
            Treci pe Ecotherm Light 4 și primești service-ul instalației
            tale termice inclus. Suntem atât de siguri pe calitatea
            combustibilului nostru, încât ne asumăm mentenanța.
          </p>

          <div className="total-care-slogan" style={{ marginTop: "1.5rem" }}>
            Energie rerafinată. Mentenanță inclusă. Risc zero.
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Vreau să fiu Partener Allied
            </Link>
            <Link href="/rafinare" className="btn btn-outline-light">
              Despre Ecotherm Light 4
            </Link>
          </div>
        </div>
      </div>

      {/* Produsul */}
      <section className="partener-section">
        <div className="container">

          <div className="section-tag green">Produsul</div>
          <h2>Ecotherm Light 4: combustibil rerafinat standardizat si personalizat.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "580px", marginTop: ".5rem" }}>
            Produs prin omogenizarea si analize de laborator detaliate a fractiilor de rafinare, standardizat dupa specificatiile echipamentelor termice.
            Același profil de ardere dupa standarde de combustibili lichizi, la cost redus și
            cu amprentă de carbon cu 80% mai mică.
          </p>

          <div className="partener-product-grid">
            <div className="partener-spec-card">
              <div className="partener-spec-num">10.350</div>
              <div className="partener-spec-unit">kcal/kg</div>
              <div className="partener-spec-label">Putere calorică</div>
            </div>
            <div className="partener-spec-card">
              <div className="partener-spec-num">0</div>
              <div className="partener-spec-unit">aditivi</div>
              <div className="partener-spec-label">Fără aditivi chimici agresivi</div>
            </div>
            <div className="partener-spec-card">
              <div className="partener-spec-num">IBP–FBP</div>
              <div className="partener-spec-unit">per lot</div>
              <div className="partener-spec-label">Curbă de distilare completă</div>
            </div>
            <div className="partener-spec-card">
              <div className="partener-spec-num">0,1</div>
              <div className="partener-spec-unit">%</div>
              <div className="partener-spec-label">Apă și sediment</div>
            </div>
            <div className="partener-spec-card">
              <div className="partener-spec-num">↓</div>
              <div className="partener-spec-unit">cost</div>
              <div className="partener-spec-label">Costuri de achiziție reduse</div>
            </div>
          </div>

        </div>
      </section>

      {/* Serviciul */}
      <section className="partener-service-section">
        <div className="container">

          <div className="section-tag" style={{ color: "#E07020" }}>Serviciul Inclus</div>
          <h2 className="white">Ce primești când devii partener.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Un singur contract cu Allied acoperă atât combustibilul
            cât și întreținerea instalației tale. Fără furnizori multipli,
            fără surprize pe factură.
          </p>

          <div className="partener-service-grid">

            <div className="partener-service-card">
              <div className="partener-service-icon">
                <Wrench size={24} color="#E07020" />
              </div>
              <h3>Mentenanță Preventivă</h3>
              <p>Revizii periodice planificate, reglaje de ardere și verificare parametri, fără cost de manoperă.</p>
            </div>

            <div className="partener-service-card">
              <div className="partener-service-icon">
                <Zap size={24} color="#E07020" />
              </div>
              <h3>Intervenții Corective</h3>
              <p>Dacă instalația se oprește, trimitem un tehnician sau oferim consultanta telefonica. Deplasare și manoperă incluse în contract.</p>
            </div>

            <div className="partener-service-card">
              <div className="partener-service-icon">
                <ShieldCheck size={24} color="#E07020" />
              </div>
              <h3>Piese la Preț de Producător</h3>
              <p>Componentele înlocuite sunt facturate la prețul de importator, fără adaos comercial speculativ.</p>
            </div>

            <div className="partener-service-card">
              <div className="partener-service-icon">
                <BadgeCheck size={24} color="#E07020" />
              </div>
              <h3>Garanție de Combustibil</h3>
              <p>Ardere curată, fără depuneri pe arzător. Dacă apar probleme legate de combustibil, Allied răspunde.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Avantaj economic */}
      <section className="partener-section">
        <div className="container">

          {/* <div className="section-tag green">Avantajul Economic</div> */}
          <h2>Avantajul Economic</h2>

          <div className="partener-econ-grid">

            <div className="partener-econ-item">
              <div className="partener-econ-icon"><Flame size={20} color="var(--green-mid)" /></div>
              <div>
                <h4>Combustibil competitiv</h4>
                <p>Ecotherm Light 4 este combustibil de calitate cu avantajul producatorului direct. Costul de producție este mai mic decât al combustibililor din țiței brut. Diferența ajunge la tine.</p>
              </div>
            </div>

            <div className="partener-econ-item">
              <div className="partener-econ-icon"><Wrench size={20} color="var(--green-mid)" /></div>
              <div>
                <h4>Zero costuri de service</h4>
                <p>Manopera de revizie, diagnoză și intervenție urgentă nu mai apar pe buget. Eliminăm costul imprevizibil al defecțiunilor neprogramate.</p>
              </div>
            </div>

            <div className="partener-econ-item">
              <div className="partener-econ-icon"><Truck size={20} color="var(--green-mid)" /></div>
              <div>
                <h4>Timpul de răspuns și cantitatea per livrare</h4>
                <p>Minim 2500 litri și timpul de răspuns maxim 7 zile de la comandă și plata facturii.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Certificare */}
      <section className="partener-cert-section">
        <div className="container">

          <div className="partener-cert-inner">
            <div>
              <div className="section-tag green">Certificare & Trasabilitate</div>
              <h2 className="white">Totul sub umbrela Allied.</h2>
              <p style={{ color: "var(--gray-500)", fontSize: ".9rem", lineHeight: "1.75", maxWidth: "480px", marginTop: ".5rem" }}>
                Allied Green Energy este producător autorizat integrat.
                Fiecare lot de combustibil vine cu buletin de analiză,
                cod de trasabilitate și documentație tehnica completă.
              </p>
            </div>
            <div className="partener-cert-checks">
              {[
                "Autorizație Integrată de Mediu",
                "Procese BAT certificate UE",
                "Buletin de analiză per lot",
                "Trasabilitate colectare → livrare",
                "Documentație audit ESG disponibilă",
              ].map((item) => (
                <div key={item} className="partener-cert-check">
                  <Check size={15} color="var(--green-mid)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="audit-cta-section">
        <div className="container">
          <div className="audit-cta-inner">
            <div className="audit-cta-icon">
              <Flame size={28} color="#D4A017" />
            </div>
            <div>
              <h3>Vrei să calculăm economia pentru instalația ta?</h3>
              <p>
                Spune-ne consumul lunar actual și tipul de instalație.
                Un specialist Allied îți trimite o comparație de costuri
                concretă în 24h, fără angajamente.
              </p>
            </div>
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", flexShrink: 0 }}>
              <Link href="/contact" className="btn btn-green">
                Vreau să fiu Partener Allied
              </Link>
              <Link href="/mentenanta-premium" className="btn btn-gold">
                Vrei SLA garantat 24-48h?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
