import Reveal from "./Reveal";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Minha piscina ficou parada quase um ano. Em duas visitas já estava transparente de novo, e hoje é só manutenção mensal.",
    name: "Renata Almeida",
    detail: "Bairro Esplanada",
  },
  {
    quote:
      "O que mais gosto é a previsibilidade: sei exatamente o dia que vêm e sempre chega uma foto de como ficou.",
    name: "Marcelo Tosta",
    detail: "Condomínio Vista Verde",
  },
  {
    quote:
      "Contratei para a piscina do salão de festas do prédio. Zero reclamação de morador desde que começamos com eles.",
    name: "Juliana Prado",
    detail: "Síndica, Edifício Bela Vista",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-pad testimonials">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Quem já experimentou, não volta a cuidar sozinho</h2>
          <p>Alguns relatos de clientes atendidos pela Límpida nos últimos meses.</p>
        </Reveal>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="testimonial-card">
              <svg className="quote-mark" width="34" height="26" viewBox="0 0 34 26" fill="none">
                <path
                  d="M9.6 26C4 24 0 19 0 12.6 0 6 4.6 1 11.4 0l1.6 4.2C8 5.6 5.6 8.4 5.4 12c2.2.4 4 2.2 4 4.8 0 3-2.2 5.2-5.2 5.2h5.4zM28.6 26C23 24 19 19 19 12.6 19 6 23.6 1 30.4 0L32 4.2c-5 1.4-7.4 4.2-7.6 7.8 2.2.4 4 2.2 4 4.8 0 3-2.2 5.2-5.2 5.2h5.4z"
                  fill="currentColor"
                />
              </svg>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-meta">
                <span className="testimonial-avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.detail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
