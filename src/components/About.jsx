import Reveal from "./Reveal";
import tecnico from "../assets/tecnico-limpeza.png";
import "./About.css";

const DIFERENCIAIS = [
  "Mais de 8 anos cuidando de piscinas residenciais e comerciais",
  "Equipamentos próprios e produtos dentro das normas de segurança",
  "Comunicação direta por WhatsApp, sem intermediários",
  "Relatório simples de cada visita, com fotos do serviço",
];

export default function About() {
  return (
    <section id="sobre" className="section-pad about">
      <div className="container about-inner">
        <Reveal className="about-visual">
          <img src={tecnico} alt="Profissional da Límpida realizando manutenção de piscina" />
        </Reveal>

        <div className="about-copy">
          <Reveal className="section-heading">
            <h2>Um único responsável, do início ao fim do serviço</h2>
            <p>
              A Límpida nasceu para resolver um problema simples: piscina
              exige atenção constante, e nem sempre dá tempo de cuidar dela
              direito. Cuidamos disso com a mesma seriedade que você cuidaria
              da sua casa.
            </p>
          </Reveal>

          <ul className="about-list">
            {DIFERENCIAIS.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 80}>
                <span className="about-check">✓</span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
