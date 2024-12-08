import React from "react";
import logo from "../images/logo.png";
import "./../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Logo Image */}
        <img src={logo} alt="Forks n' Filters Logo" className="logo" />
        {/* Logo Title */}
        <div className="logo-title">
          <span>Forks</span>
          <span>n'</span>
          <span>Filters</span>
        </div>
      </div>
      {/* Navigation Links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Recipes</li>
      </ul>
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search recipes..." />
        <button>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;



