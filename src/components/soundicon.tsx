import type React from "react";
import { useOptions } from "../provider/options";
import { useAppSound } from "../hooks/useAppSound";
import { DISABLE_SOUND, ENABLE_SOUND } from "../constants/sounds";
import soundOn from "../assets/sound-on-svgrepo-com.svg";
import soundOff from "../assets/sound-off-svgrepo-com.svg";

export const SoundIcon: React.FC<{ is_persist?: boolean }> = ({
  is_persist = false,
}) => {
  const { options, updateOptions } = useOptions();
  const [enable] = useAppSound(ENABLE_SOUND);
  const [disable] = useAppSound(DISABLE_SOUND);
  const color = is_persist ? "invert" : "";

  const toggleMute = () => {
    updateOptions({ ...options, mute: !options.mute }, is_persist);
  };

  return (
    <button
      className={`${!is_persist ? "nes-btn" : "outline-none!"} ${options.mute ? "is-disabled" : "is-warning"}`}
      onClick={() => {
        if (options.mute) enable({ forceSoundEnabled: true });
        else disable();
        toggleMute();
      }}
    >
      {!options.mute ? (
        <img src={soundOn} alt="Sound On" className={color} width={32} />
      ) : (
        <img src={soundOff} alt="Sound Off" className={color} width={32} />
      )}
    </button>
  );
};
