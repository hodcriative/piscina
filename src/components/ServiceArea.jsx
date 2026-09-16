import Reveal from "./Reveal";
import "./ServiceArea.css";

const NEIGHBORHOODS = [
  "Centro",
  "Esplanada",
  "Santa Marta",
  "Biriricas",
  "Honório Fraga",
  "Vila Formosa",
  "Interlagos",
];

export default function ServiceArea() {
  return (
    <section id="atendimento" className="section-pad service-area">
      <div className="container service-area-inner">
        <Reveal className="service-area-copy">
          <h2>Atendimento residencial e comercial em Colatina e região</h2>
          <p>
            Levamos a estrutura de limpeza até a sua casa, condomínio ou
            espaço comercial. Confirme se o seu bairro está na área
            atendida antes de solicitar o orçamento.
          </p>
          <a href="#orcamento" className="btn btn-primary">
            Consultar disponibilidade
          </a>
        </Reveal>

        <Reveal delay={120} className="service-area-tags">
          {NEIGHBORHOODS.map((n) => (
            <span key={n} className="area-tag">
              {n}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
