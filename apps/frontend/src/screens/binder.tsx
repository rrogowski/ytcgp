import { useMemo, useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { CardRarity } from "../components/card-rarity";
import { FullPageText } from "../components/full-page-text";
import {
  getCardsInExpansion,
  getDisenchantValue,
  getThumbnailUrl,
  type CardMetadata,
} from "../data/cards";
import { ALL_EXPANSIONS } from "../data/expansions";
import { useUser } from "../lib/auth";
import { useCollection, useDocumentWithId } from "../lib/firestore";
import { useLocalStorageState } from "../lib/local-storage";
import { useRouter } from "../lib/router";
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
  const router = useRouter();
  const user = useUser();

  const [userUid, setUserUid] = useState(user.uid);
  const [expansionName, setExpansionName] = useLocalStorageState(
    "packs.expansionName",
    ALL_EXPANSIONS[0].name,
  );
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
    const cards = getCardsInExpansion(expansionName);
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
  }, [binder.data, expansionName, filter]);

  const extraCards = useMemo(() => {
    return getExtraCards(cardsToDisplay, binder.data);
  }, [cardsToDisplay, binder.data]);

  const handleDisenchantAllExtras = async () => {
    const totalValue = getDisenchantTotalValue(extraCards, binder.data);
    if (
      !confirm(
        `Are you sure you want to disenchant all extras for ¥${totalValue}?`,
      )
    ) {
      return;
    }
    await disenchantAllExtras(user, expansionName);
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
    return <FullPageText>Loading...</FullPageText>;
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
      <CardPreview
        imageUrl={previewImageUrl}
        onClick={() => setPreviewImageUrl("")}
      ></CardPreview>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
          width: "100%",
        }}
      >
        <div>
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
          <select
            value={expansionName}
            onChange={(event) => setExpansionName(event.currentTarget.value)}
          >
            {ALL_EXPANSIONS.map((expansion) => {
              return <option key={expansion.name}>{expansion.name}</option>;
            })}
          </select>
        </div>
        <button onClick={() => router.navigate("/search")}>Search</button>
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
          Quantities?
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexWrap: "wrap",
          gap: "0.3rem",
          rowGap: "0.8rem",
          justifyContent: "center",
          overflow: "auto",
          width: "100%",
        }}
      >
        {cardsToDisplay.length === 0 && <>No cards to display.</>}
        {cardsToDisplay.map((card) => {
          const quantity = binder.data?.[card.code] ?? 0;
          return (
            <div
              key={card.code}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "110px",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "8rem",
                  position: "relative",
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
                        height="8rem"
                        imageUrl={getThumbnailUrl(card)}
                        opacity={quantity > 2 - i ? 1 : 0.3}
                        onClick={() => setPreviewImageUrl(card.imageUrl)}
                      ></Card>
                    </div>
                  );
                })}
                <span style={{ position: "absolute", bottom: "-.75rem" }}>
                  <CardRarity rarity={card.rarity}></CardRarity>
                </span>
              </div>
              {shouldShowQuantities && userUid === user.uid && (
                <button
                  disabled={
                    quantity <= DISENCHANT_MIN_COPIES || isDisenchanting
                  }
                  onClick={() => handleDisenchant(card)}
                  style={{ fontSize: "0.8rem" }}
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
