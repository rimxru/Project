import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>VALORANT WIKI</h1>
        <p className="hero-subtitle">
          Your Ultimate Guide to Riot's Tactical Shooter
        </p>
      </div>

      <div className="content-section">
        <div className="info-card">
          <h2>What is Valorant?</h2>
          <p>
            Valorant is a free-to-play 5v5 tactical shooter game developed by
            Riot Games. Combining precise gunplay with unique agent abilities,
            players compete in intense matches where creativity and strategy are
            key to victory.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card" onClick={() => navigate("/agents")}>
            <h3>Agents</h3>
            <p>Discover unique characters with special abilities</p>
          </div>
          <div className="feature-card" onClick={() => navigate("/maps")}>
            <h3>Maps</h3>
            <p>Explore diverse locations and strategic layouts</p>
          </div>
          <div className="feature-card" onClick={() => navigate("/weapons")}>
            <h3>Weapons</h3>
            <p>Master the arsenal of firearms and equipment</p>
          </div>
          <div className="feature-card" onClick={() => navigate("/game-modes")}>
            <h3>Game Modes</h3>
            <p>Experience different ways to play</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
