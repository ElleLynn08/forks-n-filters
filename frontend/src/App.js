import React from 'react';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import "@fontsource/poppins";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

