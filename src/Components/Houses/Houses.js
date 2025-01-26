import React from "react";
import "./Houses.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const astrologicalHouses = [
  {
    name: "First House",
    concerns: "Self, Appearance, Beginnings",
    dates: "Influence: Lifetime",
    iconPath: "/images/Aries.jpeg",
    details: [
      "Represents identity and self-expression.",
      "Focuses on physical appearance and first impressions.",
    ],
  },
  {
    name: "Second House",
    concerns: "Money, Possessions, Values",
    dates: "Influence: Lifetime",
    iconPath: "/images/Taurus.jpeg",
    details: [
      "Deals with personal resources and income.",
      "Reflects material security and self-worth.",
    ],
  },
  {
    name: "Third House",
    concerns: "Communication, Siblings, Learning",
    dates: "Influence: Lifetime",
    iconPath: "/images/Gemini.jpeg",
    details: [
      "Focuses on intellect and learning.",
      "Represents interactions with siblings and close relatives.",
    ],
  },
  {
    name: "Fourth House",
    concerns: "Home, Family, Foundations",
    dates: "Influence: Lifetime",
    iconPath: "/images/Cancer.jpeg",
    details: [
      "Represents family, ancestry, and home environment.",
      "Focuses on emotional security and childhood foundations.",
    ],
  },
  {
    name: "Fifth House",
    concerns: "Creativity, Romance, Fun",
    dates: "Influence: Lifetime",
    iconPath: "/images/Leo.jpeg",
    details: [
      "Deals with self-expression, hobbies, and leisure.",
      "Represents romantic relationships and children.",
    ],
  },
  {
    name: "Sixth House",
    concerns: "Health, Work, Daily Routines",
    dates: "Influence: Lifetime",
    iconPath: "/images/Virgo.jpeg",
    details: [
      "Focuses on physical health, service, and responsibilities.",
      "Represents daily habits and work ethics.",
    ],
  },
  {
    name: "Seventh House",
    concerns: "Partnerships, Marriage, Contracts",
    dates: "Influence: Lifetime",
    iconPath: "/images/Libra.jpeg",
    details: [
      "Deals with relationships, both personal and professional.",
      "Focuses on cooperation and legal agreements.",
    ],
  },
  {
    name: "Eighth House",
    concerns: "Transformation, Shared Resources, Death",
    dates: "Influence: Lifetime",
    iconPath: "/images/Scorpio.jpeg",
    details: [
      "Represents joint finances, inheritance, and deep bonds.",
      "Focuses on personal transformation and endings.",
    ],
  },
  {
    name: "Ninth House",
    concerns: "Travel, Philosophy, Higher Education",
    dates: "Influence: Lifetime",
    iconPath: "/images/Sagittarius.jpeg",
    details: [
      "Focuses on long-distance travel and cultural exploration.",
      "Represents beliefs, spirituality, and advanced learning.",
    ],
  },
  {
    name: "Tenth House",
    concerns: "Career, Reputation, Public Life",
    dates: "Influence: Lifetime",
    iconPath: "/images/Capricorn.jpeg",
    details: [
      "Deals with career aspirations, achievements, and legacy.",
      "Represents public image and authority.",
    ],
  },
  {
    name: "Eleventh House",
    concerns: "Friends, Community, Goals",
    dates: "Influence: Lifetime",
    iconPath: "/images/Aquarius.jpeg",
    details: [
      "Represents social networks, friendships, and humanitarian efforts.",
      "Focuses on collective goals and future aspirations.",
    ],
  },
  {
    name: "Twelfth House",
    concerns: "Endings, Solitude, Secrets",
    dates: "Influence: Lifetime",
    iconPath: "/images/Pisces.jpeg",
    details: [
      "Represents spirituality, solitude, and introspection.",
      "Deals with karmic cycles and subconscious fears.",
    ],
  },
];

const Houses = () => {
  console.log("Houses component rendered");

  return (
    <div className="houses-section">
      <div className="text-center">
        <p className="section-subtext">Understanding Astrology</p>
        <h2 className="section-headtext">The 12 Astrological Houses</h2>
      </div>

      <div className="vertical-timeline-container">
        <VerticalTimeline>
          {astrologicalHouses.map((house, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              date={house.dates}
              iconStyle={{ background: "transparent", border: "none" }} // This line is already present
              icon={
                <img
                  src={house.iconPath}
                  alt={`${house.name} icon`}
                  className="icon-image"
                />
              }
            >
              <div>
                <h3 className="house-title">{house.name}</h3>
                <p className="house-concerns">{house.concerns}</p>
              </div>

              <ul className="house-details">
                {house.details.map((detail, i) => (
                  <li key={i} className="detail-item">
                    {detail}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Houses;
