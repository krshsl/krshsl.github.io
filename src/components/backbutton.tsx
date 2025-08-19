import type React from "react";
import useSound from "use-sound";
import { MENU } from "../constants/sounds";

export const BackButton: React.FC<{
  onClick: () => void;
  sound?: { url: string; sprite: { play: number[] } };
}> = ({ onClick, sound = MENU.BACK }) => {
  const [play] = useSound(sound.url, { sprite: sound.sprite });

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
