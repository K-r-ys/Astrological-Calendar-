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
    concerns: "Self, Appearance, Identity",
    dates: "March 21 - April 19",
    rulingPlanet: "Mars",
    iconPath: "/images/Aries.jpeg",
    details: [
      "Represents self-image, personal identity, and first impressions.",
      "Associated with confidence, leadership, and new beginnings.",
    ],
  },
  {
    name: "Second House",
    concerns: "Money, Possessions, Values",
    dates: "April 20 - May 20",
    rulingPlanet: "Venus",
    iconPath: "/images/Taurus.jpeg",
    details: [
      "Deals with financial security, self-worth, and material possessions.",
      "Represents stability, comfort, and personal values.",
    ],
  },
  {
    name: "Third House",
    concerns: "Communication, Learning, Siblings",
    dates: "May 21 - June 20",
    rulingPlanet: "Mercury",
    iconPath: "/images/Gemini.jpeg",
    details: [
      "Focuses on thinking, speaking, writing, and relationships with siblings.",
      "Represents curiosity, learning, and everyday interactions.",
    ],
  },
  {
    name: "Fourth House",
    concerns: "Home, Family, Foundations",
    dates: "June 21 - July 22",
    rulingPlanet: "Moon",
    iconPath: "/images/Cancer.jpeg",
    details: [
      "Represents emotional security, home life, and family roots.",
      "Deals with childhood experiences and personal comfort zones.",
    ],
  },
  {
    name: "Fifth House",
    concerns: "Creativity, Romance, Joy",
    dates: "July 23 - August 22",
    rulingPlanet: "Sun",
    iconPath: "/images/Leo.jpeg",
    details: [
      "Associated with artistic expression, love affairs, and entertainment.",
      "Represents passion, hobbies, and personal joy.",
    ],
  },
  {
    name: "Sixth House",
    concerns: "Health, Work, Routines",
    dates: "August 23 - September 22",
    rulingPlanet: "Mercury",
    iconPath: "/images/Virgo.jpeg",
    details: [
      "Focuses on daily habits, wellness, and responsibility.",
      "Deals with work-life balance and self-care routines.",
    ],
  },
  {
    name: "Seventh House",
    concerns: "Partnerships, Marriage, Contracts",
    dates: "September 23 - October 22",
    rulingPlanet: "Venus",
    iconPath: "/images/Libra.jpeg",
    details: [
      "Governs one-on-one relationships, both romantic and business.",
      "Represents cooperation, balance, and legal agreements.",
    ],
  },
  {
    name: "Eighth House",
    concerns: "Transformation, Shared Resources, Deep Bonds",
    dates: "October 23 - November 21",
    rulingPlanet: "Pluto (Mars traditionally)",
    iconPath: "/images/Scorpio.jpeg",
    details: [
      "Deals with personal growth, transformation, and deep emotional connections.",
      "Represents shared finances, inheritances, and major life changes.",
    ],
  },
  {
    name: "Ninth House",
    concerns: "Travel, Philosophy, Higher Education",
    dates: "November 22 - December 21",
    rulingPlanet: "Jupiter",
    iconPath: "/images/Sagittarius.jpeg",
    details: [
      "Focuses on wisdom, spirituality, and adventure.",
      "Represents belief systems, exploration, and expanding one's perspective.",
    ],
  },
  {
    name: "Tenth House",
    concerns: "Career, Reputation, Public Life",
    dates: "December 22 - January 19",
    rulingPlanet: "Saturn",
    iconPath: "/images/Capricorn.jpeg",
    details: [
      "Deals with ambition, legacy, and long-term goals.",
      "Represents career, success, and personal reputation.",
    ],
  },
  {
    name: "Eleventh House",
    concerns: "Friends, Community, Future Goals",
    dates: "January 20 - February 18",
    rulingPlanet: "Uranus (Saturn traditionally)",
    iconPath: "/images/Aquarius.jpeg",
    details: [
      "Represents friendships, teamwork, and humanitarian efforts.",
      "Focuses on social impact, networking, and dreams for the future.",
    ],
  },
  {
    name: "Twelfth House",
    concerns: "Spirituality, Endings, Hidden Truths",
    dates: "February 19 - March 20",
    rulingPlanet: "Neptune (Jupiter traditionally)",
    iconPath: "/images/Pisces.jpeg",
    details: [
      "Represents introspection, solitude, and subconscious thoughts.",
      "Deals with closure, past-life influences, and hidden truths.",
    ],
  },
];

const Houses = () => {
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
              date={`${house.dates} | Ruling Planet: ${house.rulingPlanet}`}
              iconStyle={{ background: "transparent", border: "none" }}
              icon={
                <img
                  src={house.iconPath}
                  alt={house.name}
                  className="icon-image"
                />
              }
            >
              <h3 className="house-title">{house.name}</h3>
              <p className="house-concerns">{house.concerns}</p>
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
