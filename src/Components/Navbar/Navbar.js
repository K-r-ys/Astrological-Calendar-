import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
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

        <ul className={`nav-links ${toggle ? "active" : ""}`}>
          <li
            onClick={() => setActive("Home")}
            className={active === "Home" ? "active-link" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setActive("Zodiac")}
            className={active === "Zodiac" ? "active-link" : ""}
          >
            Houses
          </li>
          <li
            onClick={() => setActive("Contact")}
            className={active === "Contact" ? "active-link" : ""}
          >
            Credits
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
