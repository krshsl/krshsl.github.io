import React, { useEffect } from "react";
import { PIKACHU_SONG } from "../../core/config/sounds";
import { Achievement, ACHIEVEMENTS_LIST } from "../../core/types/achievements";
import { useAppSound } from "../../core/hooks/use-app-sound";

interface FanfareProps {
  achievement: Achievement;
  onAcknowledge: () => void;
}

const getAchievementDetails = (achievement: Achievement) => {
  const details = ACHIEVEMENTS_LIST.find((a) => a.type === achievement);
  if (details) {
    return {
      title: details.name,
      description: details.description,
      soundData: details.soundData,
      bgClassName: details.bgClassName,
      fanfareBadgeClassName: details.fanfareBadgeClassName,
    };
  }

  return {
    title: "Achievement?!?!?",
    description:
      "Wait... how did you get here? This was supposed to be impossible!",
    soundData: PIKACHU_SONG,
    bgClassName: "moving-squares--green",
    fanfareBadgeClassName: "badge-hacker",
  };
};

const Fanfare: React.FC<FanfareProps> = ({ achievement, onAcknowledge }) => {
  const { title, description, soundData, bgClassName, fanfareBadgeClassName } =
    getAchievementDetails(achievement);

  const [play] = useAppSound(soundData);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
      <div className={`${bgClassName} max-w-lg`}>
        <div className="relative nes-dialog is-dark bg-transparent! is-rounded max-w-lg mx-4 -mr-0! -ml-0!">
          <form method="dialog" className="relative z-10">
            <p className="title">{title}</p>
            <div className="flow-root">
              <i
                className={`${fanfareBadgeClassName} scale-[4] float-left m-10`}
              ></i>
              <p>{description}</p>
            </div>
            <menu className="dialog-menu">
              <button className="nes-btn is-primary" onClick={onAcknowledge}>
                Awesome!
              </button>
            </menu>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fanfare;
