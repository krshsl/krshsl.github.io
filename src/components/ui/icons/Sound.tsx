import type React from "react";
import { useEffect, useState } from "react";
import { useOptions } from "../../../core/context/options";
import { useAppSound } from "../../../core/hooks/use-app-sound";
import { DISABLE_SOUND, ENABLE_SOUND } from "../../../core/config/sounds";
import soundOn from "../../../assets/icons/sound-on-svgrepo-com.svg";
import soundOff from "../../../assets/icons/sound-off-svgrepo-com.svg";

let tooltipShownThisLoad = false;

export const SoundIcon: React.FC<{ is_persist?: boolean }> = ({
  is_persist = false,
}) => {
  const { options, updateOptions } = useOptions();
  const [enable] = useAppSound(ENABLE_SOUND);
  const [disable] = useAppSound(DISABLE_SOUND);
  const [showTooltip, setShowTooltip] = useState(false);
  const color = is_persist ? "invert" : "";

  useEffect(() => {
    if (is_persist && !tooltipShownThisLoad) {
      setShowTooltip(true);

      const timer = setTimeout(() => {
        setShowTooltip(false);
        tooltipShownThisLoad = true;
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [is_persist]);

  const toggleMute = () => {
    updateOptions({ ...options, mute: !options.mute }, is_persist);
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`${!is_persist ? "nes-btn" : "outline-none!"} ${
          options.mute ? "is-disabled" : "is-warning"
        }`}
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

      {is_persist && showTooltip && (
        <div
          className="absolute top-full mt-2 left-1/2 -translate-x-1/2
                     bg-black text-white text-xs rounded p-2 shadow-lg
                     max-w-[calc(100vw-1rem)] text-center whitespace-normal"
          style={{ zIndex: 1000 }}
        >
          You can mute if you choose to
        </div>
      )}
    </div>
  );
};
