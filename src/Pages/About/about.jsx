import React from "react";
import './about.css'

export function AboutMe() {
  return (
    <section id="aboutme" className="about">
      {/* <img src="/assets/img/nsaravia.png" alt="" /> */}
      <div className="about-info">
        <h2>About me</h2>
        <div className="divider"></div>
        <p>
          Soy un cordobés apasionado por la tecnología y el conocimiento, en
          constante búsqueda de nuevos desafíos y oportunidades de aprendizaje.
          Actualmente, me desempeño como Desarrollador orientado al Front y
          incursionando en el área del Data Science.
        </p>
        <p>
          Además de mi interés por la tecnología, soy padre de familia y
          disfruto de compartir tiempo de calidad con mis seres queridos. En mi
          tiempo libre, me gusta relajarme con un buen ferné y explorar nuevas
          experiencias culinarias.
        </p>
        <p>
          Soy un pensador inquisitivo y me apasionan temas diversos como la
          filosofía, la historia y la economía. Creo en la importancia del
          conocimiento en constante expansión y la aplicación de la tecnología
          para resolver problemas.
        </p>
        <p>
          También soy emprendedor, lo que me ha brindado una valiosa experiencia en la gestión de
          negocios.
        </p>
        <p>
          Mi enfoque principal está en el desarrollo Web Front End y las
          Ciencias de Datos, lo que me permite combinar mis habilidades técnicas
          con mi pasión por la innovación.
        </p>
        <a
          href="https://drive.google.com/file/d/196yBNE5RTge0Dd6Eud-i5KYpjmSjKHi8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="contact">Download CV</button>
        </a>
      </div>
    </section>
  );
};
