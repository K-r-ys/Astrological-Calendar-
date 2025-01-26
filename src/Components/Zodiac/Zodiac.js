import React from "react";
import "./Zodiac.css";

const AstrologicalCalendar = () => {
  const months = [
    {
      name: "Aries",
      image: "/images/Aries-2.jpeg",
    },
    {
      name: "Taurus",
      image: "/images/taurus-2.jpeg",
    },
    {
      name: "Gemini",
      image: "/images/gemini-2.jpeg",
    },
    {
      name: "Cancer",
      image: "/images/cancer-2.jpeg",
    },
    {
      name: "Leo",
      image: "/images/Leo-2.jpeg",
    },
    {
      name: "Virgo",
      image: "/images/virgo-2.jpeg",
    },
    {
      name: "Libra",
      image: "/images/libra-2.jpeg",
    },
    {
      name: "Scorpio",
      image: "/images/scorpio-2.jpeg",
    },
    {
      name: "Sagittarius",
      image: "/images/sagittarius-2.jpeg",
    },
    {
      name: "Capricorn",
      image: "/images/capricorn-2.jpeg",
    },
    {
      name: "Aquarius",
      image: "/images/aquarius-2.jpeg",
    },
    {
      name: "Pisces",
      image: "/images/pisces-2.jpeg",
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
