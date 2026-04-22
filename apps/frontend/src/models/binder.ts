import {
  findCardByCode,
  getDisenchantValue,
  type CardMetadata,
} from "../data/cards";
import { createCollectionRef } from "../lib/firestore";

export interface BinderModel {
  [code: string]: number;
}

export const bindersRef = createCollectionRef<BinderModel>("binders");

export const getTotalCards = (binder: BinderModel | null) => {
  if (!binder) {
    return 0;
  }
  return Object.entries(binder).reduce((accumulator, [, quantity]) => {
    return accumulator + quantity;
  }, 0);
};

export const getTotalBinderValue = (binder: BinderModel | null) => {
  if (!binder) {
    return 0;
  }
  return Object.entries(binder).reduce((accumulator, [code, quantity]) => {
    const card = findCardByCode(code);
    return accumulator + getDisenchantValue(card) * quantity;
  }, 0);
};

export const getExtraCards = (
  cards: CardMetadata[],
  binder: BinderModel | null,
) => {
  if (!binder) {
    return [];
  }
  return cards.filter((card) => (binder[card.code] ?? 0) > 3);
};

export const getDisenchantTotalValue = (
  extraCards: CardMetadata[],
  binder: BinderModel | null,
) => {
  if (!binder) {
    return 0;
  }
  return extraCards
    .map((card) => {
      const extraQuantity = binder[card.code] - 3;
      return getDisenchantValue(card) * extraQuantity;
    })
    .reduce((accumulator, value) => accumulator + value, 0);
};
