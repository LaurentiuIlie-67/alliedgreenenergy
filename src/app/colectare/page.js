import Link from "next/link";
import { Truck, Scale, MapPin, CheckCircle, XCircle, HardHat, Tractor, Factory } from "lucide-react";
import HeroBgSlider from "@/components/HeroBgSlider";

export const metadata = {
  title: "Colectare Ulei Uzat — Allied Green Energy",
  description: "Colectare ulei uzat autorizat ADR, acoperire națională în 48h. Documentație completă pentru Garda de Mediu. Transport, construcții, agricultură, industrie.",
  keywords: "colectare ulei uzat, ulei uzat Romania, colectare ulei motor, gestiune ulei uzat, ADR, Garda de Mediu, colectare deseuri periculoase",
};

export default function ColectarePage() {
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
                <span>Colectare & Logistică</span>
              </div>

              <div className="page-hero-tag">Pilonul 02 — Colectare & Logistică</div>

              <h1>
                Colectare rapidă.
                <br />
                <em>Documentație completă.</em>
              </h1>

              <p>
                Ridicăm, documentăm și rerafinam uleiul uzat.
                Tu nu mai ai nimic de gestionat.
              </p>

              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-green">
                  Comandă Colectare
                </Link>
                <Link href="/fleet-gold" className="btn btn-outline-light">
                  Program Fleet Gold
                </Link>
              </div>
            </div>

            <div className="lab-hero-photo">
              <HeroBgSlider noOverlay images={[
                { src: '/images/slider-van-colectare.jpg', alt: 'Vehicul Allied Green Energy echipat pentru colectare ulei uzat', disclaimer: 'Vizualizare informativă · branding aplicat digital' },
                { src: '/images/colectare-01.jpg',         alt: 'Colectare ulei uzat Allied Green Energy' },
                { src: '/images/colectare-02.jpg',         alt: 'Colectare ulei uzat Allied Green Energy' },
              ]} />
            </div>

          </div>
        </div>
      </div>

      <section style={{ background: "white", padding: "6rem 0" }}>
        <div className="container">

          <div className="two-col">

            <div>
              <div className="section-tag green">Cele 3 Garanții Allied</div>
              <h2>
                Promptitudine.
                <br />
                Legalitate. Trasabilitate.
              </h2>

              <div className="feature-list">

                <div className="feature-item">
                  <div className="feature-icon">
                    <Truck size={18} color="var(--green-mid)" />
                  </div>
                  <div>
                    <h4>Flotă Autorizată ADR</h4>
                    <p>
                      Ajungem oriunde în România în 48–72h.
                      Nu ai nevoie de container propriu,
                      aducem echipamentul nostru.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <Scale size={18} color="var(--green-mid)" />
                  </div>
                  <div>
                    <h4>Conformitate Garantată</h4>
                    <p>
                      Formular de acompaniere, fișă de securitate și
                      raport de transfer: documentație completă
                      pentru Garda de Mediu, de fiecare dată.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <div className="steps-box">
                <h3>Cum funcționează</h3>

                <div className="step">
                  <div className="step-num">01</div>
                  <div>
                    <h4>Solicitare</h4>
                    <p>Ne contactezi telefonic sau prin formularul online.</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">02</div>
                  <div>
                    <h4>Ridicare</h4>
                    <p>
                      Echipa Allied ridică uleiul uzat la data
                      și ora convenite.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">03</div>
                  <div>
                    <h4>Trasabilitate</h4>
                    <p>
                      Primești toate documentele necesare,
                      complet, fără urmărire din partea ta.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="collect-guide-section">
        <div className="container">

          <div className="section-tag green">Ghid de Colectare</div>
          <h2>Ce colectăm și ce nu.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "540px", marginTop: ".5rem" }}>
            Amestecarea uleiului uzat cu alte lichide
            compromite întregul lot și îngreunează rerafinarea.
            Verifică lista înainte de prelevare.
          </p>

          <div className="collect-guide-grid">

            <div className="collect-guide-col accept">
              <div className="collect-guide-col-header">
                <CheckCircle size={18} color="var(--green-mid)" />
                <span>Acceptăm</span>
              </div>
              <ul>
                {[
                  "Ulei de motor uzat (benzină & diesel)",
                  "Ulei de transmisie și diferențial",
                  "Ulei hidraulic industrial",
                  "Ulei de turbine și compresoare",
                  "Ulei de angrenaje și reductor",
                  "Lubrifianți industriali uzați",
                  "Ulei de tăiere diluat (conc. ≥ 50%)",
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle size={13} color="var(--green-mid)" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="collect-guide-col reject">
              <div className="collect-guide-col-header">
                <XCircle size={18} color="var(--red)" />
                <span>Nu acceptăm</span>
              </div>
              <ul>
                {[
                  "Antigel / lichid de răcire",
                  "Apă sau emulsii apoase",
                  "Solvenți și diluanți",
                  "Uleiuri alimentare sau vegetale",
                  "Produse halogentate (PCB, CFC)",
                  "Vopsele, lacuri sau rășini",
                ].map((item) => (
                  <li key={item}>
                    <XCircle size={13} color="var(--red)" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <p className="collect-guide-note">
            Nesigur? Sunați-ne înainte de prelevare.
            Consultantul nostru tehnic verifică rapid compatibilitatea produsului.
          </p>

        </div>
      </section>

      <section className="segment-section">
        <div className="container">

          <div className="section-tag green">Industrii Deservite</div>
          <h2>Soluție personalizată pentru fiecare sector.</h2>

          <div className="segment-grid" style={{ marginTop: "2.5rem" }}>

            <div className="segment-card">
              <div className="segment-icon">
                <Truck size={22} color="var(--green-mid)" />
              </div>
              <h4>Transport & Logistică</h4>
              <p>
                Flote de camioane, TIR-uri și vehicule de livrare.
                Programăm ridicările în jurul turelor de lucru,
                fără întreruperea activității.
              </p>
            </div>

            <div className="segment-card">
              <div className="segment-icon">
                <HardHat size={22} color="var(--green-mid)" />
              </div>
              <h4>Construcții & Utilaje Grele</h4>
              <p>
                Excavatoare, buldozere, macarale, betoniere:
                utilaje cu consum ridicat de ulei hidraulic și de motor.
                Colectăm direct de pe șantier.
              </p>
            </div>

            <div className="segment-card">
              <div className="segment-icon">
                <Tractor size={22} color="var(--green-mid)" />
              </div>
              <h4>Agricultură & Mecanizare</h4>
              <p>
                Tractoare, combine, irigații și utilaje agricole.
                Adaptăm programul de ridicare la sezonul agricol
                și la locația fermei.
              </p>
            </div>

            <div className="segment-card">
              <div className="segment-icon">
                <Factory size={22} color="var(--green-mid)" />
              </div>
              <h4>Industrie & Producție</h4>
              <p>
                Uleiuri hidraulice, de turbine, de compresoare:
                categorii diferite, documentare separată.
                Allied gestionează tot fluxul.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="coverage-section">
        <div className="container">

          <div className="coverage-header">
            <div>
              <div className="section-tag green">Acoperire Națională</div>
              <h2>Toate cele 41 de județe.<br />Plus Municipiul București.</h2>
              <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "480px", marginTop: ".5rem" }}>
                Flotă ADR proprie pe tot teritoriul României.
                Ridicare garantată în maximum 48h de la solicitare,
                oriunde te afli.
              </p>
            </div>

            <div className="coverage-stats">
              <div className="coverage-stat">
                <div className="n">42</div>
                <div className="l">Județe acoperite</div>
              </div>
              <div className="coverage-stat">
                <div className="n">48<span>h</span></div>
                <div className="l">Timp maxim ridicare</div>
              </div>
              <div className="coverage-stat">
                <div className="n">ADR</div>
                <div className="l">Flotă autorizată</div>
              </div>
            </div>
          </div>

          <div className="county-grid">
            {[
              "Alba","Arad","Argeș","Bacău","Bihor","Bistrița-Năsăud",
              "Botoșani","Brăila","Brașov","București","Buzău",
              "Călărași","Caraș-Severin","Cluj","Constanța","Covasna",
              "Dâmbovița","Dolj","Galați","Giurgiu","Gorj","Harghita",
              "Hunedoara","Ialomița","Iași","Ilfov","Maramureș",
              "Mehedinți","Mureș","Neamț","Olt","Prahova",
              "Sălaj","Satu Mare","Sibiu","Suceava","Teleorman",
              "Timiș","Tulcea","Vâlcea","Vaslui","Vrancea",
            ].map((county) => (
              <div key={county} className="county-chip">
                <MapPin size={10} />
                {county}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
