import React, { useState } from "react";

import type {
  FontOptions,
  OptionsType,
  SizeOptions,
  SpeedOptions,
} from "../interfaces/options";
import { OptionsProviderContext } from "../provider/options";

export const OptionsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const defaultOptions: OptionsType = {
    speed: "mid",
    size: "medium",
    font: "press-start",
  };
  const [options, setOptions] = useState<OptionsType>(() => {
    try {
      const savedOptions = localStorage.getItem("pokedexPortfolioOptions");
      return savedOptions ? JSON.parse(savedOptions) : defaultOptions;
    } catch (error) {
      console.error(
        "Could not parse saved options, returning defaults.",
        error,
      );
      return defaultOptions;
    }
  });

  const fontMap: Record<FontOptions, string> = {
    vt323: "font-vt323",
    "pixelify-sans": "font-pixelify-sans",
    silkscreen: "font-silkscreen",
    "press-start": "font-press-start",
  };

  const screenMap: Record<SizeOptions, string> = {
    small: "max-w-4xl",
    medium: "max-w-6xl",
    large: "max-w-full",
  };

  const speedMap: Record<SpeedOptions, number> = {
    slow: 80,
    mid: 40,
    fast: 15,
  };

  const getFontClass = (): string => fontMap[options.font];
  const getScreenClass = (): string => screenMap[options.size];
  const getSpeed = (): number => speedMap[options.speed];

  const updateOptions = (newOptions: OptionsType) => {
    setOptions(newOptions);
    localStorage.setItem("pokedexPortfolioOptions", JSON.stringify(options));
  };

  const value = {
    options,
    updateOptions,
    getFontClass,
    getScreenClass,
    getSpeed,
  };

  return (
    <OptionsProviderContext.Provider value={value}>
      {children}
    </OptionsProviderContext.Provider>
  );
};
