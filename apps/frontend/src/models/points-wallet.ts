import { createCollectionRef } from "../lib/firestore";

interface PointsWalletModel {
  [code: string]: number;
}

export const pointsWalletsRef =
  createCollectionRef<PointsWalletModel>("points-wallets");
