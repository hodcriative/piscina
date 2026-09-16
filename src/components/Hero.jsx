import { useEffect, useState } from "react";
import tecnico from "../assets/tecnico-limpeza.png";
import "./Hero.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="topo" className={`hero ${loaded ? "hero-loaded" : ""}`}>
      <div className="hero-ripples" aria-hidden="true">
        <span className="ripple ripple-a" />
        <span className="ripple ripple-b" />
        <span className="ripple ripple-c" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-badge">
            <span className="hero-badge-dot" />
            Atendimento profissional certificado
          </p>

          <h1 className="hero-title">
            Sua piscina limpa, cristalina
            <br />e pronta para aproveitar
          </h1>

          <p className="hero-lead">
            Cuidamos da limpeza, do equilíbrio químico e da manutenção da sua
            piscina com uma rotina simples e transparente — para você entrar
            na água sem pensar em mais nada.
          </p>

          <div className="hero-cta-row">
            <a href="#orcamento" className="btn btn-primary">
              Solicitar orçamento
            </a>
            <a href="#servicos" className="btn btn-ghost">
              Ver serviços
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>
                <Counter target={500} suffix="+" />
              </strong>
              <span>Piscinas atendidas</span>
            </div>
            <div className="hero-stat">
              <strong>
                <Counter target={4.8} decimals={1} />
              </strong>
              <span>Satisfação média</span>
            </div>
            <div className="hero-stat">
              <strong>
                <Counter target={7} />
              </strong>
              <span>Bairros atendidos</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <img src={tecnico} alt="Profissional Límpida limpando uma piscina residencial" />
          </div>
          <div className="hero-float-card">
            <span className="hero-float-icon">✓</span>
            <div>
              <strong>Água equilibrada</strong>
              <span>pH e cloro sempre em dia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix = "", decimals = 0 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <>
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}
