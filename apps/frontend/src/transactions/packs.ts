import type { User } from "firebase/auth";
import { doc, Timestamp } from "firebase/firestore";
import { findPackByCode, generatePack, POINTS_PER_PACK } from "../data/packs";
import { executeTransaction } from "../lib/firestore";
import { shuffle } from "../lib/random";
import { bindersRef } from "../models/binder";
import { packsRef } from "../models/pack";
import { pointsWalletsRef } from "../models/points-wallet";
import { profilesRef } from "../models/profile";

const GOD_PACK_CHANCE = 1 / 2555;

export const buyPackTransaction = async (user: User, code: string) => {
  const isGodPack = Math.random() < GOD_PACK_CHANCE;
  const cards = generatePack(code, isGodPack);
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
      isGodPack,
      userUid: user.uid,
    });

    return cards;
  });
};

export const wonderPickTransaction = async (
  user: User,
  packId: string,
  cost: number,
) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, user.uid);
    const profile = (await t.get(profileRef)).data();
    if (!profile) {
      throw Error(`profile does not exist: ${user.uid}`);
    }
    if (profile.wonderPoints < cost) {
      throw Error(`not enough wonder points`);
    }

    const packRef = doc(packsRef, packId);
    const pack = (await t.get(packRef)).data();
    if (!pack) {
      throw Error(`pack does not exist: ${packId}`);
    }
    if (pack.wonderPicks?.[user.uid]) {
      throw Error(`user has already wonder picked this pack`);
    }

    const code = shuffle(pack.codes)[0];

    const binderRef = doc(bindersRef, user.uid);
    const binder = (await t.get(binderRef)).data();
    if (!binder) {
      throw Error(`binder does not exist`);
    }

    t.update(profileRef, { wonderPoints: profile.wonderPoints - cost });
    t.update(binderRef, { [code]: (binder[code] ?? 0) + 1 });
    t.update(packRef, {
      wonderPicks: { ...pack.wonderPicks, [user.uid]: code },
    });

    return code;
  });
};
