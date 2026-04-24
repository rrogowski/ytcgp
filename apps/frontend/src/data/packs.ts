import { shuffle } from "../lib/random";
import { getCardsInSet, type CardMetadata } from "./cards";

export const POINTS_PER_PACK = 5;

const STANDARD_PACK_RARITY_TABLE: {
  rarity: CardMetadata["rarity"];
  odds: number;
}[][] = [
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
];

// const PRECONSTRUCTED_DECK_RARITY_TABLE: {
//   rarity: CardMetadata["rarity"];
//   odds: number;
// }[][] = [
//   [{ rarity: "Common", odds: 1 / 1 }],
//   [{ rarity: "Common", odds: 1 / 1 }],
//   [{ rarity: "Common", odds: 1 / 1 }],
//   [{ rarity: "Common", odds: 1 / 1 }],
//   [
//     { rarity: "Ultra Rare", odds: 1 / 12 },
//     { rarity: "Super Rare", odds: 1 / 5 },
//     { rarity: "Common", odds: 1 / 1 },
//   ],
// ];

export const ALL_PACKS = [
  {
    code: "LOB",
    name: "Legend of Blue Eyes White Dragon",
    cost: 500,
    rarityTable: STANDARD_PACK_RARITY_TABLE,
    imageUrl:
      "https://ms.yugipedia.com//b/bb/LOB-BoosterEN-25thAnniversaryEdition.png",
  },
  // {
  //   code: "SDY",
  //   name: "Starter Deck: Yugi",
  //   cost: 300,
  //   rarityTable: PRECONSTRUCTED_DECK_RARITY_TABLE,
  //   imageUrl: "https://ms.yugipedia.com//4/4c/SDY-DeckEU.png",
  // },
  // {
  //   code: "SDK",
  //   name: "Starter Deck: Kaiba",
  //   cost: 300,
  //   rarityTable: PRECONSTRUCTED_DECK_RARITY_TABLE,
  //   imageUrl:
  //     "https://tcgplayer-cdn.tcgplayer.com/product/153329_in_1000x1000.jpg",
  // },
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

export const generatePack = (code: string) => {
  const pack = findPackByCode(code);
  let cards = shuffle(getCardsInSet(code));
  const result: CardMetadata[] = [];
  for (let position = 0; position < pack.rarityTable.length; position++) {
    const rolls = pack.rarityTable[position];

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
