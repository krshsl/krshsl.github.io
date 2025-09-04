import React, { useEffect, useCallback } from "react";
import { ALL_SOUNDS_BITMAP } from "../config/sounds-manifest";
import { FANFARE_THEME } from "../config/sounds";
import { SoundsTrackerContext } from "./sounds";
import { useAchievements } from "../hooks/use-achievements";
import { Achievement } from "../types/achievements";

export const SoundsTrackerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { unlockAchievement, achievements, soundState, setSoundState } =
    useAchievements();

  const markAsPlayed = useCallback(
    (id: number) => {
      const bit = 1n << BigInt(id - 1);
      setSoundState((prev) => {
        if ((prev & bit) !== 0n) {
          return prev;
        }
        return prev | bit;
      });
    },
    [setSoundState],
  );

  useEffect(() => {
    const fanfareBit = 1n << BigInt(FANFARE_THEME.id - 1);
    const targetBitmap = ALL_SOUNDS_BITMAP & ~fanfareBit;
    const isAllSoundsPlayed = (soundState & targetBitmap) === targetBitmap;
    const hasSonicSeeker =
      (achievements & Achievement.SONIC_SEEKER) === Achievement.SONIC_SEEKER;

    if (isAllSoundsPlayed && !hasSonicSeeker) {
      unlockAchievement(Achievement.SONIC_SEEKER);
    }
  }, [soundState, achievements, unlockAchievement]);

  return (
    <SoundsTrackerContext.Provider
      value={{ markAsPlayed, playedState: soundState }}
    >
      {children}
    </SoundsTrackerContext.Provider>
  );
};
