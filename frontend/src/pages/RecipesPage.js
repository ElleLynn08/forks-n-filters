import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard"; // Ensure the path is correct
import "../styles/recipeCard.css"; // CSS for styling the cards

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=12&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setRecipes(data.recipes || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllRecipes();
  }, []);

  return (
    <div className="recipes-page">
      <h1 className="recipes-title">Recipes</h1>
      <p className="recipes-description">
        Explore a variety of delicious recipes curated just for you!
      </p>

      <div className="recipe-grid">
        {loading && <p>Loading recipes...</p>}
        {error && <p>Error fetching recipes: {error}</p>}
        {!loading &&
          !error &&
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              description={recipe.summary?.replace(/<[^>]+>/g, "") || ""}
              imageUrl={recipe.image}
            />
          ))}
      </div>
    </div>
  );
}

export default RecipesPage;





