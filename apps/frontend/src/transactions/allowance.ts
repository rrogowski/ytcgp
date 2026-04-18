import { doc, Timestamp } from "firebase/firestore";
import { executeTransaction } from "../lib/firestore";
import { getClaimableAllowancesCount, profilesRef } from "../models/profile";

const ALLOWANCE_AMOUNT = 1000;

export const claimAllowanceTransaction = (userUid: string) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, userUid);
    const profile = (await t.get(profileRef)).data();

    const count = profile ? getClaimableAllowancesCount(profile) : 1;
    const nextAllowanceAt = profile
      ? profile.nextAllowanceAt.toDate()
      : new Date();
    nextAllowanceAt.setDate(nextAllowanceAt.getDate() + count);

    if (!profile) {
      t.set(profileRef, {
        nextAllowanceAt: Timestamp.fromDate(nextAllowanceAt),
        money: ALLOWANCE_AMOUNT,
      });
    } else {
      t.update(profileRef, {
        nextAllowanceAt: Timestamp.fromDate(nextAllowanceAt),
        money: profile.money + ALLOWANCE_AMOUNT * count,
      });
    }
  });
};
