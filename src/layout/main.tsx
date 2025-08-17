import { useEffect, useState } from "react";
import { Outlet, Scripts } from "react-router";
import type { FontOptions, OptionsType } from "../interfaces/options";
import { TopBar } from "../components/topbar";
import { LoadingScreen } from "../components/loading";

const Main: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState<OptionsType>(() => {
    try {
      const savedOptions = localStorage.getItem("pokedexPortfolioOptions");
      return savedOptions
        ? JSON.parse(savedOptions)
        : { speed: "mid", size: "medium", font: "press-start" };
    } catch (error) {
      console.error(
        "Could not parse saved options, returning defaults.",
        error,
      );
      return { speed: "mid", size: "medium", font: "press-start" };
    }
  });

  const getFontClass = (font: FontOptions) => {
    switch (font) {
      case "vt323":
        return "font-vt323";
      case "pixelify-sans":
        return "font-pixelify-sans";
      case "silkscreen":
        return "font-silkscreen";
      case "press-start":
      default:
        return "font-press-start";
    }
  };

  const getScreenSizeClass = () => {
    switch (options.size) {
      case "small":
        return "max-w-4xl";
      case "large":
        return "max-w-full";
      default:
        return "max-w-6xl";
    }
  };

  useEffect(() => {
    localStorage.setItem("pokedexPortfolioOptions", JSON.stringify(options));
  }, [options]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div
        className={`${getFontClass(options.font)} nes-cursor bg-pattern-dotted min-h-screen`}
      >
        <TopBar fontClass={getFontClass(options.font)} />
        <main
          className={`mx-auto p-4 pt-20 transition-all duration-500 ${getScreenSizeClass()}`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Main;
