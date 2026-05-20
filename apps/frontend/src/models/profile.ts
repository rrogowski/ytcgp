import type { Timestamp } from "firebase/firestore";
import { useAuth } from "../lib/auth";
import {
  createCollectionRef,
  PENDING_ID,
  useDocumentWithId,
} from "../lib/firestore";

export interface ProfileModel {
  displayName: string;
  lastViewedWonderPicksAt?: Timestamp;
  nextAllowanceAt: Timestamp;
  money: number;
  wonderPoints: number;
}

export const profilesRef = createCollectionRef<ProfileModel>("profiles");

export const useProfile = () => {
  const auth = useAuth();
  return useDocumentWithId(profilesRef, auth.user?.uid ?? PENDING_ID);
};
