import React, { useState, useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import "./Credit.css";

const Panels = () => {
  const services = [
    { title: "Hellen", icon: "/images/Hellen.jpeg" },
    { title: "Christopher", icon: "/images/Christopher.jpeg" },
  ];

  const partingShotText =
    "~Surrender to the rhythm of the cosmos and the universe will carry you home~";

  const [inView, setInView] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const currentRef = ref.current; // Store ref.current in a variable

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use the stored variable in cleanup
    };
  }, []);

  return (
    <div className="panels-container">
      <h2 className="credits-header">Credits</h2>
      <div className="cards-container">
        {services.map((service, index) => (
          <Tilt key={index} className="service-card">
            <motion.div whileHover={{ scale: 1.05 }} className="card-container">
              <div className="card-content">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="card-icon"
                />
                <h3 className="card-title">{service.title}</h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
      <div ref={ref} className="parting-shot">
        {partingShotText.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Panels;
