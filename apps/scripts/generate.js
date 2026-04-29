const { readFileSync, writeFileSync } = require("node:fs");
const { join } = require("path");

const RELEASED_SET_NAMES = [
  // "Legend of Blue Eyes White Dragon",
  // "Starter Deck: Yugi",
  // "Starter Deck: Kaiba",
  // "Yu-Gi-Oh! Dark Duel Stories",
  "McDonald's Promotional Cards",
];

const sets = JSON.parse(
  readFileSync(join(__dirname, "data/sets.json")).toString(),
);

const cards = JSON.parse(
  readFileSync(join(__dirname, "data/cards.json")).toString(),
);

const cardsMetadata = [];
const packs = [];

const main = () => {
  for (const setName of RELEASED_SET_NAMES) {
    const set = sets.find((s) => s.name.en === setName);
    if (!set) {
      throw Error(`set not found: ${setName}`);
    }

    const locale = set.locales.en ?? set.locales.na;
    const setCode = locale.prefix.split("-")[0];
    const imageUrl = locale.image;

    packs.push({ code: setCode, name: setName, imageUrl });

    const contents = set.contents.find(
      (c) => c.locales.includes("en") || c.locales.includes("na"),
    );
    if (!contents) {
      throw Error(`no contents found: ${setName}`);
    }

    contents.cards.forEach((instance) => {
      const card = cards.find(({ id }) => id === instance.card);
      if (!card) {
        throw Error(`could not find card: ${instance.card}`);
      }
      cardsMetadata.push({
        code: `${locale.prefix}${instance.suffix}`,
        name: card.text.en.name,
        imageUrl: locale.cardImages.unlimited[instance.id] ?? null,

        cardType: card.cardType,
        subcategory: card.subcategory,
        attribute: card.attribute,
        classifications: card.classifications,
        monsterCardTypes: card.monsterCardTypes,
        type: card.type,
        level: card.level,
        atk: card.atk,
        def: card.def,
      });
    });
  }

  writeFileSync(join(__dirname, "packs.json"), JSON.stringify(packs));
  writeFileSync(join(__dirname, "cards.json"), JSON.stringify(cardsMetadata));
};

main();
