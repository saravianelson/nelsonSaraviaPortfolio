import React, { useState } from "react";
import { AboutMe } from "../About/about";
import { Portfolio } from "../Portfolio/portfolio";
import { Skills } from "../Skills/skills";
import { Contact } from "../Contact/contact";
import { Footer } from "../Footer/footer";

export const Home = () => {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section id="home">
      <div className="wrapper">
        
        <header>
          <div className="brand">
          {/* <nav className="logo-ap">
          <img src="src/assets/img/logo7.png" alt="" />
        </nav> */}
            <h2>
              <span> </span>
            </h2>
            <nav id="nav" className="navbar">
              <ul className="menu" id="menu">
                <li>
                  <a
                    className={selectedItem === "home" ? "active" : ""}
                    href="#home"
                    onClick={() => handleItemClick("home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={selectedItem === "aboutme" ? "active" : ""}
                    href="#aboutme"
                    onClick={() => handleItemClick("aboutme")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={selectedItem === "portfolio" ? "active" : ""}
                    href="#portfolio"
                    onClick={() => handleItemClick("portfolio")}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className={selectedItem === "skills" ? "active" : ""}
                    href="#skills"
                    onClick={() => handleItemClick("skills")}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className={selectedItem === "contact" ? "active" : ""}
                    href="#contact"
                    onClick={() => handleItemClick("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            {/* Iconos de Menú Responsive */}
            <div className="toggle-menu">
              <i className="bi bi-list" id="toggle_open"></i>
              <i className="bi bi-x-lg" id="toggle_close"></i>
            </div>
          </div>
        </header>
        <div className="submission">
          <div className="info-content">
            <h1>
              I'm <span>Nelson</span> Saravia
            </h1>
            <span className="info-content__subtitle">
              Fullstack Web Developer
            </span>
            <p className="info-content__p"></p>
            <a href="#portfolio">
              <button className="contact">My Portfolio</button>
            </a>
            {/* Iconos redes sociales */}
            <div className="social-network">
              <a
                href="https://github.com/saravianelson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/saravianelson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/Saravianel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
          <img src="../src/assets/img/desarrollo-web.jpeg" alt="" />
        </div>
      </div>
      <AboutMe />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </section>
  );
};
