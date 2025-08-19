const base = (file: string) => `/sounds/${file}`;

export const MENU_URL = base("menu.mp3");

export const MENU = {
  OPEN: { url: MENU_URL, sprite: { play: [250, 100] } },
  CLOSE: { url: base("click.wav"), sprite: { play: [0, 400] } },
  BACK: { url: MENU_URL, sprite: { play: [20, 100] } },
};

export const CHARGING = {
  ON: base("charging-up.mp3"),
  OFF: base("charging-down.m4a"),
};

export const STARTUP = base("start-sound.wav");
export const CLICK = { url: MENU_URL, sprite: { play: [130, 100] } };
export const SKIP = base("skip.mp3");

const TYPING_URL = base("typing.wav");
export const TYPING = {
  url: TYPING_URL,
  keys: 17,
  sprite: {
    "1": [210, 420],
    "2": [2770, 480],
    "3": [3300, 300],
    "4": [3750, 250],
    "5": [4540, 360],
    "6": [5075, 375],
    "7": [5700, 450],
    "8": [6320, 420],
    "9": [8480, 350],
    "10": [8900, 360],
    "11": [9360, 430],
    "12": [10010, 330],
    "13": [10480, 390],
    "14": [11040, 410],
    "15": [12590, 410],
    "16": [14340, 310],
    "17": [14650, 350],
    space: [11640, 360],
    end: [15500, 350],
  },
};

export const POP_CLICK = Array.from({ length: 4 }, (_, i) =>
  base("pop-click" + i + ".mp3"),
);
