export const SPEED_OPTIONS = ["slow", "mid", "fast"] as const;
export type SpeedOptions = (typeof SPEED_OPTIONS)[number];

export const SIZE_OPTIONS = ["small", "medium", "large"] as const;
export type SizeOptions = (typeof SIZE_OPTIONS)[number];

export const FONT_OPTIONS = [
  "vt323",
  "pixelify-sans",
  "silkscreen",
  "press-start",
  "kongtext",
] as const;
export type FontOptions = (typeof FONT_OPTIONS)[number];

export const VOLUME_OPTIONS = [
  0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
] as const;
export type VolumeOptions = (typeof VOLUME_OPTIONS)[number];

export interface OptionsType {
  speed: SpeedOptions;
  size: SizeOptions;
  font: FontOptions;
  volume: VolumeOptions;
  mute: boolean;
}
export const OPTION_KEYS = ["speed", "font", "size", "volume", "mute"] as const;
export type OptionKeys = (typeof OPTION_KEYS)[number];

export type AllOptions = SpeedOptions | SizeOptions | FontOptions;
