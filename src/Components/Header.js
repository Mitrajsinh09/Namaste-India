// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   // Add shadow on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`header ${scrolled ? "scrolled" : ""}`}>
//       <div className="logo">
//         <span role="img" aria-label="India Flag">🇮🇳</span> Namaste India
//       </div>

//       <nav className={`nav ${menuOpen ? "open" : ""}`}>
//         <Link to="/" onClick={closeMenu}>Home</Link>
//         <Link to="/about" onClick={closeMenu}>About</Link>
//         <Link to="/india-map" onClick={closeMenu}>Explore Map</Link>
//         <a href="#contact" onClick={closeMenu}>Contact</a>
//       </nav>

//       <div
//         className={`hamburger ${menuOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//       >
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </header>
//   );
// }

// export default Header;

// src/Components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span role="img" aria-label="India Flag">🇮🇳</span> Namaste India
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link to="/map" className={location.pathname === "/map" ? "active" : ""}>
          Explore Map
        </Link>
        <a href="#contact">Contact</a>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;

