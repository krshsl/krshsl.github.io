import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { CloseButton } from "../components/closebutton";
import { Typewriter } from "../components/typewriter";
import { PixelDropdown } from "../components/dropdown";
import { OptionSelector } from "../components/optionselector";
import {
  FONT_OPTIONS,
  SIZE_OPTIONS,
  SPEED_OPTIONS,
} from "../interfaces/options";
import type {
  FontOptions,
  OptionKeys,
  OptionsType,
  SizeOptions,
  SpeedOptions,
} from "../interfaces/options";
import { useOptions } from "../provider/options";

export const Options: React.FC = () => {
  const { options, updateOptions, isSmallScreen } = useOptions();
  const [defaultOptions, setDefault] = useState<OptionsType | null>(null);
  const navigate = useNavigate();

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
    value: SpeedOptions | SizeOptions | FontOptions,
  ) => {
    updateOptions({ ...options, [option]: value }, false);
  };

  return (
    <div className="relative nes-container with-title is-dark bg-pattern-block">
      <p className="title">Options</p>
      <CloseButton onClick={() => handleNavigate(false)} />

      <div className="p-4 pt-10 space-y-8 nes-container is-dark bg-pattern-dotted">
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
      </div>

      <div className="flex justify-center mt-6">
        <div className="p-2 nes-container is-dark bg-pattern-dotted w-full">
          <div className="space-y-4 lg:p-4 mb-[1rem]!">
            <div>
              <p className="text mb-2">Preview:</p>
              <div className="nes-container is-dark is-rounded min-h-[8rem] -m-[1rem]!">
                <Typewriter text="The quick brown fox jumps over the lazy dog." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="nes-btn is-success"
          onClick={() => handleNavigate(true)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
