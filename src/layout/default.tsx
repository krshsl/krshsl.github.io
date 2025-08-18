import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

import { LoadingScreen } from "../components/loading";
import { TopBar } from "../components/topbar";
import { useOptions } from "../provider/options";

const Layout: React.FC = () => {
  const { getScreenClass, getFontClass } = useOptions();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timerId);
  }, [location]);

  const isSmallScreen = (breakpoint: number = 768): boolean => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth < breakpoint;
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div
        className={`${getFontClass()} nes-cursor bg-pattern-dotted min-h-screen min-w-screen flex items-center`}
      >
        <TopBar />
        <main
          className={`justify-center mx-auto p-4 pt-20 transition-all duration-500 ${isSmallScreen() ? "w-full" : getScreenClass()}`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
