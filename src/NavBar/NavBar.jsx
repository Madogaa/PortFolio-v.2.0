import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar w-full flex justify-around items-center">
        <div className="w-14">
            <img src="/MLogo-Transparent.png" alt="LOGO" />
        </div>
      <ul className="flex gap-10">
        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">About</a>
        </li>
        <li>
            <a href="">Projects</a>
        </li>
        <li>
            <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
