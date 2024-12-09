import React from "react";
import { Link } from "react-router-dom";
import "./../styles/recipeCard.css";

function RecipeCard({ id, title, description, imageUrl }) {
  return (
    <Link to={`/recipes/${id}`} className="recipe-card-link">
      <div className="recipe-card">
        <img src={imageUrl} alt={title} className="recipe-image" />
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-description">{description}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;


