import type { User } from "firebase/auth";
import { doc, Timestamp } from "firebase/firestore";
import { executeTransaction } from "../lib/firestore";
import { getClaimableAllowancesCount, profilesRef } from "../models/profile";

const ALLOWANCE_AMOUNT = 1000;

export const claimAllowanceTransaction = (user: User) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, user.uid);
    const profile = (await t.get(profileRef)).data();

    const count = profile ? getClaimableAllowancesCount(profile) : 1;
    const nextAllowanceAt = profile
      ? profile.nextAllowanceAt.toDate()
      : new Date();
    nextAllowanceAt.setDate(nextAllowanceAt.getDate() + count);

    if (!profile) {
      t.set(profileRef, {
        displayName: user.displayName ?? "",
        nextAllowanceAt: Timestamp.fromDate(nextAllowanceAt),
        money: ALLOWANCE_AMOUNT,
      });
    } else {
      t.update(profileRef, {
        displayName: user.displayName ?? "",
        nextAllowanceAt: Timestamp.fromDate(nextAllowanceAt),
        money: profile.money + ALLOWANCE_AMOUNT * count,
      });
    }
  });
};
