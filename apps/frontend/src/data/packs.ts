import { shuffle } from "../lib/random";
import { getCardsInSet, type CardMetadata } from "./cards";

export const ALL_PACKS = [
  {
    code: "LOB",
    name: "Legend of Blue Eyes White Dragon",
    imageUrl:
      "https://static.wikia.nocookie.net/yugioh/images/9/9f/LOB-BoosterNA.jpg",
  },
];

export const PACK_COST = 500;

const RARITY_TABLE: { rarity: CardMetadata["rarity"]; odds: number }[][] = [
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

export const generatePack = (code: string) => {
  let cards = shuffle(getCardsInSet(code));
  const result: CardMetadata[] = [];
  for (let position = 0; position < RARITY_TABLE.length; position++) {
    const rolls = RARITY_TABLE[position];

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
