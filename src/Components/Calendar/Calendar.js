import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Importing back arrow icon
import "./Calendar.css";

const Calendar = ({ zodiac, dates, onBack }) => {
  return (
    <div className="calendar-popup">
      <div className="calendar-panel left-panel">
        <button className="back-button" onClick={onBack}>
          <FaArrowLeft /> {/* Adding the back arrow icon */}
        </button>
        <h1>{zodiac}</h1>
      </div>
      <div className="calendar-panel right-panel">
        <h1>{zodiac} Dates</h1>
        <ul>
          {dates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
