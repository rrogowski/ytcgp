import { useMemo, useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { getCardsInSet, getDisenchantValue } from "../data/cards";
import { ALL_PACKS } from "../data/packs";
import { useUser } from "../lib/auth";
import { useCollection, useDocumentWithId } from "../lib/firestore";
import { useRouter } from "../lib/router";
import { useTransaction } from "../lib/transaction";
import {
  bindersRef,
  getDisenchantTotalValue,
  getExtraCards,
} from "../models/binder";
import { profilesRef } from "../models/profile";
import { disenchantAllExtrasTransaction } from "../transactions/disenchant";

export const Binder: React.FC = () => {
  const router = useRouter();
  const user = useUser();

  const [userUid, setUserUid] = useState(user.uid);
  const [code, setCode] = useState(ALL_PACKS[0].code);
  const [filter, setFilter] = useState("");
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [shouldShowQuantities, setShouldShowQuantities] = useState(false);

  const binder = useDocumentWithId(bindersRef, userUid);
  const profiles = useCollection(profilesRef);

  const [isDisenchanting, disenchantAllExtras] = useTransaction(
    disenchantAllExtrasTransaction,
  );

  const cardsToDisplay = useMemo(() => {
    const cards = getCardsInSet(code);
    if (filter === "only-missing") {
      return cards.filter((card) => {
        return (binder.data?.[card.code] ?? 0) === 0;
      });
    } else if (filter === "exclude-missing") {
      return cards.filter((card) => {
        return (binder.data?.[card.code] ?? 0) > 0;
      });
    }
    return cards;
  }, [binder.data, code, filter]);

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
    await disenchantAllExtras(user, code);
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
            value={code}
            onChange={(event) => setCode(event.currentTarget.value)}
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
            isDisenchanting || userUid !== user.uid || extraCards.length === 0
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
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        {cardsToDisplay.map((card) => {
          const quantity = binder.data?.[card.code] ?? 0;
          return (
            <div
              key={card.code}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                height: "8.5rem",
                position: "relative",
                width: "116px",
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
                    right: "3px",
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
                      height="8.5rem"
                      opacity={quantity > 2 - i ? 1 : 0.3}
                      onPreviewStart={() => setPreviewImageUrl(card.imageUrl)}
                      onPreviewEnd={() => setPreviewImageUrl("")}
                    ></Card>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
