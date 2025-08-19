import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { DexData } from "../interfaces/dexData";

import { CloseButton } from "../components/closebutton";
import { EntryList } from "../components/entrylist";
import { useOptions } from "../provider/options";

interface DexScreenProps {
  title: string;
  data: DexData[];
  DetailsComponent: React.ComponentType<{ item: DexData }>;
}

export const DexScreen: React.FC<DexScreenProps> = ({
  title,
  data,
  DetailsComponent,
}) => {
  const [selectedItem, setSelectedItem] = useState<DexData | null>(null);
  const navigate = useNavigate();
  const { isSmallScreen } = useOptions();

  return (
    <div
      className="relative nes-container with-title is-dark is-rounded p-2 md:p-4 bg-pattern-block flex flex-col"
      style={{ minHeight: "calc(80vh)" }}
    >
      <p className="title">{title}</p>

      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        {isSmallScreen && selectedItem && (
          <button
            type="button"
            className="nes-btn is-warning m-2.5! top-1 right-15 text-center"
            onClick={() => setSelectedItem(null)}
          >
            &lt;
          </button>
        )}
        <CloseButton onClick={() => navigate("/")} />
      </div>

      <div className="flex-grow pt-8">
        {isSmallScreen ? (
          <>
            {selectedItem ? (
              <div
                className="relative w-full flex flex-col nes-container is-dark with-title is-rounded bg-pattern-dotted"
                style={{ bottom: "1rem" }}
              >
                <DetailsComponent item={selectedItem} />
              </div>
            ) : (
              <EntryList
                data={data}
                selectedItem={selectedItem}
                onSelect={setSelectedItem}
              />
            )}
          </>
        ) : (
          <div className="flex flex-row-reverse gap-4">
            <EntryList
              data={data}
              selectedItem={selectedItem}
              onSelect={setSelectedItem}
            />
            <div
              className="relative w-full md:w-3/5 flex flex-col nes-container is-dark with-title is-rounded bg-pattern-dotted"
              style={{ bottom: "1rem" }}
            >
              {selectedItem ? (
                <>
                  <CloseButton onClick={() => setSelectedItem(null)} />
                  <DetailsComponent item={selectedItem} />
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-center">
                    Select an entry to view details.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
