import { Outlet } from "react-router";

import { TopBar } from "../components/topbar";
import { useOptions } from "../provider/options";

const Layout: React.FC = () => {
  const { getScreenClass, getFontClass, isSmallScreen } = useOptions();

  return (
    <>
      <div
        className={`${getFontClass()} nes-cursor bg-pattern-dotted min-h-screen min-w-screen flex items-center`}
      >
        <TopBar />
        <main
          className={`justify-center mx-auto p-4 pt-20 transition-all duration-500 ${isSmallScreen ? "w-full text-xs!" : getScreenClass()}`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
