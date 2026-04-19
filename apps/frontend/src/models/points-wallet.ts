import { createCollectionRef } from "../lib/firestore";

export interface PointsWalletModel {
  [code: string]: number;
}

export const pointsWalletsRef =
  createCollectionRef<PointsWalletModel>("points-wallets");
