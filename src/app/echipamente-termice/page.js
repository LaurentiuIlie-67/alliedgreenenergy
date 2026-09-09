import Link from "next/link";
import { Flame, Wrench, Shield, Package, Check, Phone, Thermometer, Zap } from "lucide-react";
import HeroBgSlider from "@/components/HeroBgSlider";

export const metadata = {
  title: "Echipamente Termice & Service Riello — Allied Green Energy",
  description: "Service gratuit pentru arzătoare și cazane Riello dacă folosești combustibilul Allied. Manoperă, diagnoză și consultanță 0 lei. Piese la prețul de importator.",
  keywords: "service riello, arzatoare riello, cazane industriale, echipamente termice, service gratuit arzatoare, combustibil industrial allied",
};

export default function EchipamenteTermicePage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Echipamente Termice</span>
          </div>

          <div
            className="page-hero-tag"
            style={{
              background: "rgba(224,112,32,.12)",
              borderColor: "rgba(224,112,32,.35)",
              color: "#E07020",
            }}
          >
            ★ Program Service 0 Lei
          </div>

          <h1>
            Inima termică a afacerii tale
            <br />
            <em style={{ color: "#E07020" }}>în grija noastră.</em>
          </h1>

          <p>
            Dacă echipamentul tău termic industrial funcționează pe combustibilul Allied, noi acoperim tot
            service-ul. Manoperă, diagnoză, consultanță: 0 lei.
          </p>

          <div className="total-care-slogan">
            Energie rerafinată. Mentenanță inclusă. Risc zero.
          </div>

          <div className="gold-hero-extra">
            <div
              className="gold-kpi"
              style={{
                background: "rgba(224,112,32,.1)",
                borderColor: "rgba(224,112,32,.25)",
              }}
            >
              <div className="n" style={{ color: "#E07020" }}>0 lei</div>
              <div className="l">Manoperă service</div>
            </div>
            <div
              className="gold-kpi"
              style={{
                background: "rgba(224,112,32,.1)",
                borderColor: "rgba(224,112,32,.25)",
              }}
            >
              <div className="n" style={{ color: "#E07020" }}>Riello</div>
              <div className="l">Marcă parteneră oficială</div>
            </div>
          </div>
        </div>
      </div>

      {/* Condiții program */}
      <section className="thermo-conditions-section">
        <div className="container">

          <div className="section-tag" style={{ background: "rgba(224,112,32,.1)", borderColor: "rgba(224,112,32,.25)", color: "#C05010" }}>
            Cum Intri în Program
          </div>
          <h2 className="white">Două condiții. Service nelimitat.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "540px", marginTop: ".5rem" }}>
            Nu există abonament lunar, nu există taxă de intrare.
            Dacă bifezi ambele condiții de mai jos, beneficiezi
            automat de toate avantajele programului.
          </p>

          <div className="thermo-conditions-grid">

            <div className="thermo-condition-card">
              <div className="thermo-condition-num">01</div>
              <div className="thermo-condition-icon">
                <Flame size={28} color="#E07020" />
              </div>
              <h3>Echipament Termic de la Allied</h3>
              <p>
                Arzătorul sau cazanul tău industrial este achiziționat
                direct de la <strong>Allied Green Energy</strong>, nu de pe piața
                secundară sau de la alt distribuitor.
              </p>
              <div className="thermo-condition-check">
                <Check size={14} color="#E07020" />
                <span>Arzătoare industriale achizitionate prin <strong>Allied</strong></span>
              </div>
              <div className="thermo-condition-check">
                <Check size={14} color="#E07020" />
                <span>Cazane industriale achizitionate prin <strong>Allied</strong></span>
              </div>
              <div className="thermo-condition-check">
                <Check size={14} color="#E07020" />
                <span>Centrale termice achizitionate prin <strong>Allied</strong></span>
              </div>
            </div>

            <div className="thermo-condition-card">
              <div className="thermo-condition-num">02</div>
              <div className="thermo-condition-icon">
                <Package size={28} color="#E07020" />
              </div>
              <h3>Combustibil Lichid Allied</h3>
              <p>
                Instalația ta termică funcționează pe combustibil
                lichid livrat de Allied Green Energy, motorină
                industrială sau combustibil pentru centrale termice
                din portofoliul nostru.
              </p>
              <div className="thermo-condition-check">
                <Check size={14} color="#E07020" />
                <span>Motorină industrială Allied</span>
              </div>
              <div className="thermo-condition-check">
                <Check size={14} color="#E07020" />
                <span>Combustibil termic lichid Allied</span>
              </div>
              <div className="thermo-condition-check">
                <Check size={14} color="#E07020" />
                <span>Livrare periodică programată</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Beneficii */}
      <section className="benefits-section">
        <div className="container">

          <div className="section-tag gray">Ce Obții</div>
          <h2>Avantajele programului.</h2>

          <div className="benefits-grid">

            <div className="benefit-card">
              <span className="benefit-tag" style={{ background: "rgba(224,112,32,.1)", color: "#C05010" }}>Service Gratuit</span>
              <div className="benefit-icon">
                <Wrench size={22} color="var(--dark)" />
              </div>
              <h3>Manoperă 0 Lei</h3>
              <p>
                Orice intervenție de service pe echipamentul termic
                achizitionat de la noi, precum revizie, reglaj sau înlocuire
                consumabile, este fără cost de manoperă.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag" style={{ background: "rgba(224,112,32,.1)", color: "#C05010" }}>Diagnoză</span>
              <div className="benefit-icon">
                <Thermometer size={22} color="var(--dark)" />
              </div>
              <h3>Diagnoză și Consultanță 0 Lei</h3>
              <p>
                Deplasare, diagnoză completă și consultanță tehnică
                incluse. Identificăm problema, îți explicăm soluția
                și intervenim, fără surprize pe factură.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag" style={{ background: "rgba(224,112,32,.1)", color: "#C05010" }}>Urgențe</span>
              <div className="benefit-icon">
                <Zap size={22} color="var(--dark)" />
              </div>
              <h3>Intervenții de Urgență</h3>
              <p>
                Dacă instalația se oprește în sezon rece, ai
                prioritate la intervenție. Răspuns tehnic în
                maximum 24h, fără cost suplimentar de deplasare.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag" style={{ background: "rgba(224,112,32,.1)", color: "#C05010" }}>Piese</span>
              <div className="benefit-icon">
                <Shield size={22} color="var(--dark)" />
              </div>
              <h3>Piese la Preț de Importator</h3>
              <p>
                Dacă este nevoie de înlocuirea unei piese,
                o plătești contra cost, dar la cel mai mic preț
                de importator, fără adaos comercial speculativ.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Echipamente Riello */}
      <section className="thermo-equip-section">
        <div className="container">

          <div className="section-tag" style={{ background: "rgba(224,112,32,.1)", borderColor: "rgba(224,112,32,.25)", color: "#C05010" }}>
            Echipamente Acoperite
          </div>
          <h2 className="white">Cu ce lucrăm.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "540px", marginTop: ".5rem" }}>
            Specializați pe gama industrială termica: arzătoare,
            cazane și centrale termice pentru fabrici, sere,
            hoteluri și clădiri comerciale.
          </p>

          <div className="thermo-equip-grid">

            <div className="thermo-equip-card">
              <div className="thermo-equip-brand">Industrial</div>
              <h3>Arzătoare Industriale</h3>
              <p>
                Arzătoare pentru combustibil
                lichid și gaz. Putere de la
                15 kW până la 1000 kW pentru hale mari de producție.
              </p>
              <ul className="thermo-equip-list">
                <li>Arzătoare monobloc</li>
                <li>Arzătoare duale: gaz + combustibil lichid</li>
                <li>Arzătoare în condensație</li>
              </ul>
            </div>

            <div className="thermo-equip-card">
              <div className="thermo-equip-brand">Industrial</div>
              <h3>Cazane Industriale</h3>
              <p>
                Cazane de apă caldă și abur pentru procese industriale
                și încălzire spații mari. Eficiență până la 90%
                în varianta cu condensație.
              </p>
              <ul className="thermo-equip-list">
                <li>Cazane apă caldă industrială</li>
                <li>Generatoare de abur industrial</li>
                <li>Sisteme de condensație</li>
              </ul>
            </div>

            <div className="thermo-equip-card">
              <div className="thermo-equip-brand">Industrial</div>
              <h3>Centrale Termice</h3>
              <p>
                Centrale termice la cheie pentru sere, hoteluri,
                centre logistice și clădiri de birouri. Proiectare,
                instalare și punere în funcțiune incluse la achiziție.
              </p>
              <ul className="thermo-equip-list">
                <li>Proiectare instalație termică</li>
                <li>Instalare și punere în funcțiune</li>
                <li>Instruire personal propriu</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="lucrari-section">
        <div className="container">
          <div className="lucrari-grid">

            <div className="lucrari-text">
              <div className="section-tag" style={{ background: "rgba(224,112,32,.1)", borderColor: "rgba(224,112,32,.25)", color: "#C05010" }}>Lucrări Efectuate</div>
              <h2 className="white">Instalări reale.<br /><em style={{ color: "#E07020" }}>Rezultate reale.</em></h2>
              <p>
                Arzătoare Riello instalate și puse în funcțiune
                de echipa Allied direct la clienți industriali,
                pe combustibil Ecotherm Light 4.
              </p>
              <p>
                Fiecare lucrare include punere în funcțiune,
                calibrare și documentație tehnică completă.
              </p>
              <Link href="/partener-allied" className="btn" style={{ marginTop: '1.5rem', display: 'inline-flex', background: "#E07020", color: "white", borderColor: "#E07020" }}>
                Contacteaza-ne
              </Link>
            </div>

            <div className="lucrari-slider">
              <HeroBgSlider noOverlay images={[
                { src: '/images/slider-arzator-instalat.jpg', alt: 'Arzător Riello instalat de Allied Green Energy', label: 'Arzător Industrial' },
                { src: '/images/lucrare-01.jpg',              alt: 'Lucrare instalare arzător Allied Green Energy',  label: 'Lucrare Efectuată' },
                { src: '/images/lucrare-02.jpg',              alt: 'Lucrare instalare arzător Allied Green Energy',  label: 'Service Arzătoare' },
                { src: '/images/lucrare-03.jpg',              alt: 'Echipă Allied la lucrare de instalare',         label: 'Echipă Specializată' },
                { src: '/images/lucrare-04.jpg',              alt: 'Arzător industrial instalat și funcțional',     label: 'Lucrare Finalizată' },
                { src: '/images/lucrare-05.jpg',              alt: 'Instalație industrială Allied Green Energy',    label: 'Instalație Industrială' },
                { src: '/images/lucrare-06.jpg',              alt: 'Tehnicieni Allied la lucru',                   label: 'Service Preventiv' },
              ]} />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="audit-cta-section">
        <div className="container">
          <div className="audit-cta-inner">
            <div className="audit-cta-icon" style={{ background: "rgba(224,112,32,.12)", borderColor: "rgba(224,112,32,.25)" }}>
              <Flame size={28} color="#E07020" />
            </div>
            <div>
              <h3>Intri în program sau vrei o ofertă de echipament?</h3>
              <p>
                Dacă ai deja echipament Riello și vrei să activezi
                service-ul gratuit, sau vrei o ofertă integrată
                (echipament + combustibil Allied), contactează-ne direct.
              </p>
            </div>
            {/* <Link
              href="/contact"
              className="btn"
              style={{ flexShrink: 0, background: "#E07020", color: "white", borderColor: "#E07020" }}
            >
              Intră în Programul Riello Service 0 lei
            </Link> */}
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", flexShrink: 0 }}>
              <Link href="/partener-allied" className="btn btn-outline-dark">
                Programul Partener Allied
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
