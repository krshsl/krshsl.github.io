import type React from "react";
import { useState, useEffect } from "react";
import type { DexData } from "../../core/types/dex-data";
import { useAppSound } from "../../core/hooks/use-app-sound";
import { POP_CLICK } from "../../core/config/sounds";
import { Typewriter } from "../../components/features/TypeWriter";
import { useAchievements } from "../../core/hooks/use-achievements";
import { TrackableComponents } from "../../core/types/achievements";

export const EducationDetails: React.FC<{
  items: DexData[];
}> = ({ items }) => {
  const { markComponentAsVisited } = useAchievements();
  useEffect(() => {
    markComponentAsVisited(TrackableComponents.UNIVERSITY);
  }, [markComponentAsVisited]);
  const [pop1] = useAppSound(POP_CLICK[1]);
  const [isAllSkipped, setIsAllSkipped] = useState(false);

  const handleGlobalSkip = () => {
    setIsAllSkipped(true);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={index == items.length - 1 ? "mb-12.5!" : "mb-17.5!"}
        >
          <div className="p-4 space-y-3 flex-grow">
            <p>{item.university}</p>
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
                  <span className="nes-text is-primary">{item.degree}</span>
                </p>
                <p>
                  <span className="nes-text is-success">Duration:</span>{" "}
                  {item.duration}
                </p>
                {item.gpa && (
                  <p>
                    <span className="nes-text is-success">GPA:</span> {item.gpa}
                  </p>
                )}
                {item.tech && item.tech.length > 0 && (
                  <p>
                    <span className="nes-text is-success">Tech:</span>{" "}
                    {item.tech.join(", ")}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="nes-btn is-small"
                onClick={() => pop1()}
              >
                University Website
              </a>
            </div>
            <div className="nes-container is-dark is-rounded mt-2 min-h-[8rem] -m-4! top-8">
              {Array.isArray(item.description) ? (
                <Typewriter
                  list={item.description}
                  isSkipped={isAllSkipped}
                  onSkip={handleGlobalSkip}
                />
              ) : (
                <Typewriter
                  text={item.description}
                  isSkipped={isAllSkipped}
                  onSkip={handleGlobalSkip}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
