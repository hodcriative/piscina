import Reveal from "./Reveal";
import antesDepois from "../assets/antes-depois.png";
import "./BeforeAfter.css";

export default function BeforeAfter() {
  return (
    <section id="antes-depois" className="section-pad before-after">
      <div className="container">
        <Reveal className="section-heading center">
          <h2>A diferença aparece já na primeira semana</h2>
          <p>
            Piscinas esquecidas, esverdeadas ou só com sujeira acumulada
            voltam a ficar assim — cristalinas e convidativas.
          </p>
        </Reveal>

        <Reveal delay={100} className="before-after-frame">
          <img src={antesDepois} alt="Piscina antes, com água esverdeada, e depois, com água cristalina" />
          <span className="ba-tag ba-tag-before">Antes</span>
          <span className="ba-tag ba-tag-after">Depois</span>
        </Reveal>
      </div>
    </section>
  );
}
