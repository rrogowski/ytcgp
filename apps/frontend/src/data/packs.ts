import { shuffle } from "../lib/random";
import { findCardByCode, getCardsInSet, type CardMetadata } from "./cards";

interface Pack {
  code: string;
  name: string;
  cost: number;
  rarityTable: { rarity: string; odds: number }[][];
  godPackRarityTable: { rarity: string; odds: number }[][];
  imageUrl: string;
  additionalPacksCodes?: string[];
}

export const ALL_PACKS: Pack[] = [
  {
    code: "IOC",
    name: "Invasion of Chaos",
    cost: 500,
    imageUrl:
      "https://ms.yugipedia.com//9/96/IOC-BoosterEN-25thAnniversaryEdition.png",
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
  },
  {
    code: "AST",
    name: "Ancient Sanctuary",
    cost: 500,
    imageUrl: "https://ms.yugipedia.com//b/b6/AST-BoosterEN.png",
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
  },
  {
    code: "SYE",
    name: "Starter Deck: Yugi Evolution",
    cost: 500,
    imageUrl:
      "https://cubiccreativity.wordpress.com/wp-content/uploads/2022/10/starter-deck-yugi-evolution-header.jpg?w=300",
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Ultra Rare", odds: 1 }],
    ],
  },
  {
    code: "SKE",
    name: "Starter Deck: Kaiba Evolution",
    cost: 500,
    imageUrl:
      "https://tcgplayer-cdn.tcgplayer.com/product/212808_in_1000x1000.jpg",
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Ultra Rare", odds: 1 }],
    ],
  },
  {
    code: "CT1",
    name: "Collectible Tins 2004",
    cost: 1100,
    imageUrl:
      "https://static.wikia.nocookie.net/yugioh/images/e/e4/CT1-PromoEN.jpg",
    rarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    additionalPacksCodes: ["PGD", "MFC", "DCR", "IOC", "AST"],
  },
  {
    code: "MFC",
    name: "Magician's Force",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Super Short Print", odds: 1 / 30 },
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl: "https://ms.yugipedia.com//c/c9/MFC-BoosterNA.png",
  },
  {
    code: "DCR",
    name: "Dark Crisis",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl:
      "https://ms.yugipedia.com//8/8f/DCR-BoosterEN-25thAnniversaryEdition.png",
  },
  {
    code: "LOD",
    name: "Legacy of Darkness",
    imageUrl: "https://ms.yugipedia.com//4/47/LOD-BoosterEN.png",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Super Short Print", odds: 1 / 60 },
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
  },
  {
    code: "PGD",
    name: "Pharaonic Guardian",
    imageUrl: "https://ms.yugipedia.com//5/5b/PGD-BoosterNA.png",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
  },
  {
    code: "TP4",
    name: "Tournament Pack 4",
    cost: 300,
    imageUrl: "https://ms.yugipedia.com//b/b7/TP4-BoosterNA.png",
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
  },
  {
    code: "JMPV2",
    name: "Shonen Jump Volumes 4 - 4",
    cost: 800,
    rarityTable: [[{ rarity: "Ultra Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Ultra Rare", odds: 1 / 1 }]],
    imageUrl: "https://ms.yugipedia.com//9/90/SJ_4.1.png",
  },
  {
    code: "DOR",
    name: "Yu-Gi-Oh! The Duelists of the Roses",
    cost: 2400,
    rarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    imageUrl: "https://ms.yugipedia.com//7/7a/DOR-VideoGame-NA.jpg",
  },
  {
    code: "SDD",
    name: "Yu-Gi-Oh! Worldwide Edition - Stairway to the Destined Duel",
    cost: 2400,
    rarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    imageUrl: "https://ms.yugipedia.com//b/bd/SDD-VideoGame-NA.jpg",
  },
  {
    code: "FMR",
    name: "Yu-Gi-Oh! Forbidden Memories promotional cards",
    cost: 2400,
    rarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    imageUrl: "https://ms.yugipedia.com//8/88/FMR-VideoGame-NA.jpg",
  },
  {
    code: "EDS",
    name: "Yu-Gi-Oh! The Eternal Duelist Soul",
    cost: 2400,
    rarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    imageUrl: "https://ms.yugipedia.com//3/3d/EDS-VideoGame-NA.jpg",
  },
  {
    code: "TP3",
    name: "Tournament Pack: 3rd Season",
    cost: 300,
    imageUrl: "https://ms.yugipedia.com//1/17/TP3-BoosterNA.png",
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
  },
  {
    code: "SDJ",
    name: "Starter Deck: Joey",
    cost: 500,
    imageUrl: "https://ms.yugipedia.com//5/56/SDJ-DeckNA.png",
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Ultra Rare", odds: 1 / 1 }],
    ],
  },
  {
    code: "SDP",
    name: "Starter Deck: Pegasus",
    cost: 500,
    imageUrl: "https://ms.yugipedia.com//3/35/SDP-DeckNA.png",
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Ultra Rare", odds: 1 / 1 }],
    ],
  },
  {
    code: "JMPV1",
    name: "Shonen Jump Volumes 1 - 4",
    cost: 800,
    rarityTable: [
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl: "https://ms.yugipedia.com//7/73/SJ_1.1_-_back.png",
  },
  {
    code: "BPTV2",
    name: "2003 Collectible Tin",
    cost: 1100,
    rarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    imageUrl:
      "https://static.wikia.nocookie.net/yugioh/images/3/3a/BPT-PromoEN-2003.png",
    additionalPacksCodes: ["LOB", "MRD", "SRL", "PSV", "LON"],
  },
  {
    code: "BPTV1",
    name: "2002 Collectible Tin",
    cost: 1100,
    rarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    imageUrl:
      "https://static.wikia.nocookie.net/yugioh/images/e/e4/BPT-PromoEN-2002.png",
    additionalPacksCodes: ["LOB", "LOB", "MRD", "MRD", "SRL"],
  },
  {
    code: "LON",
    name: "Labyrinth of Nightmare",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Super Short Print", odds: 1 / 60 },
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl: "https://ms.yugipedia.com//8/8e/LON-BoosterEN.jpg",
  },
  {
    code: "PSV",
    name: "Pharaoh's Servant",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Super Short Print", odds: 1 / 60 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl:
      "https://ms.yugipedia.com//e/ed/PSV-BoosterEN-25thAnniversaryEdition.png",
  },
  {
    code: "TP2",
    name: "Tournament Pack: 2nd Season",
    cost: 300,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl: "https://ms.yugipedia.com//9/99/TP2-BoosterNA.png",
  },
  {
    code: "TP1",
    name: "Tournament Pack: 1st Season",
    cost: 300,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl: "https://ms.yugipedia.com//f/f5/TP1-BoosterNA.png",
  },
  {
    code: "MRD",
    name: "Metal Raiders",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl:
      "https://ms.yugipedia.com//5/5d/MRD-BoosterEN-25thAnniversaryEdition.png",
  },
  {
    code: "SRL",
    name: "Spell Ruler",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Super Short Print", odds: 1 / 60 },
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl:
      "https://ms.yugipedia.com//f/f2/SRL-BoosterEN-25thAnniversaryEdition.png",
  },
  {
    code: "MP1",
    name: "McDonald's Promotional Cards",
    cost: 200,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl: "https://ms.yugipedia.com//1/11/MP1-PromoEN-Checklist.png",
  },
  {
    code: "LOB",
    name: "Legend of Blue Eyes White Dragon",
    cost: 500,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Super Short Print", odds: 1 / 60 },
        { rarity: "Short Print", odds: 1 / 30 },
        { rarity: "Common", odds: 1 / 1 },
      ],
      [{ rarity: "Rare", odds: 1 / 1 }],
      [
        { rarity: "Secret Rare", odds: 1 / 24 },
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
    ],
    imageUrl:
      "https://ms.yugipedia.com//b/bb/LOB-BoosterEN-25thAnniversaryEdition.png",
  },
  {
    code: "SDY",
    name: "Starter Deck: Yugi",
    cost: 300,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Ultra Rare", odds: 1 / 1 }],
    ],
    imageUrl: "https://ms.yugipedia.com//4/4c/SDY-DeckEU.png",
  },
  {
    code: "SDK",
    name: "Starter Deck: Kaiba",
    cost: 300,
    rarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 5 },
        { rarity: "Common", odds: 1 / 1 },
      ],
    ],
    godPackRarityTable: [
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Common", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Super Rare", odds: 1 / 1 }],
      [{ rarity: "Ultra Rare", odds: 1 / 1 }],
    ],
    imageUrl:
      "https://tcgplayer-cdn.tcgplayer.com/product/153329_in_1000x1000.jpg",
  },
  {
    code: "DDS",
    name: "Yu-Gi-Oh! Dark Duel Stories",
    cost: 2400,
    rarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    godPackRarityTable: [[{ rarity: "Secret Rare", odds: 1 / 1 }]],
    imageUrl:
      "https://ms.yugipedia.com//thumb/6/69/DDS-VideoGame-NA.jpg/514px-DDS-VideoGame-NA.jpg",
  },
];

