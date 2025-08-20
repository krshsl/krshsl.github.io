import type React from "react";
import { MENU } from "../constants/sounds";
import { useAppSound } from "../hooks/useAppSound";
import type { SOUNDS_TYPE } from "../interfaces/sounds";

export const CloseButton: React.FC<{
  onClick: () => void;
  sound?: SOUNDS_TYPE;
}> = ({ onClick, sound = MENU.CLOSE }) => {
  const [play] = useAppSound(sound.url, { sprite: sound.sprite });

  return (
    <div className="absolute top-2 right-2 z-40 pt-2">
      <button
        type="button"
        className="nes-btn is-error"
        onClick={() => {
          play({ id: "play" });
          onClick();
        }}
      >
        X
      </button>
    </div>
  );
};
