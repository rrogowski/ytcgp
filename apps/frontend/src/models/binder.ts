import { createCollectionRef } from "../lib/firestore";

export interface BinderModel {
  [code: string]: number;
}

export const bindersRef = createCollectionRef<BinderModel>("binders");
