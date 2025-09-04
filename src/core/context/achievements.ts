import { createContext } from "react";
import type { AchievementsContextType } from "../types/achievements";

export const AchievementsContext = createContext<
  AchievementsContextType | undefined
>(undefined);
