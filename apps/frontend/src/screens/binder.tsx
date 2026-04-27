import { useMemo, useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import {
  getCardsInSet,
  getDisenchantValue,
  type CardMetadata,
} from "../data/cards";
import { ALL_PACKS } from "../data/packs";
import { useUser } from "../lib/auth";
import { useCollection, useDocumentWithId } from "../lib/firestore";
import { useTransaction } from "../lib/transaction";
import {
  bindersRef,
  getDisenchantTotalValue,
  getExtraCards,
} from "../models/binder";
import { profilesRef } from "../models/profile";
import {
  DISENCHANT_MIN_COPIES,
  disenchantAllExtrasTransaction,
  disenchantTransaction,
} from "../transactions/disenchant";

export const Binder: React.FC = () => {
  const user = useUser();

  const [userUid, setUserUid] = useState(user.uid);
  const [packCode, setPackCode] = useState(ALL_PACKS[0].code);
  const [filter, setFilter] = useState("");
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [shouldShowQuantities, setShouldShowQuantities] = useState(false);

  const binder = useDocumentWithId(bindersRef, userUid);
  const profiles = useCollection(profilesRef);

  const [isDisenchantingAllExtras, disenchantAllExtras] = useTransaction(
    disenchantAllExtrasTransaction,
  );

  const [isDisenchanting, disenchant] = useTransaction(disenchantTransaction);

  const cardsToDisplay = useMemo(() => {
    const cards = getCardsInSet(packCode);
    if (filter === "only-missing") {
      return cards.filter((card) => {
        return (binder.data?.[card.code] ?? 0) === 0;
      });
    } else if (filter === "exclude-missing") {
      return cards.filter((card) => {
        return (binder.data?.[card.code] ?? 0) > 0;
      });
    } else if (filter === "disenchantable") {
      return cards.filter((card) => {
        return (binder.data?.[card.code] ?? 0) > DISENCHANT_MIN_COPIES;
      });
    }
    return cards;
  }, [binder.data, packCode, filter]);

  const extraCards = useMemo(() => {
    return getExtraCards(cardsToDisplay, binder.data);
  }, [cardsToDisplay, binder.data]);

  const handleDisenchantAllExtras = async () => {
    const extraCardsText = extraCards
      .map((card) => {
        const quantity = (binder.data?.[card.code] ?? 0) - 3;
        const value = getDisenchantValue(card);
        return `${card.name} x${quantity} (¥${value} each)`;
      })
      .join("\n");
    const totalValue = getDisenchantTotalValue(extraCards, binder.data);
    if (
      !confirm(
        `Are you sure you want to disenchant the following cards for ¥${totalValue}?\n${extraCardsText}`,
      )
    ) {
      return;
    }
    await disenchantAllExtras(user, packCode);
  };

  const handleDisenchant = async (card: CardMetadata) => {
    const value = getDisenchantValue(card);
    if (
      !confirm(
        `Are you sure you want to disenchant ${card.name} for ¥${value}?`,
      )
    ) {
      return;
    }
    await disenchant(user, card.code);
  };

  if (binder.isLoading) {
    return <>Loading...</>;
  }

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      <CardPreview imageUrl={previewImageUrl}></CardPreview>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
          width: "100%",
        }}
      >
        <div>
          Player:{" "}
          <select
            value={userUid}
            onChange={(event) => setUserUid(event.currentTarget.value)}
          >
            <option value={user.uid}>{user.displayName}</option>
            {profiles.docs.map((profile) => {
              if (profile.id === user.uid) {
                return null;
              }
              return (
                <option key={profile.id} value={profile.id}>
                  {profile.data.displayName}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          Set:{" "}
          <select
            value={packCode}
            onChange={(event) => setPackCode(event.currentTarget.value)}
          >
            {ALL_PACKS.map((pack) => {
              return (
                <option key={pack.code} value={pack.code}>
                  {pack.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "0.5rem",
          width: "100%",
        }}
      >
        <button
          disabled={
            isDisenchantingAllExtras ||
            userUid !== user.uid ||
            extraCards.length === 0
          }
          onClick={handleDisenchantAllExtras}
        >
          Disenchant All Extras
        </button>
        <div>
          Filter:{" "}
          <select
            value={filter}
            onChange={(event) => setFilter(event.currentTarget.value)}
          >
            <option value="">All Cards</option>
            <option value="only-missing">Only Missing</option>
            <option value="exclude-missing">Exclude Missing</option>
            <option value="disenchantable">Disenchantable</option>
          </select>
        </div>
        <div>
          <input
            checked={shouldShowQuantities}
            type="checkbox"
            onChange={(event) =>
              setShouldShowQuantities(event.currentTarget.checked)
            }
          ></input>{" "}
          Show Quantities?
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexWrap: "wrap",
          gap: "0.3rem",
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        {cardsToDisplay.length === 0 && <>No cards to display.</>}
        {cardsToDisplay.map((card) => {
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
                {shouldShowQuantities && (
                  <span
                    style={{
                      zIndex: 500,
                      alignItems: "center",
                      backgroundColor: "black",
                      borderRadius: "0.25rem",
                      bottom: 0,
                      color: "white",
                      display: "flex",
                      height: "1.5rem",
                      justifyContent: "center",
                      position: "absolute",
                      right: 0,
                      width: "1.5rem",
                    }}
                  >
                    {quantity}
                  </span>
                )}
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
              {shouldShowQuantities && (
                <button
                  disabled={
                    quantity <= DISENCHANT_MIN_COPIES ||
                    userUid !== user.uid ||
                    isDisenchanting
                  }
                  onClick={() => handleDisenchant(card)}
                  style={{ fontSize: "0.8rem", width: "100%" }}
                >
                  Disenchant (¥{getDisenchantValue(card)})
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
