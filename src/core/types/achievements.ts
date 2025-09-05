import { FANFARE_THEME } from "../config/sounds";

export const Achievement = {
  DIGITAL_EXPLORIST: 1 << 0,
  SONIC_SEEKER: 1 << 1,
  OG_EXPLORIST: 1 << 2,
  HACKER: 1 << 3,
} as const;

export type Achievement = (typeof Achievement)[keyof typeof Achievement];

export const ACHIEVEMENTS_LIST = [
  {
    type: Achievement.DIGITAL_EXPLORIST,
    name: "Digital Explorist",
    description:
      "Awarded for venturing into every digital nook and cranny of this portfolio.",
    soundUrl: FANFARE_THEME.url,
    bgClassName: "moving-squares--orange",
    badgeClassName: "badge-digital-explorist",
    fanfareBadgeClassName: "badge-digital-explorist top-1 left-3",
  },
  {
    type: Achievement.SONIC_SEEKER,
    name: "Sonic Seeker",
    description:
      "For the one who has cataloged every beep, boop, and byte of sound.",
    soundUrl: FANFARE_THEME.url,
    bgClassName: "moving-squares--purple",
    badgeClassName: "badge-sonic-seeker",
    fanfareBadgeClassName: "badge-sonic-seeker -top-3 left-4.5",
  },
  {
    type: Achievement.OG_EXPLORIST,
    name: "OG Explorist",
    description:
      "You've been here since the beginning! This badge is for our veteran explorers.",
    soundUrl: FANFARE_THEME.url,
    bgClassName: "moving-squares--blue",
    badgeClassName: "badge-og-explorist",
    fanfareBadgeClassName: "badge-og-explorist -top-2",
  },
  {
    type: Achievement.HACKER,
    name: "Hacker",
    description: "Wait... how did you get here? Bad actor, tch tch tch.",
    soundUrl: FANFARE_THEME.url,
    bgClassName: "moving-squares--green",
    badgeClassName: "badge-hacker",
    fanfareBadgeClassName: "badge-hacker m-12 -top-2 left-3",
  },
];

export const TrackableComponents = {
  ABOUT: 1 << 0,
  UNIVERSITY: 1 << 1,
  PROJECTS: 1 << 2,
  EXPERIENCE: 1 << 3,
  OPTIONS: 1 << 4,
  START: 1 << 5,
  MENU: 1 << 6,
} as const;

export type TrackableComponents =
  (typeof TrackableComponents)[keyof typeof TrackableComponents];

export const ALL_COMPONENTS_BITMAP = Object.values(TrackableComponents).reduce(
  (a, b) => a | b,
  0,
);

export type AchievementsContextType = {
  achievements: number;
  unlockAchievement: (achievement: Achievement) => void;
  showAchievement: (achievement: Achievement) => void;
  latestAchievement: Achievement | null;
  acknowledgeLatestAchievement: () => void;
  markComponentAsVisited: (
    component: (typeof TrackableComponents)[keyof typeof TrackableComponents],
  ) => void;
  componentState: number;
  soundState: bigint;
  setSoundState: React.Dispatch<React.SetStateAction<bigint>>;
};
