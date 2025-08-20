import React from "react";
import { useOptions } from "../provider/options";
import { SKIP_BUTTON } from "../constants/sounds";
import { useAppSound } from "../hooks/useAppSound";
import type { VolumeOptions } from "../interfaces/options";
import { SoundIcon } from "./soundicon";

export const SoundBar: React.FC = () => {
  const { options, isSmallScreen, updateOptions } = useOptions();
  const [skip] = useAppSound(SKIP_BUTTON);

  const handleBarClick = (index: number) => {
    const vol = ((index + 1) * 0.1) as VolumeOptions;
    updateOptions({ ...options, volume: vol, ismute: false }, false);
    skip({ forceSoundEnabled: true });
  };

  return (
    <div className="flex items-center gap-4">
      {!isSmallScreen && <SoundIcon />}
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
