// Import necessary libraries and assets
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/navbar.css";

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm); // Pass the search term to the parent component
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search on Enter key
    }
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Forks n' Filters Logo" className="logo" />
        <div className="logo-title">
          <span>Forks</span>
          <span>n'</span>
          <span>Filters</span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // Listen for Enter key
          placeholder="Search recipes..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;










