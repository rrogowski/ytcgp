import { limit, orderBy, Timestamp } from "firebase/firestore";
import { Fragment, useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { findCardByCode, getCardsInSet } from "../data/cards";
import { ALL_EXPANSIONS } from "../data/expansions";
import { findPackByCode } from "../data/packs";
import { useUser } from "../lib/auth";
import { useCollection } from "../lib/firestore";
import { useTransaction } from "../lib/transaction";
import {
  bindersRef,
  getGrandMasterSets,
  getMasterSets,
  getTotalBinderValue,
  getTotalCards,
  getTotalPlaysets,
  getTotalUniques,
} from "../models/binder";
import { packsRef } from "../models/pack";
import { profilesRef } from "../models/profile";
import { giveStimulusTransaction } from "../transactions/stimulus";

const RECENT_PACKS_CONSTRAINTS = [orderBy("createdAt", "desc"), limit(20)];

export const Community: React.FC = () => {
  const user = useUser();
  const binders = useCollection(bindersRef);
  const profiles = useCollection(profilesRef);

  const [userUid, setUserUid] = useState("");

  const packs = useCollection(packsRef, RECENT_PACKS_CONSTRAINTS);

  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const [, giveStimulus] = useTransaction(giveStimulusTransaction);

  if (binders.isLoading || packs.isLoading || profiles.isLoading) {
    return <>Loading...</>;
  }

  const showPackProgress = (code: string) => {
    const pack = findPackByCode(code);
    const cards = getCardsInSet(code);
    const lines = profiles.docs.map((profile) => {
      const binder = binders.docs.find((d) => d.id === profile.id);
      const ownedCards = cards.filter((card) => {
        return (binder?.data[card.code] ?? 0) > 0;
      });
      return `${profile.data.displayName}: ${ownedCards.length} / ${cards.length}`;
    });
    alert([`${pack.name}\n`, ...lines].join("\n"));
  };

  const filteredPacks = packs.docs.filter((pack) => {
    return userUid.length > 0 ? pack.data.userUid === userUid : true;
  });

  const achievementPacks = ALL_EXPANSIONS.map((expansion) =>
    expansion.codes.map(findPackByCode),
  ).flat();

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "0.75rem",
        position: "relative",
        width: "100%",
      }}
    >
      <CardPreview
        imageUrl={previewImageUrl}
        onClick={() => setPreviewImageUrl("")}
      ></CardPreview>
      <h3>Collection Stats</h3>
      {user.displayName === "Roman Rogowski" && (
        <button
          onClick={() =>
            giveStimulus(
              profiles.docs.map((d) => d.id),
              0,
              0,
            )
          }
        >
          Give Stimulus
        </button>
      )}
      <div>
        <table
          style={{
            margin: "0 auto",
            width: "100%",
            textWrap: "nowrap",
          }}
        >
          <thead>
            <tr>
              <th>Player</th>
              <th># Cards</th>
              <th># Uniques</th>
              <th># Playsets</th>
              <th>Binder Value</th>
              <th>Achievements</th>
            </tr>
          </thead>
          <tbody>
            {profiles.docs.map((profile) => {
              const binder = binders.docs.find((d) => d.id === profile.id);
              const masterSets = getMasterSets(binder?.data ?? null);
              const grandMasterSets = getGrandMasterSets(binder?.data ?? null);
              return (
                <tr key={profile.id}>
                  <td>{profile.data.displayName}</td>
                  <td>{getTotalCards(binder?.data ?? null)}</td>
                  <td>{getTotalUniques(binder?.data ?? null)}</td>
                  <td>{getTotalPlaysets(binder?.data ?? null)}</td>
                  <td>¥{getTotalBinderValue(binder?.data ?? null)}</td>
                  <td
                    style={{
                      alignItems: "center",
                      borderLeft: "none",
                      display: "flex",
                      gap: "0.75rem",
                      height: "100%",
                      justifyContent: "center",
                    }}
                  >
                    {achievementPacks.map((pack) => {
                      return (
                        <div
                          key={pack.code}
                          style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <span
                            style={{
                              marginBottom: "0.5rem",
                              fontSize: "0.6rem",
                              lineHeight: "6px",
                            }}
                          >
                            {grandMasterSets.includes(pack) ? (
                              <>👑</>
                            ) : (
                              <>&nbsp;</>
                            )}
                          </span>
                          <img
                            src={pack.imageUrl}
                            style={{
                              cursor: "pointer",
                              height: "2rem",
                              opacity: masterSets.includes(pack) ? 1 : 0.2,
                              transform: "scale(1.3)",
                            }}
                            onClick={() => showPackProgress(pack.code)}
                          ></img>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h3>Recent Packs</h3>
      <div>
        <span>Player: </span>
        <select
          value={userUid}
          onChange={(event) => setUserUid(event.currentTarget.value)}
        >
          <option value="">All Players</option>
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
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: "1rem",
          overflow: "auto",
          width: "100%",
        }}
      >
        {filteredPacks.length === 0 && (
          <>
            <hr style={{ width: "100%" }}></hr>
            <b>No recent packs to display.</b>
          </>
        )}
        {filteredPacks.map((pack) => {
          const profile = profiles.docs.find((d) => d.id === pack.data.userUid);
          return (
            <Fragment key={pack.id}>
              <hr style={{ width: "100%" }}></hr>
              <span>
                {profile?.data.displayName} | {formatDate(pack.data.createdAt)}
              </span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.25rem",
                  rowGap: "1rem",
                  justifyContent: "center",
                }}
              >
                {pack.data.codes.map((code) => {
                  const card = findCardByCode(code);
                  return (
                    <div
                      key={code}
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        width: "110px",
                      }}
                    >
                      <Card
                        imageUrl={card.thumbnailUrl}
                        height="9rem"
                        onClick={() => setPreviewImageUrl(card.imageUrl)}
                      ></Card>
                    </div>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

const formatDate = (timestamp: Timestamp) => {
  const formatter = new Intl.DateTimeFormat("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return formatter.format(timestamp.toDate());
};
