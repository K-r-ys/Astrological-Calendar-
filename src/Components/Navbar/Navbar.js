import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <h1 className="logo">Astrological Calendar</h1>

        {/* Navbar Links */}
        <ul className={`nav-links ${toggle ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={() => setToggle(false)}
              style={{
                color: "#ffffff", // White color for the link
                fontWeight: "bold", // Bold font for the link
                fontSize: "18px", // Set font size for the link
                cursor: "pointer", // Pointer cursor on hover
                transition: "color 0.3s ease, transform 0.3s ease", // Smooth color and transform transition
                textDecoration: "none", // Remove underline
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#houses"
              onClick={() => setToggle(false)}
              style={{
                color: "#ffffff", // White color for the link
                fontWeight: "bold", // Bold font for the link
                fontSize: "18px", // Set font size for the link
                cursor: "pointer", // Pointer cursor on hover
                transition: "color 0.3s ease, transform 0.3s ease", // Smooth color and transform transition
                textDecoration: "none", // Remove underline
              }}
            >
              Houses
            </a>
          </li>
          <li>
            <a
              href="#credits"
              onClick={() => setToggle(false)}
              style={{
                color: "#ffffff", // White color for the link
                fontWeight: "bold", // Bold font for the link
                fontSize: "18px", // Set font size for the link
                cursor: "pointer", // Pointer cursor on hover
                transition: "color 0.3s ease, transform 0.3s ease", // Smooth color and transform transition
                textDecoration: "none", // Remove underline
              }}
            >
              Credits
            </a>
          </li>
        </ul>

        {/* Menu Icon for Small Screens */}
        <div className="menu-icon" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
