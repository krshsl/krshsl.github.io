import useSound from "use-sound";
import { useOptions } from "../provider/options";

type UseSoundOptions = Parameters<typeof useSound>[1];

export function useAppSound(
  soundUrl: string,
  extraOptions?: Omit<UseSoundOptions, "volume" | "soundEnabled">,
) {
  const { options } = useOptions();

  return useSound(soundUrl, {
    volume: options.volume,
    soundEnabled: !options.mute,
    ...extraOptions,
  });
}
