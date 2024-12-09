import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"; // Import logo image
import "../styles/navbar.css"; // Import CSS for Navbar styling

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const navigate = useNavigate(); // React Router navigation hook

  // Handle search button click
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      console.log("Search term is empty.");
      return; // Prevent empty search
    }
    console.log("Search initiated with term:", searchTerm);

    if (onSearch) onSearch(searchTerm); // Pass search term to parent
    navigate("/"); // Navigate to home page
  };

  // Handle Enter key press in search input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission
      handleSearch(); // Trigger search
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Forks n' Filters Logo" className="logo" />
        </Link>

        {/* App Name */}
        <div className="app-name">
          <p>Forks</p>
          <p>n'</p>
          <p>Filters</p>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            onClick={() => {
              if (onSearch) onSearch(""); // Reset search term on Home link click
            }}
          >
            Home
          </Link>
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
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          onKeyDown={handleKeyDown} // Trigger search on Enter key
          placeholder="Search recipes..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;




















