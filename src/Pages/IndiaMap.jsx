// src/Pages/IndiaMap.jsx
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import { centroid as turfCentroid } from "@turf/turf";
import { useNavigate } from "react-router-dom";   // ✅ for navigation
import indiaGeo from "../Data/india_states.geojson";
import "./IndiaMap.css";

const smallStates = {
  "Goa": { dx: 20, dy: 10 },
  "Sikkim": { dx: 20, dy: -10 },
  "Tripura": { dx: 30, dy: 10 },
  "Meghalaya": { dx: 25, dy: -15 },
  "Nagaland": { dx: 30, dy: 10 },
  "Manipur": { dx: 35, dy: 5 },
  "Mizoram": { dx: 30, dy: 20 },
  "Arunachal Pradesh": { dx: 40, dy: -10 },
  "Delhi": { dx: -20, dy: -10 },
  "Puducherry": { dx: 20, dy: 10 },
  "Chandigarh": { dx: -15, dy: -10 },
  "Andaman and Nicobar Islands": { dx: 50, dy: 30 },
  "Lakshadweep": { dx: 40, dy: 20 },
  "Jammu and Kashmir": { dx: -30, dy: -20 },
};

const stateColors = {
  "Jammu and Kashmir": "#E57373",
  "Ladakh": "#81D4FA",
  "Himachal Pradesh": "#AED581",
  "Punjab": "#FFD54F",
  "Haryana": "#4DB6AC",
  "Rajasthan": "#64B5F6",
  "Delhi": "#BA68C8",
  "Uttarakhand": "#FFB74D",
  "Uttar Pradesh": "#4FC3F7",
  "Bihar": "#9575CD",
  "Chandigarh": "#F06292",
  "Madhya Pradesh": "#81C784",
  "Maharashtra": "#FF8A65",
  "Telangana": "#4DD0E1",
  "Karnataka": "#7986CB",
  "Andhra Pradesh": "#FFB74D",
  "Odisha": "#4DB6AC",
  "Jharkhand": "#BA68C8",
  "West Bengal": "#64B5F6",
  "Sikkim": "#AED581",
  "Assam": "#F06292",
  "Arunachal Pradesh": "#81C784",
  "Nagaland": "#FFD54F",
  "Manipur": "#81D4FA",
  "Mizoram": "#9575CD",
  "Tripura": "#FF8A65",
  "Meghalaya": "#7986CB",
  "Goa": "#FFB74D",
  "Dadra and Nagar Haveli and Daman and Diu": "#AED581",
  "Puducherry": "#F06292",
  "Andaman and Nicobar Islands": "#4FC3F7",
  "Lakshadweep": "#BA68C8",
};

const hoverColor = "#ffbd69";

const IndiaMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const navigate = useNavigate();  // ✅ for redirect

  return (
    <div className="map-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1000, center: [82.8, 22.5] }}
        className="india-map"
      >
        <Geographies geography={indiaGeo}>
          {({ geographies }) => {
            const states = {};
            geographies.forEach((geo) => {
              const stateName = geo.properties.st_nm;
              if (!states[stateName]) states[stateName] = geo;
            });

            return (
              <>
                {geographies.map((geo) => {
                  const stateName = geo.properties.st_nm;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => setHoveredState(stateName)}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => navigate(`/state/${stateName}`)}  // ✅ fixed
                      style={{
                        default: {
                          fill: stateColors[stateName] || "#a8dadc",
                          stroke: "#222",
                          strokeWidth: 0.5,
                          outline: "none",
                          transition: "fill 0.3s ease",
                        },
                        hover: {
                          fill: hoverColor,
                          stroke: "#000",
                          strokeWidth: 1,
                          cursor: "pointer",
                          transition: "fill 0.3s ease",
                        },
                        pressed: {
                          fill: hoverColor,
                        },
                      }}
                    />
                  );
                })}

                {hoveredState && states[hoveredState] && (
                  <Annotation
                    subject={
                      turfCentroid(states[hoveredState]).geometry.coordinates
                    }
                    dx={smallStates[hoveredState]?.dx || 0}
                    dy={smallStates[hoveredState]?.dy || 0}
                    connectorProps={{
                      stroke: "#444",
                      strokeWidth: 0.8,
                      strokeLinecap: "round",
                    }}
                  >
                    <text
                      textAnchor={smallStates[hoveredState] ? "start" : "middle"}
                      alignmentBaseline="middle"
                      className="state-label"
                    >
                      {hoveredState}
                    </text>
                  </Annotation>
                )}
              </>
            );
          }}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default IndiaMap;