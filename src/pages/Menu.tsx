import type React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSound } from "../core/hooks/use-app-sound";
import { MENU } from "../core/config/sounds";
import { useAchievements } from "../core/hooks/use-achievements";
import { TrackableComponents } from "../core/types/achievements";
import { AchievementBadges } from "../components/features/AchievementBadges";

export const Menu: React.FC = () => {
  const { markComponentAsVisited } = useAchievements();
  useEffect(() => {
    markComponentAsVisited(TrackableComponents.MENU);
  }, [markComponentAsVisited]);
  const navigate = useNavigate();
  const [openMenu] = useAppSound(MENU.OPEN);

  const handleClick = (route: string) => {
    openMenu({ id: "play" });
    navigate(route);
  };

  return (
    <div className="relative">
      <AchievementBadges />
      <p className="title">Main Menu</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <button
          type="button"
          className="nes-btn is-primary h-24"
          onClick={() => handleClick("experience")}
        >
          <div className="flex flex-col items-center justify-center">
            <i className="nes-icon trophy is-medium"></i>
            <span className="mt-2">Experience</span>
          </div>
        </button>
        <button
          type="button"
          className="nes-btn is-success h-24"
          onClick={() => handleClick("projects")}
        >
          <div className="flex flex-col items-center justify-center">
            <i className="nes-icon star is-medium"></i>
            <span className="mt-2">Projects</span>
          </div>
        </button>
        <button
          type="button"
          className="nes-btn is-warning h-24"
          onClick={() => handleClick("about")}
        >
          <div className="flex flex-col items-center justify-center">
            <i className="port-ash"></i>
            <span className="mt-2">Player</span>
          </div>
        </button>
        <button
          type="button"
          className="nes-btn h-24"
          onClick={() => handleClick("options")}
        >
          <div className="flex flex-col items-center justify-center">
            <i className="snes-jp-logo is-medium"></i>
            <span className="mt-2">Options</span>
          </div>
        </button>
      </div>
    </div>
  );
};
