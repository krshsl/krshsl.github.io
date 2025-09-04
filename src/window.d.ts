declare global {
  interface Window {
    unlockHackerAchievement?: () => void;
    unlockAchievement?: (achievementName: string) => void;
  }
}

export {};
