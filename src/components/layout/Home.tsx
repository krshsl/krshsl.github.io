import type React from "react";
import { useState } from "react";
import { useOptions } from "../../core/context/options";
import LoadingScreen from "./Loading";
import Router from "../../core/Routes";
import Fanfare from "../features/FanFare";
import StartScreen from "../../pages/Start";
import { useAchievements } from "../../core/hooks/use-achievements";

const Home: React.FC = () => {
  const [started, setStarted] = useState(false);
  const { getFontClass } = useOptions();
  const { latestAchievement, acknowledgeLatestAchievement } = useAchievements();

  return (
    <div className={getFontClass()}>
      {latestAchievement && (
        <Fanfare
          achievement={latestAchievement}
          onAcknowledge={acknowledgeLatestAchievement}
        />
      )}
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
