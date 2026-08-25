import { doc } from "firebase/firestore";
import { createCollectionRef } from "../lib/firestore";

export interface DraftModel {
  packCodes: string[];
  remainingPacks: { [uid: string]: { [code: string]: number } };
  cards: { [uid: string]: { [code: string]: number } };
}

export const draftsRef = createCollectionRef<DraftModel>("drafts");
export const primaryDraftRef = doc(draftsRef, "primary");
