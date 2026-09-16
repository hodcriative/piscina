import Reveal from "./Reveal";
import "./Benefits.css";

const ITEMS = [
  {
    title: "Limpeza completa",
    text: "Aspiração do fundo, escovação de bordas e retirada de folhas e sujeira visível a cada visita.",
    tone: "cyan",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 14c3-2 5-2 8 0s5 2 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 19c3-2 5-2 8 0s5 2 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
        <path d="M9 4l1.4 3.2L14 8l-3.2 1.4L9 12.6 7.6 9.4 4.4 8l3.2-.8L9 4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Tratamento da água",
    text: "Filtragem e circulação ajustadas para manter a água transparente do primeiro ao último dia da semana.",
    tone: "aqua",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3c3 4 6 7.4 6 11.2A6 6 0 016 14.2C6 10.4 9 7 12 3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Controle de pH e cloro",
    text: "Medição e correção dos níveis químicos para uma água segura para peles, olhos e equipamentos.",
    tone: "ink",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 3h6M10 3v6.2L5.4 17a2 2 0 001.7 3h9.8a2 2 0 001.7-3L14 9.2V3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7.5 15h9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Manutenção preventiva",
    text: "Revisão de bombas, filtros e acessórios para evitar problemas antes que eles apareçam.",
    tone: "cyan-light",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M14.7 6.3a3.5 3.5 0 01-4.6 4.6L4 17l3 3 6.1-6.1a3.5 3.5 0 014.6-4.6l-2.3 2.3-2-2 2.3-2.3z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="section-pad benefits">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Tudo que sua piscina precisa, em uma rotina só</h2>
          <p>
            Combinamos limpeza, química e manutenção em um único serviço — sem
            você precisar coordenar três fornecedores diferentes.
          </p>
        </Reveal>

        <div className="benefits-grid">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className={`benefit-card tone-${item.tone}`}>
              <span className="benefit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
