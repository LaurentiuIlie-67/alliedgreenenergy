import Link from "next/link";
import { Zap, Microscope, FileText, Phone, Check, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Allied Fleet Gold — Program Premium Flote Industriale",
  description: "Analize ulei prioritare 12–24h, pașaport tehnic digital, consultant dedicat. Pachete Esențial, Pro, Enterprise pentru flote de la 10 la 500+ vehicule.",
  keywords: "fleet gold, program flota, analiza ulei flota, diagnoza preventiva, pasaport tehnic vehicul, management flota ulei, consultant tehnic flota",
};

export default function FleetGoldPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Fleet Gold</span>
          </div>

          <div
            className="page-hero-tag"
            style={{
              background: "rgba(212,160,23,.12)",
              borderColor: "rgba(212,160,23,.3)",
              color: "#D4A017",
            }}
          >
            ★ Program Premium
          </div>

          <h1>
            Allied Fleet Gold
            <br />
            <em>Continuitate și valoare.</em>
          </h1>

          <p>
            Program dedicat flotelor industriale care vor
            mai mult decât o colectare periodică: diagnoză
            preventivă, rapoarte consolidate și un consultant
            tehnic care răspunde direct la telefon.
          </p>

          <div className="gold-hero-extra">
            <div className="gold-kpi">
              <div className="n">12–24h</div>
              <div className="l">Analize prioritare</div>
            </div>
            <div className="gold-kpi">
              <div className="n">0%</div>
              <div className="l">Adaos comercial</div>
            </div>
          </div>
        </div>
      </div>

      <section className="benefits-section">
        <div className="container">

          <div className="section-tag gray">Beneficii Exclusive</div>
          <h2>Tot ce primești ca partener.</h2>

          <div className="benefits-grid">

            <div className="benefit-card">
              <span className="benefit-tag gold">★ Prioritate</span>
              <div className="benefit-icon">
                <Zap size={22} color="var(--dark)" />
              </div>
              <h3>Analiză Rapidă</h3>
              <p>
                Probele Gold sunt procesate cu prioritate.
                Rezultatele ajung la tine în maximum 12–24h,
                nu 48–72h ca în cazul clienților obișnuiți.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag blue">Prevenție</span>
              <div className="benefit-icon">
                <Microscope size={22} color="var(--dark)" />
              </div>
              <h3>Diagnoză Preventivă</h3>
              <p>
                Nu așteptăm să cedeze ceva. Monitorizăm
                tendințele de uzură pe mai multe probe și
                semnalăm din timp motoarele la risc.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag gold">Raportare</span>
              <div className="benefit-icon">
                <FileText size={22} color="var(--dark)" />
              </div>
              <h3>Raport Lunar Consolidat</h3>
              <p>
                La final de lună primești un tablou complet
                al stării flotei: tendințe de uzură, motoare
                la risc și istoricul tuturor intervențiilor.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag blue">Suport</span>
              <div className="benefit-icon">
                <Phone size={22} color="var(--dark)" />
              </div>
              <h3>Consultant Tehnic Dedicat</h3>
              <p>
                Un specialist Allied răspunde direct la
                telefonul tău. Fără centre de apel,
                fără bilete de suport, fără întârzieri.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">

          <div className="section-tag gray">Pachete Fleet Gold</div>
          <h2>Alege nivelul potrivit flotei tale.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "520px", marginTop: ".5rem" }}>
            Toate pachetele includ colectare gratuită, documentație
            completă și acces la consultantul tău tehnic dedicat.
            Fără costuri ascunse.
          </p>

          <div className="pricing-grid">

            <div className="pricing-card">
              <div className="pricing-card-head">
                <div className="pricing-tier-label">Esențial</div>
                <div className="pricing-vehicles">până la 10 vehicule</div>
              </div>
              <ul className="pricing-features">
                <li><Check size={14} color="var(--green-mid)" /> Colectare ulei uzat gratuită</li>
                <li><Check size={14} color="var(--green-mid)" /> Analize prioritare 24h</li>
                <li><Check size={14} color="var(--green-mid)" /> Raport Semafor per vehicul</li>
                <li><Check size={14} color="var(--green-mid)" /> Raport lunar consolidat</li>
                <li><Check size={14} color="var(--green-mid)" /> Suport email dedicat</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark btn-full">
                Contactează-ne
              </Link>
            </div>

            <div className="pricing-card pricing-card-featured">
              <div className="pricing-card-head">
                <div className="pricing-featured-badge">★ Cel mai ales</div>
                <div className="pricing-tier-label gold">Pro</div>
                <div className="pricing-vehicles">10 – 50 vehicule</div>
              </div>
              <ul className="pricing-features">
                <li><Check size={14} color="#D4A017" /> Tot ce include Esențial</li>
                <li><Check size={14} color="#D4A017" /> Analize prioritare 12h</li>
                <li><Check size={14} color="#D4A017" /> Pașaport Digital per vehicul</li>
                <li><Check size={14} color="#D4A017" /> Diagnoză predictivă avansată</li>
                <li><Check size={14} color="#D4A017" /> Consultant tehnic la telefon</li>
                <li><Check size={14} color="#D4A017" /> Acces portal Gold</li>
              </ul>
              <Link href="/contact" className="btn btn-gold btn-full">
                Contactează-ne
              </Link>
            </div>

            <div className="pricing-card">
              <div className="pricing-card-head">
                <div className="pricing-tier-label">Enterprise</div>
                <div className="pricing-vehicles">50+ vehicule</div>
              </div>
              <ul className="pricing-features">
                <li><Check size={14} color="var(--green-mid)" /> Tot ce include Pro</li>
                <li><Check size={14} color="var(--green-mid)" /> SLA personalizat</li>
                <li><Check size={14} color="var(--green-mid)" /> Raport trimestrial de audit</li>
                <li><Check size={14} color="var(--green-mid)" /> Integrare sistem fleet propriu</li>
                <li><Check size={14} color="var(--green-mid)" /> Manager de cont dedicat</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark btn-full">
                Contactează-ne
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="passport-section">
        <div className="container">

          <div className="section-tag gray">Pașaport Tehnic Digital</div>
          <h2>Istoricul complet al fiecărui vehicul.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "540px", marginTop: ".5rem" }}>
            Fiecare vehicul din flota ta primește un dosar digital permanent.
            Acces instant la istoricul de analize, intervenții și tendințe de uzură,
            oricând, de pe orice dispozitiv.
          </p>

          <div className="passport-layout">

            <div className="passport-card-mock">
              <div className="passport-card-top">
                <div>
                  <span className="passport-label">Pașaport Tehnic Allied</span>
                  <strong>Motor Wola 6AL · Grup Electrogen Hală</strong>
                </div>
                <span className="passport-status-badge green">Sănătos</span>
              </div>
              <div className="passport-card-body">
                <div className="passport-stat-row">
                  <span>Ultima analiză</span>
                  <strong>12 mai 2025</strong>
                </div>
                <div className="passport-stat-row">
                  <span>Analize efectuate</span>
                  <strong>14 total</strong>
                </div>
                <div className="passport-stat-row">
                  <span>Ore la ultima schimbare</span>
                  <strong>3.200 ore</strong>
                </div>
                <div className="passport-stat-row">
                  <span>Tendință uzură Fe</span>
                  <strong style={{ color: "var(--green-mid)" }}>▼ Stabilă</strong>
                </div>
                <div className="passport-stat-row">
                  <span>Alertă activă</span>
                  <strong style={{ color: "var(--red)" }}>Glicol detectat: urgent</strong>
                </div>
              </div>
              <div className="passport-card-footer">
                <span>Allied Fleet Gold · Pro</span>
                <span>ID LOT #AG-2025-0512</span>
              </div>
            </div>

            <div className="passport-features">
              <div className="passport-feature">
                <div className="passport-feature-dot gold" />
                <div>
                  <h4>Istoric complet per vehicul</h4>
                  <p>Toate analizele, în ordine cronologică, cu grafice de tendință pentru fiecare parametru monitorizat.</p>
                </div>
              </div>
              <div className="passport-feature">
                <div className="passport-feature-dot gold" />
                <div>
                  <h4>Alerte automate</h4>
                  <p>Primești notificare prin SMS sau email în momentul în care un parametru depășește pragul galben sau roșu.</p>
                </div>
              </div>
              <div className="passport-feature">
                <div className="passport-feature-dot gold" />
                <div>
                  <h4>Export PDF la cerere</h4>
                  <p>Generezi raportul complet al unui vehicul în format PDF, util pentru inspecții tehnice sau asiguratori.</p>
                </div>
              </div>
              <div className="passport-feature">
                <div className="passport-feature-dot gold" />
                <div>
                  <h4>Disponibil din pachetul Pro</h4>
                  <p>Pașaportul Digital este inclus în pachetele Pro și Enterprise. Esențial include Raport Semafor per vehicul.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="audit-cta-section">
        <div className="container">
          <div className="audit-cta-inner">
            <div className="audit-cta-icon">
              <AlertTriangle size={28} color="#D4A017" />
            </div>
            <div>
              <h3>Inspecție de mediu iminentă?</h3>
              <p>
                Clienții Fleet Gold primesc suport prioritar de conformitate.
                Un specialist Allied te ghidează prin documentație în mai puțin de 2h.
              </p>
            </div>
            <Link href="/contact" className="btn btn-gold" style={{ flexShrink: 0 }}>
              Cere Audit Control
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
