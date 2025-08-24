import type React from "react";
import { MENU } from "../../../core/config/sounds";
import type { SIMPLE_SOUND } from "../../../core/types/sounds";
import { useAppSound } from "../../../core/hooks/use-app-sound";

export const CloseButton: React.FC<{
  onClick: () => void;
  sound?: SIMPLE_SOUND;
}> = ({ onClick, sound = MENU.CLOSE }) => {
  const [play] = useAppSound(sound);

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
