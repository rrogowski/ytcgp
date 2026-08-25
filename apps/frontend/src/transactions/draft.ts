import { generatePack, GOD_PACK_CHANCE } from "../data/packs";
import { executeTransaction } from "../lib/firestore";
import { primaryDraftRef } from "../models/draft";

export const createNewDraftTransaction = (
  profileIds: string[],
  packCodes: string[],
  packCount: number,
) => {
  if (
    !confirm(
      `Create new draft with ${packCount}x each of the following packs? ${packCodes.join(", ")}`,
    )
  ) {
    return;
  }

  return executeTransaction(async (t) => {
    const remainingPacks = profileIds.reduce(
      (accumulator, id) => {
        return {
          ...accumulator,
          [id]: packCodes.reduce((accumulator, code) => {
            return { ...accumulator, [code]: packCount };
          }, {}),
        };
      },
      {} as { [uid: string]: { [code: string]: number } },
    );

    const cards = profileIds.reduce(
      (accumulator, id) => {
        return { ...accumulator, [id]: {} };
      },
      {} as { [uid: string]: { [code: string]: number } },
    );

    t.set(primaryDraftRef, {
      packCodes,
      remainingPacks,
      cards,
    });
  });
};

export const openDraftPackTransaction = async (
  userUid: string,
  code: string,
) => {
  const isGodPack = Math.random() < GOD_PACK_CHANCE;
  const packs = generatePack(code, isGodPack);
  return executeTransaction(async (t) => {
    const draft = (await t.get(primaryDraftRef)).data();
    if (!draft) {
      throw Error(`no primary draft exists`);
    }

    const remainingPacks = draft.remainingPacks[userUid][code];
    if (remainingPacks === 0) {
      throw Error(`no ${code} packs remaining`);
    }

    const draftBinder = draft.cards[userUid];
    const allCards = packs.flat();
    const draftBinderUpdate = allCards.reduce((accumulator, card) => {
      return {
        ...accumulator,
        [card.code]:
          (accumulator[card.code] ?? draftBinder[card.code] ?? 0) + 1,
      };
    }, draftBinder);

    t.update(primaryDraftRef, {
      [`remainingPacks.${userUid}.${code}`]: remainingPacks - 1,
      [`cards.${userUid}`]: draftBinderUpdate,
    });

    const newCards = allCards.filter((c) => (draftBinder?.[c.code] ?? 0) === 0);
    const twoCards = allCards.filter((c) => (draftBinder?.[c.code] ?? 0) === 1);
    const threeCards = allCards.filter(
      (c) => (draftBinder?.[c.code] ?? 0) === 2,
    );
    return [packs, newCards, twoCards, threeCards, isGodPack] as const;
  });
};
