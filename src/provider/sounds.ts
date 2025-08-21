import { createContext, useContext } from "react";

interface SoundTrackerContextType {
  markAsPlayed: (id: number) => void;
  playedState: bigint;
  completionCount: number;
}

export const SoundTrackerContext = createContext<
  SoundTrackerContextType | undefined
>(undefined);

export const useSoundTracker = () => {
  const context = useContext(SoundTrackerContext);
  if (!context) {
    throw new Error(
      "useSoundTracker must be used within a SoundTrackerProvider",
    );
  }
  return context;
};
