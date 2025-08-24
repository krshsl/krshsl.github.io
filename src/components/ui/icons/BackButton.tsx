import type React from "react";
import { MENU } from "../../../core/config/sounds";
import type { SIMPLE_SOUND } from "../../../core/types/sounds";
import { useAppSound } from "../../../core/hooks/use-app-sound";

export const BackButton: React.FC<{
  onClick: () => void;
  sound?: SIMPLE_SOUND;
}> = ({ onClick, sound = MENU.BACK }) => {
  const [play] = useAppSound(sound);

  return (
    <div className="absolute top-2 right-16 z-50 pt-2">
      <button
        type="button"
        className="nes-btn is-warning"
        onClick={() => {
          play({ id: "play" });
          onClick();
        }}
      >
        &lt;
      </button>
    </div>
  );
};
