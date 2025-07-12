import React, { useState } from "react";
import "./Maps.css";

function Maps() {
  const [selectedMap, setSelectedMap] = useState(null);

  const maps = [
    {
      name: "Ascent",
      location: "Venice, Italy",
      description:
        "An open playground for small wars of position and attrition. A visual celebration of Valorant's world and Italian architecture.",
      features:
        "Central marketplace with automatic doors, multiple elevated positions, long sightlines",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5cb7e65c04a489eccd725ce693fdc11e99982e10-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a31ef0d024e1add0214eb49698ca13e58f62d17e-641x641.jpg?auto=format&fit=fill&q=80&w=641",
    },
    {
      name: "Bind",
      location: "Rabat, Morocco",
      description:
        "A two-site map with unique teleporters that allow rapid rotation through a one-way system.",
      features:
        "One-way teleporters, tight corners, multiple elevation changes",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7df1e6ee284810ef0cbf8db369c214a8cbf6578c-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9c2f75aa4d00022c440615ce08988c7dd5f2bb00-641x641.png?auto=format&fit=fill&q=80&w=641",
    },
    {
      name: "Haven",
      location: "Thimphu, Bhutan",
      description:
        "Beneath a forgotten monastery lies a three-site map offering more options for strategic play.",
      features:
        "Three bomb sites, multiple pathways, ancient monastery setting",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/bccc7b5f8647a4f654d4bb359247bce6e82c77ab-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d9f3c040be38a8fc1f49f18d1221680419877c05-641x641.png?auto=format&fit=fill&q=80&w=641",
    },
    {
      name: "Split",
      location: "Tokyo, Japan",
      description:
        "A vertical urban map with two sites divided by an elevated center, emphasizing height differences.",
      features:
        "Vertical rope ascenders, multiple high ground positions, narrow choke points",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/878d51688c0f9dd0de827162e80c40811668e0c6-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dc8a607601339a6c79c8d144c93e17915cde8ac9-515x513.jpg?auto=format&fit=fill&q=80&w=515",
    },
    {
      name: "Icebox",
      location: "Bennett Island, Russia",
      description:
        "A secret Kingdom excavation site in the arctic wilderness, featuring long sightlines and vertical combat spaces.",
      features: "Ziplines, vertical kitchen area, multiple elevated positions",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/72853f583a0f6b25aed54870531756483a7b61de-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/421063d481e9e1b2b5f2f834f53b7512f77413b9-2000x2000.jpg?auto=format&fit=fill&q=80&w=1504",
    },
    {
      name: "Breeze",
      location: "Atlantic Ocean, Bermuda Triangle",
      description:
        "A tropical paradise with wide open spaces and long sightlines, perfect for long-range engagements.",
      features: "Large open areas, mechanical doors, unique rope mechanics",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a4a0374222f9cc79f97e03dbb1122056e794176a-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e6e2959c79eb2754219fa250248d78acc5e218c3-515x515.webp?auto=format&fit=fill&q=80&w=515",
    },
    {
      name: "Fracture",
      location: "Santa Fe, New Mexico",
      description:
        "A top-secret research facility split apart by a mysterious catastrophe. This map features a unique H-shaped layout with attackers spawning on both sides.",
      features:
        "Ziplines connecting both sides, unique H-shape layout, multiple rotation options",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/983a6d66978aabd3ccd4e51517298d9a0b5467d9-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d7916de5399e878e06bc20bb4a36f5b8a8637050-515x515.webp?auto=format&fit=fill&q=80&w=515",
    },
    {
      name: "Pearl",
      location: "Lisbon, Portugal",
      description:
        "A beautiful underwater city devastated by climate change. This map features a traditional three-lane design with long rotation paths.",
      features: "Underwater setting, multiple mid paths, long rotation paths",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7ba5df090f5efee7988d8d33f4b43c3441cb1aab-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/d6e6a4018be3d916e084555263dffb76f4809a18-1550x1550.jpg?auto=format&fit=fill&q=80&w=1504",
    },
    {
      name: "Lotus",
      location: "Western Ghats, India",
      description:
        "An ancient structure hidden in the mountains of India. Features three sites and unique rotating doors.",
      features: "Three spike sites, rotating doors, destructible walls",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/67d199e0f7108bc60e8293d3f9a37538b0b55b11-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/a660e638ac2a27d458ef22a6db17b3e372137d09-1873x1873.jpg?auto=format&fit=fill&q=80&w=1504",
    },
    {
      name: "Sunset",
      location: "Los Angeles, USA",
      description:
        "A vibrant entertainment complex in the heart of LA. This map features a cinema-themed environment with multiple high ground positions.",
      features:
        "Movie theater setting, vertical gameplay, multiple high grounds",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5101e4ee241fbfca261bf8150230236c46c8b991-3840x2160.png?auto=format&fit=fill&q=80&w=1504",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/699c33a4ee5f5daf71e87c0f3bf6ddf6995b4bb3-2000x2000.jpg?auto=format&fit=fill&q=80&w=1504",
    },
    {
      name: "Corrode",
      location: "Offsite, Omega Earth",
      description:
        "A chemical research facility where catastrophic events have caused permanent environmental damage. The map features a unique caustic environment with acid pools affecting gameplay.",
      features:
        "Acid pools affecting mobility, vertical combat spaces, multiple rotation paths, interactive environmental hazards",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/6e3e66577519c8290d874aa94d82e28aec2ccc3e-915x515.jpg?auto=format&fit=fill&q=80&w=915",
      minimap:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/90666c45369269a33eebddc363b250dbc7d61a34-515x515.jpg?auto=format&fit=fill&q=80&w=515",
    },
  ];

  return (
    <div className="maps-container">
      <div className="maps-header">
        <h1>Valorant Maps</h1>
        <p>Explore strategic battlegrounds across the world</p>
      </div>

      <div className="maps-grid">
        {maps.map((map) => (
          <div key={map.name} className="map-card">
            <div className="map-image-container">
              <img src={map.image} alt={map.name} className="map-image" />
              <div className="map-overlay">
                <h2 className="map-name">{map.name}</h2>
                <span className="map-location">{map.location}</span>
              </div>
            </div>

            <div className="map-info">
              <div className="map-description">
                <h3>Overview</h3>
                <p>{map.description}</p>
              </div>

              <div className="map-features">
                <h3>Features</h3>
                <p>{map.features}</p>
              </div>

              <div className="minimap-container">
                <h3>Minimap</h3>
                <img
                  src={map.minimap}
                  alt={`${map.name} layout`}
                  className="minimap"
                  onClick={() => setSelectedMap(map)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMap && (
        <div className="modal-overlay" onClick={() => setSelectedMap(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedMap(null)}
            >
              ×
            </button>
            <h2>{selectedMap.name} MiniMap</h2>
            <img
              src={selectedMap.minimap}
              alt={`${selectedMap.name} MiniMap`}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Maps;
