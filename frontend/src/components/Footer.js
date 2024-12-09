import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import chefHat from "../images/chef_hat.png"; // Adjust path to your image
import "./../styles/footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>Created with 🧡 and a pinch of sweetness by Elle Lynn</p>
      {/* Wrap the image in a Link to navigate to the About page */}
      <Link to="/about">
        <img src={chefHat} alt="Chef Hat" className="chef-hat" />
      </Link>
    </footer>
  );
};

export default Footer;



