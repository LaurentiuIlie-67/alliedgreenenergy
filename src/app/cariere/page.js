import Link from "next/link";
import { FlaskConical, Truck, BarChart2 } from "lucide-react";

export const metadata = {
  title: "Cariere Elite — Allied Green Energy",
  description: "Căutăm ingineri chimiști, specialiști ADR și consultanți tehnici pentru echipa Allied.",
};

export default function CarierePage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Cariere Elite</span>
          </div>

          <div className="page-hero-tag blue-tag">
            Pilonul 04 — Elite & Cariere
          </div>

          <h1>
            Construim viitorul energiei
            <br />
            <em className="blue">cu oameni de elită.</em>
          </h1>

          <p>
            Nu angajăm oameni care bifează cerințe.
            Căutăm specialiști care înțeleg chimia,
            logistica și tehnologia industrială
            și care vor să construiască ceva real.
          </p>
        </div>
      </div>

      <section className="roles-section">
        <div className="container">

          <div className="section-tag blue">Poziții de Interes</div>
          <h2 className="white">Ce profile căutăm.</h2>

          <div className="roles-grid">

            <div className="role-card">
              <div className="role-tag">Laborator</div>
              <div className="role-icon">
                <FlaskConical size={22} color="var(--blue-light)" />
              </div>
              <h3>Ingineri Chimiști</h3>
              <p>
                Operare spectrometru ICP-OES, FTIR și
                viscozimetru. Interpretare rezultate și
                redactare rapoarte tehnice de diagnoză.
              </p>
            </div>

            <div className="role-card">
              <div className="role-tag">Logistică</div>
              <div className="role-icon">
                <Truck size={22} color="var(--blue-light)" />
              </div>
              <h3>Specialiști ADR</h3>
              <p>
                Gestionarea colectării și transportului
                național de mărfuri periculoase, cu
                documentație completă la fiecare cursă.
              </p>
            </div>

            <div className="role-card">
              <div className="role-tag">Consultanță</div>
              <div className="role-icon">
                <BarChart2 size={22} color="var(--blue-light)" />
              </div>
              <h3>Consultanți Tehnici</h3>
              <p>
                Relații directe cu clienții industriali,
                prezentare servicii de diagnoză preventivă
                și identificare oportunități de parteneriat.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
