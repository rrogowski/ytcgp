import { limit, orderBy } from "firebase/firestore";
import { useMemo } from "react";
import { packsRef } from "../models/pack";
import { useProfile } from "../models/profile";
import { useUser } from "./auth";
import { useCollection } from "./firestore";

const RECENT_PACKS_CONSTRAINTS = [orderBy("createdAt", "desc"), limit(20)];

export const useWonderPicks = () => {
  const user = useUser();
  const profile = useProfile();
  const packs = useCollection(packsRef, RECENT_PACKS_CONSTRAINTS);

  const wonderPacks = useMemo(() => {
    return packs.docs.filter((p) => p.data.userUid !== user.uid);
  }, [packs.docs, user.uid]);

  const hasNewPicks = useMemo(() => {
    if (!profile.data || wonderPacks.length === 0) {
      return false;
    }
    if (!profile.data.lastViewedWonderPicksAt) {
      return true;
    }
    return (
      wonderPacks[0].data.createdAt.toMillis() >=
      profile.data.lastViewedWonderPicksAt.toMillis()
    );
  }, [profile.data, wonderPacks]);

  return { hasNewPicks, wonderPacks };
};
