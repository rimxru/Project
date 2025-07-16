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
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393621436886679654/download_6.png?ex=6875d0da&is=68747f5a&hm=56893872238b76c58d2465045c00d1eaa1f2b07fe1690146f8acfbca90d57546&",
      },
      {
        name: "Shorty",
        price: "150",
        damage: "12-24",
        fireRate: "3.3",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393622524520042496/download_8.png?ex=6875d1de&is=6874805e&hm=25fd1a348b67e3c697af3c40e030031bedad48e8189783752040907cecbf4aa2&",
      },
      {
        name: "Frenzy",
        price: "450",
        damage: "26-78",
        fireRate: "10",
        image:
          "https://cdn.discordapp.com/attachments/1393593969618849937/1393603146550480946/latest.png?ex=6875bfd2&is=68746e52&hm=56d5e48cf13623435b1833c350103ee08727abbc226c7ee472eded75c3d751b0&",
      },
      {
        name: "Ghost",
        price: "500",
        damage: "30-105",
        fireRate: "6.75",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393619450951106560/download.png?ex=6875cf01&is=68747d81&hm=e233b2c4b5fba19bee6f8a382b1e12a0562adae8a17c9a163a038b01d98a0541&",
      },
      {
        name: "Sheriff",
        price: "800",
        damage: "55-159",
        fireRate: "4",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393620821825552445/download_4.png?ex=6875d048&is=68747ec8&hm=94c759969592a18fb6c98f587bace3c6f6d6de825fa1c0052e270de29bb3d0c9&",
      },
    ],
    smgs: [
      {
        name: "Stinger",
        price: "950",
        damage: "27-67",
        fireRate: "18",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393622986728407185/download_9.png?ex=6875d24c&is=687480cc&hm=c9f659b2d7965c26ad84c28dd86f538689b2813bdfd0542d04b7651658059ee9&",
      },
      {
        name: "Spectre",
        price: "1600",
        damage: "26-78",
        fireRate: "13.33",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393619735748284508/download_1.png?ex=6875cf45&is=68747dc5&hm=ac1e98645c08aff9c8a440996ca6d6a8ea028addb37a2c80c39109057f452a2a&",
      },
    ],
    shotguns: [
      {
        name: "Bucky",
        price: "850",
        damage: "17-40",
        fireRate: "1.1",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393623246112424016/download_10.png?ex=6875d28a&is=6874810a&hm=796b1bf40d75652894fb282367ba8ae35fb80bec767305da21b3789196b08410&",
      },
      {
        name: "Judge",
        price: "1850",
        damage: "14-34",
        fireRate: "3.5",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393620465989324800/download_3.png?ex=6875cff3&is=68747e73&hm=09854c07b5480e51d1b527c62b1286eff97812e28fcfac910a8eca644cb30c96&",
      },
    ],
    rifles: [
      {
        name: "Bulldog",
        price: "2050",
        damage: "35-116",
        fireRate: "9.15",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393623475071221940/download_11.png?ex=6875d2c0&is=68748140&hm=5e8e16a29dde2ef7f984683135b97a1a22d8c9dda8043b37875f28502b3eadb6&",
      },
      {
        name: "Guardian",
        price: "2250",
        damage: "65-195",
        fireRate: "5.25",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393623717002875080/download_12.png?ex=6875d2fa&is=6874817a&hm=1e27be0aef6fbbebe80ab0d252a23064f735728174eac19a77405c448f3005a1&",
      },
      {
        name: "Phantom",
        price: "2900",
        damage: "39-156",
        fireRate: "11",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393623913090646107/download_13.png?ex=6875d329&is=687481a9&hm=d5a1f7281bab8e224d444ec94ef8c1816f382b5935ea3624460bcea4d996d5b8&",
      },
      {
        name: "Vandal",
        price: "2900",
        damage: "40-160",
        fireRate: "9.75",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393621102676410518/download_5.png?ex=6875d08b&is=68747f0b&hm=3f68da601c9497c6216bff403f2acd8d3afa219cd522dd59f991cdaeb1249e92&",
      },
    ],
    snipers: [
      {
        name: "Marshal",
        price: "950",
        damage: "101-202",
        fireRate: "1.5",
        image:
          "https://cdn.discordapp.com/attachments/1393593969618849937/1393602689945829416/valorant-standard-marshal-weapon-skin.png?ex=6875bf65&is=68746de5&hm=5e9e5bfe88afa7fab70f621fabb84f5b41cc9d01f975331b43ab7734b553f2fc&",
      },
      {
        name: "Outlaw",
        price: "2400",
        damage: "140-238",
        fireRate: "2.75",
        image:
          "https://cdn.discordapp.com/attachments/1393593969618849937/1393603358409101452/mandatory-valorant-database-arme-sniper-outlaw.png?ex=6875c004&is=68746e84&hm=b700dcd5559e450ad82361e5490753767324339f870c791743b97aaa4ef01c58&",
      },
      {
        name: "Operator",
        price: "4700",
        damage: "150-255",
        fireRate: "0.75",
        image:
          "https://cdn.discordapp.com/attachments/1393593969618849937/1393603017017917500/valorant-database-weapons-operator-artwork.png?ex=6875bfb3&is=68746e33&hm=165e78a81743edce3f711c4bf5132272fbe9c0f4dfbd089a1918aeb20ebc3be1&",
      },
    ],
    heavies: [
      {
        name: "Ares",
        price: "1600",
        damage: "30-72",
        fireRate: "13",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393624441254313984/download_15.png?ex=6875d3a7&is=68748227&hm=ab2fb01acbe9cb49487cbc752d8d297832f85c185ebcb18b04b44e4eb5e79552&",
      },
      {
        name: "Odin",
        price: "3200",
        damage: "38-77",
        fireRate: "12",
        image:
          "https://cdn.discordapp.com/attachments/1324097723477135392/1393624162173718538/download_14.png?ex=6875d364&is=687481e4&hm=311afc2328e0a8a74c79664affda0b9720ad1892ced417e6ba41e8ca97c1bc9d&",
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
