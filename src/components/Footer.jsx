import "./Footer.css";

const SECTIONS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#antes-depois", label: "Resultados" },
  { href: "#processo", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#atendimento", label: "Atendimento" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand footer-logo">Límpida</span>
          <p>Manutenção e limpeza de piscinas em Colatina e região.</p>

          <div className="footer-socials">
            <a href="https://wa.me/5527999990000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              WhatsApp
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Seções</h4>
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Horário de atendimento</h4>
          <ul>
            <li>Segunda a sexta — 7h às 17h</li>
            <li>Sábado — 8h às 12h</li>
            <li>(27) 99999-0000</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Límpida. Todos os direitos reservados.</span>
        <span className="footer-demo-note">Página de demonstração de projeto</span>
      </div>
    </footer>
  );
}
