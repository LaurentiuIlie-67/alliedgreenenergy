import Link from "next/link";
import {
  Truck,
  Microscope,
  FlaskConical,
  HardHat,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";
import HeroBgSlider from "@/components/HeroBgSlider";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>

        <div className="hero-inner">

          <div className="hero-top">
            <div>
              <div className="hero-tag">
                Operator autorizat · Acoperire națională
              </div>

              <h1>
                Energie din
                <br />
                <em>resurse circulare.</em>
                <br />
                Precizie de laborator.
              </h1>

              <p className="hero-sub">
                Colectăm uleiul uzat de la tine. Îl analizăm în
                laboratorul propriu. Îl rerafinăm în ulei de baza pentru lubrifiere. Totul documentat, totul trasabil.
              </p>

              <div className="hero-btns">
                <Link href="/colectare" className="btn btn-green">
                  Comandă Colectare
                </Link>

                <Link href="/laborator" className="btn btn-outline-light">
                  Diagnoză Flotă
                </Link>
              </div>
            </div>

            <div className="lab-hero-photo">
              <HeroBgSlider noOverlay images={[
                { src: '/images/slider-rezervoare-exterior.jpg', alt: 'Rezervoare industriale Allied Green Energy' },
                { src: '/images/slider-van-colectare.jpg',       alt: 'Vehicul de colectare Allied Green Energy', disclaimer: 'Vizualizare informativă · branding aplicat digital' },
                { src: '/images/slider-rezervoare-cosuri.jpg',   alt: 'Instalație de rerafinare Allied Green Energy' },
                { src: '/images/slider-rezervor-industrial.jpg', alt: 'Rezervor industrial Allied Green Energy' },
              ]} />
            </div>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <div className="stat-num">48<span>h</span></div>
              <div className="stat-label">Timp maxim de răspuns național</div>
            </div>
            <div className="hero-stat">
              <div className="stat-num">4<span>+</span></div>
              <div className="stat-label">Piloni de servicii integrate</div>
            </div>
            <div className="hero-stat">
              <div className="stat-num">100<span>%</span></div>
              <div className="stat-label">Conformitate legală garantată</div>
            </div>
            <div className="hero-stat">
              <div className="stat-num">BAT</div>
              <div className="stat-label">Standarde europene de mediu</div>
            </div>
          </div>

        </div>

      </section>

      <section className="pillars-section">
        <div className="container">

          <div className="pillars-header">
            <div>
              <div className="section-tag green">Platforma Noastră</div>
              <h2>
                Patru piloni.
                <br />
                Un ecosistem integrat.
              </h2>
            </div>

            <p style={{ maxWidth: "340px", color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.7" }}>
              De la materia primă până la diagnoza moleculară și
              analize de laborator complete, Allied acoperă întregul ciclu.
            </p>
          </div>

          <div className="pillars-grid">

            <Link href="/rafinare" className="pillar-card">
              <div className="pillar-icon g">
                <FlaskConical size={22} color="var(--green-mid)" />
              </div>
              <div className="pillar-num">Pilonul 01</div>
              <div className="pillar-title">Rerafinare & Energie</div>
              <p className="pillar-desc">
                Combustibil Ecotherm Light 4, 10.350 kcal/kg.
                Produs prin procese de rafinare standardizate, livrat în autocisterne si IBC-uri sigilate.
              </p>
            </Link>

            <Link href="/colectare" className="pillar-card">
              <div className="pillar-icon b">
                <Truck size={22} color="var(--blue-mid)" />
              </div>
              <div className="pillar-num">Pilonul 02</div>
              <div className="pillar-title">Colectare & Logistică</div>
              <p className="pillar-desc">
                Flotă ADR proprie, documentație completă,
                ridicare în 48h oriunde în România.
              </p>
            </Link>

            <Link href="/laborator" className="pillar-card">
              <div className="pillar-icon g">
                <Microscope size={22} color="var(--green-mid)" />
              </div>
              <div className="pillar-num">Pilonul 03</div>
              <div className="pillar-title">Diagnoză Moleculară</div>
              <p className="pillar-desc">
                Spectroscopie ICP-OES și FTIR. Raport în 24h:
                defecțiunile sunt detectate înainte să devină scumpe.
              </p>
            </Link>

            <Link href="/cariere" className="pillar-card">
              <div className="pillar-icon b">
                <HardHat size={22} color="var(--blue-mid)" />
              </div>
              <div className="pillar-num">Pilonul 04</div>
              <div className="pillar-title">Elite & Cariere</div>
              <p className="pillar-desc">
                Nu angajăm oameni care bifează cerințe.
                Căutăm specialiști care știu exact ce fac.
              </p>
            </Link>

          </div>
        </div>
      </section>

      <section className="circle-section">
        <div className="container">

          <div className="circle-header">
            <div className="section-tag green">Economia Circulară</div>
            <h2>Cercul Încrederii Allied.</h2>
            <p className="lead" style={{ textAlign: "center", margin: "0 auto" }}>
              Suntem singura verigă de care ai nevoie.
            </p>
            <p style={{ textAlign: "center", margin: "0.5rem auto 0", color: "var(--gray-500)", fontSize: ".88rem", maxWidth: "480px" }}>
              Colectăm, rerafinăm, producem combustibil și întreținem instalația ta,
              totul sub un singur contract, fără terți.
            </p>
          </div>

          <div className="tc-wrap">
            <div className="tc-diagram">

              <svg className="tc-svg" viewBox="0 0 600 600" aria-hidden="true">
                <defs>
                  <marker id="arr-g" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M0 0 L10 5 L0 10 Z" fill="rgba(46,171,92,0.75)"/>
                  </marker>
                  <marker id="arr-b" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M0 0 L10 5 L0 10 Z" fill="rgba(0,92,169,0.75)"/>
                  </marker>
                </defs>

                {/* Colectare → Analiză */}
                <path d="M 330.4 127.7 A 175 175 0 0 1 472.3 269.6"
                  fill="none" stroke="rgba(46,171,92,0.5)" strokeWidth="2"
                  markerEnd="url(#arr-g)"/>

                {/* Analiză → Rerafinare */}
                <path d="M 472.3 330.4 A 175 175 0 0 1 330.4 472.3"
                  fill="none" stroke="rgba(0,92,169,0.5)" strokeWidth="2"
                  markerEnd="url(#arr-b)"/>

                {/* Rerafinare → Livrare */}
                <path d="M 269.6 472.3 A 175 175 0 0 1 127.7 330.4"
                  fill="none" stroke="rgba(46,171,92,0.5)" strokeWidth="2"
                  markerEnd="url(#arr-g)"/>

                {/* Livrare → Colectare */}
                <path d="M 127.7 269.6 A 175 175 0 0 1 269.6 127.7"
                  fill="none" stroke="rgba(0,92,169,0.5)" strokeWidth="2"
                  markerEnd="url(#arr-b)"/>
              </svg>

              <div className="tc-center">
                <div className="tc-center-label">Allied</div>
                <div className="tc-center-sub">circular</div>
              </div>

              <div className="tc-node tc-top">
                <div className="tc-icon g">
                  <Truck size={22} color="var(--green-mid)" />
                </div>
                <div className="tc-num">01</div>
                <div className="tc-label">Aprovizionare componente de rafinărie</div>
                <div className="tc-label">& Colectare</div>
                <div className="tc-sub">48h · ADR</div>
              </div>

              <div className="tc-node tc-right">
                <div className="tc-icon g">
                  <FlaskConical size={22} color="var(--green-mid)" />
                </div>
                <div className="tc-num">02</div>
                <div className="tc-label">Rerafinare & Prelucrare Fracții</div>
                <div className="tc-branches">
                  <div className="tc-branch"><span className="tc-branch-dot g" /> Combustibil (Ecotherm)</div>
                  <div className="tc-branch"><span className="tc-branch-dot b" /> Ulei de Bază (Group I/II)</div>
                </div>
              </div>

              <div className="tc-node tc-bottom">
                <div className="tc-icon b">
                  <SlidersHorizontal size={22} color="var(--blue-mid)" />
                </div>
                <div className="tc-num">03</div>
                <div className="tc-label">Standardizare pe Ramură</div>
                <div className="tc-branches">
                  <div className="tc-branch"><span className="tc-branch-dot g" /> Combustibil: Blending & Ardere</div>
                  <div className="tc-branch"><span className="tc-branch-dot b" /> Ulei: Purificare Avansată</div>
                </div>
              </div>

              <div className="tc-node tc-left">
                <div className="tc-icon" style={{ background: "rgba(224,112,32,.12)", border: "1px solid rgba(224,112,32,.25)" }}>
                  <Wrench size={22} color="#E07020" />
                </div>
                <div className="tc-num">04</div>
                <div className="tc-label">Service & Echipamente Energotermice</div>
                <div className="tc-sub">Manoperă · 0 lei</div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="why-section">
        <div className="container">

          <div className="why-grid">

            <div>
              <div className="section-tag green">De ce Allied</div>
              <h2>
                Nu suntem un simplu comerciant.
                <br />
                Suntem partenerul tău industrial.
              </h2>

              <div className="why-list">

                <div className="why-item">
                  <div className="why-icon g">
                    <Scale size={18} color="var(--green-mid)" />
                  </div>
                  <div>
                    <h4>Conformitate Totală</h4>
                    <p>
                      Formular de acompaniere, fișă de securitate și
                      raport de transfer, complete la fiecare ridicare.
                      Garda de Mediu nu va găsi nimic de obiectat.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon b">
                    <Microscope size={18} color="var(--blue-mid)" />
                  </div>
                  <div>
                    <h4>Laborator Propriu Al Rafinariei</h4>
                    <p>
                      Nu trimitem probe la terți. ICP-OES, FTIR,
                      viscozimetru, inflametru, centrifuga de laborator, echipament cryo: totul analizat intern,
                      rezultate în 24h.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon g">
                    <ShieldCheck size={18} color="var(--green-mid)" />
                  </div>
                  <div>
                    <h4>Garanție Anti-Fraudă</h4>
                    <p>
                      Combustibilul Allied vine cu buletin de analiză
                      pentru fiecare lot. Cisterne, IBC-uri sigilate, trasabilitate
                      completă de la fabricatie la livrare.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <div className="stats-grid-alt">

                <div className="stat-alt">
                  <div className="n">48<span>h</span></div>
                  <div className="l">Timp maxim de răspuns</div>
                </div>

                <div className="stat-alt">
                  <div className="n">24<span>h</span></div>
                  <div className="l">Livrare raport diagnoză</div>
                </div>

                <div className="stat-alt">
                  <div className="n">80<span>%</span></div>
                  <div className="l">Reducere amprentă carbon</div>
                </div>

                <div className="stat-alt">
                  <div className="n">100<span>%</span></div>
                  <div className="l">Trasabilitate</div>
                </div>

              </div>

              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/fleet-gold" className="btn btn-green">
                  Program Fleet Gold
                </Link>
                <Link href="/contact" className="btn btn-outline-dark">
                  Contactează-ne
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">

            <div>
              <h2>
                Uleiul uzat este o problemă de conformitate
                sau o sursă de valoare. Depinde cu cine lucrezi.
              </h2>
              <p>
                Colectare în 48h, diagnoză moleculară și
                combustibil rerafinat.
              </p>
            </div>

            <div className="cta-btns">
              <Link href="/colectare" className="btn btn-green">
                Comandă Colectare
              </Link>
              <Link href="/contact" className="btn btn-outline-light">
                Vorbește cu un specialist
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
