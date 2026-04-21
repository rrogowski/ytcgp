import type { User } from "firebase/auth";
import { doc } from "firebase/firestore";
import { getCardsInSet } from "../data/cards";
import { executeTransaction } from "../lib/firestore";
import {
  bindersRef,
  getDisenchantTotalValue,
  getExtraCards,
} from "../models/binder";
import { profilesRef } from "../models/profile";

export const disenchantAllExtrasTransaction = async (
  user: User,
  packCode: string,
) => {
  return executeTransaction(async (t) => {
    const profileRef = doc(profilesRef, user.uid);
    const profile = (await t.get(profileRef)).data();
    if (!profile) {
      throw Error(`profile does not exist`);
    }

    const binderRef = doc(bindersRef, user.uid);
    const binder = (await t.get(binderRef)).data();
    if (!binder) {
      throw Error(`binder does not exist`);
    }

    const cards = getCardsInSet(packCode);
    const extraCards = getExtraCards(cards, binder);
    const totalValue = getDisenchantTotalValue(extraCards, binder);
    const binderUpdate = extraCards.reduce((accumulator, card) => {
      return { ...accumulator, [card.code]: 3 };
    }, {});

    t.update(profileRef, { money: profile.money + totalValue });
    t.update(binderRef, binderUpdate);
  });
};
