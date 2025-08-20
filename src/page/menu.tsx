import type React from "react";
import { useNavigate } from "react-router";
import { MENU } from "../constants/sounds";
import { useAppSound } from "../hooks/useAppSound";

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const [openMenu] = useAppSound(MENU.OPEN.url, { sprite: MENU.OPEN.sprite });

  const handleClick = (route: string) => {
    openMenu({ id: "play" });
    navigate(route);
  };

  return (
    <>
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
    </>
  );
};
