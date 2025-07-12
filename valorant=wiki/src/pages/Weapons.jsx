import React, { useState } from "react";
import "./Weapons.css";

function Weapons() {
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  const weapons = {
    sidearms: [
      {
        name: "Classic",
        price: "Free",
        damage: "26-78",
        fireRate: "6.75",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393621436886679654/download_6.png?ex=6873d69a&is=6872851a&hm=3830b209630121cad78f818caa199c5193bb90669899290bf9351322f57ad890&",
      },
      {
        name: "Shorty",
        price: "150",
        damage: "12-24",
        fireRate: "3.3",
        image: "https://cdn.discordapp.com/attachments/1393593969618849937/1393603188065702060/shorty.png?ex=6873c59b&is=6872741b&hm=cca86c05f2eda9517d4221ed9eaf097895f8b27c7c0682d84e19e7483ee8a137&",
      },
      {
        name: "Frenzy",
        price: "450",
        damage: "26-78",
        fireRate: "10",
        image: "https://cdn.discordapp.com/attachments/1393593969618849937/1393603146550480946/latest.png?ex=6873c592&is=68727412&hm=dd1c951cf9379a6d35f9fda1ddebf282067c3ed7d4bbe48b06ca66afa406f44c&",
      },
      {
        name: "Ghost",
        price: "500",
        damage: "30-105",
        fireRate: "6.75",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393619450951106560/download.png?ex=6873d4c1&is=68728341&hm=f1163725dcef6cfe34544bc177f73bd6c83df7dd895ae7fb2528e4aa9ffacf8e&",
      },
      {
        name: "Sheriff",
        price: "800",
        damage: "55-159",
        fireRate: "4",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393620821825552445/download_4.png?ex=6873d608&is=68728488&hm=bcf0665e71a28bee9580699a886d0cba32de95c25741b08e755fd9e90cdaf819&",
      },
    ],
    smgs: [
      {
        name: "Stinger",
        price: "950",
        damage: "27-67",
        fireRate: "18",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393622986728407185/download_9.png?ex=6873d80c&is=6872868c&hm=50e6d7e9b37784035b8f3f5fb3e9df7f13727d2497124498f10738a5b1e8c619&",
      },
      {
        name: "Spectre",
        price: "1600",
        damage: "26-78",
        fireRate: "13.33",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393619735748284508/download_1.png?ex=6873d505&is=68728385&hm=d89be7d643c538d7bb4e201c87abd9c1559ca7752add70e87f94a6d7becb16f1&",
      },
    ],
    shotguns: [
      {
        name: "Bucky",
        price: "850",
        damage: "17-40",
        fireRate: "1.1",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393623246112424016/download_10.png?ex=6873d84a&is=687286ca&hm=1e343d357aec46c11c050003a5103e0d0ced9e56a2e9d7ceb66ed70530d0f0f3&",
      },
      {
        name: "Judge",
        price: "1850",
        damage: "14-34",
        fireRate: "3.5",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393620465989324800/download_3.png?ex=6873d5b3&is=68728433&hm=2bad484c5422f77c980a2cf8932cc3408807fae2d346466f55c46b8bfa1b0ff2&",
      },
    ],
    rifles: [
      {
        name: "Bulldog",
        price: "2050",
        damage: "35-116",
        fireRate: "9.15",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393623475071221940/download_11.png?ex=6873d880&is=68728700&hm=ef9c01427550b4b3dbcc874575ce80be2861e25f89a6e5265497f194a249f47f&",
      },
      {
        name: "Guardian",
        price: "2250",
        damage: "65-195",
        fireRate: "5.25",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393623717002875080/download_12.png?ex=6873d8ba&is=6872873a&hm=1bb7967857ef640ecdf37d13909ab3afc3029a0451d96e43f241bb990148184d&",
      },
      {
        name: "Phantom",
        price: "2900",
        damage: "39-156",
        fireRate: "11",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393623913090646107/download_13.png?ex=6873d8e9&is=68728769&hm=7efab3e03fb5824f88fbd2ad10af9a479f88b267989e331722a1a23b7647041f&",
      },
      {
        name: "Vandal",
        price: "2900",
        damage: "40-160",
        fireRate: "9.75",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393621102676410518/download_5.png?ex=6873d64b&is=687284cb&hm=961fd0184d8d6ab2b6cb407a227c56a91fc8cdbccdfa81cb8dc30bd3cd8c5e52&",
      },
    ],
    snipers: [
      {
        name: "Marshal",
        price: "950",
        damage: "101-202",
        fireRate: "1.5",
        image: "https://cdn.discordapp.com/attachments/1393593969618849937/1393602689945829416/valorant-standard-marshal-weapon-skin.png?ex=6873c525&is=687273a5&hm=f843f14990138033ed26ca5abf8c75e1281604cb9d38dfdf441f5bbfb8590022&",
      },
      {
        name: "Outlaw",
        price: "2400",
        damage: "140-238",
        fireRate: "2.75",
        image: "https://cdn.discordapp.com/attachments/1359793709025067060/1393611786959196272/268.png?ex=6873cd9e&is=68727c1e&hm=a695d0de0b39f7f6db349a311707097dbadb2456eaaeb4895e0628059a1605b7&",
      },
      {
        name: "Operator",
        price: "4700",
        damage: "150-255",
        fireRate: "0.75",
        image: "https://cdn.discordapp.com/attachments/1393593969618849937/1393603017017917500/valorant-database-weapons-operator-artwork.png?ex=6873c573&is=687273f3&hm=f799392ce81816cf7cd8cd80215e65f152ee5e557faff0724cdff239d5c347f7&",
      },
    ],
    heavies: [
      {
        name: "Ares",
        price: "1600",
        damage: "30-72",
        fireRate: "13",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393624441254313984/download_15.png?ex=6873d967&is=687287e7&hm=47bb1f0431c27317df75f8a807eef01d45ae44fb127e378a6a35bce0fbe0f7ba&",
      },
      {
        name: "Odin",
        price: "3200",
        damage: "38-77",
        fireRate: "12",
        image: "https://cdn.discordapp.com/attachments/1324097723477135392/1393624162173718538/download_14.png?ex=6873d924&is=687287a4&hm=bec8d750ec2cc4d3ec7978bccae429f93ff7b9e31872be75c16ab0a406f13069&",
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
