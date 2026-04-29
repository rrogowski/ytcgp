import type { User } from "firebase/auth";
import { doc } from "firebase/firestore";
import {
  findCardByCode,
  getCardsInExpansion,
  getDisenchantValue,
} from "../data/cards";
import { executeTransaction } from "../lib/firestore";
import {
  bindersRef,
  getDisenchantTotalValue,
  getExtraCards,
} from "../models/binder";
import { profilesRef } from "../models/profile";

export const DISENCHANT_MIN_COPIES = 3;

export const disenchantAllExtrasTransaction = async (
  user: User,
  expansionName: string,
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

    const cards = getCardsInExpansion(expansionName);
    const extraCards = getExtraCards(cards, binder);
    const totalValue = getDisenchantTotalValue(extraCards, binder);
    const binderUpdate = extraCards.reduce((accumulator, card) => {
      return { ...accumulator, [card.code]: 3 };
    }, {});

    t.update(profileRef, { money: profile.money + totalValue });
    t.update(binderRef, binderUpdate);
  });
};

export const disenchantTransaction = async (user: User, code: string) => {
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

    const quantity = binder[code] ?? 0;
    if (quantity <= DISENCHANT_MIN_COPIES) {
      throw Error(`cannot disenchant below ${DISENCHANT_MIN_COPIES} copy`);
    }

    const card = findCardByCode(code);
    const value = getDisenchantValue(card);

    t.update(profileRef, { money: profile.money + value });
    t.update(binderRef, { [card.code]: quantity - 1 });
  });
};
