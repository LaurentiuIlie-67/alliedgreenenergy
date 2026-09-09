import Link from "next/link";
import { Cpu, Gauge, Radio, Phone, Check, AlertTriangle, Factory } from "lucide-react";

export const metadata = {
  title: "Soluții Industriale Heavy-Duty (0.5-10 MW) — Allied Green Energy",
  description: "Inginerie de ardere de mare putere: combustibil optimizat, automatizare Siemens LMV, O2-Trim și monitorizare CEMS 24/7 pentru arzătoare de la 500 kW la 10 MW.",
  keywords: "arzatoare industriale MW, siemens LMV, O2 trim, CEMS, cazane abur ulei termic, statii asfalt combustibil, allied green energy",
};

export default function SolutiiIndustrialeMwPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Soluții Industriale Heavy-Duty</span>
          </div>

          <div className="page-hero-tag blue-tag">
            ★ 0.5 – 10 MW
          </div>

          <h1>
            Inginerie de Ardere de Mare Putere.
            <br />
            <em className="blue">Eficiență calorică maximă, control digital Siemens.</em>
          </h1>

          <p>
            În domeniul industrial mare, un randament scăzut cu doar 2% sau o
            oprire de câteva ore poate însemna zeci de mii de euro pierderi.
            Pachetul Heavy-Duty integrează combustibilul lichid optimizat cu
            cele mai avansate sisteme digitale de automatizare, pentru
            arzătoare de la 500 kW până la 10 MW (Riello, Weishaupt, Saacke).
          </p>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact?dept=mw-heavy-duty" className="btn btn-blue">
              Solicită Audit Industrial MW
            </Link>
            <Link href="/mentenanta-premium" className="btn btn-outline-light">
              Vezi Pachetele Comerciale
            </Link>
          </div>
        </div>
      </div>

      <section className="benefits-section">
        <div className="container">

          <div className="section-tag" style={{ color: "var(--blue-mid)" }}>Arhitectura Smart pentru Puteri Mari</div>
          <h2>Ce include sistemul Heavy-Duty.</h2>

          <div className="benefits-grid cols-3">

            <div className="benefit-card">
              <span className="benefit-tag blue">BMS Digital</span>
              <div className="benefit-icon">
                <Cpu size={22} color="var(--dark)" />
              </div>
              <h3>Automation & Burner Management</h3>
              <ul className="pricing-features">
                <li><Check size={14} color="var(--blue-mid)" /> Management electronic de ardere Siemens LMV51/52: eliminăm camele mecanice uzate</li>
                <li><Check size={14} color="var(--blue-mid)" /> Reglaj independent milimetric al aerului și combustibilului</li>
                <li><Check size={14} color="var(--blue-mid)" /> Sistem O₂-Trim: corecție dinamică de oxigen în timp real</li>
              </ul>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag blue">CEMS</span>
              <div className="benefit-icon">
                <Gauge size={22} color="var(--dark)" />
              </div>
              <h3>Telemetrie & Analiză Continuă</h3>
              <ul className="pricing-features">
                <li><Check size={14} color="var(--blue-mid)" /> Analiză continuă O₂, CO, NOₓ: stație fixă de prelevare și uscare probă gaz</li>
                <li><Check size={14} color="var(--blue-mid)" /> Contorizare masică de consum, litri/oră raportat la tona de produs</li>
                <li><Check size={14} color="var(--blue-mid)" /> Monitorizare automată a supapelor de siguranță (VPS)</li>
              </ul>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag blue">Dispecerat</span>
              <div className="benefit-icon">
                <Radio size={22} color="var(--dark)" />
              </div>
              <h3>Dispecerat Dedicat & Service Proactiv</h3>
              <ul className="pricing-features">
                <li><Check size={14} color="var(--blue-mid)" /> Alertare instantă în caz de anomalii termice sau scădere de randament</li>
                <li><Check size={14} color="var(--blue-mid)" /> Raportare automată pe e-mail cu metricele de mediu și consum lunar</li>
                <li><Check size={14} color="var(--blue-mid)" /> Echipă tehnică dedicată, timp de răspuns contractual (SLA garantat)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="anatomy-section" style={{ background: "var(--off-white)" }}>
        <div className="container">

          <div className="section-tag" style={{ color: "var(--blue-mid)" }}>Modelul de Colaborare</div>
          <h2>Doi pași, roluri clare.</h2>

          <div className="anatomy-steps" style={{ gridTemplateColumns: "1fr auto 1fr" }}>

            <div className="anatomy-step">
              <div className="anatomy-step-num">01</div>
              <div className="anatomy-step-icon">
                <Cpu size={22} color="var(--blue-mid)" />
              </div>
              <h3>Implementare & Modernizare Hardware</h3>
              <p>
                Proiectare, livrare și montaj tablou Smart IP65, PLC Siemens,
                modul de comunicație Modbus, senzori industriali de
                presiune/temperatură și stație fixă de analiză gaze.
                Echipamentul devine proprietatea dumneavoastră.
              </p>
              <div className="anatomy-step-tag">Tranșă unică · Avans la comandă</div>
            </div>

            <div className="anatomy-step-arrow">→</div>

            <div className="anatomy-step">
              <div className="anatomy-step-num">02</div>
              <div className="anatomy-step-icon">
                <Radio size={22} color="var(--blue-mid)" />
              </div>
              <h3>Abonament de Operare & Telemetrie</h3>
              <p>
                Monitorizare 24/7 din dispecerat, audit lunar de eficiență,
                revizii periodice pe teren și prețuri preferențiale la
                combustibilul optimizat.
              </p>
              <div className="anatomy-step-tag">Factură lunară fixă</div>
            </div>

          </div>

        </div>
      </section>

      <section className="spec-section">
        <div className="container">

          <div className="section-tag" style={{ color: "var(--blue-mid)" }}>Exemplu de Amortizare</div>
          <h2>Cât economisești, concret.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Exemplu ilustrativ pentru un arzător de 2 MW, cifrele reale
            variază în funcție de instalație și consum.
          </p>

          <div className="ecotherm-specs" style={{ marginTop: "2rem", maxWidth: "560px" }}>
            <div className="spec-row">
              <span className="label">Consum lunar mediu</span>
              <span className="value">40.000 litri CLU</span>
            </div>
            <div className="spec-row">
              <span className="label">Economie prin IoT + O₂-Trim (~5%)</span>
              <span className="value">2.000 litri / lună</span>
            </div>
            <div className="spec-row">
              <span className="label">Economie financiară estimată</span>
              <span className="value">~1.800 – 2.500 € / lună</span>
            </div>
            <div className="spec-row">
              <span className="label">Amortizare investiție inițială</span>
              <span className="value">3 – 5 luni*</span>
            </div>
          </div>
          <p style={{ color: "var(--gray-500)", fontSize: ".72rem", fontStyle: "italic", marginTop: "1rem" }}>
            *Exemplu ilustrativ, nu o garanție contractuală. Depinde de consumul și starea instalației tale.
          </p>

        </div>
      </section>

      <section className="audit-cta-section">
        <div className="container">
          <div className="audit-cta-inner">
            <div className="audit-cta-icon" style={{ background: "rgba(0,92,169,.12)", borderColor: "rgba(0,92,169,.25)" }}>
              <Factory size={28} color="var(--blue-mid)" />
            </div>
            <div>
              <h3>Ai o instalație de peste 500 kW?</h3>
              <p>
                Solicită un audit tehnologic la locație. Inginerii noștri
                evaluează arzătorul, starea automatizării actuale și traseul
                de gaz/aer pentru a-ți propune cea mai bună soluție de
                eficientizare.
              </p>
            </div>
            <Link href="/contact?dept=mw-heavy-duty" className="btn btn-blue" style={{ flexShrink: 0 }}>
              Programează Inspecția Tehnică
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
