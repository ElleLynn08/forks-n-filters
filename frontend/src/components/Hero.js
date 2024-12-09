import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  const navigate = useNavigate();

  const handleExploreRecipes = () => {
    navigate("/recipes"); // Navigate to the Recipes page
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Forks n' Filters</h1>
        <p>
          Discover delicious recipes tailored to your preferences. Whether you're searching for quick meals, healthy options, or indulgent treats, we've got you covered!
        </p>
        <button className="explore-button" onClick={handleExploreRecipes}>
          Explore Recipes
        </button>
      </div>
    </div>
  );
}

export default Hero;


