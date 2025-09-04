import React from "react";
import { useAchievements } from "../../core/hooks/use-achievements";
import { ACHIEVEMENTS_LIST } from "../../core/types/achievements";

export const AchievementBadges: React.FC = () => {
  const { achievements, showAchievement } = useAchievements();

  return (
    <div className="absolute top-4 right-4 flex gap-2">
      {ACHIEVEMENTS_LIST.map((achievement) => {
        const isUnlocked =
          (achievements & achievement.type) === achievement.type;
        if (isUnlocked) {
          return (
            <div
              key={achievement.type}
              className="nes-badge is-icon"
              onClick={() => showAchievement(achievement.type)}
              style={{ cursor: "pointer" }}
            >
              <span className="is-success" title={achievement.name}>
                <i className="nes-icon is-medium star"></i>
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
