import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Zodiac from "./Components/Zodiac/Zodiac.js";
import Houses from "./Components/Houses/Houses.js";
import StarsCanvas from "./Components/Canvas/Stars.jsx";
import Credit from "./Components/Footer/Credit.js";
import Calendar from "./Components/Calendar/Calendar.js";

// Mapping zodiac names to their respective indexes
const zodiacIndexes = {
  Aries: 1,
  Taurus: 2,
  Gemini: 3,
  Cancer: 4,
  Leo: 5,
  Virgo: 6,
  Libra: 7,
  Scorpio: 8,
  Sagittarius: 9,
  Capricorn: 10,
  Aquarius: 11,
  Pisces: 12,
};

function App() {
  const [selectedZodiac, setSelectedZodiac] = useState(null);

  // Preload all zodiac images when the app loads
  useEffect(() => {
    Object.values(zodiacIndexes).forEach((index) => {
      const img = new Image();
      img.src = `/images/calendar/${index}.png`; // Adjust the path if necessary
    });
  }, []);

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
            description={selectedZodiac.description} // Pass description
            zodiacIndex={zodiacIndexes[selectedZodiac.name]} // Assign correct index
            onBack={() => setSelectedZodiac(null)} // Close pop-up
          />
        </div>
      )}
    </div>
  );
}

export default App;
