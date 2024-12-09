import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./../styles/recipeDetails.css";

function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const nutrients = recipe?.nutrition?.nutrients || [];

  return (
    <div className="recipe-details-page">
      {/* Card for image and description */}
      <div className="recipe-card">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <h1 className="recipe-title">{recipe.title}</h1> {/* Apply `title` class */}
        <p className="recipe-description">
          {recipe.summary?.replace(/<[^>]+>/g, "") || "No description available."}
        </p>
      </div>

      {/* Card for ingredients and instructions */}
      <div className="recipe-details-card">
        <h2>Recipe Details</h2>
        <ul>
          {recipe.extendedIngredients?.length > 0 ? (
            recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))
          ) : (
            <li>No ingredients available.</li>
          )}
        </ul>
        <h3>Instructions</h3>
        <p>{recipe.instructions || "No instructions available."}</p>
      </div>

      {/* Nutrition Information Card */}
      <div className="nutrition-card">
        <h2>Nutrition Information</h2>
        <ul>
          {nutrients.length > 0 ? (
            nutrients.map((nutrient, index) => (
              <li key={index}>
                <strong>{nutrient.name}:</strong> {nutrient.amount || "N/A"}{" "}
                {nutrient.unit || ""}
              </li>
            ))
          ) : (
            <li>No nutrition information available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetailsPage;





