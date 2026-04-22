import { limit, orderBy, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { findCardByCode } from "../data/cards";
import { useUser } from "../lib/auth";
import { useCollection } from "../lib/firestore";
import {
  bindersRef,
  getTotalBinderValue,
  getTotalCards,
} from "../models/binder";
import { packsRef } from "../models/pack";
import { profilesRef } from "../models/profile";

const RECENT_PACKS_CONSTRAINTS = [orderBy("createdAt", "desc"), limit(20)];

export const Community: React.FC = () => {
  const user = useUser();
  const binders = useCollection(bindersRef);
  const profiles = useCollection(profilesRef);

  const [userUid, setUserUid] = useState("");

  const packs = useCollection(packsRef, RECENT_PACKS_CONSTRAINTS);

  if (binders.isLoading || packs.isLoading || profiles.isLoading) {
    return <>Loading...</>;
  }

  const filteredPacks = packs.docs.filter((pack) => {
    return userUid.length > 0 ? pack.data.userUid === userUid : true;
  });

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "0.75rem",
      }}
    >
      <h3>Collection Stats</h3>
      <table>
        <thead>
          <th>Player</th>
          <th># Cards</th>
          <th>Binder Value</th>
        </thead>
        <tbody>
          {profiles.docs.map((profile) => {
            const binder = binders.docs.find((d) => d.id === profile.id);
            return (
              <tr key={profile.id}>
                <td>{profile.data.displayName}</td>
                <td>{getTotalCards(binder?.data ?? null)}</td>
                <td>¥{getTotalBinderValue(binder?.data ?? null)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
                      <img
                        src={card.imageUrl}
                        style={{
                          height: "9rem",
                          width: "auto",
                        }}
                      ></img>
                      <span>{card.code}</span>
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
