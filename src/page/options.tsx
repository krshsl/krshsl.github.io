import { useNavigate } from "react-router";

import { CloseButton } from "../components/closeButton";
import { Typewriter } from "../components/typewriter";
import { SIZE_OPTIONS, SPEED_OPTIONS } from "../interfaces/options";
import type {
  FontOptions,
  OptionKeys,
  OptionsType,
  SizeOptions,
  SpeedOptions,
} from "../interfaces/options";
import { useOptions } from "../provider/options";
import { PixelDropdown } from "../components/dropdown";
import { useEffect, useState } from "react";

export const Options: React.FC = () => {
  const { options, updateOptions } = useOptions();
  const [defaultOptions, setDefault] = useState<OptionsType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (defaultOptions === null) setDefault(options);
  });

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

      <div className="p-4 pt-10 space-y-6 nes-container is-dark bg-pattern-dotted">
        <div className="flex justify-between items-center">
          <p>TEXT SPEED</p>
          <div className="flex items-center">
            <span className="nes-text is-primary">&lt;</span>
            {SPEED_OPTIONS.map((speed) => (
              <button
                key={speed}
                type="button"
                className={`nes-btn mx-2 ${options.speed === speed ? "is-primary" : ""}`}
                onClick={() => handleOptionChange("speed", speed)}
              >
                {speed.toUpperCase()}
              </button>
            ))}
            <span className="nes-text is-primary">&gt;</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p>SCREEN SIZE</p>
          <div className="flex items-center">
            <span className="nes-text is-primary">&lt;</span>
            {SIZE_OPTIONS.map((size) => (
              <button
                key={size}
                type="button"
                className={`nes-btn mx-2 ${options.size === size ? "is-primary" : ""}`}
                onClick={() => handleOptionChange("size", size)}
              >
                {size.toUpperCase()}
              </button>
            ))}
            <span className="nes-text is-primary">&gt;</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p>FONT STYLE</p>
          <PixelDropdown
            value={options.font}
            onChange={(font) => handleOptionChange("font", font)}
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div className="p-2 nes-container is-dark bg-pattern-dotted">
          <div className="space-y-4 p-4">
            <div>
              <p className="text mb-2">Preview:</p>
              <div className="nes-container is-dark is-rounded h-full">
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
