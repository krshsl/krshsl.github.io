import { useContext } from "react";
import { AchievementsContext } from "../context/achievements";
import type { AchievementsContextType } from "../types/achievements";

export const useAchievements = (): AchievementsContextType => {
  const context = useContext(AchievementsContext);
  if (context === undefined) {
    throw new Error(
      "useAchievements must be used within an AchievementsProvider",
    );
  }
  return context;
};
