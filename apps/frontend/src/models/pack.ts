import type { Timestamp } from "firebase/firestore";
import { createCollectionRef } from "../lib/firestore";

export interface PackModel {
  codes: string[];
  createdAt: Timestamp;
  userUid: string;
}

export const packsRef = createCollectionRef<PackModel>("packs");
