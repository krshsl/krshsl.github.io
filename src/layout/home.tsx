import type React from "react";
import { useState } from "react";
import Router from "../router/routes";

import LoadingScreen from "../components/loading";
import StartScreen from "../page/start";
import { useOptions } from "../provider/options";

const Home: React.FC = () => {
  const [started, setStarted] = useState(false);
  const { getFontClass } = useOptions();

  return (
    <div className={getFontClass()}>
      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
      ) : (
        <LoadingScreen>
          <Router />
        </LoadingScreen>
      )}
      <footer className="text-center text-gray-400 p-2 fixed bottom-0 w-full bg-[#212529] z-50">
        Made with <i className="nes-icon is-small heart"></i> by Krishna
        Sathyamurthy
      </footer>
    </div>
  );
};

export default Home;
