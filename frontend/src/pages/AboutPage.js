import React from "react";
import "../styles/about.css";
import logo from "../images/logo.png"; // Updated path
import forkSpoonImage from "../images/fork_spoon.png"; // Updated path
import chefHatImage from "../images/chef_hat.png"; // Updated path

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        <img src={logo} alt="Forks n' Filters Logo" className="about-logo" />
        <h1 className="about-title">About Forks n' Filters</h1>
      </div>
      <p className="about-description">
        Forks n' Filters is your go-to platform for discovering and sharing recipes that cater to every taste and dietary preference. 
        From comforting classics to modern twists, we aim to make your cooking journey a delightful adventure.
      </p>
      <div className="image-container">
        <img
          src={forkSpoonImage}
          alt="Cute fork and spoon illustration"
          className="about-image"
        />
        <img
          src={chefHatImage}
          alt="Cute chef's hat illustration"
          className="about-image"
        />
      </div>
      <p className="about-description">
        Whether you're a seasoned chef or a kitchen newbie, Forks n' Filters
        is here to spark your culinary creativity and help you find dishes
        you'll love. Let’s cook up some magic together!
      </p>
      <button
        className="explore-button"
        onClick={() => (window.location.href = "/recipes")}
      >
        Explore Recipes
      </button>
    </div>
  );
}

export default AboutPage;








