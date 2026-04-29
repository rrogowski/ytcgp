import { limit, orderBy } from "firebase/firestore";
import { useMemo } from "react";
import { packsRef } from "../models/pack";
import { useProfile } from "../models/profile";
import { useCollection } from "./firestore";

const RECENT_PACKS_CONSTRAINTS = [orderBy("createdAt", "desc"), limit(20)];

export const useWonderPicks = () => {
  const profile = useProfile();
  const packs = useCollection(packsRef, RECENT_PACKS_CONSTRAINTS);

  const hasNewPicks = useMemo(() => {
    if (!profile.data || packs.docs.length === 0) {
      return false;
    }
    if (!profile.data.lastViewedWonderPicksAt) {
      return true;
    }
    return (
      packs.docs[0].data.createdAt.toMillis() >=
      profile.data.lastViewedWonderPicksAt.toMillis()
    );
  }, [profile.data, packs.docs]);

  return { hasNewPicks };
};
