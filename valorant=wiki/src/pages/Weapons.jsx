import React, { useState } from "react";
import "./Weapons.css";

// Import weapon images
import classicImg from "../images/weapons/classic.png";
import shortyImg from "../images/weapons/shorty.png";
import frenzyImg from "../images/weapons/frenzy.png";
import ghostImg from "../images/weapons/ghost.png";
import sheriffImg from "../images/weapons/sheriff.png";
import stingerImg from "../images/weapons/stinger.png";
import spectreImg from "../images/weapons/spectre.png";
import buckyImg from "../images/weapons/bucky.png";
import judgeImg from "../images/weapons/judge.png";
import bulldogImg from "../images/weapons/bulldog.png";
import guardianImg from "../images/weapons/guardian.png";
import phantomImg from "../images/weapons/phantom.png";
import vandalImg from "../images/weapons/vandal.png";
import marshalImg from "../images/weapons/marshal.png";
import outlawImg from "../images/weapons/outlaw.png";
import operatorImg from "../images/weapons/operator.png";
import aresImg from "../images/weapons/ares.png";
import odinImg from "../images/weapons/odin.png";

function Weapons() {
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  const weapons = {
    sidearms: [
      {
        name: "Classic",
        price: "Free",
        damage: "26-78",
        fireRate: "6.75",
        image: classicImg,
      },
      {
        name: "Shorty",
        price: "150",
        damage: "12-24",
        fireRate: "3.3",
        image: shortyImg,
      },
      {
        name: "Frenzy",
        price: "450",
        damage: "26-78",
        fireRate: "10",
        image: frenzyImg,
      },
      {
        name: "Ghost",
        price: "500",
        damage: "30-105",
        fireRate: "6.75",
        image: ghostImg,
      },
      {
        name: "Sheriff",
        price: "800",
        damage: "55-159",
        fireRate: "4",
        image: sheriffImg,
      },
    ],
    smgs: [
      {
        name: "Stinger",
        price: "950",
        damage: "27-67",
        fireRate: "18",
        image: stingerImg,
      },
      {
        name: "Spectre",
        price: "1600",
        damage: "26-78",
        fireRate: "13.33",
        image: spectreImg,
      },
    ],
    shotguns: [
      {
        name: "Bucky",
        price: "850",
        damage: "17-40",
        fireRate: "1.1",
        image: buckyImg,
      },
      {
        name: "Judge",
        price: "1850",
        damage: "14-34",
        fireRate: "3.5",
        image: judgeImg,
      },
    ],
    rifles: [
      {
        name: "Bulldog",
        price: "2050",
        damage: "35-116",
        fireRate: "9.15",
        image: bulldogImg,
      },
      {
        name: "Guardian",
        price: "2250",
        damage: "65-195",
        fireRate: "5.25",
        image: guardianImg,
      },
      {
        name: "Phantom",
        price: "2900",
        damage: "39-156",
        fireRate: "11",
        image: phantomImg,
      },
      {
        name: "Vandal",
        price: "2900",
        damage: "40-160",
        fireRate: "9.75",
        image: vandalImg,
      },
    ],
    snipers: [
      {
        name: "Marshal",
        price: "950",
        damage: "101-202",
        fireRate: "1.5",
        image: marshalImg,
      },
      {
        name: "Outlaw",
        price: "2400",
        damage: "140-238",
        fireRate: "2.75",
        image: outlawImg,
      },
      {
        name: "Operator",
        price: "4700",
        damage: "150-255",
        fireRate: "0.75",
        image: operatorImg,
      },
    ],
    heavies: [
      {
        name: "Ares",
        price: "1600",
        damage: "30-72",
        fireRate: "13",
        image: aresImg,
      },
      {
        name: "Odin",
        price: "3200",
        damage: "38-77",
        fireRate: "12",
        image: odinImg,
      },
    ],
  };

  const categories = {
    sidearms: "Sidearms",
    smgs: "SMGs",
    shotguns: "Shotguns",
    rifles: "Rifles",
    snipers: "Snipers",
    heavies: "Heavy Weapons",
  };

  return (
    <div className="weapons-container">
      <div className="weapons-header">
        <h1>Valorant Weapons</h1>
        <p>Master your arsenal with detailed weapon information</p>
      </div>

      {Object.entries(categories).map(([key, title]) => (
        <div key={key} className="weapon-category">
          <h2>{title}</h2>
          <div className="weapons-grid">
            {weapons[key].map((weapon) => (
              <div
                key={weapon.name}
                className="weapon-card"
                onClick={() => setSelectedWeapon(weapon)}
              >
                <div className="weapon-image">
                  <img src={weapon.image} alt={weapon.name} />
                </div>
                <div className="weapon-info">
                  <h3>{weapon.name}</h3>
                  <div className="weapon-stats">
                    <div>
                      <span className="stat-label">Price:</span>
                      <span className="stat-value">
                        {weapon.price === "Free" ? "Free" : `${weapon.price} ¤`}
                      </span>
                    </div>
                    <div>
                      <span className="stat-label">Damage:</span>
                      <span className="stat-value">{weapon.damage}</span>
                    </div>
                    <div>
                      <span className="stat-label">Fire Rate:</span>
                      <span className="stat-value">
                        {weapon.fireRate} rds/sec
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedWeapon && (
        <div className="modal-overlay" onClick={() => setSelectedWeapon(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedWeapon(null)}
            >
              ×
            </button>
            <div className="weapon-detail">
              <img
                src={selectedWeapon.image}
                alt={selectedWeapon.name}
                className="weapon-detail-image"
              />
              <div className="weapon-detail-info">
                <h2>{selectedWeapon.name}</h2>
                <div className="weapon-detail-stats">
                  <div>
                    <span className="stat-label">Price:</span>
                    <span className="stat-value">
                      {selectedWeapon.price === "Free"
                        ? "Free"
                        : `${selectedWeapon.price} ¤`}
                    </span>
                  </div>
                  <div>
                    <span className="stat-label">Damage:</span>
                    <span className="stat-value">{selectedWeapon.damage}</span>
                  </div>
                  <div>
                    <span className="stat-label">Fire Rate:</span>
                    <span className="stat-value">
                      {selectedWeapon.fireRate} rds/sec
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weapons;