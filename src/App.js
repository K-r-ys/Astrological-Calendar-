// App.js
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Zodiac from "./Components/Zodiac/Zodiac.js";
import Houses from "./Components/Houses/Houses.js";
import StarsCanvas from "./Components/Canvas/Stars.jsx"; // Adjust the path as necessary
import Credit from "./Components/Footer/Credit.js"; // Import the Credit component

function App() {
  return (
    <div className="App">
      {/* Stars Background */}
      <StarsCanvas />

      {/* Navbar Component */}
      <Navbar />

      {/* Main Content Container */}
      <div className="main-content">
        <div className="calendar-container">
          <Zodiac /> {/* Include the Astrological Calendar component */}
        </div>

        {/* Houses Component */}
        <div className="houses-container">
          <Houses /> {/* Include the Astrological Houses component */}
        </div>
      </div>

      {/* Credit Component */}
      <div className="credit-container">
        <Credit /> {/* Include the Credit panels */}
      </div>
    </div>
  );
}

export default App;