export const findPackByCode = (code: string) => {
  const pack = ALL_PACKS.find((p) => p.code === code);
  if (!pack) {
    throw Error(`could not find pack with code: ${code}`);
  }
  return pack;
};

export const generatePack = (
  code: string,
  isGodPack: boolean,
): CardMetadata[][] => {
  const pack = findPackByCode(code);
  let cards = shuffle(getCardsInSet(code));
  const rarityTable = isGodPack ? pack.godPackRarityTable : pack.rarityTable;
  const result: CardMetadata[] = [];
  for (let position = 0; position < rarityTable.length; position++) {
    const rolls = rarityTable[position];

    let index = 0;
    let roll = rolls[index];
    while (roll && Math.random() > roll.odds) {
      roll = rolls[++index];
    }
    if (!roll) {
      throw Error(`no roll succeeded for position ${position} in set: ${code}`);
    }
    const card = cards.find((card) => card.rarity === roll.rarity);
    if (!card) {
      throw Error(`failed to find card of rarity: ${roll.rarity}`);
    }
    result.push(card);
    cards = cards.filter((c) => c !== card);
  }

  const additionalPacks = (pack.additionalPacksCodes ?? [])
    .map((c) => generatePack(c, isGodPack))
    .flat();

  return [result, ...additionalPacks];
};

