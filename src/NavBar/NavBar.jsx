import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar w-full flex justify-around items-center">
        <div>
            <img className="w-14" src="/MLogo-Transparent.png" alt="LOGO" />
        </div>
      <ul className="flex gap-4 sm:gap-10">
        <li>
            <a href="#entry" >Home</a>
        </li>
        <li>
            <a href="#time-line">About</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#tech">Skills</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
