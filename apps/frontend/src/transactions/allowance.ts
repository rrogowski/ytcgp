import type { User } from "firebase/auth";
import { doc, Timestamp } from "firebase/firestore";
import { getAllowanceCount } from "../lib/allowance";
import { executeTransaction } from "../lib/firestore";
import { profilesRef } from "../models/profile";

const ALLOWANCE_AMOUNT = 3600;
const WONDER_POINTS_AMOUNT = 50;

export const claimAllowanceTransaction = (user: User) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, user.uid);
    const profile = (await t.get(profileRef)).data();

    const count = profile ? getAllowanceCount(profile) : 1;
    const nextAllowanceAt = profile
      ? profile.nextAllowanceAt.toDate()
      : new Date();
    nextAllowanceAt.setDate(nextAllowanceAt.getDate() + count);

    if (!profile) {
      t.set(profileRef, {
        displayName: user.displayName ?? "",
        nextAllowanceAt: Timestamp.fromDate(nextAllowanceAt),
        money: ALLOWANCE_AMOUNT,
        wonderPoints: WONDER_POINTS_AMOUNT,
      });
    } else {
      t.update(profileRef, {
        displayName: user.displayName ?? "",
        nextAllowanceAt: Timestamp.fromDate(nextAllowanceAt),
        money: profile.money + ALLOWANCE_AMOUNT * count,
        wonderPoints: profile.wonderPoints + WONDER_POINTS_AMOUNT * count,
      });
    }
  });
};
