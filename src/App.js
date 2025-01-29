import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Zodiac from "./Components/Zodiac/Zodiac.js";
import Houses from "./Components/Houses/Houses.js";
import StarsCanvas from "./Components/Canvas/Stars.jsx";
import Credit from "./Components/Footer/Credit.js";
import Calendar from "./Components/Calendar/Calendar.js";

function App() {
  const [selectedZodiac, setSelectedZodiac] = useState(null); // Track the selected zodiac

  return (
    <div className={`App ${selectedZodiac ? "blurred" : ""}`}>
      {/* Stars Background */}
      <StarsCanvas />

      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <div id="home" className="calendar-container">
          <Zodiac onSelectZodiac={(zodiac) => setSelectedZodiac(zodiac)} />
        </div>

        {/* Houses Section */}
        <div id="houses" className="houses-container">
          <Houses />
        </div>

        {/* Credits Section */}
        <div id="credits" className="credit-container">
          <Credit />
        </div>
      </div>

      {/* Calendar Pop-Up */}
      {selectedZodiac && (
        <div className="calendar-modal">
          <Calendar
            zodiac={selectedZodiac.name}
            backgroundImage={selectedZodiac.image}
            dates={selectedZodiac.dates}
            onBack={() => setSelectedZodiac(null)} // Close pop-up
          />
        </div>
      )}
    </div>
  );
}

export default App;
