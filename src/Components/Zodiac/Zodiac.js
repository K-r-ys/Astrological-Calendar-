import React from "react";
import "./Zodiac.css";

const AstrologicalCalendar = ({ onSelectZodiac }) => {
  const months = [
    {
      name: "Aries",
      image: "/images/Aries-4.jpeg",
      dates: ["March 21", "April 19"],
    },
    {
      name: "Taurus",
      image: "/images/Taurus-3.webp",
      dates: ["April 20", "May 20"],
    },
    {
      name: "Gemini",
      image: "/images/Gemini-3.jpeg",
      dates: ["May 21", "June 20"],
    },
    {
      name: "Cancer",
      image: "/images/Cancer-3.jpeg",
      dates: ["June 21", "July 22"],
    },
    {
      name: "Leo",
      image: "/images/Leo-3.jpeg",
      dates: ["July 23", "August 22"],
    },
    {
      name: "Virgo",
      image: "/images/Virgo-2.jpeg",
      dates: ["August 23", "September 22"],
    },
    {
      name: "Libra",
      image: "/images/Libra-3.jpeg",
      dates: ["September 23", "October 22"],
    },
    {
      name: "Scorpio",
      image: "/images/Scorpio-2.jpeg",
      dates: ["October 23", "November 21"],
    },
    {
      name: "Sagittarius",
      image: "/images/Sagittarius-3.jpeg",
      dates: ["November 22", "December 21"],
    },
    {
      name: "Capricorn",
      image: "/images/Capricorn-2.jpeg",
      dates: ["December 22", "January 19"],
    },
    {
      name: "Aquarius",
      image: "/images/Aquarius-3.jpeg",
      dates: ["January 20", "February 18"],
    },
    {
      name: "Pisces",
      image: "/images/Pisces-3.jpeg",
      dates: ["February 19", "March 20"],
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
          onClick={() => onSelectZodiac(month)} // Pass the selected month data to parent
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
