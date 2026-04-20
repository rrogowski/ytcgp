import type { User } from "firebase/auth";
import {
  getCardsInSet,
  getPackPointsCost,
  type CardMetadata,
} from "../data/cards";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { useRouter } from "../lib/router";
import { useTransaction } from "../lib/transaction";
import { bindersRef } from "../models/binder";
import { pointsWalletsRef } from "../models/points-wallet";
import { craftTransaction } from "../transactions/craft";

export const Craft: React.FC = () => {
  const router = useRouter();
  const user = useUser();

  const binder = useDocumentWithId(bindersRef, user.uid);
  const pointsWallet = useDocumentWithId(pointsWalletsRef, user.uid);

  const [isCrafting, craft] = useTransaction(craftTransaction);

  const packCode = router.params["code"] ?? "";

  const handleCraft = async (user: User, card: CardMetadata) => {
    const pointsCost = getPackPointsCost(card.code);
    if (
      !confirm(
        `Are you sure you want to craft ${card.name} for ${pointsCost} ₱?`,
      )
    ) {
      return;
    }
    await craft(user, packCode, card.code);
  };

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        flexWrap: "wrap",
        gap: "0.25rem",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      {getCardsInSet(packCode).map((card) => {
        const pointsCost = getPackPointsCost(card.code);
        const quantity = binder.data?.[card.code] ?? 0;
        return (
          <div
            key={card.code}
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              width: "110px",
            }}
          >
            <img
              src={card.imageUrl}
              style={{
                height: "10rem",
                opacity: quantity > 0 ? 1 : 0.3,
                width: "auto",
              }}
            ></img>
            <span>
              {card.code} x{quantity}
            </span>
            <button
              disabled={
                isCrafting || (pointsWallet.data?.[packCode] ?? 0) < pointsCost
              }
              style={{ width: "100%" }}
              onClick={() => handleCraft(user, card)}
            >
              Craft ({pointsCost} ₱)
            </button>
          </div>
        );
      })}
    </div>
  );
};
