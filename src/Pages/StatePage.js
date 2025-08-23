// src/Pages/StatePage.js
import React from "react";
import { useParams } from "react-router-dom";

function StatePage() {
  const { stateName } = useParams();

  const places = {
    gujarat: ["Gir National Park", "Somnath Temple", "Dwarka"],
    maharashtra: ["Ajanta Caves", "Ellora Caves", "Gateway of India"],
    // Add more states
  };

  return (
    <div className="page">
      <h2>Best Places to Visit in {stateName.toUpperCase()}</h2>
      <ul>
        {places[stateName]?.map((place, index) => (
          <li key={index}>{place}</li>
        )) || <p>No data available</p>}
      </ul>
    </div>
  );
}

export default StatePage;
