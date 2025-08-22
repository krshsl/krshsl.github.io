import type React from "react";
import type { DexData } from "../interfaces/dexData";
import { Typewriter } from "./typewriter";
import { POP_CLICK } from "../constants/sounds";
import { useAppSound } from "../hooks/useAppSound";
import { useState } from "react";

export const UniversityDetails: React.FC<{
  items: DexData[];
}> = ({ items }) => {
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
              <div className="flex-shrink-0 w-1/6 aspect-square flex flex-col justify-center items-center text-center">
                {/*Copyright Nintendo*/}
                <img
                  src={item.icon}
                  alt={item.university}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <div className="flex-grow w-5/6 flex flex-col items-start text-left pl-2">
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
                href={item.link}
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
