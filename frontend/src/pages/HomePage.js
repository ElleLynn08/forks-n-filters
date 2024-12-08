import React from "react";
import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";

function HomePage() {
  return (
    <div>
      <Hero />
      <section className="recipe-grid">
        <RecipeCard title="Grilled Cheese" description="A classic comfort food." />
        <RecipeCard title="Tomato Soup" description="Perfect with grilled cheese." />
        <RecipeCard title="Pasta Primavera" description="Fresh and flavorful." />
      </section>
    </div>
  );
}

export default HomePage;

