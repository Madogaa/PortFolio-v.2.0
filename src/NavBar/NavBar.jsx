import React, { useState } from "react";
import "./NavBar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai"

function NavBar() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="navbar w-full flex justify-around items-center">
      <div>
        <img className="w-14" src="/MLogo-Transparent.png" alt="LOGO" />
      </div>

      <button
        className={`navbar-toggler ${navbarOpen ? "active" : ""}`}
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon">
          <AiOutlineMenu size={32} color="white" />
        </span>
      </button>
      <div className={`navbar-collapse ${navbarOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav flex justify-center items-center gap-4 sm:gap-10">
          <li>
            <a href="#entry" onClick={closeNavbar}>Home</a>
          </li>
          <li>
            <a href="#time-line" onClick={closeNavbar}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={closeNavbar}>Projects</a>
          </li>
          <li>
            <a href="#tech" onClick={closeNavbar}>Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={closeNavbar}>Contact</a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Madogaa"
            >
              <FaGithub size={32} color="white" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mario-dominguez-garcia-dg/"
            >
              <FaLinkedin size={32} color="white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
