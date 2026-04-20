export interface CardMetadata {
  code: string;
  name: string;
  rarity:
    | "Common"
    | "Rare"
    | "Super Rare"
    | "Ultra Rare"
    | "Secret Rare"
    | "Short Print"
    | "Super Short Print";
  imageUrl: string;
}

export const ALL_CARDS: CardMetadata[] = [
  {
    code: "LOB-EN000",
    name: "Tri-Horned Dragon",
    rarity: "Secret Rare",
    imageUrl:
      "https://ms.yugipedia.com//5/55/TriHornedDragon-LOB-EN-ScR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN001",
    name: "Blue-Eyes White Dragon",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//f/f8/BlueEyesWhiteDragon-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN002",
    name: "Hitotsu-Me Giant",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/0e/HitotsuMeGiant-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN003",
    name: "Flame Swordsman",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/06/FlameSwordsman-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN004",
    name: "Skull Servant",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/b4/SkullServant-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN005",
    name: "Dark Magician",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/0a/DarkMagician-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN006",
    name: "Gaia The Fierce Knight",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//d/d9/GaiaTheFierceKnight-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN007",
    name: "Celtic Guardian",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//a/a8/CelticGuardian-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN008",
    name: "Basic Insect",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/13/BasicInsect-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN009",
    name: "Mammoth Graveyard",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/cf/MammothGraveyard-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN010",
    name: "Silver Fang",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/3f/SilverFang-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN011",
    name: "Dark Gray",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/d7/DarkGray-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN012",
    name: "Trial of Nightmare",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/8d/TrialofNightmare-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN013",
    name: "Nemuriko",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/ef/Nemuriko-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN014",
    name: "The 13th Grave",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/ef/The13thGrave-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN015",
    name: "Charubin the Fire Knight",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//a/a6/CharubintheFireKnight-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN016",
    name: "Flame Manipulator",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a5/FlameManipulator-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN017",
    name: "Monster Egg",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/41/MonsterEgg-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN018",
    name: "Firegrass",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/59/Firegrass-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN019",
    name: "Darkfire Dragon",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/89/DarkfireDragon-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN020",
    name: "Dark King of the Abyss",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/60/DarkKingoftheAbyss-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN021",
    name: "Fiend Reflection #2",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/70/FiendReflection2-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN022",
    name: "Fusionist",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/48/Fusionist-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN023",
    name: "Turtle Tiger",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/40/TurtleTiger-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN024",
    name: "Petit Dragon",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/06/PetitDragon-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN025",
    name: "Petit Angel",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/97/PetitAngel-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN026",
    name: "Hinotama Soul",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/2a/HinotamaSoul-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN027",
    name: "Aqua Madoor",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/74/AquaMadoor-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN028",
    name: "Kagemusha of the Blue Flame",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/46/KagemushaoftheBlueFlame-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN029",
    name: "Flame Ghost",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/8b/FlameGhost-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN030",
    name: "Two-Mouth Darkruler",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/4e/TwoMouthDarkruler-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN031",
    name: "Dissolverock",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c5/Dissolverock-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN032",
    name: "Root Water",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/4f/RootWater-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN033",
    name: "The Furious Sea King",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/6e/TheFuriousSeaKing-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN034",
    name: "Green Phantom King",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c7/GreenPhantomKing-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN035",
    name: "Ray & Temperature",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/19/RayTemperature-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN036",
    name: "King Fog",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/6c/KingFog-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN037",
    name: "Mystical Sheep #2",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/fa/MysticalSheep2-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN038",
    name: "Masaki the Legendary Swordsman",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/0c/MasakitheLegendarySwordsman-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN039",
    name: "Kurama",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/e1/Kurama-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN040",
    name: "Legendary Sword",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//4/4a/LegendarySword-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN041",
    name: "Beast Fangs",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//7/73/BeastFangs-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN042",
    name: "Violet Crystal",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//4/4e/VioletCrystal-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN043",
    name: "Book of Secret Arts",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//6/62/BookofSecretArts-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN044",
    name: "Power of Kaishin",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//9/9b/PowerofKaishin-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN045",
    name: "Dragon Capture Jar",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//6/6c/DragonCaptureJar-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN046",
    name: "Forest",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/57/Forest-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN047",
    name: "Wasteland",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/d5/Wasteland-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN048",
    name: "Mountain",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c0/Mountain-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN049",
    name: "Sogen",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/d6/Sogen-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN050",
    name: "Umi",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/00/Umi-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN051",
    name: "Yami",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/ad/Yami-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN052",
    name: "Dark Hole",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//f/f0/DarkHole-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN053",
    name: "Raigeki",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/1d/Raigeki-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN054",
    name: "Red Medicine",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/35/RedMedicine-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN055",
    name: "Sparks",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/86/Sparks-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN056",
    name: "Hinotama",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/35/Hinotama-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN057",
    name: "Fissure",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//d/de/Fissure-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN058",
    name: "Trap Hole",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/11/TrapHole-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN059",
    name: "Polymerization",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/e5/Polymerization-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN060",
    name: "Remove Trap",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/46/RemoveTrap-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN061",
    name: "Two-Pronged Attack",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/01/TwoProngedAttack-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN062",
    name: "Mystical Elf",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//2/2b/MysticalElf-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN063",
    name: "Tyhone",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/b7/Tyhone-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN064",
    name: "Beaver Warrior",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a4/BeaverWarrior-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN065",
    name: "Gravedigger Ghoul",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//6/6c/GravediggerGhoul-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN066",
    name: "Curse of Dragon",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/e1/CurseofDragon-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN067",
    name: "Karbonala Warrior",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//d/d7/KarbonalaWarrior-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN068",
    name: "Giant Soldier of Stone",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/8e/GiantSoldierofStone-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN069",
    name: "Uraby",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/ce/Uraby-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN070",
    name: "Red-Eyes Black Dragon",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//b/bc/RedEyesBlackDragon-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN071",
    name: "Reaper of the Cards",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//5/53/ReaperoftheCards-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN072",
    name: "Witty Phantom",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/9c/WittyPhantom-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN073",
    name: "Larvas",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/2f/Larvas-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN074",
    name: "Hard Armor",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/17/HardArmor-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN075",
    name: "Man Eater",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c8/ManEater-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN076",
    name: "M-Warrior #1",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/7b/MWarrior1-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN077",
    name: "M-Warrior #2",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/b8/MWarrior2-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN078",
    name: "Spirit of the Harp",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//5/5a/SpiritoftheHarp-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN079",
    name: "Armaill",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/42/Armaill-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN080",
    name: "Terra the Terrible",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/1e/TerratheTerrible-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN081",
    name: "Frenzied Panda",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/14/FrenziedPanda-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN082",
    name: "Kumootoko",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/e5/Kumootoko-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN083",
    name: "Meda Bat",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/64/MedaBat-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN084",
    name: "Enchanting Mermaid",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/ff/EnchantingMermaid-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN085",
    name: "Fireyarou",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/1d/Fireyarou-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN086",
    name: "Dragoness the Wicked Knight",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//6/63/DragonesstheWickedKnight-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN087",
    name: "One-Eyed Shield Dragon",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/13/OneEyedShieldDragon-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN088",
    name: "Dark Energy",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//b/b9/DarkEnergy-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN089",
    name: "Laser Cannon Armor",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//6/62/LaserCannonArmor-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN090",
    name: "Vile Germs",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//2/2e/VileGerms-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN091",
    name: "Silver Bow and Arrow",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//f/fd/SilverBowandArrow-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN092",
    name: "Dragon Treasure",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//b/ba/DragonTreasure-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN093",
    name: "Electro-Whip",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//1/1c/ElectroWhip-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN094",
    name: "Mystical Moon",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//a/a9/MysticalMoon-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN095",
    name: "Stop Defense",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/eb/StopDefense-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN096",
    name: "Machine Conversion Factory",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//8/85/MachineConversionFactory-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN097",
    name: "Raise Body Heat",
    rarity: "Super Short Print",
    imageUrl:
      "https://ms.yugipedia.com//a/ab/RaiseBodyHeat-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN098",
    name: "Follow Wind",
    rarity: "Super Short Print",
    imageUrl:
      "https://ms.yugipedia.com//c/c5/FollowWind-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN099",
    name: "Goblin's Secret Remedy",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//b/b7/GoblinsSecretRemedy-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN100",
    name: "Final Flame",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/e8/FinalFlame-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN101",
    name: "Swords of Revealing Light",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/47/SwordsofRevealingLight-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN102",
    name: "Metal Dragon",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/ef/MetalDragon-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN103",
    name: "Spike Seadra",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/ae/SpikeSeadra-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN104",
    name: "Tripwire Beast",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/53/TripwireBeast-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN105",
    name: "Skull Red Bird",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/f8/SkullRedBird-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN106",
    name: "Armed Ninja",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//f/fd/ArmedNinja-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN107",
    name: "Flower Wolf",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/42/FlowerWolf-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN108",
    name: "Man-Eater Bug",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//9/90/ManEaterBug-LOB-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN109",
    name: "Sand Stone",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c3/SandStone-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN110",
    name: "Hane-Hane",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//f/f2/HaneHane-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN111",
    name: "Misairuzame",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/f0/Misairuzame-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN112",
    name: "Steel Ogre Grotto #1",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/38/SteelOgreGrotto1-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN113",
    name: "Lesser Dragon",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/cb/LesserDragon-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN114",
    name: "Darkworld Thorns",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/ff/DarkworldThorns-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN115",
    name: "Drooling Lizard",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/ee/DroolingLizard-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN116",
    name: "Armored Starfish",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/6d/ArmoredStarfish-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN117",
    name: "Succubus Knight",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/54/SuccubusKnight-LOB-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN118",
    name: "Monster Reborn",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//f/fb/MonsterReborn-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN119",
    name: "Pot of Greed",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//5/50/PotofGreed-LOB-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN120",
    name: "Right Leg of the Forbidden One",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//a/a8/RightLegoftheForbiddenOne-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN121",
    name: "Left Leg of the Forbidden One",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/74/LeftLegoftheForbiddenOne-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN122",
    name: "Right Arm of the Forbidden One",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//a/ad/RightArmoftheForbiddenOne-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN123",
    name: "Left Arm of the Forbidden One",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/05/LeftArmoftheForbiddenOne-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN124",
    name: "Exodia the Forbidden One",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//b/b0/ExodiatheForbiddenOne-LOB-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "LOB-EN125",
    name: "Gaia the Dragon Champion",
    rarity: "Secret Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/85/GaiatheDragonChampion-LOB-EN-ScR-UE-25thAnniversaryEdition.png",
  },
];

export const getCardsInSet = (code: string) => {
  return ALL_CARDS.filter((card) => card.code.startsWith(code));
};

export const findCardByCode = (code: string) => {
  const card = ALL_CARDS.find((card) => card.code === code);
  if (!card) {
    throw Error(`could not find card by code: ${code}`);
  }

  return card;
};

export const getPackPointsCost = (code: string) => {
  const card = findCardByCode(code);
  switch (card.rarity) {
    case "Common":
      return 35;
    case "Rare":
      return 75;
    case "Super Rare":
      return 250;
    case "Ultra Rare":
      return 600;
    case "Secret Rare":
      return 1200;
    case "Short Print":
      return 1500;
    case "Super Short Print":
      return 3000;
    default:
      return Infinity;
  }
};
