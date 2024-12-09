// Import necessary modules and components
import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard"; // Import the RecipeCard component
import Hero from "../components/Hero"; // Import the Hero component
import "./../styles/recipeCard.css"; // Correct CSS file import for RecipeCard styles

function HomePage({ searchTerm }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const endpoint =
          searchTerm && searchTerm.trim() !== ""
            ? `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=6&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
            : `https://api.spoonacular.com/recipes/random?number=6&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;

        console.log("Fetching from:", endpoint);

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setRecipes(data.results || data.recipes); // Handle both random and search endpoints
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  return (
    <div>
      <Hero />
      <section className="recipe-grid">
        {loading && <p>Loading recipes...</p>}
        {error && <p>Error fetching recipes: {error}</p>}
        {!loading &&
          !error &&
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              imageUrl={recipe.image} // Only include the image URL
            />
          ))}
        {!loading && !error && recipes.length === 0 && (
          <p>No recipes found for "{searchTerm}".</p>
        )}
      </section>
    </div>
  );
}

export default HomePage;










