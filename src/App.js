import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Zodiac from "./Components/Zodiac/Zodiac.js";
import Houses from "./Components/Houses/Houses.js";
import StarsCanvas from "./Components/Canvas/Stars.jsx";
import Credit from "./Components/Footer/Credit.js";

function App() {
  return (
    <div className="App">
      {/* Stars Background */}
      <StarsCanvas />

      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        {/* Home Section */}
        <div id="home" className="calendar-container">
          <Zodiac /> {/* Zodiac component as Home */}
        </div>

        {/* Houses Section */}
        <div id="houses" className="houses-container">
          <Houses /> {/* Houses */}
        </div>

        {/* Credits Section */}
        <div id="credits" className="credit-container">
          <Credit /> {/* Credits */}
        </div>
      </div>
    </div>
  );
}

export default App;
