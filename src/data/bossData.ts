export type DifficultyLevel = "Gamma" | "Beta" | "Alpha";

export interface BossRow {
  difficulty: DifficultyLevel;
  level: string;
  artifacts: string;
  tributes: string;
  element?: string;
  tekUnlocks: string;
  // For special tables like Overseer/Titans
  extraLabel?: string;
  extraValue?: string;
}

export interface Boss {
  name: string;
  color: string; // tailwind color for accent dot
  note?: string;
  headers: string[];
  rows: BossRow[];
}

export interface MapData {
  id: string;
  label: string;
  special?: boolean; // for Astraeos
  bosses: Boss[];
}

export const mapsData: MapData[] = [
  {
    id: "island",
    label: "Island",
    bosses: [
      {
        name: "Broodmother Lysrix",
        color: "bg-primary",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "30", artifacts: "Clever, Hunter, Massive", tributes: "-", element: "24", tekUnlocks: "Replicator, Boots, Foundation, Sloped Roof" },
          { difficulty: "Beta", level: "50", artifacts: "Clever, Hunter, Massive", tributes: "Argie Talon (5), Sarco Skin (5), Titanoboa Venom (5), Sauropod Vertebra (5)", element: "68", tekUnlocks: "Generator, Leggings, Sloped Wall, Staircase, Window Frame" },
          { difficulty: "Alpha", level: "70", artifacts: "Clever, Hunter, Massive", tributes: "Argie Talon (10), Sarco Skin (10), Titanoboa Venom (10), Sauropod Vertebra (10)", element: "178", tekUnlocks: "Helmet, Turret, Large Wall, Pillar, Mosasaur Saddle" },
        ],
      },
      {
        name: "Megapithecus",
        color: "bg-primary",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "45", artifacts: "Brute, Devourer, Pack", tributes: "-", element: "48", tekUnlocks: "Replicator, Gauntlets, Trapdoor Frame" },
          { difficulty: "Beta", level: "65", artifacts: "Brute, Devourer, Pack", tributes: "Megalania Toxin (5), Megalodon Tooth (5), Spino Sail (5), Therizino Claws (5), Thyla Hook-claw (5)", element: "132", tekUnlocks: "Dedicated Storage, Rifle, Window Frame, Doorframe" },
          { difficulty: "Alpha", level: "85", artifacts: "Brute, Devourer, Pack", tributes: "Megalania Toxin (10), Megalodon Tooth (10), Spino Sail (10), Therizino Claws (10), Thyla Hook-claw (10)", element: "264", tekUnlocks: "Grenade, Rex Saddle, Large Doorframe" },
        ],
      },
      {
        name: "The Dragon",
        color: "bg-primary",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "55", artifacts: "Cunning, Immune, Skylord, Strong", tributes: "-", element: "96", tekUnlocks: "Replicator, Trough, Ceiling, Tapejara Saddle" },
          { difficulty: "Beta", level: "75", artifacts: "Cunning, Immune, Skylord, Strong", tributes: "Allo Brain (5), Basilo Blubber (5), Giga Heart (1), Tuso Tentacle (5), Rex Arm (5), Yuty Lung (5)", element: "264", tekUnlocks: "Dedicated Storage, Forcefield, Vacuum Compartment, Transmitter" },
          { difficulty: "Alpha", level: "100", artifacts: "Cunning, Immune, Skylord, Strong", tributes: "Allo Brain (10), Basilo Blubber (10), Giga Heart (2), Tuso Tentacle (10), Rex Arm (15), Yuty Lung (10)", element: "528", tekUnlocks: "Chestpiece, Transmitter, Teleporter, Cloning Chamber" },
        ],
      },
      {
        name: "The Overseer (Tek Cave)",
        color: "bg-foreground border border-primary",
        note: "Only the cave opener needs the level requirement. Any level can enter the cave/boss once the door is open.",
        headers: ["Difficulty", "Lvl", "Trophies Needed", "Alpha Tributes", "Reward"],
        rows: [
          { difficulty: "Gamma", level: "60", artifacts: "Gamma Broodmother, Megapithecus, Dragon Trophies", tributes: "-", tekUnlocks: "+5 Max Player Levels" },
          { difficulty: "Beta", level: "80", artifacts: "Beta Broodmother, Megapithecus, Dragon Trophies", tributes: "Alpha Raptor Claw (1), Alpha Carno Arm (1), Alpha Rex Tooth (1)", tekUnlocks: "+10 Max Player Levels" },
          { difficulty: "Alpha", level: "100", artifacts: "Alpha Broodmother, Megapithecus, Dragon Trophies", tributes: "Raptor Claw, Carno Arm, Rex Tooth, Megalodon Fin, Mosasaur Tooth, Tuso Eye, Leedsichthys Blubber (1 Each)", tekUnlocks: "+15 Max Player Levels, Tek Binoculars" },
        ],
      },
    ],
  },
  {
    id: "scorched",
    label: "Scorched",
    bosses: [
      {
        name: "The Manticore",
        color: "bg-orange-500",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "55", artifacts: "Crag, Destroyer, Gatekeeper", tributes: "Fire Talon (2), Lightning Talon (2), Poison Talon (2)", element: "68", tekUnlocks: "Generator, Trough, Replicator, Foundation, Ceiling" },
          { difficulty: "Beta", level: "70", artifacts: "Crag, Destroyer, Gatekeeper", tributes: "Fire Talon (10), Lightning Talon (10), Poison Talon (10)", element: "244", tekUnlocks: "Dedicated Storage, Rifle, Gauntlets, Stairs" },
          { difficulty: "Alpha", level: "95", artifacts: "Crag, Destroyer, Gatekeeper", tributes: "Fire Talon (20), Lightning Talon (20), Poison Talon (20)", element: "514", tekUnlocks: "Shield, Rex Saddle, Forcefield, Cloning Chamber, Teleporter" },
        ],
      },
    ],
  },
  {
    id: "center",
    label: "Center",
    bosses: [
      {
        name: "The Center Arena (Dual Boss)",
        color: "bg-emerald-500",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "70", artifacts: "Brute, Devourer, Massive, Clever, Hunter, Pack", tributes: "-", element: "92", tekUnlocks: "Replicator, Generator, Shield, Gauntlets, Boots" },
          { difficulty: "Beta", level: "80", artifacts: "Brute, Devourer, Massive, Clever, Hunter, Pack", tributes: "Basilo Blubber, Megalania Toxin, Megalodon Tooth, Sarco Skin, Sauropod Vertebrae, Spino Sail, Thylacoleo Hook-claw, Titanoboa Venom, Tusoteuthis Tentacle (10 Each)", element: "200", tekUnlocks: "Transmitter, Teleporter, Forcefield, Rifle" },
          { difficulty: "Alpha", level: "90", artifacts: "Brute, Devourer, Massive, Clever, Hunter, Pack", tributes: "Basilo Blubber, Megalania Toxin, Megalodon Tooth, Sarco Skin, Sauropod Vertebrae, Spino Sail, Thylacoleo Hook-claw, Titanoboa Venom, Tusoteuthis Tentacle (25 Each)", element: "442", tekUnlocks: "Full Tek Set (Island Equivalent)" },
        ],
      },
    ],
  },
  {
    id: "aberration",
    label: "Aberration",
    bosses: [
      {
        name: "Rockwell",
        color: "bg-purple-500",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "60", artifacts: "Depths, Shadows, Stalker", tributes: "-", element: "40", tekUnlocks: "Sleeping Pod, Replicator, Generator" },
          { difficulty: "Beta", level: "75", artifacts: "Depths, Shadows, Stalker", tributes: "Basilisk Scale (4), Nameless Venom (12), Reaper Pheromone Gland (2), Rock Drake Feather (2)", element: "110", tekUnlocks: "Rock Drake Saddle, Railgun, Transmitter" },
          { difficulty: "Alpha", level: "100", artifacts: "Depths, Shadows, Stalker", tributes: "Basilisk Scale (8), Nameless Venom (20), Reaper Gland (7), Drake Feather (7), Alpha Basilisk Fang (1), Alpha Karkinos Claw (1), Alpha Reaper King Barb (1)", element: "220", tekUnlocks: "Tek Mutator, Chestpiece, +15 Max Level, Cloning Chamber, Teleporter" },
        ],
      },
    ],
  },
  {
    id: "extinction",
    label: "Extinction",
    bosses: [
      {
        name: "The Titans",
        color: "bg-red-500",
        headers: ["Titan", "Lvl", "Artifact", "Tribute Cost", "Key Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "1", artifacts: "Chaos", tributes: "Corrupt Heart (100), Fire Talon (10), Sarco Skin (10)", tekUnlocks: "Dedicated Storage, Boots, Railgun" },
          { difficulty: "Beta", level: "1", artifacts: "Growth", tributes: "Corrupt Heart (100), Sauropod Vertebra (10), Rex Arm (10)", tekUnlocks: "Gauntlets, Replicator, Transmitter" },
          { difficulty: "Alpha", level: "1", artifacts: "Void", tributes: "Corrupt Heart (100), Spino Sail (10), Therizino Claws (10)", tekUnlocks: "Generator, Leggings, Rifle" },
        ],
      },
      {
        name: "King Titan",
        color: "bg-red-600",
        headers: ["Difficulty", "Lvl", "Trophies", "Extra Tributes", "Key Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "1", artifacts: "Desert, Forest, Ice Titan Trophies", tributes: "Corrupt Heart (150), Alpha Rex Tooth (5), Titanoboa Venom (10)", tekUnlocks: "Tek Bridge, M.O.M.I., Replicator" },
          { difficulty: "Beta", level: "1", artifacts: "All 3 Titans + Gamma King Trophy", tributes: "Corrupt Heart (300), Alpha Rex Tooth (10), Titanoboa Venom (20)", tekUnlocks: "M.R.L.M., M.S.C.M., M.D.S.M." },
          { difficulty: "Alpha", level: "1", artifacts: "All 3 Titans + Beta King Trophy", tributes: "Corrupt Heart (300), Alpha Rex Tooth (10), Giga Heart (20), Spino Sail (20), Titanoboa Venom (20)", tekUnlocks: "Mega Mek, +Max Levels Ascension" },
        ],
      },
    ],
  },
  {
    id: "ragnarok",
    label: "Ragnarok",
    bosses: [
      {
        name: "Nunatak (Remastered Ice Wyvern)",
        color: "bg-cyan-500",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "70", artifacts: "All 10 Rag Artifacts", tributes: "-", element: "100", tekUnlocks: "Gate, Light, Replicator, Generator" },
          { difficulty: "Beta", level: "80", artifacts: "All 10 Rag Artifacts", tributes: "Argie Talon (10), Basilo Blubber (5), Megalania Toxin (10), Megalodon Tooth (10), Sarco Skin (10), Sauropod Vertebra (10), Spino Sail (10), Thyla Claw (10), Boa Venom (10), Tuso Tentacle (10)", element: "275", tekUnlocks: "Sword, Transmitter, Forcefield, Rifle, Dedicated Storage" },
          { difficulty: "Alpha", level: "90", artifacts: "All 10 Rag Artifacts", tributes: "Above Tributes (25 Each) + Tuso Tentacle (25) [No Giga Heart]", element: "550", tekUnlocks: "Chestpiece, Shield, Cloning Chamber, Teleporter" },
        ],
      },
    ],
  },
  {
    id: "valguero",
    label: "Valguero",
    bosses: [
      {
        name: "Grendel (The Skull King)",
        color: "bg-yellow-500",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Key Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "70", artifacts: "Devourer, Pack, Skylord", tributes: "Allo Brain (5), Argie Talon (5), Sarco Skin (5), Venom (5), Vertebra (5)", element: "90", tekUnlocks: "Tapejara Saddle, Ceiling, Generator" },
          { difficulty: "Beta", level: "80", artifacts: "Cunning, Immune, Strong", tributes: "Allo Brain (10), Rex Arm (10), Argie Talon (8), Skin (8), Venom (5), Vertebra (8)", element: "255", tekUnlocks: "Transmitter, Rifle, Forcefield, Gateway" },
          { difficulty: "Alpha", level: "90", artifacts: "Brute, Crag, Destroyer, Gatekeeper", tributes: "Giga Heart (2), Rex Arm (15), Allo Brain (15), Talon (15), Skin (10), Venom (10)", element: "520", tekUnlocks: "Large Teleporter, Chestpiece, Cloning Chamber" },
        ],
      },
    ],
  },
  {
    id: "astraeos",
    label: "Astraeos",
    special: true,
    bosses: [
      {
        name: "Natrix (Medusa)",
        color: "bg-indigo-500",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "30", artifacts: "Clever, Hunter, Massive", tributes: "-", element: "140", tekUnlocks: "Tek Foundation, Replicator, Triangle Ceiling, Triangle Foundation, Triangle Roof" },
          { difficulty: "Beta", level: "50", artifacts: "Clever, Hunter, Massive", tributes: "Argie Talon (5), Sarco Skin (5), Sauropod Vertebra (5), Titanoboa Venom (5)", element: "300", tekUnlocks: "Ramp, Sloped Walls (L/R), Boots, Ceiling, Fence Foundation, Foundation, Ladder, Pillar, Railing, Replicator, Triangle Pieces, Wall" },
          { difficulty: "Alpha", level: "70", artifacts: "Clever, Hunter, Massive", tributes: "Argie Talon (10), Sarco Skin (10), Sauropod Vertebra (10), Titanoboa Venom (10)", element: "600", tekUnlocks: "Helmet, Mosasaur Saddle, Turret, Full Structure Set (Ramp, Walls, Foundations, etc.)" },
        ],
      },
      {
        name: "Thodes (Cyclops)",
        color: "bg-indigo-500",
        headers: ["Difficulty", "Lvl", "Artifacts", "Tributes (Qty)", "Element", "Tek Unlocks"],
        rows: [
          { difficulty: "Gamma", level: "30", artifacts: "Brute, Pack, Devourer", tributes: "-", element: "200", tekUnlocks: "Tek Replicator, Tek Doors & Windows, Tek Gauntlets" },
          { difficulty: "Beta", level: "50", artifacts: "Brute, Pack, Devourer", tributes: "Megalodon Tooth (5), Therizino Claws (5), Megalania Toxin (5), Spino Sail (5), Thyla Hook-claw (5)", tekUnlocks: "Beta Unlocks Pending" },
          { difficulty: "Alpha", level: "70", artifacts: "Brute, Pack, Devourer", tributes: "Megalodon Tooth (10), Therizino Claws (10), Megalania Toxin (10), Spino Sail (10), Thyla Hook-claw (10)", element: "750", tekUnlocks: "Replicator, Gauntlets, Rifle, Gate, Gateway, Large Cellar Door, Doors & Windows, Rex Saddle, Generator, Grenade, Trough, Large Wall" },
        ],
      },
    ],
  },
];
