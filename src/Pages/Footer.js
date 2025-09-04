// import React from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* About Section */}
//         <div className="footer-section about">
//           <h2>Namaste India</h2>
//           <p>
//             Discover the beauty, culture, and heritage of India. 
//             From the Himalayas to Kanyakumari, explore destinations, 
//             traditions, and festivals that make India Incredible.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-section links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/map">Explore Map</a></li>
//             <li><a href="/about">About Us</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="footer-section contact">
//           <h3>Contact Us</h3>
//           <p>Email: support@namasteindia.com</p>
//           <p>Phone: +91 8200 439073</p>
//           <p>Location: New Delhi, India</p>
//         </div>

//         {/* Social Media */}
//         <div className="footer-section social">
//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="https://facebook.com/namasteindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
//             <a href="https://instagram.com/namasteindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
//             <a href="https://twitter.com/namasteindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
//             <a href="https://youtube.com/namasteindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Strip */}
//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Namaste India. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">   {/* ✅ Added id */}
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>Namaste India</h2>
          <p>
            Discover the beauty, culture, and heritage of India. 
            From the Himalayas to Kanyakumari, explore destinations, 
            traditions, and festivals that make India Incredible.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/map">Explore Map</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#footer">Contact</a></li> {/* ✅ Point to #footer */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@namasteindia.com</p>
          <p>Phone: +91 8200 439073</p>
          <p>Location: New Delhi, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/namasteindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com/namasteindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/namasteindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://youtube.com/namasteindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Namaste India. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
