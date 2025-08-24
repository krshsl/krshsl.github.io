import React from "react";

import { SKIP_BUTTON } from "../../core/config/sounds";
import { useAppSound } from "../../core/hooks/use-app-sound";
import { useOptions } from "../../core/context/options";
import type { VolumeOptions } from "../../core/types/options";
import { SoundIcon } from "./icons/Sound";

export const SoundBar: React.FC = () => {
  const { options, isSmallScreen, updateOptions } = useOptions();
  const [skip] = useAppSound(SKIP_BUTTON);

  const handleBarClick = (index: number) => {
    const vol = ((index + 1) * 0.1) as VolumeOptions;
    updateOptions({ ...options, volume: vol, mute: false }, false);
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
              !options.mute && index < Math.floor(options.volume * 10)
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
