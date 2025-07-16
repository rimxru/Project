import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import Maps from "./pages/Maps";
import Weapons from "./pages/Weapons";
import GameModes from "./pages/GameModes";
import NotFound from "./pages/NotFound";
import "./App.css";

// Set background for the entire app
document.body.style.background =
  "linear-gradient(135deg, #0F1923 0%, #121212 100%)";
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";

// Add Font Awesome
const addFontAwesome = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
  document.head.appendChild(link);
};

function App() {
  useEffect(() => {
    addFontAwesome();
  }, []);
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            VALORANT WIKI
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-item home-link">
              <i className="fas fa-home"></i>
              Home
            </Link>
            <Link to="/agents" className="nav-item">
              Agents
            </Link>
            <Link to="/maps" className="nav-item">
              Maps
            </Link>
            <Link to="/weapons" className="nav-item">
              Weapons
            </Link>
            <Link to="/game-modes" className="nav-item">
              Game Modes
            </Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/game-modes" element={<GameModes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;