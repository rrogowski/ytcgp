import { shuffle } from "../lib/random";
import { findCardByCode, getCardsInSet, type CardMetadata } from "./cards";

interface Pack {
  code: string;
  name: string;
  cost: number;
  rarityTable: { rarity: string; odds: number }[][];
  godPackRarityTable: { rarity: string; odds: number }[][];
  imageUrl: string;
}

export const ALL_PACKS: Pack[] = [
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
        { rarity: "Ultra Rare", odds: 1 / 12 },
        { rarity: "Super Rare", odds: 1 / 1 },
      ],
      [
        { rarity: "Ultra Rare", odds: 1 / 12 },
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
        { rarity: "Super Rare", odds: 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 },
      ],
      [
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 },
      ],
      [
        { rarity: "Super Short Print", odds: 2 / 60 },
        { rarity: "Short Print", odds: 2 / 30 },
        { rarity: "Secret Rare", odds: 2 / 24 },
        { rarity: "Ultra Rare", odds: 2 / 12 },
        { rarity: "Super Rare", odds: 1 },
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
  // {
  //   code: "MRD",
  //   name: "Metal Raiders",
  //   cost: 500,
  //   rarityTable: STANDARD_PACK_RARITY_TABLE,
  //   imageUrl:
  //     "https://ms.yugipedia.com//5/5d/MRD-BoosterEN-25thAnniversaryEdition.png",
  // },
  // {
  //   code: "SRL",
  //   name: "Spell Ruler",
  //   cost: 500,
  //   rarityTable: STANDARD_PACK_RARITY_TABLE,
  //   imageUrl:
  //     "https://ms.yugipedia.com//f/f2/SRL-BoosterEN-25thAnniversaryEdition.png",
  // },
];

export const findPackByCode = (code: string) => {
  const pack = ALL_PACKS.find((p) => p.code === code);
  if (!pack) {
    throw Error(`could not find pack with code: ${code}`);
  }
  return pack;
};

export const generatePack = (code: string, isGodPack: boolean) => {
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

  return result;
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
    if (isGodPack) {
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
