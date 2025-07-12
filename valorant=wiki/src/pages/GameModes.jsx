import React, { useState } from "react";
import "./GameModes.css";

function GameModes() {
  const [selectedMode, setSelectedMode] = useState(null);

  const gameModes = [
    {
      name: "Unrated",
      type: "Standard",
      description:
        "The classic 5v5 mode where attackers plant the Spike and defenders protect their sites. First team to win 13 rounds wins the match.",
      players: "5v5",
      duration: "30-40 minutes",
      features: [
        "Full economy system",
        "All abilities enabled",
        "Standard competitive ruleset",
        "No rank impact",
      ],
      image:
        "https://media.valorant-api.com/gamemodes/96bd3920-4f36-d026-2b28-c683eb0bcac5/displayicon.png",
    },
    {
      name: "Competitive",
      type: "Ranked",
      description:
        "The ranked version of the standard mode. Play to increase your rank and climb the competitive ladder.",
      players: "5v5",
      duration: "30-40 minutes",
      features: [
        "Ranked matchmaking",
        "Full economy system",
        "All abilities enabled",
        "Competitive rank progression",
      ],
      image:
        "https://media.valorant-api.com/gamemodes/96bd3920-4f36-d026-2b28-c683eb0bcac5/displayicon.png",
    },
    {
      name: "Spike Rush",
      type: "Quick",
      description:
        "A faster version of the standard mode where all players have the Spike and random weapons each round.",
      players: "5v5",
      duration: "8-12 minutes",
      features: [
        "All players get the same weapon each round",
        "Random power-up orbs",
        "All players start with all abilities",
        "First to 4 rounds wins",
      ],
      image:
        "https://media.valorant-api.com/gamemodes/e921d1e6-416b-c31f-1291-74930c330b7b/displayicon.png",
    },
    {
      name: "Deathmatch",
      type: "Practice",
      description:
        "A free-for-all mode where 14 players compete to get the most kills. Perfect for warming up and practicing aim.",
      players: "14 players FFA",
      duration: "9 minutes",
      features: [
        "No abilities",
        "Instant respawns",
        "Unlimited economy",
        "First to 40 kills or highest score wins",
      ],
      image:
        "https://media.valorant-api.com/gamemodes/a8790ec5-4237-f2f0-e93b-08a8e89865b2/displayicon.png",
    },
    {
      name: "Swift Play",
      type: "Quick",
      description:
        "A faster version of Unrated that features shorter rounds and a quicker economy system.",
      players: "5v5",
      duration: "15-20 minutes",
      features: [
        "Accelerated economy",
        "Shorter rounds",
        "First to 9 rounds wins",
        "All abilities enabled",
      ],
      image:
        "https://media.valorant-api.com/gamemodes/96bd3920-4f36-d026-2b28-c683eb0bcac5/displayicon.png",
    },
    {
      name: "Team Deathmatch",
      type: "Team",
      description:
        "Two teams of 5 players compete in a race to get kills. Focus on gunplay and team coordination.",
      players: "5v5",
      duration: "10 minutes",
      features: [
        "No abilities",
        "Quick respawns",
        "Team-based scoring",
        "First team to 100 kills wins",
      ],
      image:
        "https://media.valorant-api.com/gamemodes/a8790ec5-4237-f2f0-e93b-08a8e89865b2/displayicon.png",
    },
  ];

  const modeTypes = {
    Standard: "#ff4655",
    Ranked: "#aa5821ff",
    Quick: "#46afff",
    Practice: "#46ff7e",
    Team: "#ff8c46",
  };

  return (
    <div className="gamemodes-container">
      <div className="gamemodes-header">
        <h1>Game Modes</h1>
        <p>Explore different ways to play VALORANT</p>
      </div>

      <div className="gamemodes-grid">
        {gameModes.map((mode) => (
          <div
            key={mode.name}
            className="gamemode-card"
            onClick={() => setSelectedMode(mode)}
          >
            <div className="gamemode-header">
              <img src={mode.image} alt={mode.name} />
              <div className="gamemode-title">
                <h2>{mode.name}</h2>
                <span
                  className="mode-type"
                  style={{ backgroundColor: modeTypes[mode.type] }}
                >
                  {mode.type}
                </span>
              </div>
            </div>

            <div className="gamemode-info">
              <p className="gamemode-description">{mode.description}</p>
              <div className="gamemode-meta">
                <div className="meta-item">
                  <span className="meta-label">Players:</span>
                  <span className="meta-value">{mode.players}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-value">{mode.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMode && (
        <div className="modal-overlay" onClick={() => setSelectedMode(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedMode(null)}
            >
              ×
            </button>
            <div className="mode-detail">
              <div className="mode-detail-header">
                <img src={selectedMode.image} alt={selectedMode.name} />
                <div>
                  <h2>{selectedMode.name}</h2>
                  <span
                    className="mode-type"
                    style={{ backgroundColor: modeTypes[selectedMode.type] }}
                  >
                    {selectedMode.type}
                  </span>
                </div>
              </div>

              <div className="mode-detail-info">
                <p className="mode-description">{selectedMode.description}</p>

                <div className="mode-meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">Players:</span>
                    <span className="meta-value">{selectedMode.players}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">{selectedMode.duration}</span>
                  </div>
                </div>

                <div className="mode-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedMode.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameModes;
