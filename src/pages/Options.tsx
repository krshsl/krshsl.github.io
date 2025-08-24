import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import {
  FONT_OPTIONS,
  SIZE_OPTIONS,
  SPEED_OPTIONS,
} from "../core/types/options";
import type {
  FontOptions,
  OptionKeys,
  OptionsType,
  SizeOptions,
  SpeedOptions,
  VolumeOptions,
} from "../core/types/options";
import { CLICK } from "../core/config/sounds";
import { useAppSound } from "../core/hooks/use-app-sound";
import { useOptions } from "../core/context/options";
import { CloseButton } from "../components/ui/icons/CloseButton";
import { PixelDropdown } from "../components/ui/DropDown";
import { OptionSelector } from "../components/ui/OptionSelector";
import { SoundBar } from "../components/ui/SoundBar";
import { Typewriter } from "../components/features/TypeWriter";

export const Options: React.FC = () => {
  const { options, updateOptions, isSmallScreen } = useOptions();
  const [defaultOptions, setDefault] = useState<OptionsType | null>(null);
  const navigate = useNavigate();
  const [click] = useAppSound(CLICK);
  const [previewKey, setPreviewKey] = useState(0);

  useEffect(() => {
    if (defaultOptions === null) setDefault(options);
  }, [options, defaultOptions]);

  const handleNavigate = (isConfirm: boolean) => {
    if (isConfirm) {
      updateOptions(options, true);
    } else {
      updateOptions(defaultOptions ? defaultOptions : options, true);
    }
    navigate("/");
  };

  const handleOptionChange = (
    option: OptionKeys,
    value: SpeedOptions | SizeOptions | FontOptions | VolumeOptions,
  ) => {
    setPreviewKey((prev) => prev + 1);
    updateOptions({ ...options, [option]: value }, false);
  };

  return (
    <>
      <p className="title">Options</p>
      <CloseButton onClick={() => handleNavigate(false)} />

      <div className="p-4 pt-10 space-y-8 nes-container moving-squares--orange z-10 text-white">
        {isSmallScreen ? (
          <PixelDropdown
            label="TEXT SPEED"
            options={SPEED_OPTIONS}
            value={options.speed}
            onChange={(value) =>
              handleOptionChange("speed", value as SpeedOptions)
            }
          />
        ) : (
          <OptionSelector
            label="TEXT SPEED"
            options={SPEED_OPTIONS}
            value={options.speed}
            onChange={(value) =>
              handleOptionChange("speed", value as SpeedOptions)
            }
          />
        )}

        {!isSmallScreen && (
          <OptionSelector
            label="SCREEN SIZE"
            options={SIZE_OPTIONS}
            value={options.size}
            onChange={(value) =>
              handleOptionChange("size", value as SizeOptions)
            }
          />
        )}

        <PixelDropdown
          label="FONT STYLE"
          options={FONT_OPTIONS}
          value={options.font}
          onChange={(font) => handleOptionChange("font", font)}
        />

        <div>
          <p className="text mb-2">SOUND VOLUME</p>
          <SoundBar />
        </div>
      </div>

      <div className="flex justify-center mt-6 text-white">
        <div className="p-2 nes-container moving-squares--orange w-full">
          <div className="space-y-4 lg:p-4 mb-[1rem]!">
            <div>
              <p className="text mb-2">Preview:</p>
              <div className="nes-container is-dark is-rounded min-h-[8rem] -m-[1rem]!">
                <Typewriter
                  key={previewKey}
                  text="The quick brown fox jumps over the lazy dog."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="nes-btn is-success"
          onClick={() => {
            click({ id: "play" });
            handleNavigate(true);
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
};
