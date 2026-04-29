import type { Timestamp } from "firebase/firestore";
import { useUser } from "../lib/auth";
import { createCollectionRef, useDocumentWithId } from "../lib/firestore";

export interface ProfileModel {
  displayName: string;
  lastViewedWonderPicksAt?: Timestamp;
  nextAllowanceAt: Timestamp;
  money: number;
  wonderPoints: number;
}

export const profilesRef = createCollectionRef<ProfileModel>("profiles");

export const useProfile = () => {
  const user = useUser();
  return useDocumentWithId(profilesRef, user.uid);
};
