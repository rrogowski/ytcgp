import { findPackByCode } from "./packs";

export const ALL_EXPANSIONS = [
  { name: "Time & Illusion", codes: ["SDJ", "TP3", "SDP"] },
  { name: "Forbidden Steel", codes: ["PSV", "TP2", "LON"] },
  { name: "Shonen Jump", codes: ["JMPV1", "JMPV2"] },
  { name: "Video Games", codes: ["SDD", "DOR", "EDS", "FMR", "DDS"] },
  { name: "Collectible Tins", codes: ["BPTV1", "BPTV2"] },
  { name: "Mechanical Dominion", codes: ["MRD", "TP1", "SRL"] },
  { name: "Rivals Clash", codes: ["SDY", "SDK"] },
  { name: "Genesis", codes: ["LOB", "MP1"] },
];

export const getExpansionPacks = (name: string) => {
  const expansion = ALL_EXPANSIONS.find((e) => e.name === name);
  if (!expansion) {
    throw Error(`expansion not found: ${name}`);
  }
  return expansion.codes.map(findPackByCode);
};
