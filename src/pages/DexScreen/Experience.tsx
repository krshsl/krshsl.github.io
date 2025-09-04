import type React from "react";
import { useEffect } from "react";
import { POP_CLICK } from "../../core/config/sounds";
import { useAppSound } from "../../core/hooks/use-app-sound";
import type { DexData } from "../../core/types/dex-data";
import { Typewriter } from "../../components/features/TypeWriter";
import { useAchievements } from "../../core/hooks/use-achievements";
import { TrackableComponents } from "../../core/types/achievements";

export const ExperienceDetails: React.FC<{
  item: DexData;
}> = ({ item }) => {
  const { markComponentAsVisited } = useAchievements();
  useEffect(() => {
    markComponentAsVisited(TrackableComponents.EXPERIENCE);
  }, [markComponentAsVisited]);
  const [pop1] = useAppSound(POP_CLICK[1]);

  return (
    <div className="mb-10!">
      <p className="title">{item.company}</p>
      <div className="p-4 space-y-3 flex-grow">
        <div className="flex w-full items-start -mb-2">
          <div className="flex-shrink-0 sm:w-2/6 md:w-1/6 aspect-square flex flex-col justify-center items-center text-center">
            {/*Copyright Nintendo*/}
            <img
              src={item.icon}
              alt={item.university}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex-grow sm:w-4/6 md:w-5/6 flex flex-col items-start text-left pl-2">
            <p>
              <span className="nes-text is-success">Duration:</span>{" "}
              {item.duration}
            </p>
            {item.tech && (
              <p>
                <span className="nes-text is-success">Tech:</span>{" "}
                {item.tech.join(", ")}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn is-small"
            onClick={() => pop1()}
          >
            Company Website
          </a>
        </div>
        <div className="nes-container is-dark is-rounded mt-2 min-h-[8rem] -m-4! top-8">
          {Array.isArray(item.description) ? (
            <Typewriter list={item.description} />
          ) : (
            <Typewriter text={item.description} />
          )}
        </div>
      </div>
    </div>
  );
};
