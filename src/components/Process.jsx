import Reveal from "./Reveal";
import "./Process.css";

const STEPS = [
  {
    title: "Agendamento",
    text: "Você define o dia e o horário pelo WhatsApp, sem burocracia.",
  },
  {
    title: "Avaliação",
    text: "Analisamos a água e o estado atual da piscina antes de começar.",
  },
  {
    title: "Limpeza",
    text: "Aspiração, escovação e ajuste químico feitos com calma e cuidado.",
  },
  {
    title: "Piscina pronta",
    text: "Água cristalina e equilibrada, pronta para uso no mesmo dia.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="section-pad process">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Como funciona, do primeiro contato à água pronta</h2>
          <p>Um processo direto, pensado para você acompanhar cada etapa sem complicação.</p>
        </Reveal>

        <div className="process-steps">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} className="process-step">
              <span className="process-number">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
          <div className="process-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
