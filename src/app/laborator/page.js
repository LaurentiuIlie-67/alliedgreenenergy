import Link from "next/link";
import { TestTube, Droplets, Flame, Package, FlaskConical, FileText, Cpu, Microscope, Zap, Gauge, Scale, Layers, Snowflake } from "lucide-react";
import PhotoSlider from "@/components/PhotoSlider";
import HeroBgSlider from "@/components/HeroBgSlider";

export const metadata = {
  title: "Analiză Ulei Industrial & Diagnoză — Allied Green Energy",
  description: "Laborator ICP-OES și FTIR intern. Raport Semafor în 24h: detectăm contaminanții și uzura instalațiilor înainte de avarie. Analize pentru utilaje industriale, hidraulice și flote.",
  keywords: "analiza ulei industrial, diagnoza ulei, ICP-OES, FTIR ulei, raport semafor, analiza spectrala ulei, ulei hidraulic, diagnoza preventiva utilaje",
};

export default function LaboratorPage() {
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
                <span>Laborator & Diagnoză</span>
              </div>

              <div className="page-hero-tag blue-tag">
                Pilonul 03 — Diagnoză Moleculară
              </div>

              <h1>
                Combustibilul si uleiul tau
                {/* <br /> */}
                <em className="blue"> au o poveste de spus.</em>
              </h1>

              <p>
                Combustibilul lichid fabricat corespunde specificatiilor instalatiilor tale de ardere. Analizăm intern, nu trimitem probe la terți.
                Raportul ajunge la tine în 24h cu recomandări
                clare de intervenție.
              </p>

              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {/* <Link href="/contact" className="btn btn-blue">
                  Solicită Kit
                </Link> */}
                <Link href="/fleet-gold" className="btn btn-outline-light">
                  Program Fleet Gold
                </Link>
              </div>
            </div>

            <div className="lab-hero-photo">
              <HeroBgSlider noOverlay images={[
                { src: '/images/lab-banc.jpg',       alt: 'Laborator Allied Green Energy' },
                { src: '/images/lab-echipamente.jpg', alt: 'Echipamente analiză ulei Allied' },
                { src: '/images/lab-interior-01.jpg', alt: 'Interior laborator Allied' },
                { src: '/images/lab-interior-03.jpg', alt: 'Interior laborator Allied' },
              ]} />
            </div>

          </div>
        </div>
      </div>

      <section className="service-section">
        <div className="container">

          <div className="section-tag blue">Analize Spectrale</div>
          <h2 className="white">Ce analizăm în laborator.</h2>

          <div className="service-grid">

            <div className="service-card">
              <div className="service-icon">
                <TestTube size={22} color="var(--blue-light)" />
              </div>
              <h3>Particule Metalice</h3>
              <p>
                Fier, cupru, plumb, crom: concentrațiile metalice
                din ulei indică exact ce piesă cedează și cât de
                repede. Detectăm uzura prematură înainte de avarie.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Droplets size={22} color="var(--blue-light)" />
              </div>
              <h3>Infiltrații și Glicol</h3>
              <p>
                Apă sau glicol în ulei distrug rulmenții în
                câteva săptămâni. Identificăm infiltrările
                înainte ca deteriorarea să devină ireversibilă.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Flame size={22} color="var(--blue-light)" />
              </div>
              <h3>Degradare Termică</h3>
              <p>
                Măsurăm indicele de aciditate, viscozitatea la
                temperaturi extreme și punctul de inflamabilitate.
                Uleiul supraîncălzit nu mai protejează.
              </p>
            </div>

          </div>

          <p className="spec-chips-label">Plus, testăm conform standardelor de calitate:</p>

          <div className="spec-chips">
            <div className="spec-chip"><FlaskConical size={14} /> Curbă de distilare</div>
            <div className="spec-chip"><Gauge size={14} /> Viscozitate convențională (20°C / 50°C)</div>
            <div className="spec-chip"><Scale size={14} /> Densitate la 20°C</div>
            <div className="spec-chip"><Flame size={14} /> Inflamabilitate</div>
            <div className="spec-chip"><Layers size={14} /> Fracții petroliere</div>
            <div className="spec-chip"><Snowflake size={14} /> Punct de congelare</div>
            <div className="spec-chip"><Droplets size={14} /> Conținut de apă și sediment</div>
            <div className="spec-chip"><Zap size={14} /> Putere calorică inferioară</div>
          </div>

        </div>
      </section>


      {/* <section className="process-section">
        <div className="container">

          <div className="section-tag blue">Proces Simplu</div>
          <h2>Cum funcționează diagnoza.</h2>

          <div className="process-steps">

            <div className="process-step">
              <div className="process-step-num">01</div>
              <div style={{ marginBottom: "1rem" }}>
                <Package size={22} color="var(--blue-mid)" />
              </div>
              <h3>Soliciți kit-ul</h3>
              <p>
                Completezi formularul online sau ne suni.
                Kit-ul de prelevare, cu recipient special,
                instrucțiuni și etichetă de retur, ajunge
                la tine în 24h.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step-num">02</div>
              <div style={{ marginBottom: "1rem" }}>
                <FlaskConical size={22} color="var(--blue-mid)" />
              </div>
              <h3>Prelevezi și trimiți</h3>
              <p>
                Recoltezi 100ml de ulei la temperatura
                de operare, sigilezi recipientul și trimiți
                cu curier sau ridicăm noi direct de la tine.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step-num">03</div>
              <div style={{ marginBottom: "1rem" }}>
                <FileText size={22} color="var(--blue-mid)" />
              </div>
              <h3>Primești raportul</h3>
              <p>
                În 24h de la recepție primești un PDF cu
                concentrații metalice, cod de risc
                (verde / galben / roșu) și recomandări
                de intervenție.
              </p>
            </div>

          </div>
        </div>
      </section> */}

      <section className="semafor-section">
        <div className="container">

          <div className="section-tag blue">Raportul Semafor</div>
          <h2 className="white">Ce înseamnă fiecare culoare.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Fiecare parametru analizat primește un cod de culoare.
            Nu ai nevoie de cunoștințe tehnice. Raportul îți spune
            exact ce trebuie să faci și cât de urgent.
          </p>

          <div className="semafor-legend">
            <div className="semafor-status">
              <div className="semafor-status-dot green" />
              <h3>Verde: OK</h3>
              <p>Parametru în limite normale. Nicio intervenție necesară. Continuă programul de monitorizare curent.</p>
            </div>
            <div className="semafor-status">
              <div className="semafor-status-dot yellow" />
              <h3>Galben: Atenție</h3>
              <p>Valoare apropiată de limită. Reducem intervalul de monitorizare și urmărim tendința la proba următoare.</p>
            </div>
            <div className="semafor-status">
              <div className="semafor-status-dot red" />
              <h3>Roșu: Intervenție</h3>
              <p>Limită critică depășită. Schimb de ulei sau revizie urgentă înainte de reluarea funcționării instalației.</p>
            </div>
          </div>

          <div className="semafor-table-wrap">
            <div className="semafor-table-header">
              <div>
                <span className="label">Raport Diagnoză · Exemplu</span>
                <strong>Instalație Hidraulică · Hală Producție · 5.800 ore funcționare</strong>
              </div>
              <span className="badge badge-blue">PDF generat automat</span>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Parametru</th>
                  <th>Valoare măsurată</th>
                  <th>Limită</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fier (Fe)</td>
                  <td>42 ppm</td>
                  <td>100 ppm</td>
                  <td>
                    <div className="semafor-td-status">
                      <span className="dot dot-green" />
                      Verde
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Cupru (Cu)</td>
                  <td>18 ppm</td>
                  <td>30 ppm</td>
                  <td>
                    <div className="semafor-td-status">
                      <span className="dot dot-green" />
                      Verde
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Plumb (Pb)</td>
                  <td>24 ppm</td>
                  <td>25 ppm</td>
                  <td>
                    <div className="semafor-td-status">
                      <span className="dot dot-yellow" />
                      Galben
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Glicol</td>
                  <td>Urme detectate</td>
                  <td>Absent</td>
                  <td>
                    <div className="semafor-td-status">
                      <span className="dot dot-red" />
                      Roșu
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Viscozitate (100°C)</td>
                  <td>14.2 cSt</td>
                  <td>12–16 cSt</td>
                  <td>
                    <div className="semafor-td-status">
                      <span className="dot dot-green" />
                      Verde
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Indice aciditate (TAN)</td>
                  <td>2.8 mg KOH/g</td>
                  <td>≤ 3.0 mg KOH/g</td>
                  <td>
                    <div className="semafor-td-status">
                      <span className="dot dot-yellow" />
                      Galben
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="semafor-footer">
              <p>
                <strong>Recomandare Allied:</strong>{" "}
                Glicol detectat indică o infiltrare la circuitul de răcire al instalației.
                Înlocuire ulei hidraulic imediat obligatorie. Pompa și distribuitorul
                riscă deteriorare ireversibilă în 2-4 săptămâni fără intervenție.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* <PhotoSlider
        tag="Laboratorul Nostru"
        title="Văzut de aproape."
        subtitle="Echipamente proprii, analize interne — fără terți, fără întârzieri."
        tagColor="blue"
        slides={[
          {
            src: '/images/lab-banc.jpg',
            alt: 'Banca de lucru din laboratorul Allied Green Energy',
            label: 'Laboratorul nostru intern',
          },
          {
            src: '/images/lab-balone.jpg',
            alt: 'Testare formulă combustibil în laborator Allied Green Energy',
            label: 'Cercetare & Dezvoltare',
          },
          {
            src: '/images/lab-echipamente.jpg',
            alt: 'Echipamente de analiză ulei Allied Green Energy',
            label: 'Echipamente de precizie',
          },
          {
            src: '/images/lab-interior-01.jpg',
            alt: 'Interior laborator Allied Green Energy',
            label: 'Spaţiu de lucru',
          },
          {
            src: '/images/lab-interior-02.jpg',
            alt: 'Interior laborator Allied Green Energy',
            label: 'Analiză internă',
          },
          {
            src: '/images/lab-interior-03.jpg',
            alt: 'Interior laborator Allied Green Energy',
            label: 'Trasabilitate completă',
          },
        ]}
      /> */}

      {/* <section className="equip-section">
        <div className="container">

          <div className="section-tag blue">Echipamente de Analiză</div>
          <h2>Trei niveluri de investiție.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "540px", marginTop: ".5rem" }}>
            De la kit-uri portabile până la spectrometre ICP-OES de laborator,
            îți recomandăm nivelul potrivit volumului și complexității flotei tale.
          </p>

          <div className="equip-grid">

            <div className="equip-card">
              <div className="equip-card-icon">
                <Cpu size={20} color="var(--blue-mid)" />
              </div>
              <div className="equip-level-badge">Level 1</div>
              <h3>Analiză Portabilă</h3>
              <div className="equip-price">1.000 – 1.300 EUR</div>
              <p>
                Viscozimetru portabil și kit colorimetric de teren.
                Ideal pentru flote mici sau controale rapide
                la punctul de lucru.
              </p>
              <ul className="equip-features">
                <li>Viscozitate la 40°C și 100°C</li>
                <li>Test acid/bază rapid</li>
                <li>Detecție apă (crackle test)</li>
                <li>Rezultate în 15 minute</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark btn-full" style={{ marginTop: "auto" }}>
                Solicită Detalii
              </Link>
            </div>

            <div className="equip-card equip-card-featured">
              <div className="equip-card-icon">
                <Microscope size={20} color="var(--blue-mid)" />
              </div>
              <div className="equip-level-badge featured">Level 2 · Recomandat</div>
              <h3>Laborator de Flotă</h3>
              <div className="equip-price">4.500 – 6.500 EUR</div>
              <p>
                Viscozimetru automat + FTIR cu bibliotecă de referință.
                Detectează contaminanți, degradare termică și
                glicol fără a trimite probe la terți.
              </p>
              <ul className="equip-features">
                <li>FTIR: analiză moleculară completă</li>
                <li>Viscozimetru automat ±0,1%</li>
                <li>Raport PDF generat automat</li>
                <li>Bibliotecă 500+ uleiuri de referință</li>
              </ul>
              <Link href="/contact" className="btn btn-blue btn-full" style={{ marginTop: "auto" }}>
                Solicită Ofertă Level 2
              </Link>
            </div>

            <div className="equip-card">
              <div className="equip-card-icon">
                <Zap size={20} color="var(--blue-mid)" />
              </div>
              <div className="equip-level-badge">Level 3</div>
              <h3>Laborator ICP-OES</h3>
              <div className="equip-price">până la 60.000 EUR</div>
              <p>
                Spectrometru ICP-OES pentru analiză elementală completă,
                același echipament folosit de Allied în laboratorul propriu.
                Potrivit pentru centre de service sau raffinării interne.
              </p>
              <ul className="equip-features">
                <li>30+ metale simultan (Fe, Cu, Pb, Cr…)</li>
                <li>Precizie ppb (µg/kg)</li>
                <li>Conformitate ISO 8217 și ISO 4406</li>
                <li>Suport instalare și calibrare Allied</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark btn-full" style={{ marginTop: "auto" }}>
                Contactează un Specialist
              </Link>
            </div>

          </div>

          <p className="equip-note">
            Toate echipamentele sunt livrate cu calibrare inițială și formare tehnică.
            Allied oferă și serviciu de recalibrare anuală.
          </p>

        </div>
      </section> */}
    </>
  );
}
