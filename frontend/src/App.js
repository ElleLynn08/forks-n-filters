import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.css"; // Global CSS for the entire app
import Navbar from "./components/Navbar"; // Navbar component for navigation
import HomePage from "./pages/HomePage"; // HomePage component
import AboutPage from "./pages/AboutPage"; // AboutPage component
import RecipesPage from "./pages/RecipesPage"; // RecipesPage component
import RecipeDetailsPage from "./pages/RecipeDetailsPage"; // Details for individual recipes
import Footer from "./components/Footer"; // Footer component for the app

function App() {
  // State to manage the search term, which will be passed to the HomePage
  const [searchTerm, setSearchTerm] = useState("");

  // Function to update the search term when a search is performed in the Navbar
  const handleSearch = (term) => {
    setSearchTerm(term); // Store the term in state to pass it to HomePage
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar component with the search handler passed as a prop */}
        <Navbar onSearch={handleSearch} />

        {/* Route configuration for the app */}
        <Routes>
          {/* HomePage receives the searchTerm as a prop */}
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />

          {/* AboutPage (static content) */}
          <Route path="/about" element={<AboutPage />} />

          {/* RecipesPage (all recipes or category-based recipes) */}
          <Route path="/recipes" element={<RecipesPage />} />

          {/* RecipeDetailsPage for viewing individual recipe details */}
          <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        </Routes>

        {/* Footer component displayed at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;









