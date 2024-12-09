import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term); // Pass the search term down to HomePage
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







