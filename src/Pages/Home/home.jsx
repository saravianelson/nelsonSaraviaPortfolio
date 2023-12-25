import React, { useState } from "react";
import { AboutMe } from "../About/about";
import { Portfolio } from "../Portfolio/portfolio";
import { Skills } from "../Skills/skills";
import { Contact } from "../Contact/contact";
import { Footer } from "../Footer/footer";
import Navbar from "../../Components/Navbar/Navbar";

export const Home = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMenuOpen(false); // Cerrar el menú al hacer clic en un elemento
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="home">
      <div className="wrapper">
        <header>
          <div className="brand">
            <h2>
              <span> </span>
            </h2>
        <Navbar />
          </div>
        </header>
        <div className="submission">
          <div className="info-content">
            <h2>
            I'm
              <span> Nelson</span> Saravia
            </h2>
            <span className="info-content__subtitle">
              Front End Developer
            </span><br />
            {/* <span className="info-content__subtitle">
              Data Scientist
            </span> */}
            <p className="info-content__p"></p>
            <a href="#portfolio">
              <button className="contact">My Portfolio</button>
            </a>
          </div>
          {/* <img src="/assets/img/desarrollo-web.jpeg" alt="" /> */}
        </div>
      </div>
      <Portfolio />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </section>
  );
};
