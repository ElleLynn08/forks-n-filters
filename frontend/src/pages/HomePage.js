import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard"; // Card component for displaying individual recipes
import Hero from "../components/Hero"; // Hero section for the home page
import "./../styles/recipeCard.css"; // CSS styles for recipe cards

function HomePage({ searchTerm }) {
  const [recipes, setRecipes] = useState([]); // State for storing recipes
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for any error messages

  useEffect(() => {
    // Function to fetch recipes based on the search term
    const fetchRecipes = async () => {
      try {
        setLoading(true); // Start loading
        const endpoint =
          searchTerm && searchTerm.trim() !== ""
            ? `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=6&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
            : `https://api.spoonacular.com/recipes/random?number=6&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;

        console.log("Fetching from:", endpoint); // Log the API endpoint

        const response = await fetch(endpoint); // Fetch data from API
        if (!response.ok) {
          // Handle specific HTTP errors
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Check if the API response contains recipes
        if (!data.results && !data.recipes) {
          throw new Error("No recipes found in the API response.");
        }

        setRecipes(data.results || data.recipes); // Handle both random and search endpoints
        setError(null); // Clear any previous error
        setLoading(false); // Stop loading
      } catch (err) {
        setError(err.message); // Store error message
        setLoading(false); // Stop loading
      }
    };

    fetchRecipes(); // Call the function when searchTerm changes
  }, [searchTerm]);

  return (
    <div>
      {/* Hero section for welcoming users */}
      <Hero />

      {/* Recipe grid section */}
      <section className="recipe-grid">
        {loading && <p>Loading recipes...</p>} {/* Show loading message */}

        {error && (
          <div className="error-message">
            <p>Something went wrong: {error}</p>
            <p>
              Please try searching for something else, or check if your API key
              is valid.
            </p>
            <ul>
              <li>Ensure your search term is spelled correctly.</li>
              <li>Try general terms like "pasta" or "chicken."</li>
              <li>If the issue persists, contact support.</li>
            </ul>
          </div>
        )}

        {!loading &&
          !error &&
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              imageUrl={recipe.image} // Image URL for the recipe
            />
          ))}

        {/* Message when no recipes are found */}
        {!loading && !error && recipes.length === 0 && (
          <div className="no-recipes-message">
            No recipes found for "{searchTerm}". Try searching for something else!
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;