export const getWonderPickCost = (codes: string[], isGodPack: boolean) => {
  const packCode = codes[0].split("-")[0];
  const pack = findPackByCode(packCode);
  const cards = codes.map(findCardByCode);
  const rarityTable = isGodPack ? pack.godPackRarityTable : pack.rarityTable;
  const cost = cards.reduce((accumulator, card, i) => {
    const entry = rarityTable[i].find((e) => e.rarity === card.rarity);
    if (!entry) {
      throw Error(`no rarity table entry found for card: ${card.name}`);
    }
    if (isGodPack || pack.additionalPacksCodes) {
      const cost = 1 + getRarityWonderPickCost(card.rarity);
      return cost > accumulator ? cost : accumulator;
    }
    return accumulator + getRarityWonderPickCost(card.rarity);
  }, 0);
  return Math.round(cost);
};

const getRarityWonderPickCost = (rarity: string) => {
  switch (rarity) {
    case "Common":
      return 0;
    case "Rare":
      return 1;
    case "Super Rare":
      return 5;
    case "Ultra Rare":
      return 12;
    case "Secret Rare":
      return 24;
    case "Short Print":
      return 30;
    case "Super Short Print":
      return 60;
    default:
      throw Error(`unknown rarity: ${rarity}`);
  }
};

export const getPackCostIncludingAdditionalPacks = (code: string) => {
  const pack = findPackByCode(code);

  return (
    pack.cost +
    (pack.additionalPacksCodes ?? []).reduce((accumulator, c) => {
      return accumulator + findPackByCode(c).cost;
    }, 0)
  );
};
