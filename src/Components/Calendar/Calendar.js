import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./Calendar.css";

// Mapping zodiac names to their respective index numbers
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

const Calendar = ({ zodiac, onBack }) => {
  const zodiacIndex = zodiacIndexes[zodiac]; // Get index from mapping
  const imagePath = zodiacIndex
    ? `/images/calendar/${zodiacIndex}.png`
    : "/images/calendar/default.png"; // Fallback if not found

  return (
    <div className="calendar-popup">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft />
      </button>
      <img
        src={imagePath}
        alt={`${zodiac} Calendar`}
        className="zodiac-image"
      />
    </div>
  );
};

export default Calendar;
