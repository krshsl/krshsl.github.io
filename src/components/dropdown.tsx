import { useState } from "react";
import { FONT_OPTIONS, type FontOptions } from "../interfaces/options";

type Props = {
  value: FontOptions;
  onChange: (value: FontOptions) => void;
};

export const PixelDropdown: React.FC<Props> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="pixel-btn w-full flex justify-between items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        {value}
        <span className="ml-2">▼</span>
      </button>
      {open && (
        <ul className="absolute left-0 top-full w-full bg-black border-4 border-white pixel-menu z-50">
          {FONT_OPTIONS.map((font) => (
            <li
              key={font}
              onClick={() => {
                onChange(font);
                setOpen(false);
              }}
              className="px-3 py-2 cursor-pointer hover:bg-gray-700"
            >
              {font}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
