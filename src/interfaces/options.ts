export const SPEED_OPTIONS = ["slow", "mid", "fast"] as const;
export type SpeedOptions = (typeof SPEED_OPTIONS)[number];

export const SIZE_OPTIONS = ["small", "medium", "large"] as const;
export type SizeOptions = (typeof SIZE_OPTIONS)[number];

export const FONT_OPTIONS = [
  "vt323",
  "pixelify-sans",
  "silkscreen",
  "press-start",
] as const;
export type FontOptions = (typeof FONT_OPTIONS)[number];

export interface OptionsType {
  speed: SpeedOptions;
  font: FontOptions;
  size: SizeOptions;
}
export const OPTION_KEYS = ["speed", "font", "size"] as const;
export type OptionKeys = (typeof OPTION_KEYS)[number];
