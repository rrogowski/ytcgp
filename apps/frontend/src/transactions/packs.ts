import type { User } from "firebase/auth";
import { doc, Timestamp } from "firebase/firestore";
import { findPackByCode, generatePack, POINTS_PER_PACK } from "../data/packs";
import { executeTransaction } from "../lib/firestore";
import { bindersRef } from "../models/binder";
import { packsRef } from "../models/pack";
import { pointsWalletsRef } from "../models/points-wallet";
import { profilesRef } from "../models/profile";

export const buyPackTransaction = async (user: User, code: string) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, user.uid);
    const profile = (await t.get(profileRef)).data();
    if (!profile) {
      throw Error(`profile does not exist: ${user.uid}`);
    }

    const pack = findPackByCode(code);
    if (profile.money < pack.cost) {
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

    t.update(profileRef, { money: profile.money - pack.cost });
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

    t.set(doc(packsRef), {
      codes: cards.map((card) => card.code),
      createdAt: Timestamp.now(),
      userUid: user.uid,
    });

    return cards;
  });
};
