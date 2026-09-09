import Link from "next/link";

export const metadata = {
  title: "Politica de Cookie-uri — Allied Green Energy",
  description: "Politica privind modulele cookie a Allied Green Energy S.R.L.",
};

export default function PoliticaCookieuriPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Politica de Cookie-uri</span>
          </div>

          <h1>Politică privind modulele cookie</h1>
        </div>
      </div>

      <div className="legal-content">
        <p className="legal-updated"><strong>Ultima actualizare:</strong> 4 august 2026</p>

        <h2>Ce sunt modulele cookie</h2>
        <p>
          Modulele cookie sunt fișiere de mici dimensiuni, salvate în browserul dumneavoastră atunci când vizitați un
          site web. Ele sunt utilizate în mod uzual pentru a face site-urile să funcționeze, pentru a reține
          preferințe sau pentru a colecta date statistice despre utilizare.
        </p>

        <h2>Ce module cookie folosim</h2>
        <p>
          Site-ul <strong>ALLIED GREEN ENERGY S.R.L.</strong> nu utilizează module cookie de urmărire, de analiză a
          traficului, de publicitate sau de profilare.
        </p>
        <p>
          Nu folosim servicii de tip Google Analytics, pixeli de urmărire ai rețelelor sociale sau alte instrumente
          similare care să colecteze date despre comportamentul dumneavoastră de navigare.
        </p>
        <p>
          Fonturile utilizate pe site sunt găzduite local, pe propria infrastructură, astfel încât afișarea acestora
          nu presupune transmiterea de date către servere externe.
        </p>
        <p>
          Este posibil ca platforma de găzduire a site-ului să utilizeze module cookie strict tehnice, necesare pentru
          funcționarea și securitatea site-ului. Aceste module nu colectează date cu caracter personal în scop de
          marketing și nu necesită consimțământ, conform legislației aplicabile.
        </p>

        <h2>Datele transmise prin formularul de contact</h2>
        <p>
          Datele pe care le introduceți în formularul de contact <strong>nu sunt colectate prin module cookie</strong>,
          ci sunt transmise direct, la trimiterea formularului, în condițiile descrise în{" "}
          <Link href="/politica-confidentialitate">Politica de confidențialitate</Link>.
        </p>

        <h2>Gestionarea modulelor cookie</h2>
        <p>
          Puteți controla și șterge modulele cookie prin setările browserului dumneavoastră. Instrucțiuni detaliate
          găsiți în secțiunea de ajutor a browserului pe care îl utilizați (Chrome, Firefox, Safari, Edge etc.).
        </p>

        <h2>Modificări</h2>
        <p>
          Dacă în viitor vom introduce module cookie suplimentare (de exemplu pentru statistici de trafic), vom
          actualiza această politică și, acolo unde este necesar, vom solicita acordul dumneavoastră printr-un banner
          dedicat.
        </p>
      </div>
    </>
  );
}
