import { useEffect, useRef, useState } from "react";
import "./IndiaMap.css";
import states from "./state-data";

export default function IndiaMap() {
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, text: "" });

  useEffect(() => {
    fetch("/india-states.svg")
      .then((r) => r.text())
      .then((svgText) => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = svgText;

        const svgRoot = containerRef.current.querySelector("svg");
        if (!svgRoot) return;

        // Responsive SVG
        svgRoot.setAttribute("class", "india-map");
        svgRoot.removeAttribute("width");
        svgRoot.removeAttribute("height");
        if (!svgRoot.getAttribute("viewBox")) {
          svgRoot.setAttribute("viewBox", "0 0 1000 1000"); // fallback
        }

        // Clickable states
        const clickable = svgRoot.querySelectorAll("[data-state], [id]");
        clickable.forEach((el) => {
          const stateName =
            el.getAttribute("data-state") ||
            normalizeIdToState(el.getAttribute("id"));

          if (!stateName) return;

          el.classList.add("state-region");

          // Hover tooltip
          el.addEventListener("mousemove", (e) => {
            const info = states[stateName];
            setTooltip({
              show: true,
              x: e.clientX,
              y: e.clientY,
              text: info ? `${stateName} • ${info.tagline}` : stateName,
            });
          });

          el.addEventListener("mouseleave", () =>
            setTooltip((t) => ({ ...t, show: false }))
          );

          // Click event
          el.addEventListener("click", () => {
            const info = states[stateName];
            if (info?.onClick) {
              info.onClick(stateName, info);
              return;
            }
            alert(
              info
                ? `${stateName}\nTop spots: ${info.topSpots.join(", ")}\nStarting ₹${info.startingFrom}`
                : stateName
            );
          });

          // Predefined color
          if (states[stateName]?.color) {
            el.setAttribute("fill", states[stateName].color);
          }
        });
      })
      .catch((err) => console.error("Failed to load India SVG:", err));
  }, []);

  return (
    <section className="map-page">
      <h2 className="map-title">Explore India by State</h2>

      <div className="map-toolbar card">
        <div className="legend">
          <span className="legend-item legend-nature" /> Nature
          <span className="legend-item legend-heritage" /> Heritage
          <span className="legend-item legend-beach" /> Beach
          <span className="legend-item legend-adventure" /> Adventure
        </div>
      </div>

      <div className="card map-card">
        <div ref={containerRef} className="map-container" />
      </div>

      {tooltip.show && (
        <div
          className="map-tooltip"
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}

// Convert IDs like "IN-MH" → "Maharashtra"
function normalizeIdToState(id) {
  if (!id) return null;
  let s = id.replace(/^IN[-_]/i, "").replace(/[-_]/g, " ");
  s = s.trim();
  if (!s) return null;
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
