import { findPackByCode } from "./packs";

export const ALL_EXPANSIONS = [
  // { name: "Rivals Clash", codes: ["SDY", "SDK", "DDS"] },
  { name: "Genesis", codes: ["LOB", "MP1"] },
];

export const getExpansionPacks = (name: string) => {
  const expansion = ALL_EXPANSIONS.find((e) => e.name === name);
  if (!expansion) {
    throw Error(`expansion not found: ${name}`);
  }
  return expansion.codes.map(findPackByCode);
};
