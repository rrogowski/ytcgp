import { limit, orderBy } from "firebase/firestore";
import { useMemo } from "react";
import { bindersRef } from "../models/binder";
import { packsRef } from "../models/pack";
import { useProfile } from "../models/profile";
import { useAuth } from "./auth";
import { PENDING_ID, useCollection, useDocumentWithId } from "./firestore";

const RECENT_PACKS_CONSTRAINTS = [orderBy("createdAt", "desc"), limit(20)];

export const useWonderPicks = () => {
  const auth = useAuth();
  const profile = useProfile();
  const binder = useDocumentWithId(bindersRef, auth.user?.uid ?? PENDING_ID);
  const packs = useCollection(packsRef, RECENT_PACKS_CONSTRAINTS);

  const wonderPacks = useMemo(() => {
    return packs.docs.filter((p) => p.data.userUid !== auth.user?.uid);
  }, [packs.docs, auth.user]);

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
