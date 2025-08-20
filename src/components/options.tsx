import React, { useEffect, useState } from "react";

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
    font: "kongtext",
    volume: 0.5,
    ismute: false,
  };

  const [options, setOptions] = useState<OptionsType>(() => {
    try {
      const savedOptions = localStorage.getItem("pokedexPortfolioOptions");
      if (savedOptions) {
        const parsed = JSON.parse(savedOptions);
        return { ...defaultOptions, ...parsed };
      }
    } catch (error) {
      console.error(
        "Could not parse saved options, returning defaults.",
        error,
      );
    }
    return defaultOptions;
  });

  const [isSmall, setIsSmall] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmall(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
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
    slow: 100,
    mid: 50,
    fast: 25,
  };

  const getFontClass = (): string => fontMap[options.font];
  const getScreenClass = (): string => screenMap[options.size];
  const getSpeed = (): number => speedMap[options.speed];

  const toggleMute = () => {
    setOptions((prev) => ({
      ...prev,
      ismute: !prev.ismute,
    }));
  };

  const updateOptions = (newOptions: OptionsType, persist: boolean) => {
    setOptions(newOptions);
    if (persist) {
      localStorage.setItem(
        "pokedexPortfolioOptions",
        JSON.stringify(newOptions),
      );
    }
  };

  const value = {
    options,
    updateOptions,
    isSmallScreen: isSmall,
    getFontClass,
    getScreenClass,
    getSpeed,
    toggleMute,
  };

  return (
    <OptionsProviderContext.Provider value={value}>
      {children}
    </OptionsProviderContext.Provider>
  );
};
