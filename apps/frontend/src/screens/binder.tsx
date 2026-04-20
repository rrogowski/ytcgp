import { useMemo, useState } from "react";
import { ALL_CARDS } from "../data/cards";
import { useUser } from "../lib/auth";
import { useCollection, useDocumentWithId } from "../lib/firestore";
import { bindersRef } from "../models/binder";
import { profilesRef } from "../models/profile";

export const Binder: React.FC = () => {
  const user = useUser();

  const [userUid, setUserUid] = useState(user.uid);
  const [code, setCode] = useState("");
  const [filter, setFilter] = useState("");

  const binder = useDocumentWithId(bindersRef, userUid);
  const profiles = useCollection(profilesRef);

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
            </div>
          );
        })}
      </div>
    </div>
  );
};
