import type React from "react";
import { useEffect } from "react";
import type { DexData } from "../../core/types/dex-data";
import { useAppSound } from "../../core/hooks/use-app-sound";
import { POP_CLICK } from "../../core/config/sounds";
import { Typewriter } from "../../components/features/TypeWriter";
import { useAchievements } from "../../core/hooks/use-achievements";
import { TrackableComponents } from "../../core/types/achievements";

export const ProjectDetails: React.FC<{
  item: DexData;
}> = ({ item }) => {
  const { markComponentAsVisited } = useAchievements();
  useEffect(() => {
    markComponentAsVisited(TrackableComponents.PROJECTS);
  }, [markComponentAsVisited]);
  const [pop1] = useAppSound(POP_CLICK[1]);

  return (
    <div className="mb-10!">
      <p className="title w-[95%]">{item.name}</p>
      <div className="p-4 space-y-3 flex-grow">
        <div className="flex w-full items-start">
          <div className="flex-shrink-0 sm:w-2/6 md:w-1/6 aspect-square flex flex-col justify-center items-center text-center">
            {/*Copyright Nintendo*/}
            <img
              src={item.icon}
              alt={item.university}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex-grow sm:w-4/6 md:w-5/6 flex flex-col items-start text-left pl-2">
            <div className="space-y-2">
              <p>
                <span className="nes-text is-success">Tags:</span>{" "}
                {item.tags?.join(" | ")}
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="nes-text is-success">Tech Stack:</span>{" "}
                {item.tech?.join(" | ")}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {!!item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-small"
              onClick={() => pop1()}
            >
              {item.websiteName || "Live Site"}
            </a>
          )}
          {!!item.repo && (
            <a
              href={item.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-small is-warning"
              onClick={() => pop1()}
            >
              Repo
            </a>
          )}
          {!!item.links &&
            Object.entries(item.links).map(([key, value]) =>
              typeof value === "string" && value.trim() ? (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nes-btn is-small is-error"
                  onClick={() => pop1()}
                >
                  {key}
                </a>
              ) : null,
            )}
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
