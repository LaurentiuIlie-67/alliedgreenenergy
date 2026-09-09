import Link from "next/link";
import Image from "next/image";
import { Wrench, Clock, ShieldCheck, Percent, Flame, Check, AlertTriangle, Fuel, Radio, TrendingDown, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Soluții Integrate de Ardere & Service IoT — Allied Green Energy",
  description: "Combustibil optimizat + monitorizare IoT 24/7. Reduci costurile de combustibil cu până la 30% și elimini opririle neplanificate prin mentenanță predictivă de la distanță.",
  keywords: "mentenanta premium, telemetrie IoT arzatoare, dispecerat combustibil, service IoT industrial, SLA arzatoare, allied green energy",
};

export default function MentenantaPremiumPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="lab-hero-split">

            <div>
              <div className="breadcrumb">
                <Link href="/">Acasă</Link>
                <span>›</span>
                <span>Mentenanță Premium</span>
              </div>

              <div
                className="page-hero-tag"
                style={{
                  background: "rgba(212,160,23,.12)",
                  borderColor: "rgba(212,160,23,.3)",
                  color: "#D4A017",
                }}
              >
                ★ Combustibil Optimizat + IoT 24/7
              </div>

              <h1>
                Combustibil Optimizat + Monitorizare IoT 24/7 =
                <br />
                <em style={{ color: "#D4A017" }}>Zero Opriri Neplanificate în Producție.</em>
              </h1>

              <p>
                Trecem instalația ta de ardere pe un nivel industrial avansat.
                Reducem costurile de combustibil cu până la 30% și îți garantăm
                continuitatea procesului tehnologic prin servicii de inginerie
                și mentenanță predictivă de la distanță.
              </p>

              <div className="total-care-slogan">
                Combustibil optimizat. Telemetrie IoT. Zero opriri neplanificate.
              </div>

              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact?dept=mentenanta-premium" className="btn btn-gold">
                  Solicită Audit Tehnic Gratuit
                </Link>
                <Link href="#pachete" className="btn btn-outline-light">
                  Vezi Pachetele de Mentenanță
                </Link>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/images/mentenanta-premium_photo_last.png"
                alt="Tablou Smart IoT: telemetrie și diagnoză 24/7 de la distanță"
                width={1536}
                height={1024}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

          </div>
        </div>
      </div>

      <section className="thermo-equip-section">
        <div className="container">

          <div className="section-tag" style={{ background: "rgba(212,160,23,.1)", borderColor: "rgba(212,160,23,.25)", color: "#B8860B" }}>
            Alege Categoria
          </div>
          <h2 className="white">Alege categoria potrivită afacerii tale.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "540px", marginTop: ".5rem" }}>
            Două profiluri de instalații, două pachete dedicate, fiecare
            cu cerințele lui tehnice specifice.
          </p>

          <div className="thermo-equip-grid">

            <div className="thermo-equip-card">
              <div className="thermo-equip-brand">Sub 500 kW</div>
              <h3>Panificație & Medii Severe</h3>
              <p>
                Pentru brutării, uscătorii, ateliere și hale unde praful,
                făina și umiditatea pun presiune constantă pe arzător.
              </p>
              <ul className="thermo-equip-list">
                <li>Protecție totală la făină și praf</li>
                <li>Aducțiune aer curat dedicată</li>
                <li>Telemetrie 4G și alerte WhatsApp</li>
              </ul>
              <Link href="#pachete" className="btn btn-gold" style={{ marginTop: "1.25rem", display: "inline-flex" }}>
                Vezi Detalii & Pachete
              </Link>
            </div>

            <div className="thermo-equip-card">
              <div className="thermo-equip-brand">0.5 – 10 MW</div>
              <h3>Industrial Heavy-Duty</h3>
              <p>
                Pentru fabrici mari, stații de asfalt, cazane de abur sau
                ulei termic și proiecte speciale de mare putere.
              </p>
              <ul className="thermo-equip-list">
                <li>Management electronic Siemens LMV</li>
                <li>Reglaj dinamic O₂-Trim în timp real</li>
                <li>Diagnoză CEMS continuă (O₂/CO/NOₓ)</li>
              </ul>
              <Link href="/solutii-industriale-mw" className="btn btn-outline-light" style={{ marginTop: "1.25rem", display: "inline-flex" }}>
                Solicită Audit Industrial MW
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">

          <div className="section-tag gray">Pilonii Serviciului Integrat</div>
          <h2>De ce noi.</h2>

          <div className="benefits-grid cols-3">

            <div className="benefit-card">
              <span className="benefit-tag gold">CLU</span>
              <div className="benefit-icon">
                <Fuel size={22} color="var(--dark)" />
              </div>
              <h3>Combustibil Lichid Optimizat</h3>
              <ul className="pricing-features">
                <li><Check size={14} color="#D4A017" /> Formulă dezvoltată pentru arzătoare industriale (Riello, Siemens etc.)</li>
                <li><Check size={14} color="#D4A017" /> Căldură calorică maximă la cel mai mic cost per kWh</li>
                <li><Check size={14} color="#D4A017" /> Ardere curată, fără depuneri care blochează duzele</li>
              </ul>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag gold">IoT</span>
              <div className="benefit-icon">
                <Radio size={22} color="var(--dark)" />
              </div>
              <h3>Telemetrie & Dispecerat Remote 24/7</h3>
              <ul className="pricing-features">
                <li><Check size={14} color="#D4A017" /> Module inteligente (PLC + Router 4G) pe tabloul arzătorului</li>
                <li><Check size={14} color="#D4A017" /> Monitorizăm presiune, ardere, temperatură și consum din dispecerat</li>
                <li><Check size={14} color="#D4A017" /> Prevenție, nu reparație: vedem problema înainte de avarie</li>
              </ul>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag gold">Service</span>
              <div className="benefit-icon">
                <Wrench size={22} color="var(--dark)" />
              </div>
              <h3>Mentenanță Preventivă & Intervenții Prioritare</h3>
              <ul className="pricing-features">
                <li><Check size={14} color="#D4A017" /> Revizii lunare/bilunare pentru medii severe de lucru</li>
                <li><Check size={14} color="#D4A017" /> Curățarea traseelor de aducțiune a aerului curat</li>
                <li><Check size={14} color="#D4A017" /> Echipament de rezervă și timp de răspuns prioritar prin contract</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="pricing-section" id="pachete">
        <div className="container">

          <div className="section-tag gray">Pachete Service & Siguranță</div>
          <h2>Alege nivelul de protecție.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Toate pachetele includ combustibilul optimizat Allied.
            Nivelul de telemetrie și timpul de răspuns garantat cresc
            odată cu severitatea mediului de lucru.
          </p>

          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Pachet</th>
                  <th>BASIC <span className="compare-badge green">Standard</span></th>
                  <th>PRO <span className="compare-badge green">Mediu Industrial</span></th>
                  <th>PREMIUM 24/7 <span className="compare-badge gold">Mediu Sever</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Destinație</td>
                  <td>Încălzire spații / hale mici</td>
                  <td>Producție medie / uscătorii</td>
                  <td>Brutării, mori, producție 24/7</td>
                </tr>
                <tr>
                  <td>Combustibil optimizat</td>
                  <td>Inclus</td>
                  <td>Inclus</td>
                  <td>Inclus (tarif preferențial)</td>
                </tr>
                <tr>
                  <td>Revizii programate</td>
                  <td>1 revizie / an</td>
                  <td>2 revizii / an</td>
                  <td>1-2 vizite lunare pe teren</td>
                </tr>
                <tr>
                  <td>Curățare traseu aer curat</td>
                  <td>Opțional</td>
                  <td>Inclus</td>
                  <td>Inclus (tubulatură + filtre)</td>
                </tr>
                <tr>
                  <td>Sistem IoT remote control</td>
                  <td>Înlocuit cu suport telefonic</td>
                  <td>Monitorizare stare</td>
                  <td style={{ color: "#B8860B", fontWeight: 600 }}>Telemetrie completă + alerte 24/7</td>
                </tr>
                <tr>
                  <td>SLA (timp de intervenție)</td>
                  <td>24 – 48 ore</td>
                  <td>Maxim 12 ore</td>
                  <td style={{ color: "#B8860B", fontWeight: 600 }}>Prioritar: sub 4-6 ore</td>
                </tr>
                <tr>
                  <td>Asistență video / SOP</td>
                  <td>Nu este inclusă</td>
                  <td>Inclusă</td>
                  <td>Training gratuit operator local</td>
                </tr>
                <tr>
                  <td>Tarif</td>
                  <td>Solicită ofertă</td>
                  <td>Solicită ofertă</td>
                  <td>Solicită ofertă</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bat-banner" style={{ marginTop: "2rem", background: "rgba(212,160,23,.06)", borderColor: "rgba(212,160,23,.2)", borderLeftColor: "#D4A017" }}>
            <TrendingDown size={20} color="#D4A017" />
            <p>
              <strong>Pachetul PREMIUM 24/7</strong> include instalarea unui sistem
              dedicat de telemetrie (tablou smart, senzori, router industrial), o
              investiție inițială de modernizare, separată de abonamentul lunar de
              operare și mentenanță. Îți trimitem o ofertă personalizată, în funcție
              de complexitatea instalației.
            </p>
          </div>

        </div>
      </section>

      <section className="passport-section">
        <div className="container">

          <div className="section-tag gray">Raport Lunar de Performanță</div>
          <h2>Vezi exact ce primești în fiecare lună.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Clienții Premium 24/7 primesc lunar un raport cu orele de
            funcționare, prevențiile făcute de la distanță și economiile
            realizate. Exemplu ilustrativ mai jos.
          </p>

          <div className="passport-layout">

            <div className="passport-card-mock">
              <div className="passport-card-top">
                <div>
                  <span className="passport-label">Raport Lunar Allied · Exemplu Ilustrativ</span>
                  <strong>Cuptor Pâine · Client Demo</strong>
                </div>
                <span className="passport-status-badge green">Excelent</span>
              </div>
              <div className="passport-card-body">
                <div className="passport-stat-row">
                  <span>Ore totale de funcționare</span>
                  <strong>320 ore</strong>
                </div>
                <div className="passport-stat-row">
                  <span>Porniri (cicluri)</span>
                  <strong>1.240 porniri</strong>
                </div>
                <div className="passport-stat-row">
                  <span>Randament mediu de ardere</span>
                  <strong>93,8%</strong>
                </div>
                <div className="passport-stat-row">
                  <span>Vizite preventive pe teren</span>
                  <strong>2 vizite</strong>
                </div>
                <div className="passport-stat-row">
                  <span>Valoare generată/salvată</span>
                  <strong style={{ color: "var(--green-mid)" }}>~18.300 RON*</strong>
                </div>
              </div>
              <div className="passport-card-footer">
                <span>Allied Premium 24/7</span>
                <span>Exemplu, nu date reale de client</span>
              </div>
            </div>

            <div className="passport-features">
              <div className="passport-feature">
                <div className="passport-feature-dot gold" />
                <div>
                  <h4>Monitorizare de la distanță</h4>
                  <p>Alertele IoT din dispeceratul nostru, cu acțiunile luate pentru fiecare, de exemplu o scădere de presiune depistată și rezolvată înainte de avarie.</p>
                </div>
              </div>
              <div className="passport-feature">
                <div className="passport-feature-dot gold" />
                <div>
                  <h4>Mentenanță preventivă pe teren</h4>
                  <p>Fiecare vizită documentată: ce s-a curățat, ce s-a verificat, ce analize de gaze s-au făcut.</p>
                </div>
              </div>
              <div className="passport-feature">
                <div className="passport-feature-dot gold" />
                <div>
                  <h4>Impact financiar estimat</h4>
                  <p>Economie din randament, opriri neplanificate prevenite și deplasări de urgență evitate, traduse în lei, pe înțelesul tău.</p>
                </div>
              </div>
              <div className="passport-feature">
                <div className="passport-feature-dot gold" />
                <div>
                  <h4>Recomandări pentru luna următoare</h4>
                  <p>Includem observații pentru personalul din teren și data următoarei revizii programate.</p>
                </div>
              </div>
            </div>

          </div>
          <p style={{ color: "var(--gray-500)", fontSize: ".72rem", fontStyle: "italic", marginTop: "1rem" }}>
            *Exemplu ilustrativ, cifrele reale variază în funcție de instalație și diferă de la un raport la altul.
          </p>

        </div>
      </section>

      <section className="spec-section">
        <div className="container">
          <div className="crosssell-banner">
            <div className="crosssell-text">
              <strong>🍞 Studiu de caz: Eficientizare & Siguranță pentru Industria Alimentară</strong>
              <p>
                <strong>Problema:</strong> O brutărie industrială se confrunta cu opriri
                frecvente ale arzătoarelor din cauza făinii și umidității din secție,
                generând pierderi de aluat și costuri mari de reparații.
              </p>
              <p>
                <strong>Soluția Allied:</strong> Am convertit sistemul de ardere pe
                combustibil optimizat, am proiectat un traseu dedicat de aducțiune aer
                curat din exterior și am montat un tablou Smart IoT pentru monitorizare
                în timp real din dispeceratul nostru.
              </p>
              <p>
                <strong>Rezultat:</strong> 0 opriri neprevăzute în ultimul an, reducerea
                costurilor de operare cu 25% și timp de intervenție la distanță de sub
                15 minute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">

          <div className="section-tag gray">Întrebări Frecvente</div>
          <h2>Ce trebuie să știi.</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2.5rem", maxWidth: "760px" }}>

            <div>
              <h4 style={{ display: "flex", alignItems: "center", gap: ".5rem", fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--dark)" }}>
                <HelpCircle size={18} color="#D4A017" /> De ce trebuie să folosesc combustibilul vostru?
              </h4>
              <p style={{ color: "var(--gray-500)", fontSize: ".88rem", lineHeight: "1.7", marginTop: ".4rem", marginLeft: "1.6rem" }}>
                Combustibilul nostru este calibrat chimic pentru parametrii arzătoarelor pe
                care le service-uim. Folosirea lui garantează durata maximă de viață a
                duzelor și menținerea garanției pe pachetul de service IoT.
              </p>
            </div>

            <div>
              <h4 style={{ display: "flex", alignItems: "center", gap: ".5rem", fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--dark)" }}>
                <HelpCircle size={18} color="#D4A017" /> Ce se întâmplă dacă arzătorul se oprește în weekend?
              </h4>
              <p style={{ color: "var(--gray-500)", fontSize: ".88rem", lineHeight: "1.7", marginTop: ".4rem", marginLeft: "1.6rem" }}>
                Prin abonamentul Premium 24/7, sistemul nostru primește instant alerta de
                avarie. În majoritatea cazurilor, tehnicianul ghidează operatorul dvs. prin
                apel video pentru deblocare rapidă. Dacă problema este mecanică, echipa se
                deplasează prioritar la locație.
              </p>
            </div>

            <div>
              <h4 style={{ display: "flex", alignItems: "center", gap: ".5rem", fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--dark)" }}>
                <HelpCircle size={18} color="#D4A017" /> Se pot adăuga module IoT și pe arzătoare mai vechi?
              </h4>
              <p style={{ color: "var(--gray-500)", fontSize: ".88rem", lineHeight: "1.7", marginTop: ".4rem", marginLeft: "1.6rem" }}>
                Da. Proiectăm tablouri IoT de retrofit care se adaptează pe orice automat de
                ardere existent, fără a altera siguranța originală a echipamentului.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="thermo-conditions-section">
        <div className="container">

          <div className="section-tag" style={{ background: "rgba(212,160,23,.1)", borderColor: "rgba(212,160,23,.25)", color: "#B8860B" }}>
            Eligibilitate
          </div>
          <h2 className="white">Disponibil pentru clienții Allied existenți.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "540px", marginTop: ".5rem" }}>
            Pachetele de mentenanță sunt un upgrade opțional peste service-ul
            standard, pentru companiile care au nevoie de garanții
            suplimentare de continuitate.
          </p>

          <div className="thermo-conditions-grid" style={{ gridTemplateColumns: "1fr", maxWidth: "640px" }}>

            <div className="thermo-condition-card" style={{ borderColor: "rgba(212,160,23,.25)" }}>
              <div className="thermo-condition-icon">
                <Flame size={28} color="#D4A017" />
              </div>
              <h3>Combustibil sau Echipament Allied</h3>
              <p>
                Pachetele sunt disponibile pentru instalații termice
                alimentate cu combustibil Allied sau achiziționate
                direct de la noi.
              </p>
              <div className="thermo-condition-check">
                <Check size={14} color="#D4A017" />
                <span>Combustibil termic lichid Allied în uz curent</span>
              </div>
              <div className="thermo-condition-check">
                <Check size={14} color="#D4A017" />
                <span>Sau echipament termic achiziționat prin Allied</span>
              </div>
              <div className="thermo-condition-check">
                <Check size={14} color="#D4A017" />
                <span>Fără modificări neautorizate ale echipamentului</span>
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
              <h3>Nu mai lăsa avariile tehnice să-ți oprească afacerea!</h3>
              <p>
                Programează o inspecție tehnică a instalației tale de ardere.
                Echipa noastră de ingineri îți evaluează echipamentul și îți
                propune cea mai bună soluție de eficientizare și monitorizare.
              </p>
            </div>
            <Link href="/contact?dept=mentenanta-premium" className="btn btn-gold" style={{ flexShrink: 0 }}>
              Programează o Evaluare Tehnică
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
