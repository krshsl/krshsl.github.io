import React from "react";
import { useOptions } from "../provider/options";
import { DISABLE_SOUND, ENABLE_SOUND, SKIP_BUTTON } from "../constants/sounds";
import { useAppSound } from "../hooks/useAppSound";
import soundOn from "../assets/sound-on-svgrepo-com.svg";
import soundOff from "../assets/sound-off-svgrepo-com.svg";
import type { VolumeOptions } from "../interfaces/options";

export const SoundBar: React.FC = () => {
  const { options, isSmallScreen, toggleMute, updateOptions } = useOptions();
  const [enable] = useAppSound(ENABLE_SOUND);
  const [disable] = useAppSound(DISABLE_SOUND);
  const [skip] = useAppSound(SKIP_BUTTON);

  const handleBarClick = (index: number) => {
    const vol = ((index + 1) * 0.1) as VolumeOptions;
    updateOptions({ ...options, volume: vol, ismute: false }, false);
    skip({ forceSoundEnabled: true });
  };

  return (
    <div className="flex items-center gap-4">
      {!isSmallScreen && (
        <button
          className={`nes-btn ${options.ismute ? "is-disabled" : "is-warning"}`}
          onClick={() => {
            if (options.ismute) enable({ forceSoundEnabled: true });
            else disable();
            toggleMute();
          }}
        >
          {!options.ismute ? (
            <img src={soundOn} alt="Sound On" width={24} />
          ) : (
            <img src={soundOff} alt="Sound Off" width={24} />
          )}
        </button>
      )}
      <div className="flex items-center gap-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <button
            key={index}
            className={`h-8 nes-btn ${isSmallScreen && "scale-x-50 -m-1!"} ${
              !options.ismute && index < Math.floor(options.volume * 10)
                ? "is-warning"
                : "is-disabled"
            }`}
            onClick={() => handleBarClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
