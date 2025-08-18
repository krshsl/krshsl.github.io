import React, { useState } from "react";

import {
  FONT_OPTIONS,
  type FontOptions,
  type OptionsType,
  type SizeOptions,
  type SpeedOptions,
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

  const fontMap: Record<FontOptions, `font-${FontOptions}`> =
    FONT_OPTIONS.reduce(
      (acc, font) => {
        acc[font] = `font-${font}`;
        return acc;
      },
      {} as Record<FontOptions, `font-${FontOptions}`>,
    );

  const screenMap: Record<SizeOptions, string> = {
    small: "w-[800px]",
    medium: "w-[1024px]",
    large: "w-[1280px]",
  };

  const speedMap: Record<SpeedOptions, number> = {
    slow: 80,
    mid: 40,
    fast: 15,
  };

  const getFontClass = (): string => fontMap[options.font];
  const getScreenClass = (): string => screenMap[options.size];
  const getSpeed = (): number => speedMap[options.speed];

  const updateOptions = (newOptions: OptionsType, persist: boolean) => {
    setOptions(newOptions);
    if (persist) {
      localStorage.setItem("pokedexPortfolioOptions", JSON.stringify(options));
    }
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
