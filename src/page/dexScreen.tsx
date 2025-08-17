import type React from "react";
import { useMemo, useState } from "react";
import { CloseButton } from "../components/closeButton";
import { useNavigate } from "react-router";
import { Typewriter } from "../components/typewriter";
import type { SpeedOptions } from "../interfaces/options";

interface dexData {
  id: number;
  name?: string;
  company?: string;
  role?: string;
  duration?: string;
  description: string;
  tech?: string;
  icon: string;
}

export const DexListScreen: React.FC<{
  title: string;
  data: Array<dexData>;
  textSpeed: SpeedOptions;
}> = ({ title, data, textSpeed }) => {
  const [selectedItem, setSelectedItem] = useState<dexData | null>(null);
  const memoizedDescription = useMemo(
    () => (selectedItem ? selectedItem.description : ""),
    [selectedItem],
  );
  const navigate = useNavigate();

  const handleSelect = (item: dexData) => {
    setSelectedItem(item);
  };

  return (
    <div
      className="relative nes-container with-title is-dark is-rounded p-4 bg-pattern-block"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <p className="title">{title}</p>
      <CloseButton
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="flex flex-col md:flex-row-reverse h-full gap-4 pt-8">
        <div className="w-full md:w-2/5 h-full overflow-y-auto pr-4 custom-scrollbar">
          <div className="flex flex-col items-end space-y-2">
            {data.map((item) => {
              const isSelected = selectedItem && item.id === selectedItem.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`cursor-pointer p-2 flex items-center nes-btn w-4/5 ${isSelected ? "is-primary -translate-x-4" : ""} transition-all duration-300 ease-in-out`}
                >
                  <span className="mr-4 text-2xl pixelated-image">
                    {item.icon}
                  </span>
                  <span>{item.name || item.company}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="relative w-full md:w-3/5 flex flex-col nes-container is-dark with-title is-rounded bg-pattern-dotted"
          style={{ bottom: "1rem" }}
        >
          {selectedItem ? (
            <>
              <CloseButton
                onClick={() => {
                  setSelectedItem(null);
                }}
              />
              <p className="title">
                {selectedItem.name || selectedItem.company}
              </p>
              <div className="p-4 space-y-3 flex-grow overflow-y-auto">
                {selectedItem.role && (
                  <p>
                    <span className="nes-text is-success">Role:</span>{" "}
                    {selectedItem.role}
                  </p>
                )}
                {selectedItem.duration && (
                  <p>
                    <span className="nes-text is-success">Duration:</span>{" "}
                    {selectedItem.duration}
                  </p>
                )}
                {selectedItem.tech && (
                  <p>
                    <span className="nes-text is-success">Tech:</span>{" "}
                    {selectedItem.tech.join(", ")}
                  </p>
                )}
                <div className="nes-container is-dark is-rounded mt-2 min-h-[8rem]">
                  <Typewriter text={memoizedDescription} speed={textSpeed} />
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-center">Select an entry to view details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
