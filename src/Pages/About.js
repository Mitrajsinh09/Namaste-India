import React from "react";
import "./About.css";
import aboutImg from "../assets/Goa/about-banner.jpg"; // Place image in src/assets

function About() {
  return (
    <div className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero">
        <img src={aboutImg} alt="About India" className="about-hero-img" />
        <div className="about-hero-overlay">
          <h2>Discover the Spirit of India</h2>
          <p>
            A journey through culture, heritage, nature, and incredible hospitality.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-intro">
        <h3>Why Namaste India?</h3>
        <p>
          Namaste India Tourism is your gateway to experiencing the soul of India – 
          from its serene landscapes to bustling cities, ancient heritage to modern 
          wonders. Our mission is to showcase the diversity and vibrance of India 
          like never before..
        </p>
      </section>

      {/* Highlights Section */}
      <section className="about-highlights">
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
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <h3>Our Vision</h3>
        <p>
          To redefine travel experiences by blending tradition and modernity, 
          ensuring every journey is unforgettable.
        </p>
      </section>
    </div>
  );
}

export default About;
