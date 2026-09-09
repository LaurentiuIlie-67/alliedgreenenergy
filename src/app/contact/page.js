import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Allied Green Energy",
  description: "Contactează echipa Allied pentru colectare, laborator sau parteneriate.",
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">

        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">

          <div className="breadcrumb">
            <span>Acasă</span>
            <span>›</span>
            <span>Contact</span>
          </div>

          <div className="page-hero-tag">
            Centru de Comandă
          </div>

          <h1>
            Suntem aici să intervenim.
            <br />
            <em>Rapid și profesionist.</em>
          </h1>

          <p>
            Contactează echipa Allied pentru
            colectare, laborator sau parteneriate.
          </p>

        </div>
      </div>

      <div style={{ background: "var(--off-white)" }}>
        <div className="container">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </>
  );
}
