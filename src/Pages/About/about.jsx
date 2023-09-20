import React from "react";
import './about.css'

export function AboutMe() {
  return (
    <section id="aboutme" className="about">
      <img src="/src/assets/img/nsaravia.png" alt="" />
      <div className="about-info">
        <h2>About me</h2>
        <div className="divider"></div>
        <p>
          Soy un cordobés apasionado por la tecnología y el conocimiento, en
          constante búsqueda de nuevos desafíos y oportunidades de aprendizaje.
          Actualmente, me desempeño como desarrollador web fullstack y estoy a
          punto de completar mis estudios en Data Science.
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
          También soy emprendedor y fundador de{" "}
          <a
            href="https://www.instagram.com/barberiayofre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barbería Yofre
          </a>
          , lo que me ha brindado una valiosa experiencia en la gestión de
          negocios.
        </p>
        <p>
          Mi enfoque principal está en el desarrollo web fullstack y las
          Ciencias de Datos, lo que me permite combinar mis habilidades técnicas
          con mi pasión por la innovación.
        </p>
        <a
          href="https://drive.google.com/file/d/15pVpw2_LOwe9mwXrRfG0qBQS46982LNm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="contact">Download CV</button>
        </a>
      </div>
    </section>
  );
};
