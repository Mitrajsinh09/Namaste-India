// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import stateData from "./state-data";
// import "./StatePage.css";

// const StatePage = () => {
//   const { stateName } = useParams();
//   const data = stateData[stateName];
//   const [darkMode, setDarkMode] = useState(false);

//   if (!data) {
//     console.error("No data found for:", stateName);
//     return (
//       <div className={`state-container ${darkMode ? "dark-mode" : ""}`}>
//         <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//         <h2 className="state-title">{stateName}</h2>
//         <p>No details available for this state yet.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={darkMode ? "dark-mode" : ""}>
//       <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "Light Mode" : "Dark Mode"}
//       </button>

//       <div className="state-container">
//         <h2 className="state-title">{stateName}</h2>
//         <p className="state-description">{data.description}</p>

//         <div className="places-grid">
//           {data.places.map((place, idx) => (
//             <div key={idx} className="place-card">
//               <img
//                 src={place.image}
//                 alt={place.name}
//                 className="place-image"
//                 onError={(e) => (e.target.style.display = "none")}
//               />
//               <div className="place-info">
//                 <h3>{place.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatePage;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import stateData from "../Data/state-data"; // Corrected path
import "./StatePage.css";

const StatePage = () => {
  const { stateName } = useParams();
  const data = stateData[stateName.toLowerCase()];
  const [darkMode, setDarkMode] = useState(false);

  if (!data) {
    return (
      <div className="state-container">
        <h2 className="state-title">{stateName}</h2>
        <p>No details available for this state yet.</p>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div
        className="hero-section"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      >
        <div className="overlay">
          <h1 className="state-title">{stateName}</h1>
        </div>
      </div>

      <div className="state-container">
        <p className="state-description">{data.description}</p>

        <div className="quick-info">
          <div className="info-card">
            <h4>Best Time</h4>
            <p>{data.quickInfo.bestTime}</p>
          </div>
          <div className="info-card">
            <h4>Culture</h4>
            <p>{data.quickInfo.culture}</p>
          </div>
          <div className="info-card">
            <h4>Popular Cities</h4>
            <p>{data.quickInfo.popularCities.join(", ")}</p>
          </div>
        </div>

        <h2 className="section-title">Famous Places</h2>
        <div className="places-grid">
          {data.places.map((place, idx) => (
            <div key={idx} className="place-card">
              <img src={place.image} alt={place.name} className="place-image" />
              <div className="place-info">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">Travel Routes</h2>
        <div className="routes-grid">
          {data.routes.map((route, idx) => (
            <div key={idx} className="route-card">
              <h4>{route.title}</h4>
              <p>{route.duration}</p>
              <p>{route.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatePage;
