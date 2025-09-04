import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

import gir from "../assets/Gujarat/gir.jpg";
import kerala from "../assets/Gujarat/kerala.jpg";
import goa from "../assets/Gujarat/goa.jpg";
import jaipur from "../assets/Goa/jaipur.jpg";
import ladakh from "../assets/Ladakh/ladakh.jpg";
import kolkata from "../assets/West Bengal/kolkata.jpg";
import varanasi from "../assets/Uttar Pradesh/varanasi.jpg";
import mumbai from "../assets/Maharashtra/mumbai.jpg";
import meghalaya from "../assets/Meghalaya/Meghalaya.jpg";

import About from "./About";

function Home() {
  const images = [kerala, jaipur, goa, gir];
  const [currentImage, setCurrentImage] = useState(0);

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Destinations
  const destinations = [
    { img: gir, title: "Gir – The Land of Lions", desc: "Home to the Asiatic lions, Gir is a UNESCO World Heritage Site." },
    { img: jaipur, title: "Jaipur – The Pink City", desc: "Known for its royal palaces, forts, and colorful bazaars." },
    { img: goa, title: "Goa Beaches", desc: "Golden sands, nightlife, and Portuguese heritage await you." },
    { img: kerala, title: "Kerala – God’s Own Country", desc: "Known for its backwaters, spice plantations, and rich culture." },
    { img: ladakh, title: "Ladakh – Land of High Passes", desc: "Stunning landscapes and monasteries at high altitudes." },
    { img: kolkata, title: "Kolkata – City of Joy", desc: "A city rich in culture, literature, and colonial architecture." },
    { img: varanasi, title: "Varanasi – Spiritual Capital", desc: "One of the world’s oldest cities, located on the Ganges River." },
    { img: mumbai, title: "Mumbai – City of Dreams", desc: "India’s financial capital and home to Bollywood." },
    { img: meghalaya, title: "Meghalaya – Abode of Clouds", desc: "Misty hills, waterfalls, and living root bridges await." }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const intervalRef = useRef(null);
  const total = destinations.length;

  // Get 4 visible cards
  const getVisibleDestinations = () => {
    let visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(destinations[(startIndex + i) % total]);
    }
    return visible;
  };

  // Slide functions
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
    setIsAuto(false);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
    setIsAuto(false);
  };

  // Auto scroll
  useEffect(() => {
    if (isAuto) {
      intervalRef.current = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % total);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAuto, total]);

  // Navigate to Map Page
  const goToMapPage = () => {
    window.location.href = "/map"; // 👈 redirect to map page
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <img src={images[currentImage]} alt="Slideshow" className="hero-img" />
        <div className="hero-overlay">
          <h2>Welcome to Namaste India</h2>
          <p>Experience vibrant culture, breathtaking landscapes, and timeless heritage across India.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <h3>Why Explore India?</h3>
        <p>
          India is not just a destination, it’s an experience. From the snow-covered Himalayas to the golden beaches of Goa,
          every region tells a unique story.
        </p>
      </section>

      {/* Tourist Places Section */}
      <section id="places" className="places">
        <h3>Top Tourist Destinations</h3>
        <div className="slider-container">
          <button className="arrow left" onClick={prevSlide}>‹</button>
          <div className="fade-slider">
            {getVisibleDestinations().map((place, index) => (
              <div className="place-card" key={index}>
                <img src={place.img} alt={place.title} />
                <h4>{place.title}</h4>
                <p>{place.desc}</p>
              </div>
            ))}
          </div>
          <button className="arrow right" onClick={nextSlide}>›</button>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta">
        <div className="cta-card">
          <h3>Plan Your Journey Today</h3>
          <p>
            Whether it’s adventure, spirituality, or relaxation, India has something for everyone.  
            Begin your journey with us and discover destinations like never before.
          </p>
          <button className="explore-btn" onClick={goToMapPage}>
            Explore Destinations
          </button>
        </div>
      </section>

      {/* About Section */}
      <About />
    </div>
  );
}

export default Home;
