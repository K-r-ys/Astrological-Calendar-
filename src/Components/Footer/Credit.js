import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import "./Credit.css";

const ServiceCard = ({ title, icon }) => (
  <Tilt className="service-card">
    <motion.div whileHover={{ scale: 1.05 }} className="card-container">
      <div className="card-content">
        <img src={icon} alt={title} className="card-icon" />
        <h3 className="card-title">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Panels = () => {
  const services = [
    { title: "Hellen", icon: "/images/Hellen.jpeg" },
    { title: "Christopher", icon: "/images/Christopher.jpeg" },
  ];

  return (
    <div className="panels-container">
      {/* Credits header at the top */}
      <h2 className="credits-header">Credits</h2>

      {/* Service cards after the header */}
      <div className="cards-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Parting shot text at the bottom */}
      <div className="parting-shot">
        <p>
          ~Surrender to the rythm of the cosmos and the universe will carry you
          home~{" "}
        </p>
      </div>
    </div>
  );
};

export default Panels;
