import React from "react";
import "./Zodiac.css";

const AstrologicalCalendar = () => {
  const months = [
    {
      name: "Aries",
      image: "/images/Aries-4.jpeg",
    },
    {
      name: "Taurus",
      image: "/images/Taurus-3.jpeg",
    },
    {
      name: "Gemini",
      image: "/images/Gemini-3.jpeg",
    },
    {
      name: "Cancer",
      image: "/images/Cancer-3.jpeg",
    },
    {
      name: "Leo",
      image: "/images/Leo-3.jpeg",
    },
    {
      name: "Virgo",
      image: "/images/Virgo-2.jpeg",
    },
    {
      name: "Libra",
      image: "/images/Libra-3.jpeg",
    },
    {
      name: "Scorpio",
      image: "/images/Scorpio-2.jpeg",
    },
    {
      name: "Sagittarius",
      image: "/images/Sagittarius-3.jpeg",
    },
    {
      name: "Capricorn",
      image: "/images/Capricorn-2.jpeg",
    },
    {
      name: "Aquarius",
      image: "/images/Aquarius-3.jpeg",
    },
    {
      name: "Pisces",
      image: "/images/Pisces-3.jpeg",
    },
  ];

  return (
    <div className="calendar">
      {months.map((month, index) => (
        <div
          key={index}
          className="month-panel"
          style={{
            backgroundImage: `url(${month.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="month-details">
            <div className="zodiac-name">{month.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AstrologicalCalendar;
