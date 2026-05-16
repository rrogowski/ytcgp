import { findPackByCode } from "./packs";

const now = new Date();

export const ALL_EXPANSIONS = [
  ...(now.getTime() >= Date.parse("May 18, 2026") && now.getHours() >= 8
    ? [{ name: "Mechanical Dominion", codes: ["MRD", "TP1", "SRL"] }]
    : []),
  { name: "Rivals Clash", codes: ["SDY", "SDK", "DDS"] },
  { name: "Genesis", codes: ["LOB", "MP1"] },
];

export const getExpansionPacks = (name: string) => {
  const expansion = ALL_EXPANSIONS.find((e) => e.name === name);
  if (!expansion) {
    throw Error(`expansion not found: ${name}`);
  }
  return expansion.codes.map(findPackByCode);
};
