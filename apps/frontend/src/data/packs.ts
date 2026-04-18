export const ALL_PACKS = [
  {
    code: "LOB",
    name: "Legend of Blue Eyes White Dragon",
    cost: 500,
    imageUrl:
      "https://static.wikia.nocookie.net/yugioh/images/9/9f/LOB-BoosterNA.jpg",
  },
];

export const findPack = (code: string) => {
  const pack = ALL_PACKS.find((pack) => pack.code === code);
  if (!pack) {
    throw Error(`Pack not found: ${code}`);
  }

  return pack;
};
