import type { User } from "firebase/auth";
import { doc } from "firebase/firestore";
import { getPackPointsCost } from "../data/cards";
import { executeTransaction } from "../lib/firestore";
import { bindersRef } from "../models/binder";
import { pointsWalletsRef } from "../models/points-wallet";

export const craftTransaction = async (
  user: User,
  packCode: string,
  cardCode: string,
) => {
  return executeTransaction(async (t) => {
    const pointsWalletRef = doc(pointsWalletsRef, user.uid);
    const pointsWallet = (await t.get(pointsWalletRef)).data();
    if (!pointsWallet) {
      throw Error(`points wallet does not exist for set: ${packCode}`);
    }

    const pointsCost = getPackPointsCost(cardCode);
    if ((pointsWallet[packCode] ?? 0) < pointsCost) {
      throw Error("not enough pack points");
    }

    const binderRef = doc(bindersRef, user.uid);
    const binder = (await t.get(binderRef)).data();
    if (!binder) {
      throw Error(`binder does not exist`);
    }

    t.update(binderRef, { [cardCode]: (binder[cardCode] ?? 0) + 1 });
    t.update(pointsWalletRef, {
      [packCode]: (pointsWallet[packCode] ?? 0) - pointsCost,
    });
  });
};
