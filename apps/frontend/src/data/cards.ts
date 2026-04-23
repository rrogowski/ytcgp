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
  {
    code: "SDY-001",
    name: "Mystical Elf",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//1/15/MysticalElf-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-002",
    name: "Feral Imp",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//b/ba/FeralImp-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-003",
    name: "Winged Dragon, Guardian of the Fortress #1",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/30/WingedDragonGuardianoftheFortress1-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-004",
    name: "Summoned Skull",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//0/04/SummonedSkull-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-005",
    name: "Beaver Warrior",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//c/ce/BeaverWarrior-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-006",
    name: "Dark Magician",
    rarity: "Ultra Rare",
    imageUrl: "https://ms.yugipedia.com//8/84/DarkMagician-SDY-NA-UR-1E.png",
  },
  {
    code: "SDY-007",
    name: "Gaia The Fierce Knight",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/f2/GaiaTheFierceKnight-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-008",
    name: "Curse of Dragon",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//c/c8/CurseofDragon-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-009",
    name: "Celtic Guardian",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//8/8c/CelticGuardian-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-010",
    name: "Mammoth Graveyard",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//3/35/MammothGraveyard-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-011",
    name: "Great White",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//3/3f/GreatWhite-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-012",
    name: "Silver Fang",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//a/af/SilverFang-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-013",
    name: "Giant Soldier of Stone",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/cd/GiantSoldierofStone-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-014",
    name: "Dragon Zombie",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//b/bf/DragonZombie-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-015",
    name: "Doma The Angel of Silence",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/ae/DomaTheAngelofSilence-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-016",
    name: "Ansatsu",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//f/f9/Ansatsu-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-017",
    name: "Witty Phantom",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//4/4f/WittyPhantom-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-018",
    name: "Claw Reacher",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/7d/ClawReacher-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-019",
    name: "Mystic Clown",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//2/2a/MysticClown-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-020",
    name: "Sword of Dark Destruction",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/2e/SwordofDarkDestruction-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-021",
    name: "Book of Secret Arts",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/7f/BookofSecretArts-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-022",
    name: "Dark Hole",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//1/1d/DarkHole-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-023",
    name: "Dian Keto the Cure Master",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/9f/DianKetotheCureMaster-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-024",
    name: "Ancient Elf",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//b/b1/AncientElf-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-025",
    name: "Magical Ghost",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/71/MagicalGhost-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-026",
    name: "Fissure",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//5/53/Fissure-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-027",
    name: "Trap Hole",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//6/68/TrapHole-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-028",
    name: "Two-Pronged Attack",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//4/4e/TwoProngedAttack-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-029",
    name: "De-Spell",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//6/6e/DeSpell-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-030",
    name: "Monster Reborn",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//0/03/MonsterReborn-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-031",
    name: "Reinforcements",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//1/12/Reinforcements-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-032",
    name: "Change of Heart",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//5/52/ChangeofHeart-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-033",
    name: "The Stern Mystic",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/77/TheSternMystic-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-034",
    name: "Wall of Illusion",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//2/2b/WallofIllusion-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-035",
    name: "Neo the Magic Swordsman",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/86/NeotheMagicSwordsman-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-036",
    name: "Baron of the Fiend Sword",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/f6/BaronoftheFiendSword-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-037",
    name: "Man-Eating Treasure Chest",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/63/ManEatingTreasureChest-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-038",
    name: "Sorcerer of the Doomed",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/08/SorcereroftheDoomed-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-039",
    name: "Last Will",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//1/1e/LastWill-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-040",
    name: "Waboku",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//f/f6/Waboku-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-041",
    name: "Soul Exchange",
    rarity: "Super Rare",
    imageUrl: "https://ms.yugipedia.com//4/4f/SoulExchange-SDY-NA-SR-1E.jpg",
  },
  {
    code: "SDY-042",
    name: "Card Destruction",
    rarity: "Super Rare",
    imageUrl: "https://ms.yugipedia.com//8/87/CardDestruction-SDY-NA-SR-1E.jpg",
  },
  {
    code: "SDY-043",
    name: "Trap Master",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//0/07/TrapMaster-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-044",
    name: "Dragon Capture Jar",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//f/f4/DragonCaptureJar-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-045",
    name: "Yami",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//a/ab/Yami-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-046",
    name: "Man-Eater Bug",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//2/29/ManEaterBug-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-047",
    name: "Reverse Trap",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//0/0e/ReverseTrap-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-048",
    name: "Remove Trap",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//f/f8/RemoveTrap-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDY-049",
    name: "Castle Walls",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//c/ce/CastleWalls-SDY-NA-C-1E.png",
  },
  {
    code: "SDY-050",
    name: "Ultimate Offering",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//2/22/UltimateOffering-SDY-NA-C-1E.jpg",
  },
  {
    code: "SDK-001",
    name: "Blue-Eyes White Dragon",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/7a/BlueEyesWhiteDragon-SDK-NA-UR-UE.png",
  },
  {
    code: "SDK-002",
    name: "Hitotsu-Me Giant",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//8/8e/HitotsuMeGiant-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-003",
    name: "Ryu-Kishin",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//a/a5/RyuKishin-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-004",
    name: "The Wicked Worm Beast",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/3e/TheWickedWormBeast-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-005",
    name: "Battle Ox",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/7d/BattleOx-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-006",
    name: "Koumori Dragon",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//9/93/KoumoriDragon-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-007",
    name: "Judge Man",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/73/JudgeMan-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-008",
    name: "Rogue Doll",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//e/e3/RogueDoll-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-009",
    name: "Kojikocy",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//6/6b/Kojikocy-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-010",
    name: "Uraby",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//9/9a/Uraby-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-011",
    name: "Gyakutenno Megami",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//5/57/GyakutennoMegami-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-012",
    name: "Mystic Horseman",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//e/e1/MysticHorseman-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-013",
    name: "Terra the Terrible",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//4/47/TerratheTerrible-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-014",
    name: "Dark Titan of Terror",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a7/DarkTitanofTerror-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-015",
    name: "Dark Assailant",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/8c/DarkAssailant-SDK-NA-C-UE-Reprint.png",
  },
  {
    code: "SDK-016",
    name: "Master & Expert",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//a/a6/MasterExpert-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-017",
    name: "Unknown Warrior of Fiend",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/6c/UnknownWarriorofFiend-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-018",
    name: "Mystic Clown",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/77/MysticClown-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-019",
    name: "Ogre of the Black Shadow",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/8e/OgreoftheBlackShadow-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-020",
    name: "Dark Energy",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//2/22/DarkEnergy-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-021",
    name: "Invigoration",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//c/c1/Invigoration-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-022",
    name: "Dark Hole",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//3/3d/DarkHole-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-023",
    name: "Ookazi",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//9/94/Ookazi-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-024",
    name: "Ryu-Kishin Powered",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//a/ad/RyuKishinPowered-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-025",
    name: "Swordstalker",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//f/f6/Swordstalker-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-026",
    name: "La Jinn the Mystical Genie of the Lamp",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/08/LaJinntheMysticalGenieoftheLamp-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-027",
    name: "Rude Kaiser",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/7a/RudeKaiser-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-028",
    name: "Destroyer Golem",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//f/f2/DestroyerGolem-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-029",
    name: "Skull Red Bird",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//3/3a/SkullRedBird-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-030",
    name: "D. Human",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//3/3e/DHuman-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-031",
    name: "Pale Beast",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//9/94/PaleBeast-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-032",
    name: "Fissure",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//8/81/Fissure-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-033",
    name: "Trap Hole",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//2/21/TrapHole-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-034",
    name: "Two-Pronged Attack",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//f/f6/TwoProngedAttack-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-035",
    name: "De-Spell",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//a/a4/DeSpell-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-036",
    name: "Monster Reborn",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//f/f2/MonsterReborn-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-037",
    name: "The Inexperienced Spy",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/89/TheInexperiencedSpy-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-038",
    name: "Reinforcements",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//9/98/Reinforcements-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-039",
    name: "Ancient Telescope",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//e/eb/AncientTelescope-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-040",
    name: "Just Desserts",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//6/67/JustDesserts-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-041",
    name: "Lord of D.",
    rarity: "Super Rare",
    imageUrl: "https://ms.yugipedia.com//7/73/LordofD-SDK-NA-SR-UE.png",
  },
  {
    code: "SDK-042",
    name: "The Flute of Summoning Dragon",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/12/TheFluteofSummoningDragon-SDK-NA-SR-UE.png",
  },
  {
    code: "SDK-043",
    name: "Mysterious Puppeteer",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/d5/MysteriousPuppeteer-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-044",
    name: "Trap Master",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//e/ec/TrapMaster-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-045",
    name: "Sogen",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//7/7f/Sogen-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-046",
    name: "Hane-Hane",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//a/a5/HaneHane-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-047",
    name: "Reverse Trap",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//9/99/ReverseTrap-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-048",
    name: "Remove Trap",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//e/e9/RemoveTrap-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-049",
    name: "Castle Walls",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//6/60/CastleWalls-SDK-NA-C-UE.png",
  },
  {
    code: "SDK-050",
    name: "Ultimate Offering",
    rarity: "Common",
    imageUrl: "https://ms.yugipedia.com//2/2f/UltimateOffering-SDK-NA-C-UE.png",
  },
  {
    code: "MRD-EN000",
    name: "Gate Guardian",
    rarity: "Secret Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/1a/GateGuardian-MRD-EN-ScR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN001",
    name: "Feral Imp",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/26/FeralImp-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN002",
    name: "Winged Dragon, Guardian of the Fortress #1",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/52/WingedDragonGuardianoftheFortress1-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN003",
    name: "Summoned Skull",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//b/bc/SummonedSkull-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN004",
    name: "Rock Ogre Grotto #1",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/cd/RockOgreGrotto1-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN005",
    name: "Armored Lizard",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/f9/ArmoredLizard-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN006",
    name: "Killer Needle",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/72/KillerNeedle-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN007",
    name: "Larvae Moth",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/fe/LarvaeMoth-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN008",
    name: "Harpie Lady",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/80/HarpieLady-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN009",
    name: "Harpie Lady Sisters",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/12/HarpieLadySisters-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN010",
    name: "Kojikocy",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/37/Kojikocy-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN011",
    name: "Cocoon of Evolution",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//d/da/CocoonofEvolution-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN012",
    name: "Crawling Dragon",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/5d/CrawlingDragon-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN013",
    name: "Armored Zombie",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/7a/ArmoredZombie-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN014",
    name: "Mask of Darkness",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//6/63/MaskofDarkness-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN015",
    name: "Doma The Angel of Silence",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/b7/DomaTheAngelofSilence-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN016",
    name: "White Magical Hat",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//3/37/WhiteMagicalHat-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN017",
    name: "Big Eye",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/1f/BigEye-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN018",
    name: "Black Skull Dragon",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//6/68/BlackSkullDragon-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN019",
    name: "Masked Sorcerer",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//5/5d/MaskedSorcerer-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN020",
    name: "Roaring Ocean Snake",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/aa/RoaringOceanSnake-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN021",
    name: "Water Omotics",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/d0/WaterOmotics-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN022",
    name: "Ground Attacker Bugroth",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/81/GroundAttackerBugroth-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN023",
    name: "Petit Moth",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/d1/PetitMoth-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN024",
    name: "Elegant Egotist",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//6/60/ElegantEgotist-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN025",
    name: "Sanga of the Thunder",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/05/SangaoftheThunder-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN026",
    name: "Kazejin",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/cb/Kazejin-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN027",
    name: "Suijin",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/16/Suijin-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN028",
    name: "Mystic Lamp",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//d/dd/MysticLamp-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN029",
    name: "Steel Scorpion",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a5/SteelScorpion-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN030",
    name: "Ocubeam",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/07/Ocubeam-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN031",
    name: "Leghul",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//c/ce/Leghul-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN032",
    name: "Ooguchi",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//1/17/Ooguchi-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN033",
    name: "Leogun",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/43/Leogun-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN034",
    name: "Blast Juggler",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/85/BlastJuggler-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN035",
    name: "Jinzo #7",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//f/f9/Jinzo7-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN036",
    name: "Magician of Faith",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//6/64/MagicianofFaith-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN037",
    name: "Ancient Elf",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a8/AncientElf-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN038",
    name: "Deepsea Shark",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/23/DeepseaShark-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN039",
    name: "Bottom Dweller",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/7f/BottomDweller-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN040",
    name: "Destroyer Golem",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/02/DestroyerGolem-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN041",
    name: "Kaminari Attack",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/b6/KaminariAttack-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN042",
    name: "Rainbow Flower",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//6/6d/RainbowFlower-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN043",
    name: "Morinphen",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/6f/Morinphen-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN044",
    name: "Mega Thunderball",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/73/MegaThunderball-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN045",
    name: "Tongyo",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/3b/Tongyo-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN046",
    name: "Empress Judge",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/fd/EmpressJudge-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN047",
    name: "Pale Beast",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a4/PaleBeast-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN048",
    name: "Electric Lizard",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/8b/ElectricLizard-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN049",
    name: "Hunter Spider",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/45/HunterSpider-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN050",
    name: "Ancient Lizard Warrior",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/84/AncientLizardWarrior-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN051",
    name: "Queen's Double",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//1/19/QueensDouble-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN052",
    name: "Trent",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/df/Trent-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN053",
    name: "Disk Magician",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/2c/DiskMagician-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN054",
    name: "Hyosube",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/ce/Hyosube-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN055",
    name: "Hibikime",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/be/Hibikime-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN056",
    name: "Fake Trap",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//2/23/FakeTrap-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN057",
    name: "Tribute to The Doomed",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/c3/TributetoTheDoomed-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN058",
    name: "Soul Release",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/9e/SoulRelease-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN059",
    name: "The Cheerful Coffin",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/60/TheCheerfulCoffin-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN060",
    name: "Change of Heart",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/06/ChangeofHeart-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN061",
    name: "Baby Dragon",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//d/d2/BabyDragon-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN062",
    name: "Blackland Fire Dragon",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/03/BlacklandFireDragon-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN063",
    name: "Swamp Battleguard",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/aa/SwampBattleguard-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN064",
    name: "Battle Steer",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a4/BattleSteer-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN065",
    name: "Time Wizard",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/76/TimeWizard-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN066",
    name: "Saggi the Dark Clown",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/e0/SaggitheDarkClown-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN067",
    name: "Dragon Piper",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/60/DragonPiper-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN068",
    name: "Illusionist Faceless Mage",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/0b/IllusionistFacelessMage-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN069",
    name: "Sangan",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/cf/Sangan-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN070",
    name: "Great Moth",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/c9/GreatMoth-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN071",
    name: "Kuriboh",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/7e/Kuriboh-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN072",
    name: "Jellyfish",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c3/Jellyfish-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN073",
    name: "Castle of Dark Illusions",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/bc/CastleofDarkIllusions-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN074",
    name: "King of Yamimakai",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/56/KingofYamimakai-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN075",
    name: "Catapult Turtle",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/19/CatapultTurtle-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN076",
    name: "Mystic Horseman",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/d1/MysticHorseman-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN077",
    name: "Rabid Horseman",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c9/RabidHorseman-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN078",
    name: "Crass Clown",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//d/d7/CrassClown-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN079",
    name: "Pumpking the King of Ghosts",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/7c/PumpkingtheKingofGhosts-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN080",
    name: "Dream Clown",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//8/84/DreamClown-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN081",
    name: "Tainted Wisdom",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/43/TaintedWisdom-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN082",
    name: "Ancient Brain",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c3/AncientBrain-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN083",
    name: "Guardian of the Labyrinth",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/3c/GuardianoftheLabyrinth-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN084",
    name: "Prevent Rat",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/27/PreventRat-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN085",
    name: "The Little Swordsman of Aile",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/34/TheLittleSwordsmanofAile-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN086",
    name: "Princess of Tsurugi",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//b/ba/PrincessofTsurugi-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN087",
    name: "Protector of the Throne",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/e8/ProtectoroftheThrone-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN088",
    name: "Tremendous Fire",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/44/TremendousFire-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN089",
    name: "Jirai Gumo",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/db/JiraiGumo-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN090",
    name: "Shadow Ghoul",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/73/ShadowGhoul-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN091",
    name: "Labyrinth Tank",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/0f/LabyrinthTank-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN092",
    name: "Ryu-Kishin Powered",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/b7/RyuKishinPowered-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN093",
    name: "Bickuribox",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/d6/Bickuribox-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN094",
    name: "Giltia the D. Knight",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/56/GiltiatheDKnight-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN095",
    name: "Launcher Spider",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/99/LauncherSpider-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN096",
    name: "Giga-Tech Wolf",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/cf/GigaTechWolf-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN097",
    name: "Thunder Dragon",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//3/36/ThunderDragon-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN098",
    name: "7 Colored Fish",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/7a/7ColoredFish-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN099",
    name: "The Immortal of Thunder",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/52/TheImmortalofThunder-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN100",
    name: "Punished Eagle",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/38/PunishedEagle-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN101",
    name: "Insect Soldiers of the Sky",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a3/InsectSoldiersoftheSky-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN102",
    name: "Hoshiningen",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//d/d5/Hoshiningen-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN103",
    name: "Musician King",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/66/MusicianKing-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN104",
    name: "Yado Karu",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/2b/YadoKaru-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN105",
    name: "Cyber Saurus",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/ec/CyberSaurus-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN106",
    name: "Cannon Soldier",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//b/b4/CannonSoldier-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN107",
    name: "Muka Muka",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/13/MukaMuka-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN108",
    name: "The Bistro Butcher",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/16/TheBistroButcher-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN109",
    name: "Star Boy",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/7f/StarBoy-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN110",
    name: "Milus Radiant",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//a/ae/MilusRadiant-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN111",
    name: "Flame Cerebrus",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a1/FlameCerebrus-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN112",
    name: "Niwatori",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/78/Niwatori-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN113",
    name: "Dark Elf",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/47/DarkElf-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN114",
    name: "Mushroom Man #2",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/73/MushroomMan2-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN115",
    name: "Lava Battleguard",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/5a/LavaBattleguard-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN116",
    name: "Witch of the Black Forest",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//3/34/WitchoftheBlackForest-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN117",
    name: "Little Chimera",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/10/LittleChimera-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN118",
    name: "Bladefly",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/ef/Bladefly-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN119",
    name: "Lady of Faith",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/0c/LadyofFaith-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN120",
    name: "Twin-Headed Thunder Dragon",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/ce/TwinHeadedThunderDragon-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN121",
    name: "Witch's Apprentice",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//2/23/WitchsApprentice-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN122",
    name: "Blue-Winged Crown",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/94/BlueWingedCrown-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN123",
    name: "Skull Knight",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c5/SkullKnight-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN124",
    name: "Gazelle the King of Mythical Beasts",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//a/a6/GazelletheKingofMythicalBeasts-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN125",
    name: "Garnecia Elefantis",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/07/GarneciaElefantis-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN126",
    name: "Barrel Dragon",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/0a/BarrelDragon-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN127",
    name: "Solemn Judgment",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/81/SolemnJudgment-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN128",
    name: "Magic Jammer",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//9/93/MagicJammer-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN129",
    name: "Seven Tools of the Bandit",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/75/SevenToolsoftheBandit-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN130",
    name: "Horn of Heaven",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/80/HornofHeaven-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN131",
    name: "Shield & Sword",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//9/93/ShieldSword-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN132",
    name: "Sword of Deep-Seated",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/ea/SwordofDeepSeated-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN133",
    name: "Block Attack",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/7d/BlockAttack-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN134",
    name: "The Unhappy Maiden",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//9/9b/TheUnhappyMaiden-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN135",
    name: "Robbin' Goblin",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//6/66/RobbinGoblin-MRD-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN136",
    name: "Germ Infection",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/95/GermInfection-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN137",
    name: "Paralyzing Potion",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/3f/ParalyzingPotion-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN138",
    name: "Mirror Force",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/e4/MirrorForce-MRD-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN139",
    name: "Ring of Magnetism",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/65/RingofMagnetism-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN140",
    name: "Share the Pain",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/78/SharethePain-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN141",
    name: "Stim-Pack",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//2/2a/StimPack-MRD-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN142",
    name: "Heavy Storm",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/02/HeavyStorm-MRD-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "MRD-EN143",
    name: "Thousand Dragon",
    rarity: "Secret Rare",
    imageUrl:
      "https://ms.yugipedia.com//0/0c/ThousandDragon-MRD-EN-ScR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN000",
    name: "Blue-Eyes Toon Dragon",
    rarity: "Secret Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/4d/BlueEyesToonDragon-SRL-EN-ScR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN001",
    name: "Penguin Knight",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/13/PenguinKnight-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN002",
    name: "Axe of Despair",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//9/93/AxeofDespair-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN003",
    name: "Black Pendant",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//f/f0/BlackPendant-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN004",
    name: "Horn of Light",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/1c/HornofLight-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN005",
    name: "Malevolent Nuzzler",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/41/MalevolentNuzzler-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN006",
    name: "Spellbinding Circle",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/c9/SpellbindingCircle-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN007",
    name: "Metal Fish",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/00/MetalFish-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN008",
    name: "Electric Snake",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/55/ElectricSnake-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN009",
    name: "Queen Bird",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/56/QueenBird-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN010",
    name: "Ameba",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/4b/Ameba-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN011",
    name: "Peacock",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/84/Peacock-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN012",
    name: "Maha Vailo",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/75/MahaVailo-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN013",
    name: "Guardian of the Throne Room",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a3/GuardianoftheThroneRoom-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN014",
    name: "Fire Kraken",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c7/FireKraken-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN015",
    name: "Minar",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//8/8f/Minar-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN016",
    name: "Griggle",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/0a/Griggle-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN017",
    name: "Tyhone #2",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/29/Tyhone2-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN018",
    name: "Ancient One of the Deep Forest",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/cb/AncientOneoftheDeepForest-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN019",
    name: "Dark Witch",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/0d/DarkWitch-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN020",
    name: "Weather Report",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/14/WeatherReport-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN021",
    name: "Mechanical Snail",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/33/MechanicalSnail-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN022",
    name: "Giant Turtle Who Feeds on Flames",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/ba/GiantTurtleWhoFeedsonFlames-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN023",
    name: "Liquid Beast",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/4d/LiquidBeast-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN024",
    name: "Hiro's Shadow Scout",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//9/92/HirosShadowScout-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN025",
    name: "High Tide Gyojin",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/b1/HighTideGyojin-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN026",
    name: "Invader of the Throne",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/c9/InvaderoftheThrone-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN027",
    name: "Whiptail Crow",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/bd/WhiptailCrow-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN028",
    name: "Slot Machine",
    rarity: "Super Short Print",
    imageUrl:
      "https://ms.yugipedia.com//a/ab/SlotMachine-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN029",
    name: "Relinquished",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//5/5b/Relinquished-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN030",
    name: "Red Archery Girl",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/f3/RedArcheryGirl-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN031",
    name: "Gravekeeper's Servant",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//2/28/GravekeepersServant-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN032",
    name: "Curse of Fiend",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//7/7b/CurseofFiend-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN033",
    name: "Upstart Goblin",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/f6/UpstartGoblin-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN034",
    name: "Toll",
    rarity: "Super Short Print",
    imageUrl:
      "https://ms.yugipedia.com//1/1e/Toll-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN035",
    name: "Final Destiny",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//f/f6/FinalDestiny-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN036",
    name: "Snatch Steal",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/4a/SnatchSteal-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN037",
    name: "Chorus of Sanctuary",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/df/ChorusofSanctuary-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN038",
    name: "Confiscation",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//2/20/Confiscation-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN039",
    name: "Delinquent Duo",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//2/25/DelinquentDuo-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN040",
    name: "Darkness Approaches",
    rarity: "Super Short Print",
    imageUrl:
      "https://ms.yugipedia.com//e/ee/DarknessApproaches-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN041",
    name: "Fairy's Hand Mirror",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//f/fb/FairysHandMirror-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN042",
    name: "Tailor of the Fickle",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//0/02/TailoroftheFickle-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN043",
    name: "Rush Recklessly",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//7/76/RushRecklessly-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN044",
    name: "The Reliable Guardian",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a4/TheReliableGuardian-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN045",
    name: "The Forceful Sentry",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//d/d0/TheForcefulSentry-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN046",
    name: "Chain Energy",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/34/ChainEnergy-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN047",
    name: "Mystical Space Typhoon",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//f/fc/MysticalSpaceTyphoon-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN048",
    name: "Giant Trunade",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/12/GiantTrunade-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN049",
    name: "Painful Choice",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//3/32/PainfulChoice-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN050",
    name: "Snake Fang",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c1/SnakeFang-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN051",
    name: "Black Illusion Ritual",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//a/a0/BlackIllusionRitual-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN052",
    name: "Octoberser",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/05/Octoberser-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN053",
    name: "Psychic Kappa",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/5c/PsychicKappa-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN054",
    name: "Horn of the Unicorn",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//d/d7/HornoftheUnicorn-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN055",
    name: "Labyrinth Wall",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//2/2f/LabyrinthWall-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN056",
    name: "Wall Shadow",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//3/38/WallShadow-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN057",
    name: "Twin Long Rods #2",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//a/a5/TwinLongRods2-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN058",
    name: "Stone Ogre Grotto",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/90/StoneOgreGrotto-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN059",
    name: "Magical Labyrinth",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/9c/MagicalLabyrinth-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN060",
    name: "Eternal Rest",
    rarity: "Super Short Print",
    imageUrl:
      "https://ms.yugipedia.com//a/af/EternalRest-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN061",
    name: "Megamorph",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/ca/Megamorph-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN062",
    name: "Commencement Dance",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/9a/CommencementDance-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN063",
    name: "Hamburger Recipe",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//e/ed/HamburgerRecipe-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN064",
    name: "House of Adhesive Tape",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/94/HouseofAdhesiveTape-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN065",
    name: "Eatgaboon",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/79/Eatgaboon-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN066",
    name: "Turtle Oath",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/9b/TurtleOath-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN067",
    name: "Performance of Sword",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/90/PerformanceofSword-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN068",
    name: "Hungry Burger",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//7/7b/HungryBurger-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN069",
    name: "Crab Turtle",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//4/48/CrabTurtle-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN070",
    name: "Ryu-Ran",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//5/55/RyuRan-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN071",
    name: "Manga Ryu-Ran",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//2/21/MangaRyuRan-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN072",
    name: "Toon Mermaid",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//f/f3/ToonMermaid-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN073",
    name: "Toon Summoned Skull",
    rarity: "Ultra Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/c7/ToonSummonedSkull-SRL-EN-UR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN074",
    name: "Jigen Bakudan",
    rarity: "Super Short Print",
    imageUrl:
      "https://ms.yugipedia.com//e/e0/JigenBakudan-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN075",
    name: "Hyozanryu",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/8b/Hyozanryu-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN076",
    name: "Toon World",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/83/ToonWorld-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN077",
    name: "Cyber Jar",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/e0/CyberJar-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN078",
    name: "Banisher of the Light",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/4d/BanisheroftheLight-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN079",
    name: "Giant Rat",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//5/52/GiantRat-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN080",
    name: "Senju of the Thousand Hands",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//8/86/SenjuoftheThousandHands-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN081",
    name: "UFO Turtle",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//e/ef/UFOTurtle-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN082",
    name: "Flash Assailant",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//1/11/FlashAssailant-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN083",
    name: "Karate Man",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//d/d3/KarateMan-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN084",
    name: "Dark Zebra",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//c/c5/DarkZebra-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN085",
    name: "Giant Germ",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/c4/GiantGerm-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN086",
    name: "Nimble Momonga",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//b/b7/NimbleMomonga-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN087",
    name: "Spear Cretin",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/62/SpearCretin-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN088",
    name: "Shining Angel",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//4/43/ShiningAngel-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN089",
    name: "Boar Soldier",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//d/db/BoarSoldier-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN090",
    name: "Mother Grizzly",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//5/58/MotherGrizzly-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN091",
    name: "Flying Kamakiri #1",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/16/FlyingKamakiri1-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN092",
    name: "Ceremonial Bell",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//6/6c/CeremonialBell-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN093",
    name: "Sonic Bird",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//9/9f/SonicBird-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN094",
    name: "Mystic Tomato",
    rarity: "Rare",
    imageUrl:
      "https://ms.yugipedia.com//b/b1/MysticTomato-SRL-EN-R-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN095",
    name: "Kotodama",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//b/b6/Kotodama-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN096",
    name: "Gaia Power",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//6/60/GaiaPower-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN097",
    name: "Umiiruka",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//0/0a/Umiiruka-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN098",
    name: "Molten Destruction",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//5/5c/MoltenDestruction-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN099",
    name: "Rising Air Current",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//8/81/RisingAirCurrent-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN100",
    name: "Luminous Spark",
    rarity: "Short Print",
    imageUrl:
      "https://ms.yugipedia.com//1/18/LuminousSpark-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN101",
    name: "Mystic Plasma Zone",
    rarity: "Common",
    imageUrl:
      "https://ms.yugipedia.com//0/05/MysticPlasmaZone-SRL-EN-C-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN102",
    name: "Messenger of Peace",
    rarity: "Super Rare",
    imageUrl:
      "https://ms.yugipedia.com//1/13/MessengerofPeace-SRL-EN-SR-UE-25thAnniversaryEdition.png",
  },
  {
    code: "SRL-EN103",
    name: "Serpent Night Dragon",
    rarity: "Secret Rare",
    imageUrl:
      "https://ms.yugipedia.com//c/c5/SerpentNightDragon-SRL-EN-ScR-UE-25thAnniversaryEdition.png",
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

export const getDisenchantValue = (card: CardMetadata) => {
  switch (card.rarity) {
    case "Common":
      return Math.round(0.032 * 500 * (1 / 8));
    case "Rare":
      return Math.round(0.034 * 500 * 1);
    case "Super Rare":
      return Math.round(0.0448 * 500 * 5);
    case "Ultra Rare":
      return Math.round(0.053 * 500 * 12);
    case "Secret Rare":
      return Math.round(0.06625 * 500 * 24);
    case "Short Print":
      return Math.round(0.06893 * 500 * 30);
    case "Super Short Print":
      return Math.round(0.07157 * 500 * 60);
    default:
      throw Error(`unknown rarity: ${card.rarity}`);
  }
};
