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
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594437698981929/latest.png?ex=6873bd75&is=68726bf5&hm=8f01388bcec5459cff3288e3c898981659f16427d6af38c5520be1fdf215681d&",
        },
        {
          name: "Viper",
          description:
            "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey,",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594484951879701/latest.png?ex=6873bd80&is=68726c00&hm=463f767cf8b0fdbf200f9314498e9b30640b1df940eb9441b85011fcdca11fd7&",
        },
        {
          name: "Omen",
          description:
            "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594363849998437/latest.png?ex=6873bd64&is=68726be4&hm=c85990fffc2e154538b397196b2a0ed7929530b04ed3244cd9be8dfb85800566&",
        },
        {
          name: "Astra",
          description:
            "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight,",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594540434391141/latest.png?ex=6873bd8e&is=68726c0e&hm=e602aef799704705783524b0e1ae9d36d66ff0fd20a528af192ffa95f1145576&",
        },
        {
          name: "Harbor",
          description:
            "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594628925816954/latest.png?ex=6873bda3&is=68726c23&hm=0b90e55a6fdbb8cf5971f9d338fcdab260d0de0d1a4e325d8de917fbcc7f7922&",
        },
        {
          name: "Clove",
          description:
            "Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393594720416174243/latest.png?ex=6873bdb9&is=68726c39&hm=353d110356190accb5e1fb93a3a1274a9847f35743cd0d851882b46091804e3b&",
        },
      ],
    },
    {
      name: "Duelist",
      icon: "https://cdn.discordapp.com/attachments/1359793709025067060/1393586887150665799/169025541711461704.png?ex=6873b66d&is=687264ed&hm=945bf950cb5d431907d38ad3241cbad2f99bf5eab3bc340fd86b3e8a76f4e36a&",
      description:
        "Duelists are self-sufficient fraggers who their team expects to take aggressive engagements and win.",
      agents: [
        {
          name: "Phoenix",
          description:
            "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604739622502460/latest.png?ex=6873c70d&is=6872758d&hm=c70c8e9d4f25b84d64596ff77004367eaba5258eeffa971853a230f5fe9a1f95&",
        },
        {
          name: "Jett",
          description:
            "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604813043925185/latest.png?ex=6873c71f&is=6872759f&hm=412cd3c87197626580444f7833f3740614770a3e46a90262fd7faa0e360f272d&",
        },
        {
          name: "Raze",
          description:
            "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604931721625720/latest.png?ex=6873c73b&is=687275bb&hm=3e84f886482b37a67a94f4d5ce88ea52832571b5efdd618db3b4a29fe957886e&",
        },
        {
          name: "Reyna",
          description:
            "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604881796829244/latest.png?ex=6873c72f&is=687275af&hm=b81736bf07e135dcdd86d63037e79e926f172a5c7d8cc12bb45c6a1e6f5b4093&",
        },
        {
          name: "Yoru",
          description:
            "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393604979901595658/latest.png?ex=6873c747&is=687275c7&hm=abd8de56a5f6cd365ad056ace92b72ff818a3441e5190e40fbd1edbc20aaf164&",
        },
        {
          name: "Neon",
          description:
            "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393605028761309195/latest.png?ex=6873c752&is=687275d2&hm=91e676c93fc6c32582e5c05b7980ffeb648412095662497d1f3a5c12e862ab39&",
        },
        {
          name: "Iso",
          description:
            "Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393605081215271024/latest.png?ex=6873c75f&is=687275df&hm=e4aa567fa34500222184f558b2bf0d41b75a6a03a303742ac35abaffd612e2ec&",
        },
        {
          name: "Waylay",
          description:
            "Thailand's prismatic radiant Waylay transforms into light itself as she darts across the battlefield,",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393605123003121794/latest.png?ex=6873c769&is=687275e9&hm=26704149c8c444f5aa168d1c46fa798bedfcbf2b055a4349c19e770a20f18022&",
        },
      ],
    },
    {
      name: "Initiator",
      icon: "https://cdn.discordapp.com/attachments/1359793709025067060/1393588606232166470/latest.png?ex=6873b807&is=68726687&hm=368e11fdd506a9f72e114cf30bcc7d8339aa3062655b5b2566d4f080c85bab58&",
      description:
        "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
      agents: [
        {
          name: "Sova",
          description:
            "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596379787694150/latest.png?ex=6873bf44&is=68726dc4&hm=ecb86e0fd441a8ddd10eb297747e9e3d41128722028f5aa444793b09f86c2115&",
        },
        {
          name: "Breach",
          description:
            "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596439011131402/latest.png?ex=6873bf52&is=68726dd2&hm=652a4d31c11d4aa1edc0262541490a209afdc1763b5b547c376ccf1b022081f1&",
        },
        {
          name: "Skye",
          description:
            "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596499840991292/latest.png?ex=6873bf61&is=68726de1&hm=eb0171dedf397097fcfcf1bc80fafc4de02882cded5d98eb5abbf5e6049385eb&",
        },
        {
          name: "KAY/O",
          description:
            "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596556233674772/latest.png?ex=6873bf6e&is=68726dee&hm=64a60629cb6e8e3753a7670eeb8faee85a02d59a8c46be28b327a4806cac573b&",
        },
        {
          name: "Fade",
          description:
            "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596599401447424/latest.png?ex=6873bf79&is=68726df9&hm=fecae2af5852b82d133fbe7a30424a0256705b0e65a1b26552caf5964900f23b&",
        },
        {
          name: "Gekko",
          description:
            "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596642699120721/latest.png?ex=6873bf83&is=68726e03&hm=44768dd5e8e08c202890116d3e2a395f7c5e0897443f775ed4c1f87ad3d81103&",
        },
        {
          name: "Tejo",
          description:
            "A veteran intelligence consultant from Colombia, Tejo's ballistic guidance system pressures the enemy to relinquish their ground - or their lives.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393596695488630954/latest.png?ex=6873bf8f&is=68726e0f&hm=656a57a37cad57149489c2178f6cb41ec1856311aa3d60b2c8a3e7bf1288fca6&",
        },
      ],
    },
    {
      name: "Sentinel",
      icon: "https://cdn.discordapp.com/attachments/1359793709025067060/1393588331736207430/latest.png?ex=6873b7c5&is=68726645&hm=73750b4823d96c91375be9525626b46d927659c94cbb90e5bf3dba7e5b841115&",
      description:
        "Sentinels are defensive experts who can lock down areas and watch flanks, both on attack and defender rounds.",
      agents: [
        {
          name: "Cypher",
          description:
            "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610129013739531/latest.png?ex=6873cc12&is=68727a92&hm=352936747cae4d95d7e51e1a7bf5cf589e88ca4c5fe92c2f7b990b8a592928f5&",
        },
        {
          name: "Sage",
          description:
            "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610432014716959/latest.png?ex=6873cc5b&is=68727adb&hm=1d11144ba0a42026c0adf30644b0bfb7c7e556aec56b64ba2fa565f91121795f&",
        },
        {
          name: "Killjoy",
          description:
            "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610081366446110/latest.png?ex=6873cc07&is=68727a87&hm=7ee74957a1085d6d49d158eb87b595066408556fbcad1044a98b565d1f01cee1&",
        },
        {
          name: "Chamber",
          description:
            "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610196684902450/latest.png?ex=6873cc22&is=68727aa2&hm=1a95ae963863b332974602e3c3ff96942dbaea1cceeb70ed3403d8ae68c884aa&",
        },
        {
          name: "Deadlock",
          description:
            "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610251558977546/latest.png?ex=6873cc2f&is=68727aaf&hm=f15c7f52046f535fa69af71c21e9fa45ac383eee28c5eeb55d60a24b5f61f701&",
        },
        {
          name: "Vyse",
          description:
            "Metallic mastermind Vyse unleashes liquid metal to isolate, trap, and disarm her enemies. Through cunning and manipulation, she forces all who oppose her to fear the battlefield itself.",
          image:
            "https://cdn.discordapp.com/attachments/1393593969618849937/1393610304230920272/latest.png?ex=6873cc3c&is=68727abc&hm=5b9b984bdb168758fef6d89242a506db1ed1cd0a6a7d13adcb18e90017fcee59&",
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
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393628321014874173/115.png?ex=6873dd04&is=68728b84&hm=009574a8302818e567e51b69cac7079d6010e9a239e9900b25cb03d5bafecc5d&",
        },
        {
          name: "Paranoia",
          description: "Send out a shadowy projectile that nearsights enemies.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393628844530991214/115.png?ex=6873dd80&is=68728c00&hm=f75cf43c4020df5e425dbe8bf7af24382da37a6a541b98b75dc8d4051ac53e25&",
        },
        {
          name: "Dark Cover",
          description: "Place a stationary smoke screen at a location.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393629000970141796/115.png?ex=6873dda6&is=68728c26&hm=1d90210eb70c15b5a31a2a231d1792c0a1575468dc201253bc816064565d7fa6&",
        },
        {
          name: "From the Shadows",
          description:
            "Teleport anywhere on the map. If killed, return to your previous location.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393629915613630564/115.png?ex=6873de80&is=68728d00&hm=7ecd85d5a790c4326709e52d75614dc9992222ad50ae4862eafbf56b35ca735f&",
        },
      ],
      Astra: [
        {
          name: "Nova Pulse",
          description:
            "Detonate a star, concussing and damaging players in range.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393631705507692564/115.png?ex=6873e02b&is=68728eab&hm=376c67fa82e61fd7212234ff9ceed029a6946468cb08de42bae3ff25c5c4ff73&",
        },
        {
          name: "Gravity Well",
          description:
            "Create a gravity well that pulls players in and explodes.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393631309829509241/115.png?ex=6873dfcc&is=68728e4c&hm=fab43541ee2d373c0f0ad4d8894762cdb133312ffd4066a606f39ff7cb6c307d&",
        },
        {
          name: "Nebula",
          description: "Create a smoke cloud that obscures vision.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393632018906087534/115.png?ex=6873e075&is=68728ef5&hm=4efe864b20713a4750585cc7828f2ae7698471969cb8f8b5036074f775a015fe&",
        },
        {
          name: "Astral Form",
          description:
            "Enter a different plane of existence to place stars. Re-enter your body to detonate them.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393630713961513010/115.png?ex=6873df3e&is=68728dbe&hm=2d11dbb08d06973baba188d0b878abf4bcc59d2f78f22c77d608a4679bb0c4ba&",
        },
        {
          name: "Cosmic Divide",
          description:
            "When Cosmic Divide is charged, use ALT FIRE in Astral Form to begin aiming it, then FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and sound.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393632465201004624/115.png?ex=6873e0e0&is=68728f60&hm=6aa56976b969ee12bdaaef54f51f80764402bba6c64d3ad7ff54323168631a02&",
        },
      ],
      Harbor: [
        {
          name: "Cove",
          description: "Deploy a shield that blocks bullets and explosives.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393633750364983426/115.png?ex=6873e212&is=68729092&hm=3522f03cd7b2020d8cd024612b20b5aed393848780ef6551919cede353db3824&",
        },
        {
          name: "Cascade",
          description:
            "wave of water. FIRE to send the wave rolling forward and through walls. RE-USE to stop the wave. Players hit are Slowed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393632952642044025/115.png?ex=6873e154&is=68728fd4&hm=6f105dbf92912674800d4b922c71db7d268e531de9dc3a9aedd74ec75e0f4cca&",
        },
        {
          name: "High Tide",
          description:
            " wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water's path. ALT FIRE while bending to stop the water early. Players hit are Slowed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393633987842543656/115.png?ex=6873e24b&is=687290cb&hm=4d4852aff11f2ac75e980dea61052bfee3a42e384cfd713de9630e563956f2cc&",
        },
        {
          name: "Reckoning",
          description:
            "Summon a massive wave that damages and concusses players.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393634256076542043/115.png?ex=6873e28b&is=6872910b&hm=90d3451e399b70c1ba37bbd31eb3fd31dc368a433cc577707f62f6f104a812a1&",
        },
      ],
      Clove: [
        {
          name: "Pick-me-up",
          description:
            "ACTIVATE to absorb the life force of a fallen enemy that Clove damaged or killed, gaining haste and temporary health.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393634643185631342/115.png?ex=6873e2e7&is=68729167&hm=2d8a2aad3610e722b85b6e0f6d7a2b439ab5ef93dff4e2aacaba6a432bf0d5a3&",
        },
        {
          name: "Meddle",
          description:
            "fragment of immortality essence. FIRE to throw the fragment, which upon landing on the floor, erupts after a short delay and temporarily Decays all targets caught inside.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393635022707101726/115.png?ex=6873e341&is=687291c1&hm=f07bd6cde12f0b048c633a8f0e789da8f0ad2fa853241f25721530c5697f0b11&",
        },
        {
          name: "Ruse",
          description:
            "view of the battlefield. FIRE to set the locations where Clove's clouds will settle. ALT FIRE to confirm, launching clouds that block vision in the chosen areas. Clove can use this ability after death.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393635343890256024/115.png?ex=6873e38e&is=6872920e&hm=a54ad641cb1faa9649a7f6d6434a778941fa8a558d2b161ddea49d0fad8f308c&",
        },
        {
          name: "Not Dead Yet",
          description:
            "After dying, ACTIVATE to resurrect. Once resurrected, Clove must earn a kill or a damaging assist within a set time or they will die. REACTIVATE to cancel early.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393635559611830332/115.png?ex=6873e3c1&is=68729241&hm=6dab7211bd02a0c68b4d11b28543526fcc20ca6b7c7fa085e7bae6801f54beaa&",
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
          name: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393638218410233987/latest.png?ex=6873e63b&is=687294bb&hm=ebc1db866a2f07950fe3ba116aa273f8cac9abe58c95021e9ba06a7202a6b29d&",
        },
        {
          name: "Updraft",
          description: "INSTANTLY propel Jett high into the air. ",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393638650746769529/115.png?ex=6873e6a2&is=68729522&hm=0b021afaa036cbe7a664529d0a027f3c58e78e65c0d7ed8c9f2eb842e25c4929&",
        },
        {
          name: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393638854740934788/115.png?ex=6873e6d3&is=68729553&hm=c4775ae324b669426032319a56ffc77920952ac29eba42f5a1c593103479e619&",
        },
        {
          name: "Blade Storm",
          description:
            "set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393639097242746940/115.png?ex=6873e70d&is=6872958d&hm=2ca02231823c52fa327ab0ef88a8f856c60e73ab3573a9569126234259b63825&",
        },
      ],
      Raze: [
        {
          name: "Boom Bot",
          description:
            " Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393646949583945850/115.png?ex=6873ee5d&is=68729cdd&hm=523d4003b02220a60252fc3f4793961c5d9f6d493d4a94204fd96d947d5a6c6c&",
        },
        {
          name: "Blast Pack",
          description:
            "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393646969922257048/115.png?ex=6873ee62&is=68729ce2&hm=1c9f9faf529c4ec5535896ec978791649b460a6b26791217545c844b8440a1a7&",
        },
        {
          name: "Paint Shells",
          description:
            "cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393646991111880827/115.png?ex=6873ee67&is=68729ce7&hm=8b63a4b513b7af77a4b8c7fbcb6843471f728e6ee4f8dd6a2438d5e94033f030&",
        },
        {
          name: "Showstopper",
          description:
            "rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything.",
          icon: "https://cdn.discordapp.com/attachments/1324097723477135392/1393647011965698048/115.png?ex=6873ee6c&is=68729cec&hm=872f427a5a431ba1399ba5d706af6415eac2516a0412dffc3dd4eafb0f57f721&",
        },
      ],
      Reyna: [
        {
          name: "Leer",
          description:
            "ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it. ",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393639929845649662/115.png?ex=6873e7d3&is=68729653&hm=70e1d157ed8b6220e6d0e319f9ae1a2f59f35306eb3a4ae2e54b92b2c1827363&",
        },
        {
          name: "Devour",
          description:
            "INSTANTLY consume a nearby soul orb, rapidly Healing. If  Empress is active, this skill will automatically cast and not consume the Soul Orb.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393640280040669215/115.png?ex=6873e827&is=687296a7&hm=bff8b00440e8de87f4e57d65d240ce85f498f142af4e161da100a0be7de9daad&",
        },
        {
          name: "Dismiss",
          description:
            "INSTANTLY consume a nearby Soul Orb, becoming Intangible for a short duration. If  Empress is active, also become Invisible.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393640581325918260/115.png?ex=6873e86f&is=687296ef&hm=1b71b132c02b6449b0f837a5805c5be5832a2af97693fc7c8c906b112888d4dc&",
        },
        {
          name: "Empress",
          description:
            "INSTANTLY enter a frenzy, gaining a Combat Stim that increases firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393640771625681078/115.png?ex=6873e89c&is=6872971c&hm=438c5455d23c227c0c96d2da26b0ec9236f68863681a72722ebf112e127bb8a3&",
        },
      ],
      Yoru: [
        {
          name: "Fakeout",
          description:
            "echo that transforms into a mirror image of Yoru when activated. FIRE to instantly activate the mirror image and send it forward. ALT FIRE to place an inactive echo.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393645510430162964/115.png?ex=6873ed06&is=68729b86&hm=a372538b6a9a9a531421acf24e7b7abf363cf71042af51683da7795569b4fd52&",
        },
        {
          name: "Blindside",
          description:
            "rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393645819097387138/115.png?ex=6873ed4f&is=68729bcf&hm=a0cffa29b5f75801c84beadb5f6d1be72068cbd5224679e06a9f5bc68413a53a&",
        },
        {
          name: "Gatecrash",
          description:
            "rift tether. FIRE to send the tether forward. ALT FIRE to place a stationary tether. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport. GATECRASH resets a charge every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393646021212504286/115.png?ex=6873ed80&is=68729c00&hm=6d6e940e7b8eb6d53b09e4156d65733bd88e6e625a03f777fad64447a2868469&",
        },
        {
          name: "Dimensional Drift",
          description:
            "mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru's dimension early.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393646263664246925/115.png?ex=6873edb9&is=68729c39&hm=abe49270b8e4ffce64e79ef91e63bb6adc7d9a2b29f5bb200b33750061544971&",
        },
      ],
      Neon: [
        {
          name: "Fast Lane",
          description:
            "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393647985690411080/115.png?ex=6873ef54&is=68729dd4&hm=9044852736933a2b56cef49dd35d0f611f628c564303959687a9f199bc3adedb&",
        },
        {
          name: "Relay Bolt",
          description:
            "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a Concussive blast.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393648689825714346/115.png?ex=6873effc&is=68729e7c&hm=c0e5aa23f2fa118c107d4ea8679b1605a9a9c9cc9896de8eca546eda2444f931&",
        },
        {
          name: "High Gear",
          description:
            "INSTANTLY channel Neon's power for Increased Speed. When charged, ALT FIRE to trigger an electric slide dash. Slide charge resets every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393648949851717923/115.png?ex=6873f03a&is=68729eba&hm=6549b275cf32a969a23df23e0a5837f04bbacd06732eb395a190495d34f1acef&",
        },
        {
          name: "Overdrive",
          description:
            "Unleash Neon's full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393649226268934285/115.png?ex=6873f07c&is=68729efc&hm=59a3a7135acc2f65e468dcbab66cb0d3b69f75c4eebe52ad78316b61dce7dd35&",
        },
      ],
      Iso: [
        {
          name: "Contingency",
          description:
            "assemble prismatic energy. FIRE to push an indestructible wall of energy forward that blocks bullets. ALT FIRE to push out a slower version of the wall.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393649898762539188/115.png?ex=6873f11c&is=68729f9c&hm=ea341d081d8581273d737e99b834327b1d076518fb613758edc0f19e44e10a07&",
        },
        {
          name: "Undercut",
          description:
            "molecular bolt. Fire to throw it forward, briefly applying Vulnerable & Suppress to all players it touches. The bolt can pass through solid objects, including walls.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393650199292805130/115.png?ex=6873f164&is=68729fe4&hm=6670500d5a50821cb2a385cfa13201255987b4d793246f0d003aa30cc24e0e99&",
        },
        {
          name: "Double Tap",
          description:
            "INSTANTLY start channeling your focus. Once focused: gain a shield which absorbs one instance of damage from any source, reload more quickly, and enter a flow state during which downed enemies you kill or damage spawn an energy orb. Shooting this orb refreshes your flow state and your existing shield, or grants another.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393651287765028904/115.png?ex=6873f267&is=6872a0e7&hm=ae74313e29eae3f8feaa800476b7939e5c1a91553c8a3aec6780b704146bc658&",
        },
        {
          name: "Kill Contract",
          description:
            "interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena. You and your opponent duel to the death.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393651012484731001/115.png?ex=6873f226&is=6872a0a6&hm=7704c64500f35b556037fec8f2929872d242f5e9aa002bdae99ae4a0348e5c73&",
        },
      ],
      Waylay: [
        {
          name: "Saturate",
          description:
            "INSTANTLY throw a cluster of light that explodes upon contact with the ground, Hindering nearby players with a powerful movement and weapon slow.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393651659523227668/115.png?ex=6873f2c0&is=6872a140&hm=bdf861fc3abdaa096d128072af7d9403b89a5d1d27bc111728b87116595e1bc6&",
        },
        {
          name: "Lightspeed",
          description:
            "prepare for a burst of speed. FIRE to dash forward twice. ALT FIRE to dash once. Only your first dash can send you upward.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393651913362378782/115.png?ex=6873f2fc&is=6872a17c&hm=24ae181b9266e704b9b17091d4d2de3bc6d34c33d7114ba74660aff010f00752&",
        },
        {
          name: "Refract",
          description:
            "INSTANTLY create a beacon of light on the floor. REACTIVATE to speed back to your beacon as a mote of pure light. You are invulnerable as you travel. Refract resets a charge every two kills.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393652067922608249/115.png?ex=6873f321&is=6872a1a1&hm=6c0e320b6c1621c98ebfef554f7a8615e296d02654ba440605d6e0338e62653c&",
        },
        {
          name: "Convergent PathsX",
          description:
            "focus your prismatic power. FIRE to create an afterimage of yourself that projects a beam of light. After a brief delay, you gain a powerful speed boost and the beam expands, Hindering other players in the area.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393652559285325884/115.png?ex=6873f396&is=6872a216&hm=87215b348a46816a30ab76b9f4ee75b8f1284325494f3728295007451d4b7f21&",
        },
      ],
      Sova: [
        {
          name: "Owl Drone",
          description:
            "owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656789681045624/115.png?ex=6873f787&is=6872a607&hm=19ff5b3b64f79be21ecec808aaa90f90da6b701398acca0ee62c1aae2d27ae08&",
        },
        {
          name: "Shock Bolt",
          description:
            "bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656850922213406/115.png?ex=6873f796&is=6872a616&hm=88f79d6f8ca2f2299a3fc36d3ee186bd11adf485ad230ff0167aa81267bcb23c&",
        },
        {
          name: "Recon Bolt",
          description:
            "bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656927774445588/115.png?ex=6873f7a8&is=6872a628&hm=646d64465fc466d130c459b9071147756f343a6942ac7a110e0f5c8d992c17d7&",
        },
        {
          name: "Hunter's Fury",
          description:
            "bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and Revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656997320196227/115.png?ex=6873f7b9&is=6872a639&hm=e63a8b27ef26cd33014926f8f4e35cb3cd9f63a6da980dffb8d925f63c13233b&",
        },
      ],
      Breach: [
        {
          name: "Aftershock",
          description:
            "fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393652870842417263/115.png?ex=6873f3e1&is=6872a261&hm=404d3f9a4c7c84522d0e6f11e90e29561e88b944caae58eaf7c6558a9f626239&",
        },
        {
          name: "Flashpoint",
          description:
            "blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to Blind all players looking at it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653128070561832/115.png?ex=6873f41e&is=6872a29e&hm=1b12e6eb2488c6da301650bb22332da483ff3d6c57388e6e0ac4cb6465992218&",
        },
        {
          name: "Fault Line",
          description:
            "seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, Concussing all players in its zone and in a line up to the zone.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653243766378576/115.png?ex=6873f43a&is=6872a2ba&hm=d751e3085ae3328b3f1820a36132dca1fb6739cb3448d60c8e118c9144ba0097&",
        },
        {
          name: "Rolling Thunder",
          description:
            "Seismic Charge. FIRE to send a cascading quake through all terrain in a large zone. The quake Concusses and knocks up anyone caught in it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656148950781962/115.png?ex=6873f6ee&is=6872a56e&hm=d1c5a9eaec5ed00988166ee0c5f236ec97a41ca29e96af600deae39a4f109be4&",
        },
      ],
      Skye: [
        {
          name: "Regrowth",
          description:
            "healing trinket. HOLD FIRE to channel, Healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656148950781962/115.png?ex=6873f6ee&is=6872a56e&hm=d1c5a9eaec5ed00988166ee0c5f236ec97a41ca29e96af600deae39a4f109be4&",
        },
        {
          name: "Trailblazer",
          description:
            "Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a Concussive blast and damaging directly hit enemies.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656269616844810/115.png?ex=6873f70b&is=6872a58b&hm=8f2f96d5067703a4a47123ceb98b5adae73ba0e7d88ca8ba846355c8e9fdbd9a&",
        },
        {
          name: "Guiding Light",
          description:
            "hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash. The flash reaches max potency after a short duration during the hawk's flight.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656353054265416/115.png?ex=6873f71f&is=6872a59f&hm=042d5114685c2deb971d942d6056b4733c837b0d77e003ad94fcac78a7358236&",
        },
        {
          name: "Seekers",
          description:
            "Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393656442569101473/115.png?ex=6873f734&is=6872a5b4&hm=4b34c7f0d5533c86ec7bcbef7aaea957b22b6ada76ee3720154da49774e95842&",
        },
      ],
      "KAY/O": [
        {
          name: "FLASH/DRIVE",
          description:
            "flash grenade. FIRE to throw. The flash grenade detonates after a short fuse, blinding anyone in line of sight. ALT FIRE to lob the grenade in an arc.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655675141361847/115.png?ex=6873f67d&is=6872a4fd&hm=e227946d657dd403dda09420119c5a25f77140258072ff3ee07dc9f4acc1f327&",
        },
        {
          name: "ZERO/POINT",
          description:
            "suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion. Enemies can destroy this blade.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655771811807312/115.png?ex=6873f694&is=6872a514&hm=1f63d160cae2dee2004dbc0a0d123373d849acaf036cf9138f83beb4edafa696&",
        },
        {
          name: "FRAG/MENT",
          description:
            "explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655559504269332/115.png?ex=6873f662&is=6872a4e2&hm=777c310d05b2f6d2257f025810c1ae74bbc526eb530e1aa622efe26df71a7bf1&",
        },
        {
          name: "NULL cmd",
          description:
            "INSTANTLY Overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are Suppressed for a short duration. While overloaded, KAY/O gains Combat Stim and can be re-stabilized if downed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655901835100220/115.png?ex=6873f6b3&is=6872a533&hm=108b9540215f23e7c2c149f3b9306d8dafaf7395ff647a7c06d0762a145ab9ec&",
        },
      ],
      Fade: [
        {
          name: "Prowler",
          description:
            "prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and Nearsight the enemy on impact.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653703336267917/115.png?ex=6873f4a7&is=6872a327&hm=e1380d1e76fe8f0b442002bc1ab70fc7b4d701fee10f0fa28035746ac5c768c0&",
        },
        {
          name: "Seize",
          description:
            "knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are Deafened, and Decayed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393653940297666700/115.png?ex=6873f4e0&is=6872a360&hm=55bf6677c140fad82607b150539aada39699bd611e6e781dec44aad6b138bdae&",
        },
        {
          name: "Haunt",
          description:
            "haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, Revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654033457348629/115.png?ex=6873f4f6&is=6872a376&hm=5bee111d732253ee5f6312a34269384b94dd892d5ef305dd7fa532aa9cb18b72&",
        },
        {
          name: "Nightfall",
          description:
            "the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are Marked by terror trails, Deafened, and Decayed.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654154769072290/115.png?ex=6873f513&is=6872a393&hm=501952564a7fa453de289e0806e0b2f45f380bc8c539eb944ed4b89d9997e5a7&",
        },
      ],
      Gekko: [
        {
          name: "Mosh Pit",
          description:
            "Mosh. FIRE to throw Mosh like a grenade. ALT FIRE to lob. Upon landing Mosh duplicates across a large area that deals a small amount of damage over time then after a short delay explodes.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654504632619018/115.png?ex=6873f566&is=6872a3e6&hm=f454ba4b88b84a01f9acd92d747510710e8ee92dc39b7971f422a1b0578271e4&",
        },
        {
          name: "Wingman",
          description:
            "Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a Concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654676368654447/115.png?ex=6873f58f&is=6872a40f&hm=614065ff584e545741d7769537cd3543ff51253e00f7356ab5123bc1aebbc792&",
        },
        {
          name: "Dizzy",
          description:
            "Dizzy. FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are Blinded.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393654888520482836/115.png?ex=6873f5c2&is=6872a442&hm=1a8c37886ddba90c9dbc1033fa20d11f4efda19457b1f0440abee386df0868ca&",
        },
        {
          name: "Thrash",
          description:
            "Thrash. FIRE to link with Thrash's mind and steer her through enemy territory. ACTIVATE to lunge forward and explode, Detaining any players in a small radius.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393655279865954467/115.png?ex=6873f61f&is=6872a49f&hm=9d6cd6d4024b7aeabeee4232aec95f17b7644d87d06c6bfe71ec319efa474f08&",
        },
      ],
      Tejo: [
        {
          name: "Stealth Drone",
          description:
            "stealth drone. FIRE to throw the drone forward, assuming direct control of its movement. FIRE again to trigger a pulse that Suppresses and Reveals enemies hit.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393657287775621120/115.png?ex=6873f7fe&is=6872a67e&hm=827a03c2a271baf4111482fded9a609e15c5cc9a2e849171c6207586832a2930&",
        },
        {
          name: "Special Delivery",
          description:
            "sticky grenade. FIRE to launch. The grenade sticks to the first surface it hits and explodes, Concussing any targets caught in the blast. ALT FIRE to launch the grenade with a single bounce instead.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393657353001242776/115.png?ex=6873f80d&is=6872a68d&hm=da8f38f4fc0e76569bda835c1f75399e1fca0c989ded912344edead19b4b5131&",
        },
        {
          name: "Guided Salvo",
          description:
            "AR targeting system. FIRE to select up to two target locations on the map. ALT FIRE to launch missiles that autonomously navigate to target locations, detonating on arrival.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393657422924746923/115.png?ex=6873f81e&is=6872a69e&hm=4b9f391836b984b34aa7e88da1ff923da72bcbe7402a91edc86e5428f44fe394&",
        },
        {
          name: "Armageddon",
          description:
            "tactical strike targeting map. FIRE to select the origin point of the strike. FIRE again to set the end point and launch the attack, unleashing a wave of explosions along the strike path. ALT FIRE during map targeting to cancel the origin point.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393657510400884837/115.png?ex=6873f833&is=6872a6b3&hm=48d5340fbf2bdc9e814570ced4100be61f1afc0caff15c1568c2722d9a248712&",
        },
      ],
      Cypher: [
        {
          name: "Trapwire",
          description:
            "trapwire. FIRE to place a destructible and covert trapwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a trapwire will be Tethered, Revealed, and Concussed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659578788347984/115.png?ex=6873fa20&is=6872a8a0&hm=d3670997811e5c6c950635da40af07205a1dfb35115d20e494fba862e820cfd4&",
        },
        {
          name: "Cyber Cage",
          description:
            "INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and plays an audio cue when enemies pass through it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659671839244318/115.png?ex=6873fa36&is=6872a8b6&hm=027777c8013ebba888388e376e8e83ab6be79a156d0855aabb0ff529f0646960&",
        },
        {
          name: "Spycam",
          description:
            "spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659744920797315/115.png?ex=6873fa48&is=6872a8c8&hm=1f65e6ab023dc9f9637a74d9bb07972a9f23b34336e323a07a7cf816cc4e2524&",
        },
        {
          name: "Neural Theft",
          description:
            "INSTANTLY use on a targeted dead enemy to download information on their team. After a brief delay, the location of all living enemy players will be Revealed twice.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659811933065318/115.png?ex=6873fa58&is=6872a8d8&hm=f84fd975770a326192b939ce3017b30fe17c09607c87818c75630fa8797d5c55&",
        },
      ],
      Sage: [
        {
          name: "Barrier Orb",
          description:
            "barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393663158287208448/115.png?ex=6873fd75&is=6872abf5&hm=f501cce2edd3f0f6f79c65eaea3eb3c24799787901906d8f32484e721a904af3&",
        },
        {
          name: "Slow Orb",
          description:
            "slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that Slows and reduces the dash speed of players caught inside of it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393663335714652180/115.png?ex=6873fda0&is=6872ac20&hm=eaa9af225e8f2ea0382f37bebeacf2bf51a6f89a346236eca8897bd6fb1dee96&",
        },
        {
          name: "Healing Orb",
          description:
            "healing orb. FIRE with your crosshairs over a damaged ally to activate a Heal-Over-Time on them. ALT FIRE while Sage is damaged to activate a self Heal-Over-Time.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393663550676795515/115.png?ex=6873fdd3&is=6872ac53&hm=0124c37dd283d0dfc396b86395f0e0451408de93d99d80af1805ddc09933e114&",
        },
        {
          name: "Resurrection",
          description:
            "resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393663816314916895/115.png?ex=6873fe12&is=6872ac92&hm=010e3f3453f80203757be9f5127180bda4a906113b58e25a341580f5f7dbb285&",
        },
      ],
      Killjoy: [
        {
          name: "Nanoswarm",
          description:
            "Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ALT FIRE to lob. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobot.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393661583254880338/115.png?ex=6873fbfe&is=6872aa7e&hm=c0bd5994832caaff780292a27232ec678d4cc61b6a3fec2de9a0e85f33343745&",
        },
        {
          name: "Alarmbot",
          description:
            "covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes and applies Vulnerable to enemies in the area. HOLD EQUIP to recall a deployed bot.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393661805485883494/115.png?ex=6873fc33&is=6872aab3&hm=18d6df7912ccea37d4046bba6e057474844d912161c93bebffa328305b7d1c54&",
        },
        {
          name: "Turret",
          description:
            "Turret. FIRE to deploy a turret that fires at enemies in a 100 degree cone. ALT FIRE to swap turret direction. HOLD EQUIP to recall the deployed turret.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393662242863579136/115.png?ex=6873fc9b&is=6872ab1b&hm=2c4794bb9639e91ef0d89503ccfa071f4d9d25eb00fe3de86ecbcf2448d27292&",
        },
        {
          name: "Lockdown",
          description:
            "the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393662500532125856/115.png?ex=6873fcd9&is=6872ab59&hm=9b79a3b3abd64acee8e7c5905461da93d3532b20769c1c5a26946199b925ba7f&",
        },
      ],
      Chamber: [
        {
          name: "Trademark",
          description:
            "trap that scans for enemies. FIRE to place it on the ground. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that Slows players caught inside of it. The trap can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393658776296489071/115.png?ex=6873f961&is=6872a7e1&hm=63ce80ad8da7a490c19810a8b181ab77f30601a7e3118cbce3a5e4ce1bdc8430&",
        },
        {
          name: "Headhunter",
          description:
            "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393658847327027396/115.png?ex=6873f972&is=6872a7f2&hm=d8448617f57e827a12c7b93ae4c922cdc6fbf07516e60429640791e5f285cbb6&",
        },
        {
          name: "Rendezvous",
          description:
            "teleport anchor. FIRE to place it on the ground. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393658917254332529/115.png?ex=6873f982&is=6872a802&hm=b29939f480b97e5b7e12215cedf6880772d5a93c507efbda467220579d3a0613&",
        },
        {
          name: "Tour De Force",
          description:
            "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit to the upper body. ALT FIRE to aim down sights. Killing an enemy creates a lingering field that Slows players caught inside of it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393658984501739693/115.png?ex=6873f992&is=6872a812&hm=7bce9b11342f258e6d2952d4fa10c8256a8f4218f61f558616ae93ddf38489ee&",
        },
      ],
      Deadlock: [
        {
          name: "Barrier Mesh",
          description:
            "Barrier Mesh disc. FIRE to throw forward. Upon landing, the disc generates barriers from the origin point that block character movement.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393659960675794975/115.png?ex=6873fa7b&is=6872a8fb&hm=2d7742f8ffac4f5c049d8e75e791fe674b06ae6bb6cc52e0a0bd8e117f168d9b&",
        },
        {
          name: "Sonic Sensor",
          description:
            "Sonic Sensor. FIRE to deploy. The sensor monitors an area for enemies making sound. It concusses that area if footsteps, weapons fire, or significant noise are detected. This ability can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393660228221931642/115.png?ex=6873fabb&is=6872a93b&hm=5a7c4fd9b6cad8f62ab5b4875047d0fc2a5bb1b2416cc14ce4fc101490cc3ad9&",
        },
        {
          name: "GravNet",
          description:
            "GravNet grenade. FIRE to throw. ALT FIRE to lob. The GravNet detonates upon landing, forcing any characters caught within to crouch and move slowly.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393660452986159176/115.png?ex=6873faf0&is=6872a970&hm=b203a6e230bf550a9f30be836dcc26a4cc38d60b50f948f3d48b1b76b27719c9&",
        },
        {
          name: "Annihilation",
          description:
            "Nanowire Accelerator. FIRE to unleash a pulse of nanowires that captures the first enemy contacted. The cocooned enemy is pulled along a nanowire path and will die unless they are freed. The nanowire cocoon is destructible.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393660936472100874/115.png?ex=6873fb64&is=6872a9e4&hm=aded5c048855a453a4a954971456fe33b4d2a62470f70d394acb98e54ef7da85&",
        },
      ],
      Vyse: [
        {
          name: "Razorvine",
          description:
            "nest of liquid metal. FIRE to launch. Upon landing, the nest becomes invisible. When ACTIVATED, it sprawls out into a large razorvine nest which slows and damages all players who move through it.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393664002055209000/115.png?ex=6873fe3f&is=6872acbf&hm=0a733f24cac91274176f06e7aad67513385e319c9964aff1cf4ad78a9609f583&",
        },
        {
          name: "Shear",
          description:
            "filaments of liquid metal. FIRE to place a hidden wall trap. When an enemy crosses, an indestructible wall bursts from the ground behind them. The wall lasts for a brief time before dissipating.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393664136759611433/115.png?ex=6873fe5f&is=6872acdf&hm=dfc777dc92fecf6dab256e08384c82448e6f7fe28791cfd46150f0f5f32c51bf&",
        },
        {
          name: "Arc Rose",
          description:
            "Arc Rose. Target a surface and FIRE to place a stealthed Arc Rose, or ALT FIRE to place the Arc Rose through it. REUSE to blind all players looking at it. This ability can be picked up to be REDEPLOYED.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393664198189514752/115.png?ex=6873fe6d&is=6872aced&hm=d686a9c847bb8ce84ed8d940437d9b8621399258ad021830e7b2c37cf193e473&",
        },
        {
          name: "Steel Garden",
          description:
            "bramble of liquid metal. FIRE to send the metal erupting from you as a torrent of metal thorns, JAMMING enemy primary weapons after a brief windup.",
          icon: "https://cdn.discordapp.com/attachments/1393593969618849937/1393664260114223245/115.png?ex=6873fe7c&is=6872acfc&hm=f0f856614cc690f830b6bd81573bdd59030200097316f88b4f43853dfc12bf62&",
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
