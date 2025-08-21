import React, { useState, useEffect, useCallback } from "react";

import { FANFARE_THEME } from "../constants/sounds";
import { SoundTrackerContext } from "../provider/sounds";
import { ALL_SOUNDS_BITMAP } from "../constants/soundsmanifest";

const STORAGE_KEY = "pokedexSoundMap";

export const SoundTrackerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [completionCount, setCompletionCount] = useState(0);

  const [playedState, setPlayedState] = useState<bigint>(() => {
    try {
      const storedMap = window.localStorage.getItem(STORAGE_KEY);
      const data = storedMap ? JSON.parse(storedMap) : {};

      let currentState = BigInt(data.playedState || "0");
      const lastTotalBitmap = BigInt(data.lastTotalBitmap || "0");

      setCompletionCount(Number(data.completionCount || 0));

      if (lastTotalBitmap !== ALL_SOUNDS_BITMAP) {
        const fanfareBit = 1n << BigInt(FANFARE_THEME.id - 1);
        currentState &= ~fanfareBit;

        const newMap = {
          playedState: currentState.toString(),
          lastTotalBitmap: ALL_SOUNDS_BITMAP.toString(),
          completionCount: data.completionCount || "0",
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newMap));
      }

      return currentState;
    } catch (error) {
      console.error("Failed to parse sound map from localStorage", error);
      return 0n;
    }
  });

  const markAsPlayed = useCallback((id: number) => {
    const bit = 1n << BigInt(id - 1);
    setPlayedState((prev) => {
      if ((prev & bit) !== 0n) {
        return prev;
      }
      const newState = prev | bit;

      const storedMapJSON = window.localStorage.getItem(STORAGE_KEY);
      const storedMap = storedMapJSON ? JSON.parse(storedMapJSON) : {};

      const newMap = {
        ...storedMap,
        playedState: newState.toString(),
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newMap));

      return newState;
    });
  }, []);

  useEffect(() => {
    const fanfareBit = 1n << BigInt(FANFARE_THEME.id - 1);
    const targetBitmap = ALL_SOUNDS_BITMAP & ~fanfareBit;
    const isAllSoundsPlayed = (playedState & targetBitmap) === targetBitmap;
    const isFanFarePlayed = (playedState & fanfareBit) !== 0n;

    if (isAllSoundsPlayed && !isFanFarePlayed) {
      markAsPlayed(FANFARE_THEME.id);
      setCompletionCount((prev) => prev + 1);
    }
  }, [playedState, markAsPlayed]);

  useEffect(() => {
    if (completionCount > 0) {
      const storedMapJSON = window.localStorage.getItem(STORAGE_KEY);
      const storedMap = storedMapJSON ? JSON.parse(storedMapJSON) : {};
      if (Number(storedMap.completionCount || 0) !== completionCount) {
        const newMap = {
          ...storedMap,
          completionCount: completionCount.toString(),
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newMap));
      }
    }
  }, [completionCount]);

  return (
    <SoundTrackerContext.Provider
      value={{ markAsPlayed, playedState, completionCount }}
    >
      {children}
    </SoundTrackerContext.Provider>
  );
};
