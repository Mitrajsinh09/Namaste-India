import React from "react";
import "./About.css";
import aboutImg from "../assets/banner.jpg";

// Background images for highlight cards
import adventureBg from "../assets/Highlight/Tracking.jpg";
import heritageBg from "../assets/Highlight/heritage.jpg";
import cuisineBg from "../assets/Highlight/cusines.jpg";
import relaxationBg from "../assets/Highlight/beaches.jpg";

function About() {
  const highlights = [
    {
      title: "Adventure",
      desc: "Explore Himalayan treks, desert safaris, and wildlife adventures.",
      bg: adventureBg,
    },
    {
      title: "Heritage",
      desc: "Visit ancient temples, palaces, and UNESCO World Heritage sites.",
      bg: heritageBg,
    },
    {
      title: "Cuisine",
      desc: "Taste India's diverse flavors, from street food to royal thalis.",
      bg: cuisineBg,
    },
    {
      title: "Relaxation",
      desc: "Unwind on pristine beaches or rejuvenate with Ayurvedic wellness.",
      bg: relaxationBg,
    },
  ];

  return (
    <section id="about" className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <img src={aboutImg} alt="About India" className="about-hero-img" />
        <div className="about-hero-overlay">
          <h2>Discover the Spirit of India</h2>
          <p>A journey through culture, heritage, nature, and incredible hospitality.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-intro">
        <h3>Why Namaste India?</h3>
        <p>
          Namaste India Tourism is your gateway to experiencing the soul of India –
          from its serene landscapes to bustling cities, ancient heritage to modern
          wonders. Our mission is to showcase the diversity and vibrance of India
          like never before.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="about-highlights">
        <h3>What We Offer</h3>
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-card"
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div className="highlight-overlay">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-vision">
        <h3>Our Vision</h3>
        <p>
          To redefine travel experiences by blending tradition and modernity,
          ensuring every journey is unforgettable.
        </p>
      </div>
    </section>
  );
}

export default About;
