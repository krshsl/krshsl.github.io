import type React from "react";
import type { DexData } from "../interfaces/dexData";

interface EntryListProps {
  data: DexData[];
  selectedItem: DexData | null;
  onSelect: (item: DexData) => void;
}

export const EntryList: React.FC<EntryListProps> = ({
  data,
  selectedItem,
  onSelect,
}) => {
  return (
    <div className="w-full md:w-2/5 h-full overflow-y-auto pl-6 custom-scrollbar">
      <div className="flex flex-col items-end space-y-2">
        {data.map((item) => {
          const isSelected = selectedItem?.id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              className={`cursor-pointer p-2 nes-btn w-full ${
                isSelected ? "is-primary -translate-x-4" : ""
              } transition-all duration-300 ease-in-out`}
            >
              <div className="flex w-full items-start">
                <div className="flex-shrink-0 w-1/6 flex justify-center items-center h-full pt-1">
                  <span className="text-2xl pixelated-image">{item.icon}</span>
                </div>
                <div className="flex-grow w-5/6 flex flex-col items-start text-left pl-2">
                  <span>{item.name || item.company}</span>
                  {item.role && (
                    <span className="text-xs mt-1 opacity-75">{item.role}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
