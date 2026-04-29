const { readFileSync, writeFileSync } = require("node:fs");
const { join } = require("path");

const sets = JSON.parse(
  readFileSync(join(__dirname, "data/sets.json")).toString(),
);

const main = () => {
  sets.sort((a, b) => {
    return getReleaseDate(a).localeCompare(getReleaseDate(b));
  });

  sets.forEach((set) => {
    if (getReleaseDate(set) !== "9999-12-12") {
      console.log(getReleaseDate(set), set.name.en ?? set.name.na);
    }
  });
};

const getReleaseDate = (set) => {
  if (!set.locales?.en && !set.locales?.na) {
    return "9999-12-12";
  }

  const locales = Object.keys(set.locales ?? {});
  for (const locale of locales) {
    if (set.locales[locale].date) {
      return set.locales[locale].date;
    }
  }

  return "9999-12-12";
};

main();
