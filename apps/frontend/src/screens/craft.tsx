import type { User } from "firebase/auth";
import { useMemo, useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
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

  const [filter, setFilter] = useState("");
  const [hideUncraftableCards, setHideUncraftableCards] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState("");

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

  const filteredCards = useMemo(() => {
    const cards = getCardsInSet(packCode);
    if (filter === "only-missing") {
      return cards.filter((card) => {
        return (binder.data?.[card.code] ?? 0) === 0;
      });
    } else if (filter === "incomplete") {
      return cards.filter((card) => {
        return (binder.data?.[card.code] ?? 0) < 3;
      });
    }
    return cards;
  }, [packCode, filter, binder.data]);

  const cardsToDisplay = useMemo(() => {
    if (hideUncraftableCards) {
      return filteredCards.filter((card) => {
        const pointsCost = getPackPointsCost(card.code);
        return (pointsWallet.data?.[packCode] ?? 0) >= pointsCost;
      });
    }
    return filteredCards;
  }, [filteredCards, hideUncraftableCards, pointsWallet.data, packCode]);

  const costOfRemainingCards = useMemo(() => {
    return cardsToDisplay.reduce((accumulator, card) => {
      const quantity = binder.data?.[card.code] ?? 0;
      const quantityMissing = quantity > 3 ? 0 : 3 - quantity;
      return accumulator + getPackPointsCost(card.code) * quantityMissing;
    }, 0);
  }, [binder.data, cardsToDisplay]);

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "1rem",
        position: "relative",
      }}
    >
      <CardPreview imageUrl={previewImageUrl}></CardPreview>
      <div style={{ alignItems: "center", display: "flex", gap: "0.25rem" }}>
        Filter:{" "}
        <select
          value={filter}
          onChange={(event) => setFilter(event.currentTarget.value)}
        >
          <option value="">All Cards</option>
          <option value="only-missing">Only Missing</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <input
          checked={hideUncraftableCards}
          type="checkbox"
          onChange={(event) =>
            setHideUncraftableCards(event.currentTarget.checked)
          }
        ></input>
        Hide Uncraftable?
      </div>
      <span>Cost of Remaining Cards: {costOfRemainingCards} ₱</span>
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
        {cardsToDisplay.map((card) => {
          const pointsCost = getPackPointsCost(card.code);
          const quantity = binder.data?.[card.code] ?? 0;
          return (
            <div key={card.code}>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "10rem",
                  position: "relative",
                  width: "130px",
                }}
              >
                {Array.from({ length: 3 }).map((_, i) => {
                  return (
                    <div
                      key={`${card.code}-${i}`}
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                        left: `${i * 10}px`,
                        position: "absolute",
                      }}
                    >
                      <Card
                        imageUrl={card.imageUrl}
                        opacity={quantity > 2 - i ? 1 : 0.3}
                        onPreviewStart={() => setPreviewImageUrl(card.imageUrl)}
                        onPreviewEnd={() => setPreviewImageUrl("")}
                      ></Card>
                    </div>
                  );
                })}
              </div>
              <button
                disabled={
                  isCrafting ||
                  (pointsWallet.data?.[packCode] ?? 0) < pointsCost
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
    </div>
  );
};
