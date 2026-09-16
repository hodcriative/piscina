import Reveal from "./Reveal";
import "./Services.css";

const SERVICES = [
  {
    title: "Limpeza e aspiração",
    text: "Remoção de folhas, sedimentos e sujeira do fundo e das laterais a cada visita.",
  },
  {
    title: "Tratamento químico",
    text: "Dosagem de cloro, algicida e corretores de pH conforme a análise da água.",
  },
  {
    title: "Limpeza de bordas",
    text: "Escovação da linha d'água e dos revestimentos para evitar acúmulo de calcário e gordura.",
  },
  {
    title: "Manutenção de filtros",
    text: "Retrolavagem, limpeza de cestos e verificação do sistema de filtragem e bombeamento.",
  },
  {
    title: "Recuperação de piscinas",
    text: "Tratamento de choque para piscinas esverdeadas ou sem uso, do zero até a água pronta.",
  },
  {
    title: "Manutenção periódica",
    text: "Planos semanais ou quinzenais com relatório simples do que foi feito em cada visita.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-pad services">
      <div className="container services-inner">
        <div className="services-intro">
          <Reveal className="section-heading">
            <h2>Serviços pensados para cada etapa do cuidado</h2>
            <p>
              Do dia a dia à recuperação de piscinas esquecidas, cada serviço
              pode ser contratado avulso ou dentro de um plano de manutenção.
            </p>
          </Reveal>
          <Reveal delay={120} className="services-cta-card">
            <p>Não sabe qual serviço se encaixa na sua piscina?</p>
            <a href="#orcamento" className="btn btn-dark">
              Falar com a Límpida
            </a>
          </Reveal>
        </div>

        <div className="services-list">
          {SERVICES.map((service, i) => (
            <Reveal as="div" key={service.title} delay={i * 70} className="service-row">
              <span className="service-dot" aria-hidden="true" />
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
