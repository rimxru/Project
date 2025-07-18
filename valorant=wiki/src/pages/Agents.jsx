import React, { useState } from "react";
import "./Agents.css";

function Agents() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedAgentAbilities, setSelectedAgentAbilities] = useState([]);
  const [showDetailView, setShowDetailView] = useState(false);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
    const abilities = getAgentAbilities(agent.name);
    setSelectedAgentAbilities(abilities);
    setShowDetailView(true);
  };

  const handleBackToAgents = () => {
    setShowDetailView(false);
    setSelectedAgent(null);
    setSelectedAgentAbilities([]);
  };

  const handleBackgroundClick = (e) => {
    // Check if the click is on the background (not on content)
    if (e.target.classList.contains('agent-detail-view')) {
      handleBackToAgents();
    }
  };

  const handleImageUpload = (event, abilityIndex) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedAbilities = [...selectedAgentAbilities];
        updatedAbilities[abilityIndex].icon = e.target.result;
        setSelectedAgentAbilities(updatedAbilities);
      };
      reader.readAsDataURL(file);
    }
  };

  const roles = [
    {
      name: "Controller",
      icon: "/images/Controller.png",
      description:
        "Controllers are experts in slicing up dangerous territory to set the pace of a fight.",
      agents: [
        { name: "Brimstone", description: "Orbital commander from the U.S.A.", image: "/images/brimstone.png" },
        { name: "Viper", description: "American chemist controlling battlefield vision.", image: "/images/viper.png" },
        { name: "Omen", description: "Phantom shadow hunter.", image: "/images/omen.png" },
        { name: "Astra", description: "Ghanaian cosmic strategist.", image: "/images/astra.png" },
        { name: "Harbor", description: "Indian water dominator.", image: "/images/harbor.png" },
        { name: "Clove", description: "Scottish troublemaker immortal.", image: "/images/clove.png" },
      ],
    },
    {
      name: "Duelist",
      icon: "/images/Duelist.png",
      description:
        "Duelists are self-sufficient fraggers expected to take aggressive engagements and win.",
      agents: [
        { name: "Phoenix", description: "UK star incendiary.", image: "/images/phoenix.png" },
        { name: "Jett", description: "South Korean agile evasive duelist.", image: "/images/Jett.png" },
        { name: "Raze", description: "Brazilian explosive expert.", image: "/images/raze.png" },
        { name: "Reyna", description: "Mexican single combat specialist.", image: "/images/reyna.png" },
        { name: "Yoru", description: "Japanese reality rift infiltrator.", image: "/images/yoru.png" },
        { name: "Neon", description: "Filipino lightning sprinter.", image: "/images/neon.png" },
        { name: "Iso", description: "Chinese energy fixer.", image: "/images/iso.png" },
        { name: "Waylay", description: "Thai prismatic radiant.", image: "/images/waylay.png" },
      ],
    },
    {
      name: "Initiator",
      icon: "/images/Initiator.png",
      description:
        "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
      agents: [
        { name: "Sova", description: "Russian recon bow.", image: "/images/sova.png" },
        { name: "Breach", description: "Swedish kinetic bionic.", image: "/images/breach.png" },
        { name: "Skye", description: "Australian beast guider.", image: "/images/skye.png" },
        { name: "KAY/O", description: "Machine war suppressor.", image: "/images/kayo.png" },
        { name: "Fade", description: "Turkish fear hunter.", image: "/images/fade.png" },
        { name: "Gekko", description: "Angeleno creature leader.", image: "/images/gekko.png" },
        { name: "Tejo", description: "Colombian strategist.", image: "/images/tejo.png" },
      ],
    },
    {
      name: "Sentinel",
      icon: "/images/Sentinel.png",
      description:
        "Sentinels are defensive experts who can lock down areas and watch flanks.",
      agents: [
        { name: "Cypher", description: "Moroccan surveillance.", image: "/images/cypher.png" },
        { name: "Sage", description: "Chinese healer defender.", image: "/images/sage.png" },
        { name: "Killjoy", description: "German tech genius.", image: "/images/killjoy.png" },
        { name: "Chamber", description: "French weapons designer.", image: "/images/chamber.png" },
        { name: "Deadlock", description: "Norwegian nanowire expert.", image: "/images/deadlock.png" },
        { name: "Vyse", description: "Metallic mastermind.", image: "/images/vyse.png" },
      ],
    },
  ];

  return (
    <div className="agents-container">
      {!showDetailView ? (
        // Agent Selection View
        <>
          {roles.map((role) => (
            <section key={role.name} className="role-section">
              <img 
                src={role.icon} 
                alt={role.name} 
                className="role-icon"
                loading="lazy"
              />
              <h2>{role.name}</h2>
              <p>{role.description}</p>
              <div className="agents-list">
                {role.agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="agent-card"
                    onClick={() => handleAgentClick(agent)}
                  >
                    <img 
                      src={agent.image} 
                      alt={agent.name} 
                      className="agent-thumb"
                      loading="lazy"
                    />
                    <h3>{agent.name}</h3>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </>
      ) : (
        // Agent Detail View
        <div className="agent-detail-view" onClick={handleBackgroundClick}>
          <div className="detail-content">
            <div className="detail-header">
              <button className="back-button" onClick={handleBackToAgents}>
                ← Back to Agents
              </button>
              <h1>{selectedAgent.name}</h1>
            </div>
            
            <div className="agent-profile">
              <img
                src={selectedAgent.image}
                alt={selectedAgent.name}
                className="agent-profile-image"
                loading="lazy"
              />
              <div className="agent-info">
                <p className="agent-description">{selectedAgent.description}</p>
              </div>
            </div>

            <div className="abilities-section">
              <h2>Abilities</h2>
              <div className="abilities-grid">
                {selectedAgentAbilities.map((ability, index) => (
                  <div key={ability.name} className={`ability-card ${ability.isUltimate ? 'ultimate' : ''}`}>
                    <div className="ability-header">
                      <div className="ability-icon-container">
                        <img 
                          src={ability.icon} 
                          alt={ability.name}
                          className="ability-icon"
                          loading="lazy"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, index)}
                          className="image-upload-input"
                          id={`upload-${index}`}
                        />
                        <label htmlFor={`upload-${index}`} className="upload-label">
                          📁
                        </label>
                      </div>
                      <div className="ability-title">
                        <h3>{ability.name}</h3>
                        {ability.isUltimate && <span className="ultimate-tag">ULTIMATE</span>}
                        <div className="ability-key">{ability.key}</div>
                      </div>
                    </div>
                    <p className="ability-description">{ability.description}</p>
                    {ability.damage && (
                      <div className="ability-stats">
                        <span className="stat">Damage: {ability.damage}</span>
                      </div>
                    )}
                    {ability.cooldown && (
                      <div className="ability-stats">
                        <span className="stat">Cooldown: {ability.cooldown}</span>
                      </div>
                    )}
                    {ability.cost && (
                      <div className="ability-stats">
                        <span className="stat">Cost: {ability.cost}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const getAgentAbilities = (agentName) => {
  const abilities = {
    ///Controller
    "Brimstone": [
      {
        name: "Incendiary",
        key: "Q",
        description: "Launch an incendiary grenade that creates a fire zone on impact.",
        icon: "/images/abilities/incendiary.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "Stim Beacon",
        key: "C",
        description: "Deploy a beacon that grants nearby allies increased fire rate and reload speed.",
        icon: "/images/abilities/stimbeacon.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "12 seconds"
      },
      {
        name: "Sky Smoke",
        key: "E",
        description: "Call in smoke clouds to obscure vision in targeted areas.",
        icon: "/images/abilities/skysmoke.png",
        isUltimate: false,
        cost: "100 Credits",
        cooldown: "None"
      },
      {
        name: "Orbital Strike",
        key: "X",
        description: "Call in a devastating orbital strike at a targeted location.",
        icon: "/images/abilities/orbitalstrike.png",
        isUltimate: true,
        damage: "150 center / 75 outer",
        cost: "8 Ultimate Points"
      }
    ],
    "Viper": [
      {
        name: "Snake Bite",
        key: "C",
        description: "Launch a projectile that creates a toxic zone on impact.",
        icon: "/images/abilities/snakebite.png",
        isUltimate: false,
        cost: "300 Credits",
        cooldown: "None"
      },
      {
        name: "Toxic Screen",
        key: "E",
        description: "Deploy a wall of toxic gas that blocks vision and damages enemies.",
        icon: "/images/abilities/toxicscreen.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "None"
      },
      {
        name: "Poison Cloud",
        key: "Q",
        description: "Throw a gas canister that creates a toxic cloud on impact.",
        icon: "/images/abilities/poisoncloud.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "None"
      },
      {
        name: "Viper's Pit",
        key: "X",
        description: "Create a large toxic cloud that damages enemies and obscures vision.",
        icon: "/images/abilities/viperspit.png",
        isUltimate: true,
        damage: "10 per second",
        cost: "9 Ultimate Points"
      }
    ],
    "Omen": [
      {
        name: "Paranoia",
        key: "Q",
        description: "Send out a shadowy projectile that nearsights and slows enemies.",
        icon: "/images/abilities/paranoia.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "Shrouded Step",
        key: "C",
        description: "Teleport a short distance to a nearby location.",
        icon: "/images/abilities/shroudedstep.png",
        isUltimate: false,
        cost: "100 Credits",
        cooldown: "None"
      },
      {
        name: "Dark Cover",
        key: "E",
        description: "Deploy a shadowy smoke screen that blocks vision.",
        icon: "/images/abilities/darkcover.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "30 seconds"
      },
      {
        name: "From the Shadows",
        key: "X",
        description: "Teleport anywhere on the map, becoming a shadow during the process.",
        icon: "/images/abilities/fromtheshadows.png",
        isUltimate: true,
        damage: "50 body / 150 head",
        cost: "7 Ultimate Points"
      }
    ],
    "Astra": [
      {
        name: "Gravity Well",
        key: "C",
        description: "ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside Vulnerable.",
        icon: "/images/abilities/gravitywell.png",
        isUltimate: false,
        cooldown: "45  seconds"
      },
      {
        name: "Nova Pulse",
        key: "Q",
        description: "ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, Concussing all players in its area.",
        icon: "/images/abilities/novapulse.png",
        isUltimate: false,
        cooldown: "45 seconds"
      },
      {
        name: "Nebula",
        key: "E",
        description: "ACTIVATE a Star to transform it into a Nebula (smoke).USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay.Dissipate briefly forms a fake Nebula at the Star's location before returning.",
        icon: "/images/abilities/nebula.png",
        isUltimate: false,
        cooldown: "25 seconds"
      },
      {
        name: "Stars",
        key: "X",
        description: "Place Stars in Astral Form with FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well.",
        icon: "/images/abilities/stars.png",
        isUltimate: false,
        cost: "150 Credits"
      }
    ],
    "Harbor": [
      {
        name: "Cascade",
        key: "C",
        description: "EQUIP a wave of water. FIRE to send the wave rolling forward and through walls. RE-USE to stop the wave. Players hit are Slowed.",
        icon: "/images/abilities/cascade.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "None"
      },
      {
        name: "Cove",
        key: "Q",
        description: "EQUIP a sphere of shielding water. FIRE to throw. ALT FIRE to lob. Upon impacting the ground, spawn a destructible water shield that blocks bullets.",
        icon: "/images/abilities/cove.png",
        isUltimate: false,
        cost: "350 Credits",
        cooldown: "None"
      },
      {
        name: "High Tide",
        key: "E",
        description: "EQUIP a wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water's path. ALT FIRE while bending to stop the water early. Players hit are Slowed.",
        icon: "/images/abilities/hightide.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "40 seconds"
      },
      {
        name: "Reckoning",
        key: "X",
        description: "Create a massive deluge that floods the area, damaging and slowing enemies.",
        icon: "/images/abilities/reckoning.png",
        isUltimate: true,
        cost: "7 Ultimate Points"
      }
    ],
    "Clove": [
      {
        name: "Pick me up",
        key: "C",
        description: "ACTIVATE to absorb the life force of a fallen enemy that Clove damaged or killed, gaining haste and temporary health.",
        icon: "/images/abilities/pickmeup.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "None"
      },
      {
        name: "Meddle",
        key: "Q",
        description: "EQUIP a fragment of immortality essence. FIRE to throw the fragment, which upon landing on the floor, erupts after a short delay and temporarily Decays all targets caught inside.",
        icon: "/images/abilities/meddle.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "Ruse",
        key: "E",
        description: "EQUIP a view of the battlefield. FIRE to set the locations where Clove's clouds will settle. ALT FIRE to confirm, launching clouds that block vision in the chosen areas. Clove can use this ability after death.",
        icon: "/images/abilities/ruse.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "40 seconds"
      },
      {
        name: "Not Dead Yet",
        key: "X",
        description: "After dying, ACTIVATE to resurrect. Once resurrected, Clove must earn a kill or a damaging assist within a set time or they will die. REACTIVATE to cancel early.",
        icon: "/images/abilities/notdeadyet.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ],
    ///Duelist
    "Jett": [
      {
        name: "Updraft",
        key: "Q",
        description: "Instantly propel Jett high into the air.",
        icon: "/images/abilities/updraft.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "None"
      },
      {
        name: "Tailwind",
        key: "E",
        description: "Instantly propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.",
        icon: "/images/abilities/tailwind.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "2 Kills recharge"
      },
      {
        name: "Cloudburst",
        key: "C",
        description: "Instantly throw a projectile that expands into a brief vision-blocking cloud on impact with a surface.",
        icon: "/images/abilities/cloudburst.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "None"
      },
      {
        name: "Blade Storm",
        key: "X",
        description: "Equip a set of highly accurate throwing knives. Fire to throw a single knife and recharge knives on an enemy kill.",
        icon: "/images/abilities/bladestorm.png",
        isUltimate: true,
        damage: "50 body / 150 head",
        cost: "8 Ultimate Points"
      }
    ],
    "Phoenix": [
      {
        name: "Blaze",
        key: "C",
        description: "Equip a flame wall. Fire to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it.",
        icon: "/images/abilities/blaze.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "None"
      },
      {
        name: "Curveball",
        key: "E",
        description: "Equip a flare orb that takes a curving path and detonates shortly after throwing. Fire to curve the flare orb to the left, detonating and blinding any player who sees the orb.",
        icon: "/images/abilities/curveball.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "2 Kills recharge"
      },
      {
        name: "Hot Hands",
        key: "Q",
        description: "Equip a fireball. Fire to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
        icon: "/images/abilities/hothands.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "None",
        damage: "60 per second"
      },
      {
        name: "Run It Back",
        key: "X",
        description: "Instantly place a marker at Phoenix's current location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
        icon: "/images/abilities/runitback.png",
        isUltimate: true,
        cost: "6 Ultimate Points"
      }
    ],
    "Raze": [
      {
        name: "Boom Bot",
        key: "C",
        description: "Equip a Boom Bot. Fire will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
        icon: "/images/abilities/boombot.png",
        isUltimate: false,
        cost: "300 Credits",
        damage: "30-80"
      },
      {
        name: "Blast Pack",
        key: "Q",
        description: "Instantly throw a Blast Pack that will stick to surfaces. Re-use the ability after deployment to detonate, damaging and moving anything hit.",
        icon: "/images/abilities/blastpack.png",
        isUltimate: false,
        cost: "200 Credits",
        damage: "20-50"
      },
      {
        name: "Paint Shells",
        key: "E",
        description: "Equip a cluster grenade. Fire to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.",
        icon: "/images/abilities/paintshells.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "2 Kills recharge",
        damage: "1-55"
      },
      {
        name: "Showstopper",
        key: "X",
        description: "Equip a rocket launcher. Fire shoots a rocket that does massive area damage on contact with anything.",
        icon: "/images/abilities/showstopper.png",
        isUltimate: true,
        damage: "30-150",
        cost: "8 Ultimate Points"
      }
    ],
      "Reyna": [
      {
        name: "Dismiss",
        key: "E",
        description: "Instantly teleport a short distance in the direction you are moving.",
        icon: "/images/abilities/dismiss.png",
        isUltimate: false,
        cost: "200 Credits(shared with Devour)",
        cooldown: "12 seconds"
      },
      {
        name: "Devour",
        key: "Q",
        description: "Consume a soul orb to heal yourself. If you kill an enemy, you can use this ability to heal yourself.",
        icon: "/images/abilities/devour.png",
        isUltimate: false,
        cost: "200 Credits(shared with Dismiss)",
        cooldown: "None"
      },
      {
        name: "Leer",
        key: "C",
        description: "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
        icon: "/images/abilities/leer.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "Empress",
        key: "X",
        description: "Enter a state of heightened power, increasing fire rate and allowing you to use Devour and Dismiss more frequently.",
        icon: "/images/abilities/empress.png",
        isUltimate: true,
        cost: "6 Ultimate Points"
      }
    ],
      "Yoru": [
      {
        name: "Gatecrash",
        key: "E",
        description: "Equip a teleportation device. Fire to throw the device, which will create a teleportation portal that you can use to teleport to its location.",
        icon: "/images/abilities/gatecrash.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "2 Kills recharge"
      },
      {
        name: "Fakeout",
        key: "C",
        description: "Create a fake version of yourself that moves forward and makes noise, confusing enemies.",
        icon: "/images/abilities/fakeout.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "None"
      },
      {
        name: "Blindside",
        key: "Q",
        description: "Throw a flash grenade that blinds enemies in its area of effect.",
        icon: "/images/abilities/blindside.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "Dimensional Drift",
        key: "X",
        description: "Enter a state of invisibility and increased movement speed, allowing you to scout and reposition without being seen.",
        icon: "/images/abilities/dimensionaldrift.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ],
      "Neon": [
      {
        name: "High Gear",
        key: "E",
        description: "Activate a burst of speed, allowing you to sprint and slide quickly.",
        icon: "/images/abilities/highgear.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "2 Kills recharge"
      },
      {
        name: "Relay Bolt",
        key: "Q",
        description: "Throw a bolt that bounces off walls and stuns enemies in its path.",
        icon: "/images/abilities/relaybolt.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "None"
      },
      {
        name: "Fast Lane",
        key: "C",
        description: "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision.",
        icon: "/images/abilities/fastlane.png",
        isUltimate: false,
        cost: "300 Credits",
        cooldown: "None"
      },
      {
        name: "Overdrive",
        key: "X",
        description: "Unleash Neon's full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy.",
        icon: "/images/abilities/overdrive.png",
        isUltimate: true,
        damage: "10-18 body / 30-54 head",
        cost: "8 Ultimate Points"
      }
    ],  
      "Iso": [
      {
        name: "Contingency",
        key: "C",
        description: "EQUIP to assemble prismatic energy. FIRE to push an indestructible wall of energy forward that blocks bullets. ALT FIRE to push out a slower version of the wall.",
        icon: "/images/abilities/contingency.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "None"
      },
      {
        name: "Undercut",
        key: "Q",
        description: "EQUIP a molecular bolt. Fire to throw it forward, briefly applying Vulnerable & Suppress to all players it touches. The bolt can pass through solid objects, including walls.",
        icon: "/images/abilities/undercut.png",
        isUltimate: false,
        cost: "300 Credits",
        cooldown: "None"
      },
      {
        name: "Double Tap",
        key: "E",
        description: "INSTANTLY start channeling your focus. Once focused: gain a shield which absorbs one instance of damage from any source, reload more quickly, and enter a flow state during which downed enemies you kill or damage spawn an energy orb. Shooting this orb refreshes your flow state and your existing shield, or grants another",
        icon: "/images/abilities/doubletap.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "None"
      },
      {
        name: "Kill Contract",
        key: "X",
        description: "EQUIP an interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena. You and your opponent duel to the death.",
        icon: "/images/abilities/killcontract.png",
        isUltimate: true,
        cost: "7 Ultimate Points"
      }
    ],
      "Waylay": [
      {
        name: "Saturate",
        key: "C",
        description: "INSTANTLY throw a cluster of light that explodes upon contact with the ground, Hindering nearby players with a powerful movement and weapon slow.",
        icon: "/images/abilities/saturate.png",
        isUltimate: false,
        cost: "300 Credits",
        cooldown: "12 seconds"
      },
      {
        name: "Lightspeed",
        key: "Q",
        description: "EQUIP to prepare for a burst of speed. FIRE to dash forward twice. ALT FIRE to dash once. Only your first dash can send you upward.",
        icon: "/images/abilities/lightspeed.png",
        isUltimate: false,
        cost: "300 Credits",
        cooldown: "None"
      },
      {
        name: "Refract",
        key: "E",
        description: "INSTANTLY create a beacon of light on the floor. REACTIVATE to speed back to your beacon as a mote of pure light. You are invulnerable as you travel. Refract resets a charge every two kills.",
        icon: "/images/abilities/refract.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "2 Kills recharge"
      },
      {
        name: "Convergent Paths",
        key: "X",
        description: "EQUIP to focus your prismatic power. FIRE to create an afterimage of yourself that projects a beam of light. After a brief delay, you gain a powerful speed boost and the beam expands, Hindering other players in the area.",
        icon: "/images/abilities/convergentpaths.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ],
    ///Initiator
    "Sova": [
      {
        name: "Owl Drone",
        key: "C",
        description: "Deploy an owl drone that can fly around the map, revealing enemies in its line of sight.",
        icon: "/images/abilities/owldrone.png",
        isUltimate: false,
        cost: "400 Credits",
        cooldown: "None"
      },
      {
        name: "Shock Bolt",
        key: "Q",
        description: "Fire a shock bolt that bounces off walls and explodes, dealing damage to enemies in its area of effect.",
        icon: "/images/abilities/shockbolt.png",
        isUltimate: false,
        cost: "150 Credits",
        damage: "1-75",
        cooldown: "None"
      },
      {
        name: "Recon Bolt",
        key: "E",
        description: "Fire a recon bolt that reveals enemies in its area of effect.",
        icon: "/images/abilities/reconbolt.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "40 seconds"
      },
      {
        name: "Hunter's Fury",
        key: "X",
        description: "Fire three powerful energy blasts that deal damage to enemies in their path.",
        icon: "/images/abilities/hunterfury.png",
        isUltimate: true,
        damage: "80",
        cost: "8 Ultimate Points"
      }
    ],
    "Breach": [
      {
        name: "Aftershock",
        key: "C",
        description: "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
        icon: "/images/abilities/aftershock.png",
        isUltimate: false,
        cost: "200 Credits",
        damage: "80 per tick",
        cooldown: "None"
      },
      {
        name: "Flashpoint",
        key: "Q",
        description: "EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to Blind all players looking at it.",
        icon: "/images/abilities/flashpoint.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "Fault Line",
        key: "E",
        description: "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, Concussing all players in its zone and in a line up to the zone.",
        icon: "/images/abilities/faultline.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "40 seconds"
      },
      {
        name: "Rolling Thunder",
        key: "X",
        description: "EQUIP a Seismic Charge. FIRE to send a cascading quake through all terrain in a large zone. The quake Concusses and knocks up anyone caught in it.",
        icon: "/images/abilities/rollingthunder.png",
        isUltimate: true,
        cost: "9 Ultimate Points"
      }
    ],
    "Skye": [
      {
        name: "Regrowth",
        key: "C",
        description: "EQUIP a healing trinket. HOLD FIRE to channel, Healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
        icon: "/images/abilities/regrowth.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "None"
      },
      {
        name: "Trailblazer",
        key: "Q",
        description: "Deploy a Tasmanian tiger that can be controlled to chase down enemies.",
        icon: "/images/abilities/trailblazer.png",
        isUltimate: false,
        cost: "300 Credits",
        cooldown: "None"
      },
      {
        name: "Guiding Light",
        key: "E",
        description: "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash. The flash reaches max potency after a short duration during the hawk's flight.",
        icon: "/images/abilities/guidinglight.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "35 seconds"
      },
      {
        name: "Seekers",
        key: "X",
        description: "Send out three seekers that track down and nearsight enemies.",
        icon: "/images/abilities/seekers.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ],
    "KAY/O": [
      {
        name: "FRAG/ment",
        key: "C",
        description: "Throw a fragment grenade that sticks to surfaces and explodes multiple times, damaging enemies.",
        icon: "/images/abilities/fragment.png",
        isUltimate: false,
        cost: "200 Credits",
        damage: "25-60 per tick",
        cooldown: "None"
      },
      {
        name: "FLASH/drive",
        key: "Q",
        description: "Throw a flash grenade that blinds enemies in its area of effect.",
        icon: "/images/abilities/flashdrive.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "ZERO/point",
        key: "E",
        description: "Throw a fragment grenade that sticks to surfaces and explodes multiple times, damaging enemies.",
        icon: "/images/abilities/zeropoint.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "40 seconds"
      },
      {
        name: "NULL/cmd",
        key: "X",
        description: "Suppress enemy abilities and reveal their locations for a short duration.",
        icon: "/images/abilities/nullcmd.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ],
    "Fade": [
      {
        name: "Prowler",
        key: "C",
        description: "Deploy a prowler that can be controlled to chase down enemies.",
        icon: "/images/abilities/prowler.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "Haunt",
        key: "E",
        description: "Deploy a haunt that reveals enemies in its area of effect.",
        icon: "/images/abilities/haunt.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "None"
      },
      {
        name: "Seize",
        key: "Q",
        description: "Throw a projectile that roots and damages enemies in its area of effect.",
        icon: "/images/abilities/seize.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "35 seconds"
      },
      {
        name: "Nightfall",
        key: "X",
        description: "Send out a wave that nearsights and damages enemies in its path.",
        icon: "/images/abilities/nightfall.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ],
    "Gekko": [
      {
        name: "Wingman",
        key: "Q",
        description: "Deploy a wingman that can be controlled to chase down enemies and defuse the spike.",
        icon: "/images/abilities/wingman.png",
        isUltimate: false,
        cost: "300 Credits",
        cooldown: "None"
      },
      {
        name: "Mosh Pit",
        key: "C",
        description: "Throw a mosh pit that creates a damaging area of effect on impact.",
        icon: "/images/abilities/moshpit.png",
        isUltimate: false,
        cost: "250 Credits",
        cooldown: "None"
      },
      {
        name: "Dizzy",
        key: "E",
        description: "Deploy a dizzy that reveals enemies in its area of effect.",
        icon: "/images/abilities/dizzy.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "2.5 seconds"
      },
      {
        name: "Thrash",
        key: "X",
        description: "Send out a thrash that nearsights and damages enemies in its path.",
        icon: "/images/abilities/thrash.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ],
    "Tejo": [
      {
        name: "Stealth Drone",
        key: "C",
        description: "EQUIP a stealth drone. FIRE to throw the drone forward, assuming direct control of its movement. FIRE again to trigger a pulse that Suppresses and Reveals enemies hit.",
        icon: "/images/abilities/stealthdrone.png",
        isUltimate: false,
        cost: "400 Credits",
        cooldown: "None"
      },
      {
        name: "Special Delivery",
        key: "Q",
        description: "EQUIP a sticky grenade. FIRE to launch. The grenade sticks to the first surface it hits and explodes, Concussing any targets caught in the blast. ALT FIRE to launch the grenade with a single bounce instead.",
        icon: "/images/abilities/specialdelivery.png",
        isUltimate: false,
        cost: "200 Credits",
        cooldown: "None"
      },
      {
        name: "Guided Salvo",
        key: "E",
        description: "EQUIP an AR targeting system. FIRE to select up to two target locations on the map. ALT FIRE to launch missiles that autonomously navigate to target locations, detonating on arrival.",
        icon: "/images/abilities/guidedsalvo.png",
        isUltimate: false,
        cost: "150 Credits",
        cooldown: "None"
      },
      {
        name: "Armageddon",
        key: "X",
        description: "EQUIP a tactical strike targeting map. FIRE to select the origin point of the strike. FIRE again to set the end point and launch the attack, unleashing a wave of explosions along the strike path. ALT FIRE during map targeting to cancel the origin point.",
        icon: "/images/abilities/armageddon.png",
        isUltimate: true,
        cost: "9 Ultimate Points"
      }
    ],
    ///Sentinel
    "Sage": [
      {
        name: "Barrier Orb",
        key: "C",
        description: "Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter.",
        icon: "/images/abilities/barrierorb.png",
        isUltimate: false,
        cost: "400 Credits"
      },
      {
        name: "Slow Orb",
        key: "Q",
        description: "Equip a slowing orb. Fire to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
        icon: "/images/abilities/sloworb.png",
        isUltimate: false,
        cost: "200 Credits"
      },
      {
        name: "Healing Orb",
        key: "E",
        description: "Equip a healing orb. Fire with your crosshairs over a damaged ally to activate a heal-over-time on them. Alternate fire while Sage is damaged to activate a self heal-over-time.",
        icon: "/images/abilities/healingorb.png",
        isUltimate: false,
        cost: "Free",
        cooldown: "45 seconds"
      },
      {
        name: "Resurrection",
        key: "X",
        description: "Equip a resurrection ability. Fire with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back with full health.",
        icon: "/images/abilities/resurrection.png",
        isUltimate: true,
        cost: "7 Ultimate Points"
      }
    ],
    "Cypher": [
      {
        name: "Trapwire",
        key: "C",
        description: "Equip a trapwire. Fire to place a tripwire that can be attached between two walls. If an enemy crosses the tripwire, they will be revealed and briefly stunned.",
        icon: "/images/abilities/trapwire.png",
        isUltimate: false,
        cost: "200 Credits"
      },
      {
        name: "Cyber Cage",
        key: "Q",
        description: "Equip a cyber cage. Fire to throw a cage that can be activated to create a zone that slows enemies who pass through it.",
        icon: "/images/abilities/cybercage.png",
        isUltimate: false,
        cost: "100 Credits"
      },
      {
        name: "Spycam",
        key: "E",
        description: "Equip a spycam. Fire to place a camera that can be activated to reveal enemies in its line of sight.",
        icon: "/images/abilities/spycam.png",
        isUltimate: false,
        cost: "Free Credits"
      },
      {
        name: "Neural Theft",
        key: "X",
        description: "Use a device to reveal the location of all enemies on the map.",
        icon: "/images/abilities/neuraltheft.png",
        isUltimate: true,
        cost: "7 Ultimate Points"
      }
    ],
    "Killjoy": [
      {
        name: "Nanoswarm",
        key: "C",
        description: "Equip a nanoswarm grenade. Fire to throw the grenade, which will create a swarm of nanobots that damage enemies in its area of effect.",
        icon: "/images/abilities/nanoswarm.png",
        isUltimate: false,
        cost: "200 Credits"
      },
      {
        name: "Alarmbot",
        key: "Q",
        description: "Deploy an alarmbot that hunts down enemies and explodes, applying a debuff that makes them take more damage.",
        icon: "/images/abilities/alarmbot.png",
        isUltimate: false,
        cost: "200 Credits"
      },
      {
        name: "Turret",
        key: "E",
        description: "Deploy a turret that automatically fires at enemies in its line of sight.",
        icon: "/images/abilities/turret.png",
        isUltimate: false,
        cost: "Free"
      },
      {
        name: "Lockdown",
        key: "X",
        description: "Deploy a device that, after a brief delay, detains all enemies in its area of effect.",
        icon: "/images/abilities/lockdown.png",
        isUltimate: true,
        cost: "9 Ultimate Points"
      }
    ],
    "Chamber": [
      {
        name: "Trademark",
        key: "C",
        description: "Deploy a trap that slows enemies who pass through it.",
        icon: "/images/abilities/trademark.png",
        isUltimate: false,
        cost: "200 Credits"
      },
      {
        name: "Headhunter",
        key: "Q",
        description: "Equip a pistol that deals increased damage to headshots.",
        icon: "/images/abilities/headhunter.png",
        isUltimate: false,
        cost: "100 Credits"
      },
      {
        name: "Rendezvous",
        key: "E",
        description: "Place two teleport anchors that allow you to teleport between them.",
        icon: "/images/abilities/rendezvous.png",
        isUltimate: false,
        cost: "400 Credits"
      },
      {
        name: "Tour de Force",
        key: "X",
        description: "Equip a powerful sniper rifle that kills enemies with a single shot.",
        icon: "/images/abilities/tourdeforce.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ],
    "Deadlock": [
      {
        name: "Barrier Mesh",
        key: "C",
        description: "EQUIP a Barrier Mesh disc. FIRE to throw forward. Upon landing, the disc generates barriers from the origin point that block character movement.",
        icon: "/images/abilities/barriermesh.png",
        isUltimate: false,
        cost: "400 Credits"
      },
      {
        name: "Sonic Sensor",
        key: "Q",
        description: "EQUIP a Sonic Sensor. FIRE to deploy. The sensor monitors an area for enemies making sound. It concusses that area if footsteps, weapons fire, or significant noise are detected. This ability can be picked up to be REDEPLOYED.",
        icon: "/images/abilities/sonicsensor.png",
        isUltimate: false,
        cost: "200 Credits"
      },
      {
        name: "GravNet",
        key: "E",
        description: "EQUIP a GravNet grenade. FIRE to throw. ALT FIRE to lob. The GravNet detonates upon landing, forcing any characters caught within to crouch and move slowly.",
        icon: "/images/abilities/gravnet.png",
        isUltimate: false,
        cost: "Free"
      },
      {
        name: "Annihilation",
        key: "X",
        description: "EQUIP a Nanowire Accelerator. FIRE to unleash a pulse of nanowires that captures the first enemy contacted. The cocooned enemy is pulled along a nanowire path and will die unless they are freed. The nanowire cocoon is destructible",
        icon: "/images/abilities/annihilation.png",
        isUltimate: true,
        cost: "7 Ultimate Points"
      }
    ],
    "Vyse": [
      {
        name: "Razorvine",
        key: "C",
        description: "EQUIP a nest of liquid metal. FIRE to launch. Upon landing, the nest becomes invisible. When ACTIVATED, it sprawls out into a large razorvine nest which slows and damages all players who move through it.",
        icon: "/images/abilities/razorvine.png",
        isUltimate: false,
        cost: "150 Credits"
      },
      {
        name: "Shear",
        key: "Q",
        description: "EQUIP filaments of liquid metal. FIRE to place a hidden wall trap. When an enemy crosses, an indestructible wall bursts from the ground behind them. The wall lasts for a brief time before dissipating.",
        icon: "/images/abilities/shear.png",
        isUltimate: false,
        cost: "200 Credits"
      },
      {
        name: "Arc Rose",
        key: "E",
        description: "EQUIP an Arc Rose. Target a surface and FIRE to place a stealthed Arc Rose, or ALT FIRE to place the Arc Rose through it. REUSE to blind all players looking at it. This ability can be picked up to be REDEPLOYED.",
        icon: "/images/abilities/arcrose.png",
        isUltimate: false,
        cost: "Free Credits"
      },
      {
        name: "Steel Garden",
        key: "X",
        description: "EQUIP a bramble of liquid metal. FIRE to send the metal erupting from you as a torrent of metal thorns, JAMMING enemy primary weapons after a brief windup.",
        icon: "/images/abilities/steelgarden.png",
        isUltimate: true,
        cost: "8 Ultimate Points"
      }
    ]
    
  };

  return abilities[agentName] || [];
};

export default Agents;