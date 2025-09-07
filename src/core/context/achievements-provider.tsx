import React, { useState, useEffect, useCallback } from "react";
import { AchievementsContext } from "./achievements";
import {
  Achievement,
  TrackableComponents,
  ALL_COMPONENTS_BITMAP,
} from "../types/achievements";

const ACHIEVEMENT_KEY = "achievement";
const OLD_SOUND_KEY = "pokedexSoundMap";

interface AchievementData {
  achievements: number;
  componentState: number;
  soundState: string;
}

export const AchievementsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [achievements, setAchievements] = useState<number>(0);
  const [componentState, setComponentState] = useState<number>(0);
  const [soundState, setSoundState] = useState<bigint>(0n);
  const [latestAchievement, setLatestAchievement] =
    useState<Achievement | null>(null);
  const [achievementQueue, setAchievementQueue] = useState<Achievement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const dataJson = localStorage.getItem(ACHIEVEMENT_KEY);
    let achievements = 0;
    let componentState = 0;
    let soundState = 0n;

    const oldSoundMap = localStorage.getItem(OLD_SOUND_KEY);
    let oldSoundData = null;
    if (oldSoundMap) {
      try {
        oldSoundData = JSON.parse(oldSoundMap);
      } catch (e) {
        console.error("Failed to parse old sound map", e);
      }
    }

    if (dataJson) {
      const data: AchievementData = JSON.parse(dataJson);
      achievements = data.achievements;
      componentState = data.componentState;
      soundState = BigInt(data.soundState);
    } else if (oldSoundData) {
      if (oldSoundData.playedState) {
        soundState = BigInt(oldSoundData.playedState);
      }
    }

    const hasOG =
      (achievements & Achievement.OG_EXPLORIST) === Achievement.OG_EXPLORIST;
    if (!hasOG && oldSoundData) {
      if (oldSoundData.completionCount) {
        achievements |= Achievement.OG_EXPLORIST;
      }
    }

    setAchievements(achievements);
    setComponentState(componentState);
    setSoundState(soundState);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const data: AchievementData = {
      achievements,
      componentState,
      soundState: soundState.toString(),
    };
    localStorage.setItem(ACHIEVEMENT_KEY, JSON.stringify(data));
  }, [achievements, componentState, soundState, isLoaded]);

  const unlockAchievement = useCallback((achievement: Achievement) => {
    setAchievements((prev) => {
      if ((prev & achievement) === achievement) {
        return prev;
      }
      const newAchievements = prev | achievement;
      showAchievement(achievement);
      return newAchievements;
    });
  }, []);

  const markComponentAsVisited = useCallback(
    (component: TrackableComponents) => {
      setComponentState((prev) => {
        if ((prev & component) === component) {
          return prev;
        }
        return prev | component;
      });
    },
    [],
  );

  useEffect(() => {
    if (componentState === ALL_COMPONENTS_BITMAP) {
      const hasDigitalExplorist =
        (achievements & Achievement.DIGITAL_EXPLORIST) ===
        Achievement.DIGITAL_EXPLORIST;
      if (!hasDigitalExplorist) {
        unlockAchievement(Achievement.DIGITAL_EXPLORIST);
      }
    }
  }, [componentState, achievements, unlockAchievement]);

  useEffect(() => {
    window.unlockHackerAchievement = () => {
      unlockAchievement(Achievement.HACKER);
    };

    window.unlockAchievement = (achievementName: string) => {
      const achievementKey =
        achievementName.toUpperCase() as keyof typeof Achievement;
      const achievement = Achievement[achievementKey];
      if (achievement !== undefined) {
        unlockAchievement(achievement);
        unlockAchievement(Achievement.HACKER);
      } else {
        console.error(`Achievement "${achievementName}" not found.`);
      }
    };

    return () => {
      delete window.unlockHackerAchievement;
      delete window.unlockAchievement;
    };
  }, [unlockAchievement]);

  const acknowledgeLatestAchievement = () => {
    setAchievementQueue((queue) => queue.slice(1));
    setLatestAchievement(null);
  };

  const showAchievement = (achievement: Achievement) => {
    setAchievementQueue((queue) => [...queue, achievement]);
  };

  useEffect(() => {
    if (!latestAchievement && achievementQueue.length > 0) {
      setLatestAchievement(achievementQueue[0]);
    }
  }, [achievementQueue, latestAchievement]);

  return (
    <AchievementsContext.Provider
      value={{
        achievements,
        unlockAchievement,
        showAchievement,
        latestAchievement,
        acknowledgeLatestAchievement,
        markComponentAsVisited,
        componentState,
        soundState,
        setSoundState,
      }}
    >
      {isLoaded ? children : null}
    </AchievementsContext.Provider>
  );
};
