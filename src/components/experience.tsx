import type React from "react";
import type { DexData } from "../interfaces/dexData";
import { ListWriter } from "./listwriter";
import { Typewriter } from "./typewriter";
import { POP_CLICK } from "../constants/sounds";
import useSound from "use-sound";

export const ExperienceDetails: React.FC<{
  item: DexData;
}> = ({ item }) => {
  const [pop1] = useSound(POP_CLICK[1]);

  return (
    <div className="mb-10!">
      <p className="title">{item.company}</p>
      <div className="p-4 space-y-3 flex-grow">
        <p>
          <span className="nes-text is-success">Duration:</span> {item.duration}
        </p>
        <p>
          <span className="nes-text is-success">Tech:</span>{" "}
          {item.tech?.join(", ")}
        </p>
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
            <ListWriter items={item.description} />
          ) : (
            <Typewriter text={item.description} />
          )}
        </div>
      </div>
    </div>
  );
};
