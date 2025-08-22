import type {
  SIMPLE_SOUND,
  SPRITE_SOUND_COLLECTION,
} from "../interfaces/sounds";

const base = (file: string) => `/sounds/${file}`;

const MENU_URL = base("menu.mp3");
export const MENU: { [key: string]: SIMPLE_SOUND } = {
  OPEN: { url: base("menu.mp3"), id: 1, sprite: [250, 100] },
  CLOSE: { url: base("click.wav"), id: 2, sprite: [0, 400] },
  BACK: { url: base("menu.mp3"), id: 3, sprite: [20, 100] },
};

export const CHARGING = {
  ON: { url: base("charging-up.mp3"), id: 4 },
  OFF: { url: base("charging-down.m4a"), id: 5 },
};

export const STARTUP = { url: base("start-sound.wav"), id: 6 };

export const CLICK: SIMPLE_SOUND = {
  url: MENU_URL,
  id: 7,
  sprite: [130, 100],
};

export const SKIP_BUTTON = { url: base("skip.mp3"), id: 8 };

const TYPING_URL = base("typing.wav");
export const TYPING: SPRITE_SOUND_COLLECTION = {
  url: TYPING_URL,
  keys: 17,
  sprites: {
    "1": { id: 10, pos: [210, 420] },
    "2": { id: 11, pos: [2770, 480] },
    "3": { id: 12, pos: [3300, 300] },
    "4": { id: 13, pos: [3750, 250] },
    "5": { id: 14, pos: [4540, 360] },
    "6": { id: 15, pos: [5075, 375] },
    "7": { id: 16, pos: [5700, 450] },
    "8": { id: 17, pos: [6320, 420] },
    "9": { id: 18, pos: [8480, 350] },
    "10": { id: 19, pos: [8900, 360] },
    "11": { id: 20, pos: [9360, 430] },
    "12": { id: 21, pos: [10010, 330] },
    "13": { id: 22, pos: [10480, 390] },
    "14": { id: 23, pos: [11040, 410] },
    "15": { id: 24, pos: [12590, 410] },
    "16": { id: 25, pos: [14340, 310] },
    "17": { id: 26, pos: [14650, 350] },
    space: { id: 27, pos: [11640, 360] },
    end: { id: 28, pos: [15500, 350] },
  },
};

export const POP_CLICK = [
  { url: base("pop-click0.mp3"), id: 30 },
  { url: base("pop-click1.mp3"), id: 31 },
  { url: base("pop-click2.mp3"), id: 32 },
  { url: base("pop-click3.mp3"), id: 33 },
];

export const ENABLE_SOUND = { url: base("enable-sound.mp3"), id: 34 };
export const DISABLE_SOUND = { url: base("disable-sound.mp3"), id: 35 };

export const REGISTER = { url: base("cash-register-fake.wav"), id: 36 };
export const COIN = { url: base("coins-1.wav"), id: 37 };

export const BATTERY = { url: base("menu.mp3"), id: 38 };

export const FANFARE_THEME = { url: base("fanfare.mp3"), id: 256 };
