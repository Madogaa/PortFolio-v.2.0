import React, { useState } from "react";
import "./NavBar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import LanguageSelector from "./LanguageSelector";
import { useDataContext } from "../Context/DataContext";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { handleLanguage, language } = useDataContext();

  // Definir traducciones
  const translations = {
    es: {
      home: "Inicio",
      about: "Acerca de",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
  };

  const translation = translations[language];

  const handleLanguageChange = (selectedLanguage) => {
    handleLanguage(selectedLanguage);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="navbar py-4 order-1 w-full flex justify-around items-center">
      <div>
        <img className="w-14" src="/MLogo-Transparent.png" alt="LOGO" />
      </div>

      <button
        className={`navbar-toggler order-3 ${navbarOpen ? "active order-2" : ""}`}
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon">
          <AiOutlineMenu size={32} color="white" />
        </span>
      </button>
      <div
        className={`navbar-collapse order-2 ${navbarOpen ? "show order-3" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav flex justify-center items-center gap-4 sm:gap-10">
          <li>
            <a href="#entry" onClick={closeNavbar}>
              {translation.home}
            </a>
          </li>
          <li>
            <a href="#time-line" onClick={closeNavbar}>
              {translation.about}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeNavbar}>
              {translation.projects}
            </a>
          </li>
          <li>
            <a href="#tech" onClick={closeNavbar}>
              {translation.skills}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeNavbar}>
              {translation.contact}
            </a>
          </li>

          <li></li>
        </ul>
      </div>
      <div className="flex order-2 gap-4 md:gap-8 justify-center items-center">
        <LanguageSelector onChangeLanguage={handleLanguageChange} />
        <a
          className="hover:scale-125"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Madogaa"
        >
          <FaGithub size={32} color="white" />
        </a>

        <a
          className="hover:scale-125"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mario-dominguez-garcia-dg/"
        >
          <FaLinkedin size={32} color="white" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
