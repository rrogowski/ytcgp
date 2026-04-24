import type { Timestamp } from "firebase/firestore";
import { useUser } from "../lib/auth";
import { createCollectionRef, useDocumentWithId } from "../lib/firestore";

export interface ProfileModel {
  displayName: string;
  nextAllowanceAt: Timestamp;
  money: number;
  wonderPoints: number;
}

export const profilesRef = createCollectionRef<ProfileModel>("profiles");

export const useProfile = () => {
  const user = useUser();
  return useDocumentWithId(profilesRef, user.uid);
};

export const getClaimableAllowancesCount = (profile: ProfileModel) => {
  let count = 0;
  const accumulator = profile.nextAllowanceAt.toDate();
  const now = new Date();
  while (accumulator < now) {
    accumulator.setDate(accumulator.getDate() + 1);
    count++;
  }

  return count;
};
