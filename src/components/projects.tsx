import type React from "react";
import type { DexData } from "../interfaces/dexData";
import { ListWriter } from "./listwriter";
import { Typewriter } from "./typewriter";

export const ProjectDetails: React.FC<{
  item: DexData;
}> = ({ item }) => {
  return (
    <div className="mb-10!">
      <p className="title w-[95%]">{item.name}</p>
      <div className="p-4 space-y-3 flex-grow">
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
        <div className="flex flex-wrap gap-2 pt-2">
          {!!item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-small"
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
            >
              Repo
            </a>
          )}
          {!!item.post && (
            <a
              href={item.post}
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-small is-error"
            >
              Blog Post
            </a>
          )}
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
