// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StatePage from "./Pages/StatePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import IndiaMap from "./Pages/IndiaMap";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<IndiaMap />} />
        <Route path="/state/:stateName" element={<StatePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
