import { limit, orderBy, Timestamp } from "firebase/firestore";
import { Fragment } from "react/jsx-runtime";
import { findCardByCode } from "../data/cards";
import { getWonderPickCost } from "../data/packs";
import { useUser } from "../lib/auth";
import { useCollection, useCollectionOnce } from "../lib/firestore";
import { useTransaction } from "../lib/transaction";
import { packsRef } from "../models/pack";
import { profilesRef } from "../models/profile";
import { wonderPickTransaction } from "../transactions/packs";

const RECENT_PACKS_CONSTRAINTS = [orderBy("createdAt", "desc"), limit(20)];

export const WonderPick: React.FC = () => {
  const user = useUser();
  const profiles = useCollection(profilesRef);
  const packs = useCollectionOnce(packsRef, RECENT_PACKS_CONSTRAINTS);

  const [isWonderPicking, wonderPick] = useTransaction(wonderPickTransaction);

  if (packs.isLoading || profiles.isLoading) {
    return <>Loading...</>;
  }

  const confirmWonderPick = async (
    packId: string,
    codes: string[],
    cost: number,
  ) => {
    const names = codes.map(findCardByCode).map((card) => card.name);
    if (
      !confirm(
        `Are you sure you want to spend ${cost} ₩ to wonder pick from the following cards?\n${names.join("\n")}`,
      )
    ) {
      return;
    }
    await wonderPick(user, packId, cost);
    await packs.refresh();
  };

  return (
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
      {packs.docs.map((pack) => {
        const profile = profiles.docs.find((d) => d.id === pack.data.userUid);
        const cost = getWonderPickCost(pack.data.codes);
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
                const isWonderPick = pack.data.wonderPicks?.[user.uid] === code;
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
                        border: `dashed ${isWonderPick ? "red" : "transparent"} 3px `,
                        height: "9rem",
                        width: "auto",
                      }}
                    ></img>
                    <span>{card.code}</span>
                  </div>
                );
              })}
            </div>
            <button
              disabled={
                isWonderPicking ||
                packs.isRefreshing ||
                pack.data.userUid === user.uid ||
                !!pack.data.wonderPicks?.[user.uid]
              }
              onClick={() => confirmWonderPick(pack.id, pack.data.codes, cost)}
            >
              Wonder Pick ({cost} ₩)
            </button>
          </Fragment>
        );
      })}
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
