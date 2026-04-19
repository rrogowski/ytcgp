import { useMemo, useState } from "react";
import { ALL_CARDS } from "../data/cards";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { bindersRef } from "../models/binder";

export const Binder: React.FC = () => {
  const user = useUser();

  const binder = useDocumentWithId(bindersRef, user.uid);

  const [code, setCode] = useState("");
  const [filter, setFilter] = useState("");

  const cardsToDisplay = useMemo(() => {
    if (filter === "only-missing") {
      return ALL_CARDS.filter((card) => {
        return (binder.data?.[card.code] ?? 0) === 0;
      });
    }
    return ALL_CARDS;
  }, [binder.data, filter]);

  if (binder.isLoading) {
    return <>Loading...</>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <div>
          Set:{" "}
          <select
            value={code}
            onChange={(event) => setCode(event.currentTarget.value)}
          >
            <option value="">All Sets</option>
            <option value="LOB">Legend of Blue Eyes White Dragon</option>
          </select>
        </div>
        <div>
          Filter:{" "}
          <select
            value={filter}
            onChange={(event) => setFilter(event.currentTarget.value)}
          >
            <option value="">All Cards</option>
            <option value="only-missing">Only Missing</option>
          </select>
        </div>
      </div>
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
          const quantity = binder.data?.[card.code] ?? 0;
          return (
            <div
              key={card.code}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                width: "120px",
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
            </div>
          );
        })}
      </div>
    </div>
  );
};
