import { useMemo } from "react";
import { useProfile, type ProfileModel } from "../models/profile";

export const useAllowance = () => {
  const profile = useProfile();

  const count = useMemo(() => {
    if (profile.isLoading) {
      return 0;
    }
    if (isNewProfile(profile.data)) {
      return 1;
    }
    return getAllowanceCount(profile.data);
  }, [profile.isLoading, profile.data]);

  const msRemaining = useMemo(() => {
    if (profile.isLoading || isNewProfile(profile.data)) {
      return 0;
    }
    return profile.data.nextAllowanceAt.toMillis() - new Date().getTime();
  }, [profile.isLoading, profile.data]);

  return { count, msRemaining };
};

const isNewProfile = (profile: ProfileModel | null): profile is null => {
  return profile == null;
};

export const getAllowanceCount = (profile: ProfileModel) => {
  let count = 0;
  const accumulator = profile.nextAllowanceAt.toDate();
  const now = new Date();
  while (accumulator < now) {
    accumulator.setDate(accumulator.getDate() + 1);
    count++;
  }
  return count;
};
