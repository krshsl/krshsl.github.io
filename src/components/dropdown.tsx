import type React from "react";
import { useState } from "react";
import { type AllOptions } from "../interfaces/options";
import { POP_CLICK } from "../constants/sounds";
import useSound from "use-sound";

type Props = {
  label: string;
  options: readonly AllOptions[];
  value: AllOptions;
  onChange: (value: AllOptions) => void;
};

export const PixelDropdown: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [pop0] = useSound(POP_CLICK[0]);
  const [pop1] = useSound(POP_CLICK[1]);

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <p className="w-full md:w-auto">{label}</p>

      <div className="relative w-full">
        <button
          type="button"
          onClick={() => {
            pop0();
            setOpen((prev) => !prev);
          }}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="nes-btn is-primary w-full !flex !items-center !justify-start !text-left relative"
        >
          <span className="block w-full pr-8 !text-left truncate">{value}</span>

          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            ▼
          </span>
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute left-0 top-full w-full"
            style={{ zIndex: 9999 }}
          >
            {options.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={opt === value}
                onClick={() => {
                  pop1();
                  onChange(opt);
                  setOpen(false);
                }}
                className="w-full flex menu-button"
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
