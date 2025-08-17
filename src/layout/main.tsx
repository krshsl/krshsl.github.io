import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import { LoadingScreen } from "../components/loading";
import { TopBar } from "../components/topbar";
import { useOptions } from "../provider/options";

const Main: React.FC = () => {
  const { getFontClass, getScreenClass } = useOptions();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div
        className={`${getFontClass} nes-cursor bg-pattern-dotted min-h-screen`}
      >
        <TopBar />
        <main
          className={`mx-auto p-4 pt-20 transition-all duration-500 ${getScreenClass}`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Main;
