import { doc } from "firebase/firestore";
import { findPack } from "../data/packs";
import { executeTransaction } from "../lib/firestore";
import { profilesRef } from "../models/profile";

export const buyPackTransaction = (userUid: string, code: string) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, userUid);
    const profile = (await t.get(profileRef)).data();
    if (!profile) {
      throw Error(`profile does not exist: ${userUid}`);
    }

    const pack = findPack(code);
    if (profile.money < pack.cost) {
      throw Error("Not enough money");
    }

    throw Error("unimplemented");
  });
};
