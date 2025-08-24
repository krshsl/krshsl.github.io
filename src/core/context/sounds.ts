import { createContext, useContext } from "react";

interface SoundsTrackerContextType {
  markAsPlayed: (id: number) => void;
  playedState: bigint;
  completionCount: number;
}

export const SoundsTrackerContext = createContext<
  SoundsTrackerContextType | undefined
>(undefined);

export const useSoundTracker = () => {
  const context = useContext(SoundsTrackerContext);
  if (!context) {
    throw new Error(
      "useSoundTracker must be used within a SoundTrackerProvider",
    );
  }
  return context;
};
