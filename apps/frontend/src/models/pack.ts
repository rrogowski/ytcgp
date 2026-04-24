import type { Timestamp } from "firebase/firestore";
import { createCollectionRef } from "../lib/firestore";

export interface PackModel {
  codes: string[];
  createdAt: Timestamp;
  userUid: string;
  wonderPicks?: Record<string, string>;
}

export const packsRef = createCollectionRef<PackModel>("packs");
