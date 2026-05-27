import type { User } from "firebase/auth";
import { doc, Timestamp } from "firebase/firestore";
import {
  generatePack,
  getPackCostIncludingAdditionalPacks,
} from "../data/packs";
import { executeTransaction } from "../lib/firestore";
import { shuffle } from "../lib/random";
import { bindersRef } from "../models/binder";
import { packsRef } from "../models/pack";
import { pointsWalletsRef } from "../models/points-wallet";
import { profilesRef } from "../models/profile";

const GOD_PACK_CHANCE = 1 / 2555;
export const YEN_PER_PACK_POINT = 25;

export const buyPackTransaction = async (user: User, code: string) => {
  const isGodPack = Math.random() < GOD_PACK_CHANCE;
  const packs = generatePack(code, isGodPack);
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, user.uid);
    const profile = (await t.get(profileRef)).data();
    if (!profile) {
      throw Error(`profile does not exist: ${user.uid}`);
    }

    const cost = getPackCostIncludingAdditionalPacks(code);
    if (profile.money < cost) {
      throw Error("Not enough money");
    }

    const pointsWalletRef = doc(pointsWalletsRef, user.uid);
    const pointsWallet = (await t.get(pointsWalletRef)).data();

    const binderRef = doc(bindersRef, user.uid);
    const binder = (await t.get(binderRef)).data();

    const allCards = packs.flat();
    const binderUpdate = allCards.reduce(
      (accumulator, card) => {
        return {
          ...accumulator,
          [card.code]: (accumulator[card.code] ?? binder?.[card.code] ?? 0) + 1,
        };
      },
      {} as Record<string, number>,
    );

    t.update(profileRef, { money: profile.money - cost });
    if (binder) {
      t.update(binderRef, binderUpdate);
    } else {
      t.set(binderRef, binderUpdate);
    }

    const packPoints = cost / 100;
    const walletUpdate = {
      [code]: (pointsWallet?.[code] ?? 0) + packPoints,
    };
    if (pointsWallet) {
      t.update(pointsWalletRef, walletUpdate);
    } else {
      t.set(pointsWalletRef, walletUpdate);
    }

    packs.forEach((cardsInPack) => {
      t.set(doc(packsRef), {
        codes: cardsInPack.map((card) => card.code),
        createdAt: Timestamp.now(),
        isGodPack,
        userUid: user.uid,
      });
    });

    const newCards = allCards.filter((c) => (binder?.[c.code] ?? 0) === 0);
    return [packs, newCards, isGodPack] as const;
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

export const updateLastViewedWonderPickAtTransaction = async (
  userUid: string,
) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, userUid);
    const profile = (await t.get(profileRef)).data();
    if (!profile) {
      throw Error(`profile does not exist: ${userUid}`);
    }

    t.update(profileRef, { lastViewedWonderPicksAt: Timestamp.now() });
  });
};

export const convertPackPointsTransaction = async (
  userUid: string,
  code: string,
) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, userUid);
    const profile = (await t.get(profileRef)).data();
    if (!profile) {
      throw Error(`profile does not exist: ${userUid}`);
    }

    const pointsWalletRef = doc(pointsWalletsRef, userUid);
    const pointsWallet = (await t.get(pointsWalletRef)).data();
    if (!pointsWallet) {
      throw Error(`points wallet does not exist: ${userUid}`);
    }

    const packPoints = pointsWallet[code] ?? 0;
    const yen = YEN_PER_PACK_POINT * packPoints;

    t.update(profileRef, { money: profile.money + yen });
    t.update(pointsWalletRef, { [code]: 0 });
  });
};
