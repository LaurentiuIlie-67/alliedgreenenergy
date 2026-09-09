import Link from "next/link";
import Image from "next/image";
import { Droplets, ShieldCheck, Leaf, FlaskConical, SlidersHorizontal, BadgeCheck, TrendingDown, AlertTriangle, Ban, ClipboardList, Truck, Send, Lock, Tag } from "lucide-react";
import AuditForm from "@/components/AuditForm";
import HeroBgSlider from "@/components/HeroBgSlider";

export const metadata = {
  title: "Combustibil Industrial Ecotherm & Ulei Rerafinat — Allied Green Energy",
  description: "Ecotherm Light 4: combustibil industrial rerafinat, 10.350 kcal/kg, conformitate BAT. Ulei de bază Group I/II, amprentă carbon -80%. Livrare în IBC sigilate cu buletin per lot.",
  keywords: "Ecotherm Light 4, combustibil industrial, ulei rerafinat, rerafinare ulei uzat, BAT, ulei de baza rerafinat, combustibil arzatoare, Group I Group II",
};

export default function RafinarePage() {
  return (
    <>
      <div className="page-hero">

        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">

          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Rerafinare & Energie</span>
          </div>

          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", alignItems: "center", marginBottom: "1.25rem" }}>
            <div className="page-hero-tag" style={{ marginBottom: 0 }}>
              Pilonul 01 — Rerafinare & Energie
            </div>
            <div className="bat-badge">
              <ShieldCheck size={13} />
              BAT Compliant · UE
            </div>
          </div>

          <h1>
            Energie regenerată.
            <br />
            <em>Eficiență termică garantată si optimizata.</em>
          </h1>

          <p>
            Producem combustibili lichizi din componente si fractii de rafinarie. Prelucram uleiul uzat si obtinem ulei de baza rerafinat.
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              className="btn btn-green"
            >
              Cere Ofertă
            </Link>

            <Link
              href="/partener-allied"
              className="btn btn-outline-light"
            >
              Programul Partener Allied
            </Link>
          </div>

        </div>
      </div>

      <section className="spec-section">
        <div className="container">

          <div className="section-tag green">Produsele Noastre</div>
          <h2>Două produse. Aceeași precizie.</h2>

          <div className="products-grid">

            <div className="product-card">
              <div className="product-card-head">
                <div className="product-badge green">Combustibil Lichid Pentru Echipamentele de Incalzire</div>
                <h3>Ecotherm Light 4</h3>
                <p>Combustibil lichid obținut din fracții petroliere de rafinărie. Produs prin omogenizarea și prelucrarea în detaliu a fracțiilor de rafinărie și analiza de laborator, standardizat, dupa specificatiile echipamentelor termice.</p>
              </div>

              <div className="ecotherm-specs">
                <div className="spec-row">
                  <span className="label">Putere calorică</span>
                  <span className="value">10.350 kcal/kg</span>
                </div>
                <div className="spec-row">
                  <span className="label">Conținut sulf</span>
                  <span className="value">0,15%</span>
                </div>
                <div className="spec-row">
                  <span className="label">Modalitate de livrare</span>
                  <span className="value">Cisterna, IBC sigilat</span>
                </div>
                <div className="spec-row">
                  <span className="label">Trasabilitate</span>
                  <span className="value">Buletin per livrare/lot</span>
                </div>
                <div className="spec-row">
                  <span className="label">Standard</span>
                  <span className="value">National, dupa specificatiile echipamentelor termice</span>
                </div>
              </div>

              <div className="product-card-footer">
                <Link href="/contact?dept=combustibil" className="btn btn-green">Cere Ofertă Ecotherm</Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-head">
                <div className="product-badge blue">Ulei de Bază</div>
                <h3>Ulei de Bază Rerafinat</h3>
                <p>Ulei de bază Group I/II obținut prin rerafinare avansată a uleiului uzat colectat. Calitate comparabilă cu uleiul virgin, la cost redus și cu amprentă de carbon cu 80% mai mică.</p>
              </div>

              <div className="ecotherm-specs">
                <div className="spec-row">
                  <span className="label">Clasificare</span>
                  <span className="value">Group I / Group II</span>
                </div>
                <div className="spec-row">
                  <span className="label">Viscozitate</span>
                  <span className="value">Conform specificație</span>
                </div>
                <div className="spec-row">
                  <span className="label">Conținut metale</span>
                  <span className="value">Sub limita detectabilă</span>
                </div>
                <div className="spec-row">
                  <span className="label">Reducere carbon</span>
                  <span className="value">~80% vs. virgin</span>
                </div>
                <div className="spec-row">
                  <span className="label">Standard</span>
                  <span className="value">International</span>
                </div>
              </div>

              <div className="product-card-footer">
                <Link href="/contact?dept=ulei-baza" className="btn btn-blue">Cere Ofertă Ulei Bază</Link>
              </div>
            </div>

          </div>

          <div className="crosssell-banner">
            <div className="crosssell-text">
              <strong>De ce Ecotherm Light 4 este garantat tehnic?</strong>
              <p>
                Instalația noastră este atât de avansată încât produce combustibil lichid pentru centralele termice, superior standardelor nationale si ulei de lubrifianți
                Group I/II, comparabil cu uleiul virgin.
                Practic, Ecotherm Light 4 beneficiază de rigoarea unor procese de moderne de rafinare si prelucrare
                a uleiului de motor, nu doar a unui combustibil de încălzire.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="anatomy-section">
        <div className="container">

          <div className="section-tag green">Procesul de Fabricație</div>
          <h2>Anatomia Ecotherm Light 4.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Fiecare lot de combustibil Ecotherm Light 4 parcurge trei etape
            controlate, testat și documentat conform cerințelor legale în
            vigoare. Niciun lot nu iese din rafinărie fără buletin de analiză.
          </p>

          <div className="anatomy-steps">

            <div className="anatomy-step">
              <div className="anatomy-step-num">01</div>
              <div className="anatomy-step-icon">
                <Droplets size={22} color="var(--green-mid)" />
              </div>
              <h3>Selecție, Prelucrare și Omogenizare a Fracțiilor de Rafinărie</h3>
              <p>
                Fracții petroliere de rafinărie sunt selectate, prelucrate
                și combinate într-un amestec omogen, controlat pe
                fiecare lot.
              </p>
              <div className="anatomy-step-tag">Selecție · Prelucrare · Omogenizare</div>
            </div>

            <div className="anatomy-step-arrow">→</div>

            <div className="anatomy-step">
              <div className="anatomy-step-num">02</div>
              <div className="anatomy-step-icon">
                <SlidersHorizontal size={22} color="var(--green-mid)" />
              </div>
              <h3>Ajustare Parametri de Ardere</h3>
              <p>
                Viscozitatea, punctul de inflamabilitate și conținutul
                de sulf sunt ajustate pentru a atinge specificațiile
                de ardere țintă: putere calorică de 10.350 kcal/kg și
                conținut de sulf de 0,15%.
              </p>
              <div className="anatomy-step-tag">10.350 kcal/kg · Sulf 0,15%</div>
            </div>

            <div className="anatomy-step-arrow">→</div>

            <div className="anatomy-step">
              <div className="anatomy-step-num">03</div>
              <div className="anatomy-step-icon">
                <BadgeCheck size={22} color="var(--green-mid)" />
              </div>
              <h3>Testare și Certificare per Lot</h3>
              <p>
                Fiecare lot primește un buletin de analiză individual,
                semnat de laboratorul intern Allied. Livrarea se face
                în cisterne sau IBC sigilate cu etichetă de
                trasabilitate și cod lot unic.
              </p>
              <div className="anatomy-step-tag">Buletin per lot · Laborator intern · Trasabilitate</div>
            </div>

          </div>

          <div className="compare-table-wrap" style={{ marginTop: "3rem" }}>
            <div className="section-tag green" style={{ marginBottom: "1rem" }}>Buletin de Analiză — Ecotherm Light 4</div>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Parametru</th>
                  <th>Standard</th>
                  <th>Domeniu / Interval</th>
                  <th>Valoare Obținută</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Densitate la 15°C</td>
                  <td>ASTM D7042</td>
                  <td>max. 935,00 kg/m³</td>
                  <td>931,70 kg/m³</td>
                </tr>
                <tr>
                  <td>Conținut sulf total</td>
                  <td>ASTM D2622</td>
                  <td>max. 1% (m/m)</td>
                  <td style={{ color: "var(--green-mid)", fontWeight: 600 }}>0,15% (m/m)</td>
                </tr>
                <tr>
                  <td>Punct de curgere</td>
                  <td>ASTM D97</td>
                  <td>max. 5°C</td>
                  <td>-9°C</td>
                </tr>
                <tr>
                  <td>Condensat la 250°C</td>
                  <td>SR EN ISO 3405</td>
                  <td>max. 35% (V/V)</td>
                  <td>27,0% (V/V)</td>
                </tr>
                <tr>
                  <td>Conținut de cenușă</td>
                  <td>SR EN ISO 6245</td>
                  <td>max. 0,15% (m/m)</td>
                  <td>0,0200% (m/m)</td>
                </tr>
                <tr>
                  <td>Punct de inflamabilitate</td>
                  <td>SR EN ISO 2719</td>
                  <td>min. 55°C</td>
                  <td>73,5°C</td>
                </tr>
                <tr>
                  <td>Carbon rezidual</td>
                  <td>SR ISO 10370</td>
                  <td>max. 5% (m/m)</td>
                  <td>0,12% (m/m)</td>
                </tr>
                <tr>
                  <td>Conținut de apă</td>
                  <td>ASTM D95</td>
                  <td>max. 0,2% (m/m)</td>
                  <td>0,15% (m/m)</td>
                </tr>
                <tr>
                  <td>Aciditate</td>
                  <td>ASTM D1093</td>
                  <td>lipsă</td>
                  <td>lipsă</td>
                </tr>
                <tr>
                  <td>Apă și sediment</td>
                  <td>ASTM D95 + ASTM D473</td>
                  <td>max. 1% (m/m)</td>
                  <td>0,1% (m/m)</td>
                </tr>
                <tr>
                  <td>Vâscozitate la 20°C</td>
                  <td>ASTM D7042</td>
                  <td>max. 7,5 cSt</td>
                  <td>5,559 cSt</td>
                </tr>
                <tr>
                  <td>Putere calorifică inferioară</td>
                  <td>ASTM D240</td>
                  <td>min. 9.650 kcal/kg</td>
                  <td style={{ color: "var(--green-mid)", fontWeight: 600 }}>10.350 kcal/kg</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: "var(--gray-500)", fontSize: ".78rem", fontStyle: "italic" }}>
            Rezultate din buletinul de analiză al lotului livrat, testat de laborator acreditat
            conform SR EN ISO/IEC 17025:2018. Fiecare lot primește propriul buletin la livrare.
          </p>

        </div>
      </section>

      <section className="spec-section">
        <div className="container">

          <div className="product-benefits-row">
            <div className="product-benefit-item">
              <Droplets size={20} color="var(--green-mid)" />
              <div>
                <h4>Calitate Garantată</h4>
                <p>Fiecare lot vine cu buletin de analiză. Zero surprize în producție.</p>
              </div>
            </div>
            <div className="product-benefit-item">
              <ShieldCheck size={20} color="var(--green-mid)" />
              <div>
                <h4>Conformitate Totală</h4>
                <p>Procese BAT certificate. Documentație completă pentru audit.</p>
              </div>
            </div>
            <div className="product-benefit-item">
              <Leaf size={20} color="var(--green-mid)" />
              <div>
                <h4>Economie Circulară</h4>
                <p>Uleiul uzat redevine resursă. Amprenta de carbon redusă cu 80%.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="anatomy-section" style={{ background: "var(--off-white)" }}>
        <div className="container">

          <div className="section-tag blue">Procesul de Rerafinare</div>
          <h2>Anatomia Uleiului de Bază Rerafinat.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Fiecare lot de Ulei de Bază Rerafinat parcurge trei etape
            controlate, testat și documentat conform cerințelor legale în
            vigoare. Niciun lot nu iese din rafinărie fără buletin de analiză per lot.
          </p>

          <div className="anatomy-steps">

            <div className="anatomy-step">
              <div className="anatomy-step-num">01</div>
              <div className="anatomy-step-icon">
                <FlaskConical size={22} color="var(--blue-mid)" />
              </div>
              <h3>Rerafinare Termo-Chimică</h3>
              <p>
                Uleiul uzat colectat este supus unui proces de distilare,
                tratament chimic și microfiltrare. Contaminanții, metalele
                și apa sunt eliminate selectiv, rezultând un amestec
                de fracții cu putere de lubrifiere ridicată.
              </p>
              <div className="anatomy-step-tag">Distilare · Tratament chimic · Filtrare</div>
            </div>

            <div className="anatomy-step-arrow">→</div>

            <div className="anatomy-step">
              <div className="anatomy-step-num">02</div>
              <div className="anatomy-step-icon">
                <SlidersHorizontal size={22} color="var(--blue-mid)" />
              </div>
              <h3>Standardizare & Purificare</h3>
              <p>
                Fracțiile rezultate sunt purificate și standardizate
                pentru a atinge specificațiile tehnice țintă: clasificare
                Group I/II, viscozitate conform specificație și conținut
                de metale sub limita detectabilă.
              </p>
              <div className="anatomy-step-tag">Purificare · Control viscozitate · Analiză metale</div>
            </div>

            <div className="anatomy-step-arrow">→</div>

            <div className="anatomy-step">
              <div className="anatomy-step-num">03</div>
              <div className="anatomy-step-icon">
                <BadgeCheck size={22} color="var(--blue-mid)" />
              </div>
              <h3>Certificare & Livrare</h3>
              <p>
                Fiecare lot primește un buletin de analiză individual,
                semnat de laboratorul intern Allied. Livrarea se face
                în cuburi IBC sigilate cu etichetă de trasabilitate
                și cod lot unic.
              </p>
              <div className="anatomy-step-tag">Buletin per lot · IBC sigilat · Cod trasabilitate</div>
            </div>

          </div>

          <div className="compare-table-wrap">
            <div className="section-tag blue" style={{ marginBottom: "1rem" }}>Specificații Comparate</div>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Parametru</th>
                  <th>Ulei Bază Allied <span className="compare-badge green">Rerafinat</span></th>
                  <th>Ulei Virgin Group I</th>
                  <th>Ulei Virgin Group II</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Origine</td>
                  <td>Rerafinare termo-chimică BAT</td>
                  <td>Extracție țiței brut</td>
                  <td>Extracție țiței brut</td>
                </tr>
                <tr>
                  <td>Indice vâscozitate</td>
                  <td>≥ 95</td>
                  <td>80 – 100</td>
                  <td>≥ 100</td>
                </tr>
                <tr>
                  <td>Conținut sulf</td>
                  <td>Redus semnificativ</td>
                  <td>Mediu – ridicat</td>
                  <td>Redus</td>
                </tr>
                <tr>
                  <td>Metale reziduale</td>
                  <td>Sub limita detectabilă</td>
                  <td>Urme naturale</td>
                  <td>Urme naturale</td>
                </tr>
                <tr>
                  <td>Amprentă carbon</td>
                  <td style={{ color: "var(--green-mid)", fontWeight: 600 }}>−80% vs. virgin</td>
                  <td>Referință</td>
                  <td>Referință</td>
                </tr>
                <tr>
                  <td>Standard producție</td>
                  <td>BAT UE</td>
                  <td>API / ACEA</td>
                  <td>API / ACEA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bat-banner">
            <ShieldCheck size={20} color="var(--green-mid)" />
            <p>
              <strong>Conformitate Legală:</strong>{" "}
              Fiecare lot este însoțit de Certificat de Conformitate, Fișă cu
              Date de Securitate (FDS) și Declarație de Performanță, testat în
              laborator acreditat conform SR EN ISO/IEC 17025. Documentație
              completă disponibilă la cerere.
            </p>
          </div>

        </div>
      </section>

      <section className="dcf-section">
        <div className="container">
          <div className="dcf-grid">

            <div className="dcf-text">
              <div className="section-tag green">Tehnologie de rafinare pentru obtinerea uleiului de baza</div>
              <h2>Dynamic Cross<br /><em>Flow Filtration.</em></h2>
              <p>
                Tehnologia prin care uleiul uzat devine ulei de bază rerafinat
                Group I/II. Compușii solizi, apa și contaminanții sunt separați
                la nivel nano-micrometric prin membrane ceramice speciale,
                fără aditivi chimici, fără pierderi de produs util.
              </p>
              {/* <p>
                Discurile ceramice cu canale spiralate generează un flux
                tangenţial continuu care împiedică colmatarea membranei,
                menținând eficiența filtrării pe termen lung.
              </p> */}

              <div className="dcf-specs">
                <div className="dcf-spec">
                  <span className="dcf-spec-label">Precizie filtrare</span>
                  <span className="dcf-spec-value">Nano–micrometrică</span>
                </div>
                <div className="dcf-spec">
                  <span className="dcf-spec-label">Membrane</span>
                  <span className="dcf-spec-value">Ceramice specializate</span>
                </div>
                <div className="dcf-spec">
                  <span className="dcf-spec-label">Produs obținut</span>
                  <span className="dcf-spec-value">Ulei de bază Group I / II</span>
                </div>
                <div className="dcf-spec">
                  <span className="dcf-spec-label">Aditivi chimici</span>
                  <span className="dcf-spec-value">Zero</span>
                </div>
              </div>
            </div>

            <div className="dcf-photos">
              <div className="dcf-photo-frame">
                <HeroBgSlider noOverlay images={[
                  { src: '/images/dcf-ceramic-01.png', alt: 'Ilustrație tehnologie ceramică pentru ulei de bază pur, Allied Green Energy' },
                  { src: '/images/dcf-ceramic-02.png', alt: 'Ilustrație discuri ceramice pentru filtrare avansată, Allied Green Energy' },
                ]} />
              </div>
              <p className="dcf-ai-disclaimer">
                Imagini cu rol pur informativ, generate cu AI.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="antifrauda-section">
        <div className="container">

          <div className="section-tag green">Diferențiatorul Allied</div>
          <h2 className="white">Garanția Anti-Fraudă.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Piața lichidelor alternative are o problemă de încredere.
            Noi am proiectat un sistem prin care clientul poate verifica
            independent fiecare lot primit.
          </p>

          <div className="antifrauda-grid">

            <div className="antifrauda-item">
              <div className="antifrauda-num">01</div>
              <h4>IBC Sigilate</h4>
              <p>
                Fiecare IBC pleacă din rafinărie sigilat cu bandă
                numerotată. Sigiliul rupt la recepție
                = lot refuzat automat, fără discuție.
              </p>
            </div>

            <div className="antifrauda-item">
              <div className="antifrauda-num">02</div>
              <h4>Probă Martor 60-90 de Zile</h4>
              <p>
                O mostră din fiecare lot este păstrată în laboratorul
                Allied timp de 60-90 de zile. Dacă apar neclarități,
                proba martor este analizată gratuit la cerere.
              </p>
            </div>

            <div className="antifrauda-item">
              <div className="antifrauda-num">03</div>
              <h4>Buletin de Analiză per Livrare</h4>
              <p>
                Fiecare livrare vine însoțită de un buletin de analiză
                cu parametri proiectati/masurati: putere calorică, viscozitate,
                sulf, punct de inflamabilitate și densitate.
              </p>
            </div>

            <div className="antifrauda-item">
              <div className="antifrauda-num">04</div>
              <h4>Lanț de Trasabilitate Complet</h4>
              <p>
                Codul de lot de pe IBC leagă livrarea de:
                locația de colectare → data intrării în rafinărie →
                data analizei → data expediției. Totul verificabil.
              </p>
            </div>

          </div>

          {/* <div className="antifrauda-cta">
            <p>
              Analiza de recepție a clientului diferă de buletinul nostru?
              <strong> Returnăm lotul integral, fără costuri.</strong>
            </p>
            <Link href="/contact" className="btn btn-green">
              Solicită un Lot de Probă
            </Link>
          </div> */}

        </div>
      </section>

      <section className="audit-section">
        <div className="container">

          <div className="section-tag green">Serviciu Nou</div>
          <h2 className="white">Audit de Calitate & Diagnoză de Eficiență.</h2>
          <p className="audit-intro">
            Ce arzi cu adevărat în cazan? O abatere aparent nesemnificativă în fișa tehnică a
            combustibilului cumpărat, precum puțină apă în plus, sedimente fine sau o vâscozitate
            necorespunzătoare, îți dă peste cap întreaga producție.
          </p>

          <ul className="audit-problem-list">
            <li>
              <TrendingDown size={18} color="var(--green-mid)" />
              <span>Consumul crește cu 8% – 15% pentru a menține aceeași temperatură de lucru.</span>
            </li>
            <li>
              <AlertTriangle size={18} color="var(--green-mid)" />
              <span>Presiunea în pompă scade sau variază, cauzând oprirea automată a arzătorului.</span>
            </li>
            <li>
              <Ban size={18} color="var(--green-mid)" />
              <span>Duzele se blochează frecvent, provocând opriri neplanificate ale liniei de producție (uscătoare de cereale, stații de asfalt, centrale de abur).</span>
            </li>
          </ul>

          <h3 className="audit-subheading">Cum funcționează Programul de Audit Allied Green Energy?</h3>
          <p className="audit-intro">
            Îți punem la dispoziție experiența și laboratorul propriu de analize fizico-chimice pentru
            a evalua starea lotului tău actual de combustibil.
          </p>

          <div className="audit-flow">
            <div className="audit-flow-step">
              <ClipboardList size={22} color="var(--green-mid)" />
              <h4>1. Soliciți Prelevarea</h4>
            </div>
            <div className="audit-flow-arrow">→</div>
            <div className="audit-flow-step">
              <Truck size={22} color="var(--green-mid)" />
              <h4>2. Prelevăm Proba (Curier)</h4>
            </div>
            <div className="audit-flow-arrow">→</div>
            <div className="audit-flow-step">
              <FlaskConical size={22} color="var(--green-mid)" />
              <h4>3. Analizăm în Laborator</h4>
            </div>
            <div className="audit-flow-arrow">→</div>
            <div className="audit-flow-step">
              <Send size={22} color="var(--green-mid)" />
              <h4>4. Primești Diagnoza</h4>
            </div>
          </div>

          <h3 className="audit-subheading">Ce evaluăm în Raportul de Diagnoză:</h3>

          <div className="antifrauda-grid" style={{ marginTop: "1.5rem" }}>
            <div className="antifrauda-item">
              <div className="antifrauda-num">01</div>
              <h4>Conținutul de Apă & Sedimente</h4>
              <p>
                Identificăm prezența emulsiilor care provoacă cavitație în pompă, uzură prematură
                și blocarea duzelor.
              </p>
            </div>
            <div className="antifrauda-item">
              <div className="antifrauda-num">02</div>
              <h4>Vâscozitatea Cinematică</h4>
              <p>
                Verificăm dacă lichidul are fluiditatea optimă pentru pomparea corectă și
                pulverizarea fină în capul de ardere.
              </p>
            </div>
            <div className="antifrauda-item">
              <div className="antifrauda-num">03</div>
              <h4>Punctul de Inflamabilitate & Stabilitatea Termică</h4>
              <p>
                Determinăm dacă combustibilul își păstrează proprietățile în preîncălzitoare fără
                să depună calamină pe tije.
              </p>
            </div>
            <div className="antifrauda-item">
              <div className="antifrauda-num">04</div>
              <h4>Calculul Pierderii Estimate</h4>
              <p>
                Traducem abaterile de calitate în lei aruncați pe fereastră per tonă arsă.
              </p>
            </div>
          </div>

          <div className="audit-note">
            <Lock size={20} color="var(--green-mid)" />
            <p>
              <strong>Transparență comercială:</strong>{" "}
              Laboratorul rafinăriei noastre emite gratuit Raportul Sintetic de Diagnoză (Semafor
              de Calitate: Roșu / Galben / Verde), oferindu-ți o imagine clară a riscurilor tehnice
              și economice din prezent. Buletinul Oficial de Laborator, alături de Fișa Tehnică de
              Optimizare, se eliberează gratuit odată cu lansarea primei comenzi de testare din
              combustibilul rafinat Allied Green Energy.
            </p>
          </div>

        </div>
      </section>

      <section className="audit-form-section">
        <div className="container">

          <div className="audit-form-grid">

            <div className="audit-nameplate-col">
              <div className="section-tag blue">Date Tehnice</div>
              <h3>Cum identifici datele tehnice ale echipamentului tău?</h3>
              <p>
                Pentru ca analiza de laborator să fie calibrată exact pe toleranțele hidraulice ale
                echipamentului tău, avem nevoie de datele de pe plăcuța metalică de identificare
                (eticheta tehnică) montată pe corpul arzătorului sau al cazanului.
              </p>

              <div className="audit-nameplate">
                <div className="audit-nameplate-head">
                  <Tag size={15} />
                  <span>Așa arată eticheta tehnică de pe echipamentul tău</span>
                </div>
                <div className="ecotherm-specs">
                  <div className="spec-row">
                    <span className="label">Fabricant / Brand</span>
                    <span className="value">Ex: Riello, Weishaupt, Baltur</span>
                  </div>
                  <div className="spec-row">
                    <span className="label">Model</span>
                    <span className="value">Ex: 40 N20 / RL 28 / WM-G10</span>
                  </div>
                  <div className="spec-row">
                    <span className="label">Serie / Cod</span>
                    <span className="value">Ex: 3474000</span>
                  </div>
                  <div className="spec-row">
                    <span className="label">Putere termică</span>
                    <span className="value">118 / 235 – 580 kW</span>
                  </div>
                  <div className="spec-row">
                    <span className="label">Vâscozitate max. admisă</span>
                    <span className="value">6 mm²/s (cSt) la 50°C</span>
                  </div>
                  <div className="spec-row">
                    <span className="label">Alimentare</span>
                    <span className="value">230V / 400V ~ 50Hz</span>
                  </div>
                </div>
              </div>

              <p className="audit-nameplate-tip">
                Dacă nu ești sigur de parametri, poți încărca o poză clară cu plăcuța direct în
                formular.
              </p>
            </div>

            <AuditForm />

          </div>

        </div>
      </section>

    </>
  );
}