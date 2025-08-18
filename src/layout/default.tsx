import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

import { LoadingScreen } from "../components/loading";
import { TopBar } from "../components/topbar";
import { useOptions } from "../provider/options";

const Layout: React.FC = () => {
  const { getFontClass, getScreenClass } = useOptions();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timerId);
  }, [location]);

  if (isLoading) return <LoadingScreen />;
  else
    return (
      <>
        <div
          className={`${getFontClass()} nes-cursor bg-pattern-dotted min-h-screen min-w-screen flex items-center`}
        >
          <TopBar />
          <main
            className={`justify-center mx-auto p-4 pt-20 transition-all duration-500 ${getScreenClass()}`}
          >
            <Outlet />
          </main>
        </div>
      </>
    );
};

export default Layout;
