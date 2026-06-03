import type { Timestamp } from "firebase/firestore";
import { createCollectionRef } from "../lib/firestore";

interface PackModel {
  codes: string[];
  createdAt: Timestamp;
  isGodPack?: boolean;
  userUid: string;
  wonderPicks?: Record<string, string>;
}

export const packsRef = createCollectionRef<PackModel>("packs");
