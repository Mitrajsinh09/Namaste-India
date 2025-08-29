// import React, { useState, useEffect } from "react";
// import "./Home.css";

// import gir from "../assets/gir.jpg";
// import kerala from "../assets/kerala.jpg";
// import goa from "../assets/goa.jpg";
// import jaipur from "../assets/jaipur.jpg";

// function Home() {
//   const images = [kerala, jaipur, goa, gir];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="page">
//       {/* Hero Section with Slideshow */}
//       <section className="hero">
//         <img src={images[currentImage]} alt="Slideshow" className="hero-img" />
//         <div className="hero-overlay">
//           <h2>Welcome to Namaste India</h2>
//           <p>
//             Experience vibrant culture, breathtaking landscapes, and timeless
//             heritage across India.
//           </p>
//         </div>
//       </section>

//       {/* Intro Section */}
//       <section className="intro">
//         <h3>Why Explore India?</h3>
//         <p>
//           India is not just a destination, it’s an experience. From the snow-covered
//           Himalayas to the golden beaches of Goa, every region tells a unique story.
//         </p>
//       </section>

//       {/* Tourist Places Section */}
//       <section className="places">
//         <h3>Top Tourist Destinations</h3>
//         <div className="places-grid">
//           <div className="place-card">
//             <img src={gir} alt="Gir The land of lions" />
//             <h4>Gir The land of lions</h4>
//             <p>Home to the Asiatic lions, Gir is a UNESCO World Heritage Site.</p>
//           </div>
//           <div className="place-card">
//             <img src={jaipur} alt="Jaipur" />
//             <h4>Jaipur – The Pink City</h4>
//             <p>Known for its royal palaces, forts, and colorful bazaars.</p>
//           </div>
//           <div className="place-card">
//             <img src={goa} alt="Goa" />
//             <h4>Goa Beaches</h4>
//             <p>Golden sands, nightlife, and Portuguese heritage await you.</p>
//           </div>
//           <div className="place-card">
//             <img src={kerala} alt="Kerala" />
//             <h4>Kerala – The God’s Own Country</h4>
//             <p>Known for its backwaters, spice plantations, and rich culture.</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta">
//         <h3>Plan Your Journey Today</h3>
//         <p>
//           Whether it’s adventure, spirituality, or relaxation, India has something
//           for everyone. Begin your journey with us.
//         </p>
//         <button className="explore-btn">Explore Destinations</button>
//       </section>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import "./Home.css";
import aboutImg from "../assets/Goa/about-banner.jpg";

import gir from "../assets/Gujarat/gir.jpg";
import kerala from "../assets/Gujarat/kerala.jpg";
import goa from "../assets/Gujarat/goa.jpg";
import jaipur from "../assets/Goa/jaipur.jpg";

function Home() {
  const images = [kerala, jaipur, goa, gir];
  const [currentImage, setCurrentImage] = useState(0);

  // Image Slideshow Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to About section after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <img src={images[currentImage]} alt="Slideshow" className="hero-img" />
        <div className="hero-overlay">
          <h2>Welcome to Namaste India</h2>
          <p>
            Experience vibrant culture, breathtaking landscapes, and timeless
            heritage across India.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <h3>Why Explore India?</h3>
        <p>
          India is not just a destination, it’s an experience. From the snow-covered
          Himalayas to the golden beaches of Goa, every region tells a unique story.
        </p>
      </section>

      {/* Tourist Places Section */}
      <section className="places">
        <h3>Top Tourist Destinations</h3>
        <div className="places-grid">
          <div className="place-card">
            <img src={gir} alt="Gir The land of lions" />
            <h4>Gir The land of lions</h4>
            <p>Home to the Asiatic lions, Gir is a UNESCO World Heritage Site.</p>
          </div>
          <div className="place-card">
            <img src={jaipur} alt="Jaipur" />
            <h4>Jaipur – The Pink City</h4>
            <p>Known for its royal palaces, forts, and colorful bazaars.</p>
          </div>
          <div className="place-card">
            <img src={goa} alt="Goa" />
            <h4>Goa Beaches</h4>
            <p>Golden sands, nightlife, and Portuguese heritage await you.</p>
          </div>
          <div className="place-card">
            <img src={kerala} alt="Kerala" />
            <h4>Kerala – The God’s Own Country</h4>
            <p>Known for its backwaters, spice plantations, and rich culture.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h3>Plan Your Journey Today</h3>
        <p>
          Whether it’s adventure, spirituality, or relaxation, India has something
          for everyone. Begin your journey with us.
        </p>
        <button className="explore-btn">Explore Destinations</button>
      </section>

      {/* About Section (Embedded) */}
      <section id="about" className="about-page">
        <div className="about-hero">
          <img src={aboutImg} alt="About India" className="about-hero-img" />
          <div className="about-hero-overlay">
            <h2>Discover the Spirit of India</h2>
            <p>A journey through culture, heritage, nature, and incredible hospitality.</p>
          </div>
        </div>

        <div className="about-intro">
          <h3>Why Namaste India?</h3>
          <p>
            Namaste India Tourism is your gateway to experiencing the soul of India – 
            from its serene landscapes to bustling cities, ancient heritage to modern 
            wonders. Our mission is to showcase the diversity and vibrance of India 
            like never before.
          </p>
        </div>

        <div className="about-highlights">
          <h3>What We Offer</h3>
          <div className="highlight-grid">
            <div className="highlight-card">
              <span>🏔️</span>
              <h4>Adventure</h4>
              <p>Explore Himalayan treks, desert safaris, and wildlife adventures.</p>
            </div>
            <div className="highlight-card">
              <span>🏰</span>
              <h4>Heritage</h4>
              <p>Visit ancient temples, palaces, and UNESCO World Heritage sites.</p>
            </div>
            <div className="highlight-card">
              <span>🍛</span>
              <h4>Cuisine</h4>
              <p>Taste India's diverse flavors, from street food to royal thalis.</p>
            </div>
            <div className="highlight-card">
              <span>🌊</span>
              <h4>Relaxation</h4>
              <p>Unwind on pristine beaches or rejuvenate with Ayurvedic wellness.</p>
            </div>
          </div>
        </div>

        <div className="about-vision">
          <h3>Our Vision</h3>
          <p>
            To redefine travel experiences by blending tradition and modernity, 
            ensuring every journey is unforgettable.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
