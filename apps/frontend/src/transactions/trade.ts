import type { User } from "firebase/auth";
import { doc } from "firebase/firestore";
import { executeTransaction } from "../lib/firestore";
import { bindersRef } from "../models/binder";

export const sendCardTransaction = async (
  user: User,
  otherUserUid: string,
  code: string,
) => {
  return executeTransaction(async (t) => {
    const binderRef = doc(bindersRef, user.uid);
    const binder = (await t.get(binderRef)).data();
    if (!binder) {
      throw Error(`binder does not exist`);
    }

    const otherBinderRef = doc(bindersRef, otherUserUid);
    const otherBinder = (await t.get(otherBinderRef)).data();
    if (!otherBinder) {
      throw Error(`other binder does not exist`);
    }

    const quantity = binder[code] ?? 0;
    if (quantity < 1) {
      throw Error(`no copies of card to send`);
    }

    const otherQuantity = otherBinder[code] ?? 0;

    t.update(binderRef, { [code]: quantity - 1 });
    t.update(otherBinderRef, { [code]: otherQuantity + 1 });
  });
};
