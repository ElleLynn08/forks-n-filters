import React from "react";
import logo from "../images/logo.png";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Forks n' Filters Logo" />
        <span>Forks n' Filters</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Recipes</li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search recipes..." />
        <button>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;





