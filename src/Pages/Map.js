// pages/Map.js
import React from "react";

function Map() {
  return (
    <div className="page">
      <h2>Explore India on Map</h2>
      <iframe
        title="India Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4505763.74565081!2d73.4!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ffbd9564b8b%3A0x6c1c50e2d715c2a!2sIndia!5e0!3m2!1sen!2sin!4v1689770248927!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;


