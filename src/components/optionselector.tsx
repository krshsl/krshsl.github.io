import { POP_CLICK } from "../constants/sounds";
import { type AllOptions } from "../interfaces/options";
import { useAppSound } from "../hooks/useAppSound";

type Props = {
  label: string;
  options: readonly AllOptions[];
  value: AllOptions;
  onChange: (value: AllOptions) => void;
};

export const OptionSelector: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const [pop0] = useAppSound(POP_CLICK[0]);

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <p className="w-full md:w-auto">{label}</p>
      <div className="flex items-center">
        <span className="nes-text is-primary">&lt;</span>
        {options.map((optionValue) => (
          <button
            key={optionValue}
            type="button"
            className={`nes-btn mx-2 ${
              value === optionValue ? "is-primary" : ""
            }`}
            onClick={() => {
              pop0();
              onChange(optionValue);
            }}
          >
            {optionValue.toUpperCase()}
          </button>
        ))}
        <span className="nes-text is-primary">&gt;</span>
      </div>
    </div>
  );
};
