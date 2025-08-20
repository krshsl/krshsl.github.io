import useSound from "use-sound";
import { useOptions } from "../provider/options";

type UseSoundOptions = Parameters<typeof useSound>[1];

export function useAppSound(
  soundUrl: string,
  extraOptions?: Omit<UseSoundOptions, "volume" | "soundEnabled">,
  volume?: number,
) {
  const { options } = useOptions();

  return useSound(soundUrl, {
    volume: options.volume * (volume !== undefined ? volume : 1),
    soundEnabled: !options.ismute,
    ...extraOptions,
  });
}
