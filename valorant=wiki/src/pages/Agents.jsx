import React, { useState } from "react";
import "./Agents.css";

function Agents() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedAgentAbilities, setSelectedAgentAbilities] = useState([]);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
    const abilities = getAgentAbilities(agent.name);
    setSelectedAgentAbilities(abilities);
  };

  const roles = [
    {
      name: "Controller",
      icon: "https://cdn3.emoji.gg/emojis/8733-controller-valorant.png",
      description:
        "Controllers are experts in slicing up dangerous territory to set the pace of a fight.",
      agents: [
        {
          name: "Brimstone",
          description:
            "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594437698981929/latest.png?ex=6875b7b5&is=68746635&hm=5b3a57f555369fa305297f4abd60266b2eccb0d613163a6bb172a4936800daf1&",
        },
        {
          name: "Viper",
          description:
            "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey,",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594484951879701/latest.png?ex=6875b7c0&is=68746640&hm=7dfa9772813a9f745ae0c9d65100fcaa05dab4b4b596e1a44c665a67b9b78d51&",
        },
        {
          name: "Omen",
          description:
            "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594363849998437/latest.png?ex=6875b7a4&is=68746624&hm=7c0a188e333e5b1aeff1df5ff2d3514196f64aab9ecaabd78c10e7cb043cc80c&",
        },
        {
          name: "Astra",
          description:
            "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight,",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594540434391141/latest.png?ex=6875b7ce&is=6874664e&hm=931d7788e8d9b268782ef767fd7877b5a35104a24fbdb8a784db5844ff674834&",
        },
        {
          name: "Harbor",
          description:
            "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594628925816954/latest.png?ex=6875b7e3&is=68746663&hm=dc388eddf5f3100a45eeed8434ff2172c13e4de0e492edbd3b0872a6761114f7&",
        },
        {
          name: "Clove",
          description:
            "Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594720416174243/latest.png?ex=6875b7f9&is=68746679&hm=272f48cbc4ddc179731e51f2ca86c6f16a42ff65b835333d5fcc6c50970c6a0a&",
        },
      ],
    },
    {
      name: "Duelist",
      icon: "https://cdn3.emoji.gg/emojis/4987-duelist-valorant.png",
      description:
        "Duelists are self-sufficient fraggers who their team expects to take aggressive engagements and win.",
      agents: [
        {
          name: "Phoenix",
          description:
            "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604739622502460/latest.png?ex=6875c14d&is=68746fcd&hm=7f07960fcf70cb7e1270ad153c1fa81b7c16d4cb84bca2e52c43e98a023c8313&",
        },
        {
          name: "Jett",
          description:
            "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604813043925185/latest.png?ex=6875c15f&is=68746fdf&hm=fe826626b602b34b2973938e5e5a413bc87289a5e8a87403a40ab0fa18dd1c93&",
        },
        {
          name: "Raze",
          description:
            "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604931721625720/latest.png?ex=6875c17b&is=68746ffb&hm=7c292dffb2b32382c17d999923445b3ff2a9de62b88cbb56e5a7133662d59da9&",
        },
        {
          name: "Reyna",
          description:
            "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604881796829244/latest.png?ex=6875c16f&is=68746fef&hm=405bbca16b719f6c68f550200957cffd7249a2557b08486e3d8cd7500e459625&",
        },
        {
          name: "Yoru",
          description:
            "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604979901595658/latest.png?ex=6875c187&is=68747007&hm=66621bf84d8bb6a7ef0eda93f7f235fe79ba1b75f808822da75bec58b6d61496&",
        },
        {
          name: "Neon",
          description:
            "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393605028761309195/latest.png?ex=6875c192&is=68747012&hm=93c89b1611a9ae808a916659a8c0bbc351b9589b19d2f233326dc2e602fd26bc&",
        },
        {
          name: "Iso",
          description:
            "Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393605081215271024/latest.png?ex=6875c19f&is=6874701f&hm=2ed642163a5b191e9548a64d2533475c45f08e1938959806efd4854bf790310d&",
        },
        {
          name: "Waylay",
          description:
            "Thailand's prismatic radiant Waylay transforms into light itself as she darts across the battlefield,",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393605123003121794/latest.png?ex=6875c1a9&is=68747029&hm=a11ac52d3853ec6dae50cb100a15da1ccf4947bd7ff5cecd55c93b06c546705b&",
        },
      ],
    },
    {
      name: "Initiator",
      icon: "https://cdn.discordapp.com/attachments/1359793709025067060/1393588606232166470/latest.png?ex=6875b247&is=687460c7&hm=0eab326cbcf38fa2db0d16dd371af611fb3c114d48a17cb15babfccef5a3e34f&",
      description:
        "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
      agents: [
        {
          name: "Sova",
          description:
            "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596379787694150/latest.png?ex=6875b984&is=68746804&hm=cf4f0ccae1de9c864161fe8d2bbd034620dfe132bcd673551ec5a45cd665b8c8&",
        },
        {
          name: "Breach",
          description:
            "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596439011131402/latest.png?ex=6875b992&is=68746812&hm=78efc04c28fb2e2aaa857b91141c2428eb4cc5ee1d662f899ceba5e8af085f77&",
        },
        {
          name: "Skye",
          description:
            "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596499840991292/latest.png?ex=6875b9a1&is=68746821&hm=a84045a9eea8cd5bda694f9b671763aa984d0eeedd7024d0a705783869d12e01&",
        },
        {
          name: "KAY/O",
          description:
            "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596556233674772/latest.png?ex=6875b9ae&is=6874682e&hm=68ca5673f533446d097958663252e937aa533999f2607d7cb199972763dd8c36&",
        },
        {
          name: "Fade",
          description:
            "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596599401447424/latest.png?ex=6875b9b9&is=68746839&hm=7b9db604e7d132f94c973bdb94e6af8dc3e96b99ab4033cd4498ef7d106828f4&",
        },
        {
          name: "Gekko",
          description:
            "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596642699120721/latest.png?ex=6875b9c3&is=68746843&hm=9a8edfa35158d36cddd8eb650816f0b4ba98c69aa5b430d4c086b66a016fae4b&",
        },
        {
          name: "Tejo",
          description:
            "A veteran intelligence consultant from Colombia, Tejo's ballistic guidance system pressures the enemy to relinquish their ground - or their lives.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596695488630954/latest.png?ex=6875b9cf&is=6874684f&hm=c8d9f9fa71cdbcccb389236926162ffcc66abbe15726c4983c6af2726117bd1d&",
        },
      ],
    },
    {
      name: "Sentinel",
      icon: "https://cdn.discordapp.com/attachments/1359793709025067060/1393588331736207430/latest.png?ex=6875b205&is=68746085&hm=602f9721eac102aa221a13fccdc49606d70df974599ad36abb3b215df943b94d&",
      description:
        "Sentinels are defensive experts who can lock down areas and watch flanks, both on attack and defender rounds.",
      agents: [
        {
          name: "Cypher",
          description:
            "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610129013739531/latest.png?ex=6875c652&is=687474d2&hm=9c2bcd58600d9bfc6416961415d82cc1d94d6bf98e6088f9de2e72d1bcd860de&",
        },
        {
          name: "Sage",
          description:
            "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610432014716959/latest.png?ex=6875c69b&is=6874751b&hm=7d7ee7ae0df920892f508a599198af2ab11fcbbe51f7bcc91993f5a87e5d62e5&",
        },
        {
          name: "Killjoy",
          description:
            "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610081366446110/latest.png?ex=6875c647&is=687474c7&hm=5f29b35d08b7fb48e0b2c2f039bb36b8062ca2b7452f4a9b62a748f40b642afe&",
        },
        {
          name: "Chamber",
          description:
            "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610196684902450/latest.png?ex=6875c662&is=687474e2&hm=f92b3c38bff087e51a187e93bf8588942a2aba3edb25669b9fbb35cfc24b2286&",
        },
        {
          name: "Deadlock",
          description:
            "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610251558977546/latest.png?ex=6875c66f&is=687474ef&hm=01d43124ea5f5cf9f950125cbdf4dbaa258295da54da6e0229e90ab5365264a7&",
        },
        {
          name: "Vyse",
          description:
            "Metallic mastermind Vyse unleashes liquid metal to isolate, trap, and disarm her enemies. Through cunning and manipulation, she forces all who oppose her to fear the battlefield itself.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610304230920272/latest.png?ex=6875c67c&is=687474fc&hm=434ba296020232932ca3164b03d1c0d88329ac68cbeb7e97749862520ecc1d7e&",
        },
      ],
    },
  ];

  const getAgentAbilities = (agentName) => {
    const abilities = {
      Brimstone: [
        {
          name: "Stim Beacon",
          description: "Deploy a stim beacon that gives players RapidFire.",
          icon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/grenade/displayicon.png",
        },
        {
          name: "Incendiary",
          description: "Launch an incendiary grenade that damages enemies.",
          icon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability1/displayicon.png",
        },
        {
          name: "Sky Smoke",
          description: "Deploy a tactical smoke screen.",
          icon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability2/displayicon.png",
        },
        {
          name: "Orbital Strike",
          description: "Call in an orbital strike.",
          icon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ultimate/displayicon.png",
        },
      ],
      Viper: [
        {
          name: "Poison Cloud",
          description: "Deploy a gas emitter.",
          icon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability2/displayicon.png",
        },
        {
          name: "Toxic Screen",
          description: "Deploy a line of gas emitters.",
          icon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability1/displayicon.png",
        },
        {
          name: "Snake Bite",
          description: "Fire a projectile that creates a pool of acid.",
          icon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/grenade/displayicon.png",
        },
        {
          name: "Viper's Pit",
          description: "Create a large cloud of toxic gas.",
          icon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ultimate/displayicon.png",
        },
      ],
      Omen: [
        {
          name: "Shrouded Step",
          description: "Teleport a short distance.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393628321014874173/115.png?ex=6875d744&is=687485c4&hm=c73457cfef272688f6044fa2924fb99b327074f7adc8c0f5f7381b05fead3b1f&",
        },
        {
          name: "Paranoia",
          description: "Send out a shadowy projectile that nearsights enemies.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393628844530991214/115.png?ex=6875d7c0&is=68748640&hm=e1ee4c77448a5e90d8d230f171750b16a25ade8945fdc5ef1a4e6eebf66c38b7&",
        },
        {
          name: "Dark Cover",
          description: "Place a stationary smoke screen at a location.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393629000970141796/115.png?ex=6875d7e6&is=68748666&hm=80705fb5a694c02724df2e7ad04932a0059131bf97af3ff889a76517e406801a&",
        },
        {
          name: "From the Shadows",
          description:
            "Teleport anywhere on the map. If killed, return to your previous location.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393629915613630564/115.png?ex=6875d8c0&is=68748740&hm=03059dafc2f5433bfda8ebf25f854a6640865ec902a1e81e86a4657bb9d84b41&",
        },
      ],
      Astra: [
        {
          name: "Nova Pulse",
          description:
            "Detonate a star, concussing and damaging players in range.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393631705507692564/115.png?ex=6875da6b&is=687488eb&hm=f89fff3ee83214071188d8630d0ba373bb258a2a5daed1bfd0df96095d963074&",
        },
        {
          name: "Gravity Well",
          description:
            "Create a gravity well that pulls players in and explodes.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393631309829509241/115.png?ex=6875da0c&is=6874888c&hm=c3bf52dc99457080f7b6bd50e16b3ec85e872fcd78f78207eb26162e6b77dc58&",
        },
        {
          name: "Nebula",
          description: "Create a smoke cloud that obscures vision.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393632018906087534/115.png?ex=6875dab5&is=68748935&hm=b3dad746b6df4a147aeb4d5217ea49660d18c1d85956ed02935812d2bf3f0ad9&",
        },
        {
          name: "Astral Form",
          description:
            "Enter a different plane of existence to place stars. Re-enter your body to detonate them.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393630713961513010/115.png?ex=6875d97e&is=687487fe&hm=586b6db248ab0cd4fcdbfcf9414cbb824db3b8a1e73d3774ebf5c016b20082f1&",
        },
        {
          name: "Cosmic Divide",
          description:
            "When Cosmic Divide is charged, use ALT FIRE in Astral Form to begin aiming it, then FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and sound.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393632465201004624/115.png?ex=6875db20&is=687489a0&hm=eeac64b5ce70e20ad75c512286e8cb757c05aa295bdea27c3db3a5852e84de10&",
        },
      ],
      Harbor: [
        {
          name: "Cove",
          description: "Deploy a shield that blocks bullets and explosives.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393633750364983426/115.png?ex=6875dc52&is=68748ad2&hm=5ee951dce4b99f6a59e47342d680adb53dc918bd1a183dc326dd0d7cc4eca0fd&",
        },
        {
          name: "Cascade",
          description:
            "wave of water. FIRE to send the wave rolling forward and through walls. RE-USE to stop the wave. Players hit are Slowed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393632952642044025/115.png?ex=6875db94&is=68748a14&hm=aaa03f931af76434664165569ed06444aaee92c1bd6d84282f0a5902a2cc779b&",
        },
        {
          name: "High Tide",
          description:
            " wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water's path. ALT FIRE while bending to stop the water early. Players hit are Slowed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393633987842543656/115.png?ex=6875dc8b&is=68748b0b&hm=6fcc415ae8636e1eed2db5ae6688469ffc748e4fee2ab4276913b78d69563853&",
        },
        {
          name: "Reckoning",
          description:
            "Summon a massive wave that damages and concusses players.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393634256076542043/115.png?ex=6875dccb&is=68748b4b&hm=832e5448e2b09a1f9a8ebcd34226e4c636349ea919836b72e7e94dd1184561a8&",
        },
      ],
      Clove: [
        {
          name: "Pick-me-up",
          description:
            "ACTIVATE to absorb the life force of a fallen enemy that Clove damaged or killed, gaining haste and temporary health.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393634643185631342/115.png?ex=6875dd27&is=68748ba7&hm=f9a971b31dd73e3f0e3d106dad6424f29f277bc338d6c15ba1170f8d8f673d23&",
        },
        {
          name: "Meddle",
          description:
            "fragment of immortality essence. FIRE to throw the fragment, which upon landing on the floor, erupts after a short delay and temporarily Decays all targets caught inside.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393635022707101726/115.png?ex=6875dd81&is=68748c01&hm=55f5829f50b81a15d3428c11bf9f65ab228291d3bd20ad86dde6deb4b2fd4d72&",
        },
        {
          name: "Ruse",
          description:
            "view of the battlefield. FIRE to set the locations where Clove's clouds will settle. ALT FIRE to confirm, launching clouds that block vision in the chosen areas. Clove can use this ability after death.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393635343890256024/115.png?ex=6875ddce&is=68748c4e&hm=b3ed85b821ca3f41c2f3260cfdff2136cf9ed5571613d57d0c6891253dd67478&",
        },
        {
          name: "Not Dead Yet",
          description:
            "After dying, ACTIVATE to resurrect. Once resurrected, Clove must earn a kill or a damaging assist within a set time or they will die. REACTIVATE to cancel early.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393635559611830332/115.png?ex=6875de01&is=68748c81&hm=f883ce9897b238caac05703de5d194dbf51c475d814e249b89e3b9196bfea8b5&",
        },
      ],
      Phoenix: [
        {
          name: "Blaze",
          description:
            "flame wall. FIRE to create a line of flame that moves forward, passing through the world and creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393636459885494313/115.png?ex=6873e498&is=68729318&hm=9b7c2ad6f040615c5cb8ad2de545d575edf001a6a242c468ee58349a8accbc7b&",
        },
        {
          name: "Hot Hands",
          description:
            "fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies. ALT FIRE to lob.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393636802308477070/115.png?ex=6873e4ea&is=6872936a&hm=21e95f821929c7b08d7cfd502038420856eb5a9ab9a3b47fe7b38d84b28ead4a&",
        },
        {
          name: "Curveball",
          description:
            " flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and Blinding any player who sees the orb. ALT FIRE to curve the flare orb to the right. Curveball resets a charge every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393641843555569744/115.png?ex=6873e99c&is=6872981c&hm=f6263d813d8b8634f94137383ee401c69643d8a2f4df3168a4aaa3abc87a334d&",
        },
        {
          name: "Run it Back",
          description:
            "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health and the amount of armor he had when the ability was cast.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393637754713411614/115.png?ex=6873e5cd&is=6872944d&hm=7da5dc145ac0686eb2a292cd7145c87f68e2de014f5ce693888644232507394d&",
        },
      ],
      Jett: [
        {
          name: "Drift(passive)",
          description:
            "Holding the jump button while falling allows you to glide through the air.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393638218410233987/latest.png?ex=6875e07b&is=68748efb&hm=62732f3a7f335a5569e85f547a899563d56530f0b582c75776f2aaef0130564f&",
        },
        {
          name: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393638436996517898/115.png?ex=6875e0af&is=68748f2f&hm=082859ccdd5dbe34139811e80c62af1469b874d318ef1e648d789babbb40cb3f&",
        },
        {
          name: "Updraft",
          description: "INSTANTLY propel Jett high into the air. ",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393638650746769529/115.png?ex=6875e0e2&is=68748f62&hm=ab759c0380c33738cc5f3c3d9a9185662f361142bb94b8a488dfbf8b2f601be2&",
        },
        {
          name: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393638854740934788/115.png?ex=6875e113&is=68748f93&hm=6d3ad71f6b4d5bef1059590b48c90db3465562b04f564cafb138c34c6b7bb134&",
        },
        {
          name: "Blade Storm",
          description:
            "set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393639097242746940/115.png?ex=6875e14d&is=68748fcd&hm=f41e4b2f0bb80750d7bd4771af9388e71ef2a6ad79d84818175740ed5c3632a3&",
        },
      ],
      Raze: [
        {
          name: "Boom Bot",
          description:
            " Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393646949583945850/115.png?ex=6875e89d&is=6874971d&hm=ab8cbbfd20cafb63f66999684748b58288c41b2265fdd3f78248b6ec95dc1503&",
        },
        {
          name: "Blast Pack",
          description:
            "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393646969922257048/115.png?ex=6875e8a2&is=68749722&hm=25f6c923ab0e9232c2fc65810b7ac9b164e3b5e740ce02b70fecb60043af05e6&",
        },
        {
          name: "Paint Shells",
          description:
            "cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393646991111880827/115.png?ex=6875e8a7&is=68749727&hm=9f7a68c4c914622c44b15a93a93bc1f2d4e7a6f2f4b9be90a76eab2a4d6aa956&",
        },
        {
          name: "Showstopper",
          description:
            "rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393647011965698048/115.png?ex=6875e8ac&is=6874972c&hm=47e033e9f206431d650740b91030db3c90c8e06d2d6c034e220ae01549bd1463&",
        },
      ],
      Reyna: [
        {
          name: "Leer",
          description:
            "ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it. ",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393639929845649662/115.png?ex=6875e213&is=68749093&hm=c436945f09e474fc5f7c2b835990c06cd419901c68d215037c4459350d61efbb&",
        },
        {
          name: "Devour",
          description:
            "INSTANTLY consume a nearby soul orb, rapidly Healing. If  Empress is active, this skill will automatically cast and not consume the Soul Orb.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393640280040669215/115.png?ex=6875e267&is=687490e7&hm=ea9c032e0c45594af9eb37638a79af3727129d63e6e23de7e674cf48f1fe42f8&",
        },
        {
          name: "Dismiss",
          description:
            "INSTANTLY consume a nearby Soul Orb, becoming Intangible for a short duration. If  Empress is active, also become Invisible.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393640581325918260/115.png?ex=6875e2af&is=6874912f&hm=6f237ea434f1b4792bfbd25b0423c86f2bc82823867b5e08304c9f161585afff&",
        },
        {
          name: "Empress",
          description:
            "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393640771625681078/115.png?ex=6875e2dc&is=6874915c&hm=afe79358c2d9275a17ff398e517b318c10227fc5d08466d9bf37c9a9407f1418&",
        },
      ],
      Yoru: [
        {
          name: "Fakeout",
          description:
            "echo that transforms into a mirror image of Yoru when activated. FIRE to instantly activate the mirror image and send it forward. ALT FIRE to place an inactive echo.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393645510430162964/115.png?ex=6875e746&is=687495c6&hm=7a1dd17f11bf8be2a0d7bc993c0fe892685266471022b7885b7a0fe3bfdcdb92&",
        },
        {
          name: "Blindside",
          description:
            "rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393645819097387138/115.png?ex=6875e78f&is=6874960f&hm=c5bb67db0d104edcaa72494a02e1312eb34fdfb776c692fe50398848f8774d9a&",
        },
        {
          name: "Gatecrash",
          description:
            "rift tether. FIRE to send the tether forward. ALT FIRE to place a stationary tether. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport. GATECRASH resets a charge every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393646021212504286/115.png?ex=6875e7c0&is=68749640&hm=8f8bf713cbcb8e1c910f13f3ca07a8478a19599bf2f82d9d0f90e65aa3d2dea8&",
        },
        {
          name: "Dimensional Drift",
          description:
            "mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru's dimension early.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393646263664246925/115.png?ex=6875e7f9&is=68749679&hm=972ad13db3bdfc303871481943fc7b2649bd9d1147d614161acae22bd262c2b6&",
        },
      ],
      Neon: [
        {
          name: "Fast Lane",
          description:
            "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393647985690411080/115.png?ex=6875e994&is=68749814&hm=0a734018d15db009c306c9f7084e9bbc5031bf1d160d654d79e4f8d702934856&",
        },
        {
          name: "Relay Bolt",
          description:
            "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a Concussive blast.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393648689825714346/115.png?ex=6875ea3c&is=687498bc&hm=ce243627cce488acadb8978cd31d050ece2e41035994712175ed9baadc97f751&",
        },
        {
          name: "High Gear",
          description:
            "INSTANTLY channel Neon's power for Increased Speed. When charged, ALT FIRE to trigger an electric slide dash. Slide charge resets every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393648949851717923/115.png?ex=6875ea7a&is=687498fa&hm=e631690ade250488e9c49444908cb4faa3a5b2dd4e1c5f260b513f3e6fed98fa&",
        },
        {
          name: "Overdrive",
          description:
            "Unleash Neon's full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393649226268934285/115.png?ex=6875eabc&is=6874993c&hm=592c41189e70a35482a86887f6a9f8f0a0f6a1339b9e7f35e3c341290c90542d&",
        },
      ],
      Iso: [
        {
          name: "Contingency",
          description:
            "assemble prismatic energy. FIRE to push an indestructible wall of energy forward that blocks bullets. ALT FIRE to push out a slower version of the wall.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393649898762539188/115.png?ex=6875eb5c&is=687499dc&hm=4be5b18fa343ada04269964a39c96444e53b60777728c5c6d7f91c841de4704c&",
        },
        {
          name: "Undercut",
          description:
            "molecular bolt. Fire to throw it forward, briefly applying Vulnerable & Suppress to all players it touches. The bolt can pass through solid objects, including walls.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393650199292805130/115.png?ex=6875eba4&is=68749a24&hm=d3515ca8cf8fea603e3e401b2f170db12cf49c73671382d4e613a9eff2205de9&",
        },
        {
          name: "Double Tap",
          description:
            "INSTANTLY start channeling your focus. Once focused: gain a shield which absorbs one instance of damage from any source, reload more quickly, and enter a flow state during which downed enemies you kill or damage spawn an energy orb. Shooting this orb refreshes your flow state and your existing shield, or grants another.",
          icon: "https://static.wikia.nocookie.net/valorant/images/7/7c/Double_Tap.png/revision/latest/scale-to-width-down/115?cb=20231031130645",
        },
        {
          name: "Kill Contract",
          description:
            "interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena. You and your opponent duel to the death.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393651012484731001/115.png?ex=6875ec66&is=68749ae6&hm=7850eeb079d7283fc8ab2c54a828cdd14c0a64eda1084ad457736b100d8f5d2a&",
        },
      ],
      Waylay: [
        {
          name: "Saturate",
          description:
            "INSTANTLY throw a cluster of light that explodes upon contact with the ground, Hindering nearby players with a powerful movement and weapon slow.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393651659523227668/115.png?ex=6875ed00&is=68749b80&hm=90683ef9435b2eb7b3a16a67780d2d2c5c2d8620f4323b3d2b42369038d14889&",
        },
        {
          name: "Lightspeed",
          description:
            "prepare for a burst of speed. FIRE to dash forward twice. ALT FIRE to dash once. Only your first dash can send you upward.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393651913362378782/115.png?ex=6875ed3c&is=68749bbc&hm=a0e0a1478f13ce97d455751e9cd76e762d6a8886222833c4b476cef99c96d6fb&",
        },
        {
          name: "Refract",
          description:
            "INSTANTLY create a beacon of light on the floor. REACTIVATE to speed back to your beacon as a mote of pure light. You are invulnerable as you travel. Refract resets a charge every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393652067922608249/115.png?ex=6875ed61&is=68749be1&hm=a7e6957d7952b86e3abac5efd7490f99246b57e573760a62684d652a9d5c158c&",
        },
        {
          name: "Convergent PathsX",
          description:
            "focus your prismatic power. FIRE to create an afterimage of yourself that projects a beam of light. After a brief delay, you gain a powerful speed boost and the beam expands, Hindering other players in the area.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393652559285325884/115.png?ex=6875edd6&is=68749c56&hm=1b9c8ad08cb55df7459d5dd89cf7aa0c2ce331258ae2bed0418a48d4af1f882c&",
        },
      ],
      Sova: [
        {
          name: "Owl Drone",
          description:
            "owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656789681045624/115.png?ex=6875f1c7&is=6874a047&hm=8d9db39eb0c4613bbabff52c250fcca175b393f2a04fbdae98a378c02797104a&",
        },
        {
          name: "Shock Bolt",
          description:
            "bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656850922213406/115.png?ex=6875f1d6&is=6874a056&hm=80fbc63aa35663f7cfc40d850f90fcb534bc2a81bbba4e231c8ce195b740d479&",
        },
        {
          name: "Recon Bolt",
          description:
            "bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656927774445588/115.png?ex=6875f1e8&is=6874a068&hm=95d9d2ee382b69bc782dcc402b3a335a13009a4c7dba475152912b38ae0ec36c&",
        },
        {
          name: "Hunter's Fury",
          description:
            "bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and Revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656997320196227/115.png?ex=6875f1f9&is=6874a079&hm=5516b2d170856e298788a73e73dc6b4e08951cb7b4e9642264b16e2ab427ac68&",
        },
      ],
      Breach: [
        {
          name: "Aftershock",
          description:
            "fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393652870842417263/115.png?ex=6875ee21&is=68749ca1&hm=b2e1788a9f5b0ea8d608e51c4c99e6caae9a08f0c34179be3f5237703b9be730&",
        },
        {
          name: "Flashpoint",
          description:
            "blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to Blind all players looking at it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653128070561832/115.png?ex=6875ee5e&is=68749cde&hm=755f6fd06d3541c0e78a60b30888fce5a8396e760acbea72aac1aae17b5f1dea&",
        },
        {
          name: "Fault Line",
          description:
            "seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, Concussing all players in its zone and in a line up to the zone.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653243766378576/115.png?ex=6875ee7a&is=68749cfa&hm=cfd028c4c5cf30c8d06fcd2db584231ee5c5560f18615705391754433cf8bc77&",
        },
        {
          name: "Rolling Thunder",
          description:
            "Seismic Charge. FIRE to send a cascading quake through all terrain in a large zone. The quake Concusses and knocks up anyone caught in it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653374922002533/115.png?ex=6875ee99&is=68749d19&hm=04d652ba19ed8df3c61381e59a9efabd92cba4dc0bfc682160ca57ea64a24f0b&",
        },
      ],
      Skye: [
        {
          name: "Regrowth",
          description:
            "healing trinket. HOLD FIRE to channel, Healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656148950781962/115.png?ex=6875f12e&is=68749fae&hm=a2d3d0a8b03303f98bb799ca9810beae3c26905741c60be93afb3d2d6ad5f632&",
        },
        {
          name: "Trailblazer",
          description:
            "Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a Concussive blast and damaging directly hit enemies.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656269616844810/115.png?ex=6875f14b&is=68749fcb&hm=4910a02fd0b621a0335547f6c1b46a373e2c8447866772603e6e2c95926c7181&",
        },
        {
          name: "Guiding Light",
          description:
            "hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash. The flash reaches max potency after a short duration during the hawk's flight.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656353054265416/115.png?ex=6875f15f&is=68749fdf&hm=bdfa76f6b651f45409dbab3b0a4cc9e7598a9c821fa5c4d186d8426b5d124016&",
        },
        {
          name: "Seekers",
          description:
            "Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656442569101473/115.png?ex=6875f174&is=68749ff4&hm=d999faf5d27df3ff7a5984378f1f70a62f193c080bd2a250bc14456d22f14954&",
        },
      ],
      "KAY/O": [
        {
          name: "FLASH/DRIVE",
          description:
            "flash grenade. FIRE to throw. The flash grenade detonates after a short fuse, blinding anyone in line of sight. ALT FIRE to lob the grenade in an arc.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655559504269332/115.png?ex=6875f0a2&is=68749f22&hm=d36ee37a66f53851a2e55f90818ed4ce877ef430ca43b9b38d4295c97144ddc3&",
        },
        {
          name: "ZERO/POINT",
          description:
            "suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion. Enemies can destroy this blade.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655675141361847/115.png?ex=6875f0bd&is=68749f3d&hm=f2c64b76732e48ca9cf02c166900880006592b2281ca09ca29a9009708ad5445&",
        },
        {
          name: "FRAG/MENT",
          description:
            "explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655771811807312/115.png?ex=6875f0d4&is=68749f54&hm=8ad5393f8a4d6c6c72e83a2bc42a102920e62e4a3f35624747aeb7b1d38b68db&",
        },
        {
          name: "NULL cmd",
          description:
            "INSTANTLY Overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are Suppressed for a short duration. While overloaded, KAY/O gains Combat Stim and can be re-stabilized if downed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655901835100220/115.png?ex=6875f0f3&is=68749f73&hm=08505885c797cc230c0ebaad7cdd8a4c780664eb3028a5045d61a4ee1ab5f238&",
        },
      ],
      Fade: [
        {
          name: "Prowler",
          description:
            "prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and Nearsight the enemy on impact.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653703336267917/115.png?ex=6875eee7&is=68749d67&hm=b59c32ac95a2f2dd23ecdbc8110e38b11b24dee81480641f9241f7d661d8c8d2&",
        },
        {
          name: "Seize",
          description:
            "knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are Deafened, and Decayed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653940297666700/115.png?ex=6875ef20&is=68749da0&hm=a3d3fd1cb89f474fe28e9e735a16e39a74f2f023cc77c9cf4efa761534aa57b4&",
        },
        {
          name: "Haunt",
          description:
            "haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, Revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654033457348629/115.png?ex=6875ef36&is=68749db6&hm=16602c28307ace0a3e0bf182d70369f2d637395a62cbc3848ea988533c4a2925&",
        },
        {
          name: "Nightfall",
          description:
            "the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are Marked by terror trails, Deafened, and Decayed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654154769072290/115.png?ex=6875ef53&is=68749dd3&hm=2fba4a910ceea285ae5c97a59e8f06a855609c0c32f3cf5b2d84a4cfe7c1a43e&",
        },
      ],
      Gekko: [
        {
          name: "Mosh Pit",
          description:
            "Mosh. FIRE to throw Mosh like a grenade. ALT FIRE to lob. Upon landing Mosh duplicates across a large area that deals a small amount of damage over time then after a short delay explodes.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654504632619018/115.png?ex=6875efa6&is=68749e26&hm=a1c0e57418d78a9f95f240c51f7019470b1c0579e125743de8160cdd06fc380b&",
        },
        {
          name: "Wingman",
          description:
            "Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a Concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654676368654447/115.png?ex=6875efcf&is=68749e4f&hm=9bc7d15c8a9fa2ad29463858f87ef27e007268722c9394ad6a5059dd70751323&",
        },
        {
          name: "Dizzy",
          description:
            "Dizzy. FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are Blinded.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654888520482836/115.png?ex=6875f002&is=68749e82&hm=b83d8e689773a74119623b341b8e7b64f4bce9555f2d8b53b1c5d9fa8829bd4d&",
        },
        {
          name: "Thrash",
          description:
            "Thrash. FIRE to link with Thrash's mind and steer her through enemy territory. ACTIVATE to lunge forward and explode, Detaining any players in a small radius.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655279865954467/115.png?ex=6875f05f&is=68749edf&hm=09527281a1441245289b5941f9c3b4ff9272ba76600fddfe175d373560d7168d&",
        },
      ],
      Tejo: [
        {
          name: "Stealth Drone",
          description:
            "stealth drone. FIRE to throw the drone forward, assuming direct control of its movement. FIRE again to trigger a pulse that Suppresses and Reveals enemies hit.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393657287775621120/115.png?ex=6875f23e&is=6874a0be&hm=aa7221a074bb15c2de836695699b933aae1acc2165b187776d2e1d443b095b85&",
        },
        {
          name: "Special Delivery",
          description:
            "sticky grenade. FIRE to launch. The grenade sticks to the first surface it hits and explodes, Concussing any targets caught in the blast. ALT FIRE to launch the grenade with a single bounce instead.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393657353001242776/115.png?ex=6875f24d&is=6874a0cd&hm=8c6ff566fcf33ac61211d1b6d738ce1e563785034d2b94f253514813ff97f45c&",
        },
        {
          name: "Guided Salvo",
          description:
            "AR targeting system. FIRE to select up to two target locations on the map. ALT FIRE to launch missiles that autonomously navigate to target locations, detonating on arrival.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393657422924746923/115.png?ex=6875f25e&is=6874a0de&hm=f84200ecb415fa4a85c58d81c4b2f4b464cd6cbb989e97f56f2a3592ec193f66&",
        },
        {
          name: "Armageddon",
          description:
            "tactical strike targeting map. FIRE to select the origin point of the strike. FIRE again to set the end point and launch the attack, unleashing a wave of explosions along the strike path. ALT FIRE during map targeting to cancel the origin point.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393657510400884837/115.png?ex=6875f273&is=6874a0f3&hm=9205495a16c92c412236cded31a316dc18b0d8f7dd3fec19e443e15d701e8d27&",
        },
      ],
      Cypher: [
        {
          name: "Trapwire",
          description:
            "trapwire. FIRE to place a destructible and covert trapwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a trapwire will be Tethered, Revealed, and Concussed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659578788347984/115.png?ex=6875f460&is=6874a2e0&hm=3290d5d875a04a16985b2de296c41c6ed0c26585cb98af4fc9fd79ff04cf4f89&",
        },
        {
          name: "Cyber Cage",
          description:
            "INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and plays an audio cue when enemies pass through it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659671839244318/115.png?ex=6875f476&is=6874a2f6&hm=bfd2aca056b4f59dff8d4de0d4e411682d41272b319699dbdc44982b5daf59e1&",
        },
        {
          name: "Spycam",
          description:
            "spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659744920797315/115.png?ex=6875f488&is=6874a308&hm=9a2cbd2baa5829cf88623fc8aaa27613dca21256539bf75cdd312cb62579056b&",
        },
        {
          name: "Neural Theft",
          description:
            "INSTANTLY use on a targeted dead enemy to download information on their team. After a brief delay, the location of all living enemy players will be Revealed twice.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659811933065318/115.png?ex=6875f498&is=6874a318&hm=ffb924c37a7f97b2ec54625ebd3b006c3cd6b4b945b04b0264820508b73706cb&",
        },
      ],
      Sage: [
        {
          name: "Barrier Orb",
          description:
            "barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393663158287208448/115.png?ex=6875f7b5&is=6874a635&hm=0356e545c730c0fcbfef97ddb253d1e2854bd6d9ec9a2575d84a35f5c00c136f&",
        },
        {
          name: "Slow Orb",
          description:
            "slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that Slows and reduces the dash speed of players caught inside of it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393663335714652180/115.png?ex=6875f7e0&is=6874a660&hm=093a9ca44d1f9147ad11fcfd71ea9cb3be55409af98e2b60a6d8ea1f9cbf5ff5&",
        },
        {
          name: "Healing Orb",
          description:
            "healing orb. FIRE with your crosshairs over a damaged ally to activate a Heal-Over-Time on them. ALT FIRE while Sage is damaged to activate a self Heal-Over-Time.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393663550676795515/115.png?ex=6875f813&is=6874a693&hm=5155157ebc6973a5c26afa76d4b146c3994753c19f1712a1670f5361c2bdec16&",
        },
        {
          name: "Resurrection",
          description:
            "resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393663816314916895/115.png?ex=6875f852&is=6874a6d2&hm=d4a537e6ed42ba67b66db196ef1cf3ccbff9ae54cda9f122c7e365b93f12fd04&",
        },
      ],
      Killjoy: [
        {
          name: "Nanoswarm",
          description:
            "Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ALT FIRE to lob. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobot.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393661583254880338/115.png?ex=6875f63e&is=6874a4be&hm=71a9eb53bf6108adbce89f7968756f3a700b4df028591b8bf00e156ecf3f7888&",
        },
        {
          name: "Alarmbot",
          description:
            "covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes and applies Vulnerable to enemies in the area. HOLD EQUIP to recall a deployed bot.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393661805485883494/115.png?ex=6875f673&is=6874a4f3&hm=14aa9752c101dd220fe40a3fc74b4b9a8e06ca3a2f47b8caf3df2aeeda670465&",
        },
        {
          name: "Turret",
          description:
            "Turret. FIRE to deploy a turret that fires at enemies in a 100 degree cone. ALT FIRE to swap turret direction. HOLD EQUIP to recall the deployed turret.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393662242863579136/115.png?ex=6875f6db&is=6874a55b&hm=4a28ac5591f3daf259de6d6cd148da6a0eacb7d2a8b215a308da151f92ad6a7c&",
        },
        {
          name: "Lockdown",
          description:
            "the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393662500532125856/115.png?ex=6875f719&is=6874a599&hm=c360512d63ed33189e2c4bcccd6461e8ddb8a6464c687be5df13c95f574ace63&",
        },
      ],
      Chamber: [
        {
          name: "Trademark",
          description:
            "trap that scans for enemies. FIRE to place it on the ground. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that Slows players caught inside of it. The trap can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393658776296489071/115.png?ex=6875f3a1&is=6874a221&hm=714f1971e8ceac1e583fceaf3f6bd4e8f823c65e4680bd6a6d4ce2a05a93ce6f&",
        },
        {
          name: "Headhunter",
          description:
            "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393658847327027396/115.png?ex=6875f3b2&is=6874a232&hm=dc8ddeb25d108802a2f750a05467c37d61ab80c7a8f5afd3798da033379d4022&",
        },
        {
          name: "Rendezvous",
          description:
            "teleport anchor. FIRE to place it on the ground. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393658917254332529/115.png?ex=6875f3c2&is=6874a242&hm=a9ce4f076a3a2e8578d3f530c9564e247de03da39bab7dc1b00e4dea16988b82&",
        },
        {
          name: "Tour De Force",
          description:
            "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit to the upper body. ALT FIRE to aim down sights. Killing an enemy creates a lingering field that Slows players caught inside of it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393658984501739693/115.png?ex=6875f3d2&is=6874a252&hm=48cf10ffbb3c69b8282d7e1aab65153eeaf84995d3433f275c6e0ee141f08251&",
        },
      ],
      Deadlock: [
        {
          name: "Barrier Mesh",
          description:
            "Barrier Mesh disc. FIRE to throw forward. Upon landing, the disc generates barriers from the origin point that block character movement.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659960675794975/115.png?ex=6875f4bb&is=6874a33b&hm=a879e897bdac689dacfbf028de7e3b6e7ffc5cda88564e2a0cbb2eb26de95dff&",
        },
        {
          name: "Sonic Sensor",
          description:
            "Sonic Sensor. FIRE to deploy. The sensor monitors an area for enemies making sound. It concusses that area if footsteps, weapons fire, or significant noise are detected. This ability can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393660228221931642/115.png?ex=6875f4fb&is=6874a37b&hm=7461191a6ec75c4f301c0db1acfb9504068bd5de098ec4ce4a7f6e25dc51ba89&",
        },
        {
          name: "GravNet",
          description:
            "GravNet grenade. FIRE to throw. ALT FIRE to lob. The GravNet detonates upon landing, forcing any characters caught within to crouch and move slowly.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393660452986159176/115.png?ex=6875f530&is=6874a3b0&hm=5954e98d91d20137e3e1da34c06fcfe6d5a1e8270450c36c0c1dc0d8b5116115&",
        },
        {
          name: "Annihilation",
          description:
            "Nanowire Accelerator. FIRE to unleash a pulse of nanowires that captures the first enemy contacted. The cocooned enemy is pulled along a nanowire path and will die unless they are freed. The nanowire cocoon is destructible.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393660936472100874/115.png?ex=6875f5a4&is=6874a424&hm=f8fc6c882507bc4edc4b174d90a49fb40adf608daf4a47c1d65ded56733eaa08&",
        },
      ],
      Vyse: [
        {
          name: "Razorvine",
          description:
            "nest of liquid metal. FIRE to launch. Upon landing, the nest becomes invisible. When ACTIVATED, it sprawls out into a large razorvine nest which slows and damages all players who move through it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393664002055209000/115.png?ex=6875f87f&is=6874a6ff&hm=ed450f6dec120a7f1558dc11257ebbf60101cdcf6ea5dee3b4e4a172370cb257&",
        },
        {
          name: "Shear",
          description:
            "filaments of liquid metal. FIRE to place a hidden wall trap. When an enemy crosses, an indestructible wall bursts from the ground behind them. The wall lasts for a brief time before dissipating.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393664136759611433/115.png?ex=6875f89f&is=6874a71f&hm=4cfcb63fe1fa43886cf16e0e95a8d3181df09650c62a09e5974273cbbe19f67e&",
        },
        {
          name: "Arc Rose",
          description:
            "Arc Rose. Target a surface and FIRE to place a stealthed Arc Rose, or ALT FIRE to place the Arc Rose through it. REUSE to blind all players looking at it. This ability can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393664198189514752/115.png?ex=6875f8ad&is=6874a72d&hm=1ea072999f50fcfefa7b2f76b7452591716cad7f38446ffe78ba797f7538474c&",
        },
        {
          name: "Steel Garden",
          description:
            "bramble of liquid metal. FIRE to send the metal erupting from you as a torrent of metal thorns, JAMMING enemy primary weapons after a brief windup.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393664260114223245/115.png?ex=6875f8bc&is=6874a73c&hm=1453ad039e6b474e33a04ae7ae137186dac7f0cbc3b221267ab614c1522499d7&",
        },
      ],
    };
    return abilities[agentName] || [];
  };

  return (
    <div className="agents-container">
      <div className="agents-header">
        <h1>Valorant Agents</h1>
        <p>Choose your role and master your agent's unique abilities</p>
      </div>

      {roles.map((role) => (
        <div key={role.name} className="role-section">
          <div className="role-header">
            <div className="role-icon">
              <img src={role.icon} alt={`${role.name} icon`} />
            </div>
            <h2 className="role-title">{role.name}</h2>
          </div>
          <p className="role-description">{role.description}</p>

          <div className="agents-grid">
            {role.agents.map((agent) => (
              <div
                key={agent.name}
                className="agent-card"
                onClick={() => handleAgentClick(agent)}
              >
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="agent-image"
                  loading="lazy"
                  onError={(e) => {
                    console.error(
                      `Failed to load image for agent ${agent.name}`
                    );
                    e.target.onerror = null;
                    e.target.src = "/images/agents/agent-placeholder.svg";
                  }}
                />
                <div className="agent-info">
                  <h3 className="agent-name">{agent.name}</h3>
                  <p className="agent-description">{agent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedAgent && (
        <div className="modal-overlay" onClick={() => setSelectedAgent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedAgent(null)}
            >
              ×
            </button>
            <div className="agent-detail">
              <div className="agent-detail-header">
                <div className="agent-image-container">
                  <img
                    src={selectedAgent.image}
                    alt={selectedAgent.name}
                    className="agent-detail-image"
                  />
                  <div className="agent-role-badge">
                    {roles.find((role) =>
                      role.agents.some(
                        (agent) => agent.name === selectedAgent.name
                      )
                    )?.name || "Agent"}
                  </div>
                </div>
                <div className="agent-detail-info">
                  <h2 className="agent-title">{selectedAgent.name}</h2>
                  <div className="agent-description-container">
                    <p className="agent-description">
                      {selectedAgent.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="agent-abilities">
                <div className="agent-abilities-header">
                  <div className="abilities-title">
                    <h3>Agent Abilities</h3>
                    <p className="abilities-subtitle">
                      Master these skills to dominate the battlefield
                    </p>
                  </div>
                  <div className="skill-counter">
                    Total Skills: <span>{selectedAgentAbilities.length}</span>
                  </div>
                </div>

                <div className="abilities-container">
                  {selectedAgentAbilities.map((ability, index) => (
                    <div
                      key={index}
                      className={`ability-card ${
                        index === selectedAgentAbilities.length - 1
                          ? "ultimate"
                          : ""
                      }`}
                    >
                      <div className="ability-content">
                        <div className="ability-icon">
                          <img src={ability.icon} alt={ability.name} />
                        </div>
                        <div className="ability-info">
                          <div className="ability-header">
                            <h4 className="ability-name">{ability.name}</h4>
                            {index === selectedAgentAbilities.length - 1 && (
                              <span className="ultimate-badge">ULTIMATE</span>
                            )}
                          </div>
                          <p className="ability-description">
                            {ability.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Agents;
