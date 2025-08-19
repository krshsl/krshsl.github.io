import type React from "react";
import type { DexData } from "../interfaces/dexData";
import { ListWriter } from "./listwriter";
import { Typewriter } from "./typewriter";

export const ExperienceDetails: React.FC<{
  item: DexData;
}> = ({ item }) => {
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
