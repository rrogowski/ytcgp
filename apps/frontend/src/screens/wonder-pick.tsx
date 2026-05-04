import { limit, orderBy, Timestamp } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { findCardByCode } from "../data/cards";
import { getWonderPickCost } from "../data/packs";
import { useUser } from "../lib/auth";
import {
  useCollection,
  useCollectionOnce,
  useDocumentWithId,
} from "../lib/firestore";
import { useTransaction } from "../lib/transaction";
import { type BinderModel, bindersRef } from "../models/binder";
import { packsRef } from "../models/pack";
import { profilesRef, useProfile } from "../models/profile";
import {
  updateLastViewedWonderPickAtTransaction,
  wonderPickTransaction,
} from "../transactions/packs";

const RECENT_PACKS_CONSTRAINTS = [orderBy("createdAt", "desc"), limit(50)];

export const WonderPick: React.FC = () => {
  const user = useUser();
  const myProfile = useProfile();
  const profiles = useCollection(profilesRef);
  const packs = useCollectionOnce(packsRef, RECENT_PACKS_CONSTRAINTS);
  const binder = useDocumentWithId(bindersRef, user.uid);
  const [binderSnapshot, setBinderSnapshot] = useState<BinderModel | null>(
    null,
  );

  const [isWonderPicking, wonderPick] = useTransaction(wonderPickTransaction);
  const [, updateLastViewedWonderPickAt] = useTransaction(
    updateLastViewedWonderPickAtTransaction,
  );

  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const [shouldShowOnlyMissingPlaysets, setShouldShowOnlyMissingPlaysets] =
    useState(true);

  const wonderPacks = useMemo(() => {
    return packs.docs.filter((p) => {
      if (p.data.userUid === user.uid) {
        return false;
      }
      if (
        shouldShowOnlyMissingPlaysets &&
        !p.data.codes.some((code) => (binderSnapshot?.[code] ?? 0) < 3)
      ) {
        return false;
      }
      return true;
    });
  }, [binderSnapshot, packs.docs, user.uid, shouldShowOnlyMissingPlaysets]);

  useEffect(() => {
    updateLastViewedWonderPickAt(user.uid);
  }, [updateLastViewedWonderPickAt, user.uid]);

  useEffect(() => {
    if (binderSnapshot === null) {
      setBinderSnapshot(binder.data);
    }
  }, [binder.data, binderSnapshot]);

  if (binder.isLoading || packs.isLoading || profiles.isLoading) {
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

  const handleReload = async () => {
    await updateLastViewedWonderPickAt(user.uid);
    await packs.reload();
    setBinderSnapshot(binder.data);
  };

  const handleOnlyShowMissingPlaysetsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShouldShowOnlyMissingPlaysets(event.currentTarget.checked);
    setBinderSnapshot(binder.data);
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        height: "100%",
        position: "relative",
      }}
    >
      <CardPreview imageUrl={previewImageUrl}></CardPreview>
      <button disabled={packs.isReloading} onClick={handleReload}>
        Reload
      </button>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          checked={shouldShowOnlyMissingPlaysets}
          onChange={handleOnlyShowMissingPlaysetsChange}
        ></input>
        Only Show Missing Playsets?
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {wonderPacks.map((pack) => {
          const profile = profiles.docs.find((d) => d.id === pack.data.userUid);
          const cost = getWonderPickCost(
            pack.data.codes,
            pack.data.isGodPack ?? false,
          );
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
                  const quantity = binder.data?.[code] ?? 0;
                  const isWonderPick =
                    pack.data.wonderPicks?.[user.uid] === code;
                  return (
                    <div
                      key={code}
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        width: "110px",
                      }}
                    >
                      <span
                        style={{
                          zIndex: 500,
                          alignItems: "center",
                          backgroundColor:
                            quantity === 0
                              ? "red"
                              : quantity < 3
                                ? "orange"
                                : "black",
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
                      <Card
                        imageUrl={card.imageUrl}
                        border={`dashed ${isWonderPick ? "red" : "transparent"} 3px`}
                        height="9rem"
                        opacity={(binder.data?.[code] ?? 0) > 0 ? 1 : 0.3}
                        onPreviewStart={() => setPreviewImageUrl(card.imageUrl)}
                        onPreviewEnd={() => setPreviewImageUrl("")}
                      ></Card>
                    </div>
                  );
                })}
              </div>
              <button
                disabled={
                  isWonderPicking ||
                  packs.isRefreshing ||
                  packs.isReloading ||
                  (myProfile.data?.wonderPoints ?? 0) < cost ||
                  pack.data.userUid === user.uid ||
                  !!pack.data.wonderPicks?.[user.uid]
                }
                onClick={() =>
                  confirmWonderPick(pack.id, pack.data.codes, cost)
                }
              >
                Wonder Pick ({cost} ₩)
              </button>
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
