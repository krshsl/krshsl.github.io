import { Outlet } from "react-router";

import { TopBar } from "../components/topbar";
import { useOptions } from "../provider/options";

const Layout: React.FC = () => {
  const { getScreenClass, isSmallScreen } = useOptions();

  return (
    <>
      <div className="bw2-background--orange min-h-screen min-w-screen flex items-center pb-16!">
        <TopBar />
        <main
          className={`justify-center mx-auto p-4 pt-20 transition-all duration-500 ${isSmallScreen ? "w-full text-xs!" : getScreenClass()}`}
        >
          <div className="relative nes-container with-title is-dark is-rounded p-2 md:p-4 isometric-pattern flex flex-col min-h-fit">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
