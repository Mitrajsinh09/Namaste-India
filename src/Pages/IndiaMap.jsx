import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import { centroid as turfCentroid } from "@turf/turf";
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
};

const IndiaMap = () => {
  return (
    <div className="map-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [82.8, 22.5],
        }}
        className="india-map"
      >
        <Geographies geography={indiaGeo}>
          {({ geographies }) => {
            const states = {};
            geographies.forEach((geo) => {
              const stateName = geo.properties.st_nm;
              // keep one polygon per state
              if (!states[stateName]) {
                states[stateName] = geo;
              }
            });

            return (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#cfe2f3",
                        stroke: "#555",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#9ec1e6",
                        stroke: "#222",
                        strokeWidth: 1,
                        cursor: "pointer",
                      },
                    }}
                  />
                ))}

                {Object.entries(states).map(([stateName, geo]) => {
                  // ✅ compute centroid using turf (better accuracy for big states)
                  const center = turfCentroid(geo).geometry.coordinates;

                  return smallStates[stateName] ? (
                    <Annotation
                      key={stateName}
                      subject={center}
                      dx={smallStates[stateName].dx}
                      dy={smallStates[stateName].dy}
                      connectorProps={{
                        stroke: "#444",
                        strokeWidth: 0.8,
                        strokeLinecap: "round",
                      }}
                    >
                      <text className="state-label">{stateName}</text>
                    </Annotation>
                  ) : (
                    <Annotation
                      key={stateName}
                      subject={center}
                      dx={0}
                      dy={0}
                      connectorProps={{ stroke: "none" }}
                    >
                      <text
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        className="state-label"
                      >
                        {stateName}
                      </text>
                    </Annotation>
                  );
                })}
              </>
            );
          }}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default IndiaMap;
