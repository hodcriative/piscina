import { useEffect, useState } from "react";
import "./Header.css";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#antes-depois", label: "Resultados" },
  { href: "#processo", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#atendimento", label: "Atendimento" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="container header-inner">
        <a href="#topo" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 18c1.8 1.4 3.4 1.4 5.2 0 1.8-1.4 3.4-1.4 5.2 0 1.8 1.4 3.4 1.4 5.2 0 1.8-1.4 3.4-1.4 5.2 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M2 12.5c1.8 1.4 3.4 1.4 5.2 0 1.8-1.4 3.4-1.4 5.2 0 1.8 1.4 3.4 1.4 5.2 0 1.8-1.4 3.4-1.4 5.2 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
          </span>
          Límpida
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary header-cta" href="#orcamento">
            Solicitar orçamento
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-nav">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#orcamento" onClick={() => setOpen(false)}>
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}
