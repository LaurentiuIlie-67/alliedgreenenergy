"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import LogoMark from "./LogoMark";

const PROGRAMS = [
  { href: "/fleet-gold", label: "Fleet Gold" },
  { href: "/echipamente-termice", label: "Echipamente Termice" },
  { href: "/partener-allied", label: "Partener Allied" },
  { href: "/mentenanta-premium", label: "Mentenanță Premium" },
  { href: "/solutii-industriale-mw", label: "Industrial Heavy-Duty (MW)" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const navRef = useRef(null);
  const isProgramsActive = PROGRAMS.some((p) => p.href === pathname);

  useEffect(() => {
    setOpen(false);
    setProgramsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !programsOpen) return;
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
        setProgramsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, programsOpen]);

  return (
    <nav ref={navRef}>
      <div className="nav-inner">

        <Link href="/" className="logo">
          <LogoMark height={90} />
        </Link>

        <button
          className={`hamburger${open ? " is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Deschide meniu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>

          <li>
            <Link
              href="/rafinare"
              className={pathname === "/rafinare" ? "active" : ""}
            >
              Rafinare
            </Link>
          </li>

          <li>
            <Link
              href="/colectare"
              className={pathname === "/colectare" ? "active" : ""}
            >
              Colectare
            </Link>
          </li>

          <li>
            <Link
              href="/laborator"
              className={pathname === "/laborator" ? "active" : ""}
            >
              Laborator
            </Link>
          </li>

          <li>
            <Link
              href="/cariere"
              className={pathname === "/cariere" ? "active" : ""}
            >
              Cariere
            </Link>
          </li>

          <li className="nav-dropdown">
            <button
              type="button"
              className={`nav-dropdown-trigger${isProgramsActive ? " active" : ""}${programsOpen ? " is-open" : ""}`}
              onClick={() => setProgramsOpen((v) => !v)}
              aria-expanded={programsOpen}
            >
              Programe
              <ChevronDown size={14} className="nav-dropdown-chevron" />
            </button>

            <ul className={`nav-dropdown-panel${programsOpen ? " open" : ""}`}>
              {PROGRAMS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className={pathname === p.href ? "active" : ""}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/contact" className="nav-cta">
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
