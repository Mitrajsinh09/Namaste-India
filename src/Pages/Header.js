// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Header.css";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   // Add shadow when scrolling
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close menu when route changes
//   useEffect(() => {
//     closeMenu();
//   }, [location.pathname]);

//   // Smooth scroll helper
//   const handleScrollTo = (id) => {
//     if (location.pathname !== "/") {
//       navigate("/");

//       // Wait for home to render before scrolling
//       setTimeout(() => {
//         const el = document.getElementById(id);
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//       }, 600);
//     } else {
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header className={`header ${scrolled ? "scrolled" : ""}`}>
//       <div className="logo">
//         <span role="img" aria-label="India Flag">🇮🇳</span> Namaste India
//       </div>

//       <nav className={`nav ${menuOpen ? "open" : ""}`}>
//         <button
//           onClick={() => handleScrollTo("hero")}
//           className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
//         >
//           Home
//         </button>
//         <button
//           onClick={() => handleScrollTo("places")}
//           className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
//         >
//           Places
//         </button>
//         <button
//           onClick={() => handleScrollTo("about")}
//           className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
//         >
//           About
//         </button>
//         <Link
//           to="/map"
//           className={`nav-link ${location.pathname === "/map" ? "active" : ""}`}
//         >
//           Map
//         </Link>
//         <button
//           onClick={() => handleScrollTo("footer")}
//           className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
//         >
//           Contact
//         </button>
//       </nav>

//       <div
//         className={`hamburger ${menuOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//         role="button"
//         aria-label="Toggle menu"
//       >
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo"> Namaste India</div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleScrollTo("hero")} className="nav-item">
          Home
        </button>
        <button onClick={() => handleScrollTo("places")} className="nav-item">
          Places
        </button>
        <button onClick={() => handleScrollTo("about")} className="nav-item">
          About
        </button>
        <Link to="/map" className="nav-item">
          Map
        </Link>
        <button onClick={() => handleScrollTo("footer")} className="nav-item">
          Contact
        </button>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
