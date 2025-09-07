import React from "react";
import useSound from "use-sound";

import type { SIMPLE_SOUND, SPRITE_SOUND_COLLECTION } from "../types/sounds";
import { useOptions } from "../context/options";
import { useSoundTracker } from "../context/sounds";

type PlayFunction = ReturnType<typeof useSound>[0];
type PlayOptions = Parameters<PlayFunction>[0];

type UseSoundOptions = Parameters<typeof useSound>[1];

export function useAppSound(
  sound: SIMPLE_SOUND | SPRITE_SOUND_COLLECTION,
  extraOptions?: Omit<UseSoundOptions, "volume" | "soundEnabled" | "sprite">,
) {
  const { options } = useOptions();
  const { markAsPlayed } = useSoundTracker();

  let spriteMap: Record<string, [number, number]> | undefined = undefined;
  if ("sprites" in sound) {
    spriteMap = Object.entries(sound.sprites).reduce(
      (acc, [key, val]) => {
        acc[key] = val.pos;
        return acc;
      },
      {} as Record<string, [number, number]>,
    );
  } else if (sound.sprite) {
    spriteMap = { play: sound.sprite };
  }

  const [originalPlay, exposedData] = useSound(sound.url, {
    volume: options.volume,
    soundEnabled: !options.mute,
    sprite: spriteMap,
    ...extraOptions,
  });

  const wrappedPlay = React.useCallback(
    (playOptions?: PlayOptions) => {
      let soundIdToMark: number | undefined;

      if ("sprites" in sound) {
        const spriteKey = playOptions?.id;
        if (spriteKey && sound.sprites[spriteKey]) {
          soundIdToMark = sound.sprites[spriteKey].id;
        }
      } else if ("id" in sound) {
        soundIdToMark = sound.id;
      }

      if (soundIdToMark) {
        markAsPlayed(soundIdToMark);
      }

      originalPlay(playOptions);
    },
    [originalPlay, markAsPlayed, sound],
  );

  return [wrappedPlay, exposedData] as const;
}
