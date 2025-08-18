import { createContext, useContext } from "react";

import type { OptionsType } from "../interfaces/options";

interface OptionsProviderState {
  options: OptionsType;
  updateOptions: (newOptions: OptionsType, persist: boolean) => void;
  getFontClass: () => string;
  getScreenClass: () => string;
  getSpeed: () => number;
}

export const OptionsProviderContext = createContext<
  OptionsProviderState | undefined
>(undefined);

export const useOptions = () => {
  const context = useContext(OptionsProviderContext);
  if (context === undefined) {
    throw new Error("useOptions must be used within a OptionsProvider");
  }
  return context;
};
