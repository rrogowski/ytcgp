import { doc } from "firebase/firestore";
import { executeTransaction } from "../lib/firestore";
import { profilesRef } from "../models/profile";

export const giveStimulusTransaction = async (
  profileIds: string[],
  yen: number,
  wonderPoints: number,
) => {
  if (
    !confirm(
      `Are you sure you want to give everyone ¥${yen} and ${wonderPoints} ₩?`,
    )
  ) {
    return;
  }

  return executeTransaction(async (t) => {
    const profiles = await Promise.all(
      profileIds.map(async (id) => {
        const ref = doc(profilesRef, id);
        return { ref, data: (await t.get(ref)).data() };
      }),
    );

    for (const profile of profiles) {
      if (!profile.data) {
        throw Error(`invalid profile: ${profile.ref.id}`);
      }
      t.update(profile.ref, {
        money: profile.data.money + yen,
        wonderPoints: profile.data.wonderPoints + wonderPoints,
      });
    }
  });
};
