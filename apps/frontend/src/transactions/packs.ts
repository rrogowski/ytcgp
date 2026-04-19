import type { User } from "firebase/auth";
import { doc } from "firebase/firestore";
import { generatePack, PACK_COST, POINTS_PER_PACK } from "../data/packs";
import { executeTransaction } from "../lib/firestore";
import { bindersRef } from "../models/binder";
import { pointsWalletsRef } from "../models/points-wallet";
import { profilesRef } from "../models/profile";

export const buyPackTransaction = async (user: User, code: string) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, user.uid);
    const profile = (await t.get(profileRef)).data();
    if (!profile) {
      throw Error(`profile does not exist: ${user.uid}`);
    }

    if (profile.money < PACK_COST) {
      throw Error("Not enough money");
    }

    const pointsWalletRef = doc(pointsWalletsRef, user.uid);
    const pointsWallet = (await t.get(pointsWalletRef)).data();

    const cards = generatePack(code);
    const binderRef = doc(bindersRef, user.uid);
    const binder = (await t.get(binderRef)).data();
    const binderUpdate = cards.reduce((accumulator, card) => {
      return { ...accumulator, [card.code]: (binder?.[card.code] ?? 0) + 1 };
    }, {});

    t.update(profileRef, { money: profile.money - PACK_COST });
    if (binder) {
      t.update(binderRef, binderUpdate);
    } else {
      t.set(binderRef, binderUpdate);
    }

    const walletUpdate = {
      [code]: (pointsWallet?.[code] ?? 0) + POINTS_PER_PACK,
    };
    if (pointsWallet) {
      t.update(pointsWalletRef, walletUpdate);
    } else {
      t.set(pointsWalletRef, walletUpdate);
    }

    return cards;
  });
};
