import React, { useEffect } from "react";
import { FANFARE_THEME } from "../constants/sounds";
import { useOptions } from "../provider/options";
import useSound from "use-sound";

interface FanfareProps {
  onDismiss: () => void;
  completionCount: number;
}

interface Achievement {
  title: string;
  description: string;
  soundUrl: string;
  className: string;
}

const getAchievementText = (completionCount: number): Achievement => {
  switch (completionCount) {
    case 1:
      return {
        title: "Digital Explorist!",
        description:
          "That's right, you found the only one. Go ahead, take a screenshot; you've earned the ultimate bragging rights.",
        soundUrl: FANFARE_THEME.url,
        className: "moving-squares--orange",
      };
    default:
      return {
        title: "Hacker Achievement!",
        description:
          "Wait... how did you get here? This was supposed to be impossible!",
        soundUrl: FANFARE_THEME.url,
        className: "moving-squares--green",
      };
  }
};

const Fanfare: React.FC<FanfareProps> = ({ onDismiss, completionCount }) => {
  const { title, description, soundUrl, className } =
    getAchievementText(completionCount);
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
              <button className="nes-btn is-primary" onClick={onDismiss}>
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
