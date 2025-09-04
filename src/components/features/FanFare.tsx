import React, { useEffect } from "react";
import useSound from "use-sound";
import { FANFARE_THEME } from "../../core/config/sounds";
import { useOptions } from "../../core/context/options";
import { Achievement, ACHIEVEMENTS_LIST } from "../../core/types/achievements";

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
      soundUrl: details.soundUrl,
      className: details.className,
    };
  }

  return {
    title: "Achievement?!?!?",
    description:
      "Wait... how did you get here? This was supposed to be impossible!",
    soundUrl: FANFARE_THEME.url,
    className: "moving-squares--green",
  };
};

const Fanfare: React.FC<FanfareProps> = ({ achievement, onAcknowledge }) => {
  const { title, description, soundUrl, className } =
    getAchievementDetails(achievement);
  const { options } = useOptions();

  const [play] = useSound(soundUrl, {
    volume: options.volume,
    soundEnabled: !options.mute,
  });

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
      <div className={`${className}  max-w-lg`}>
        <div className="relative nes-dialog is-dark bg-transparent! is-rounded max-w-lg mx-4 -mr-0! -ml-0!">
          <form method="dialog" className="relative z-10">
            <p className="title">{title}</p>
            <div className="flow-root">
              <i className="nes-octocat animate float-left mr-4 mt-2"></i>
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
