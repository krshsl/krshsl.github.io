import { useState } from "react";
import { Typewriter } from "../components/typewriter";
import { useNavigate } from "react-router";
import { CloseButton } from "../components/closeButton";
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

export const Options: React.FC<{
  currentOption: OptionsType;
  updateOptions: (option: OptionsType) => void;
}> = ({ currentOption, updateOptions }) => {
  const [tempOptions, setTempOptions] = useState<OptionsType>(currentOption);
  const [typewriterKey, setTypewriterKey] = useState(0);
  const navigate = useNavigate();

  const handleConfirm = () => {
    updateOptions(tempOptions!);
    navigate("/");
  };

  const handleOptionChange = (
    option: OptionKeys,
    value: SpeedOptions | SizeOptions | FontOptions,
  ) => {
    setTempOptions((prev) => ({ ...prev, [option]: value }));
    setTypewriterKey((prev) => prev + 1);
  };

  const getFontName = (font: FontOptions) => {
    switch (font) {
      case "vt323":
        return "VT323";
      case "pixelify-sans":
        return "Pixelify Sans";
      case "silkscreen":
        return "Silkscreen";
      case "press-start":
      default:
        return "Default";
    }
  };

  return (
    <div className="relative nes-container with-title is-dark bg-pattern-block">
      <p className="title">Options</p>
      <CloseButton
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="p-4 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <section className="flex flex-col sm:flex-row justify-between sm:items-center">
            <p>TEXT SPEED</p>
            <div className="flex flex-wrap gap-4 mt-2 sm:mt-0">
              {SPEED_OPTIONS.map((speed) => (
                <label key={speed} className="radio-label">
                  <input
                    type="radio"
                    className="nes-radio is-dark"
                    name="speed"
                    checked={tempOptions.speed === speed}
                    onChange={() => handleOptionChange("speed", speed)}
                  />
                  <span>{speed.charAt(0).toUpperCase() + speed.slice(1)}</span>
                </label>
              ))}
            </div>
          </section>
          <section className="flex flex-col sm:flex-row justify-between sm:items-center">
            <p>SCREEN SIZE</p>
            <div className="flex flex-wrap gap-4 mt-2 sm:mt-0">
              {SIZE_OPTIONS.map((size) => (
                <label key={size} className="radio-label">
                  <input
                    type="radio"
                    className="nes-radio is-dark"
                    name="size"
                    checked={tempOptions.size === size}
                    onChange={() => handleOptionChange("size", size)}
                  />
                  <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                </label>
              ))}
            </div>
          </section>
          <section className="flex flex-col sm:flex-row justify-between items-center">
            <p className="whitespace-nowrap pr-4">FONT STYLE</p>
            <div className="nes-select is-dark mt-2 sm:mt-0 w-full">
              <select
                required
                name="font"
                value={tempOptions.font}
                onChange={(e) =>
                  handleOptionChange("font", e.target.value as FontOptions)
                }
                className="w-full"
              >
                {FONT_OPTIONS.map((font) => (
                  <option value={font}>{getFontName(font)}</option>
                ))}
              </select>
            </div>
          </section>
        </div>
        <div className="nes-container is-dark with-title bg-pattern-dotted">
          <p className="title">Preview</p>
          <div className="space-y-4 p-4">
            <div>
              <p className="text mb-2">Text Speed:</p>
              <div className="nes-container is-dark is-rounded h-full">
                <Typewriter
                  key={typewriterKey}
                  text=" The quick brown fox jumps over the lazy dog."
                  speed={tempOptions.speed}
                />
              </div>
            </div>
            <div>
              <p className="text mb-2">Screen Size:</p>
              <div className="nes-container is-dark is-rounded h-full flex items-center justify-center">
                <div
                  className={`border-2 p-2 transition-all ${tempOptions.size === "large" ? "border-blue-500" : "border-gray-600"}`}
                >
                  <div
                    className={`border-2 p-2 transition-all ${tempOptions.size === "medium" ? "border-blue-500" : "border-gray-600"}`}
                  >
                    <div
                      className={`border-2 p-2 transition-all ${tempOptions.size === "small" ? "border-blue-500" : "border-gray-600"}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="nes-btn is-success"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
