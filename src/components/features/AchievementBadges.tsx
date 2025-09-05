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
              className="achievement-badge-container relative w-10 h-10"
              onClick={() => showAchievement(achievement.type)}
              title={achievement.name}
            >
              <div className={`${achievement.badgeClassName} absolute`} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
