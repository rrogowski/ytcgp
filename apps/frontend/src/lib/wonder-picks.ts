import { limit, orderBy } from "firebase/firestore";
import { useMemo } from "react";
import { bindersRef } from "../models/binder";
import { packsRef } from "../models/pack";
import { useProfile } from "../models/profile";
import { useUser } from "./auth";
import { useCollection, useDocumentWithId } from "./firestore";

const RECENT_PACKS_CONSTRAINTS = [orderBy("createdAt", "desc"), limit(20)];

export const useWonderPicks = () => {
  const user = useUser();
  const profile = useProfile();
  const binder = useDocumentWithId(bindersRef, user.uid);
  const packs = useCollection(packsRef, RECENT_PACKS_CONSTRAINTS);

  const wonderPacks = useMemo(() => {
    return packs.docs.filter((p) => p.data.userUid !== user.uid);
  }, [packs.docs, user.uid]);

  const hasNewPicks = useMemo(() => {
    if (!profile.data || wonderPacks.length === 0) {
      return false;
    }
    if (
      profile.data.lastViewedWonderPicksAt &&
      wonderPacks[0].data.createdAt.toMillis() <=
        profile.data.lastViewedWonderPicksAt.toMillis()
    ) {
      return false;
    }
    return wonderPacks.some((pack) => {
      return pack.data.codes.some((code) => {
        return (binder.data?.[code] ?? 0) < 3;
      });
    });
  }, [profile.data, wonderPacks, binder]);

  return { hasNewPicks, wonderPacks };
};
