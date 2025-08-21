import type React from "react";
import { useState, useEffect } from "react";
import Router from "../router/routes";

import LoadingScreen from "../components/loading";
import StartScreen from "../page/start";
import Fanfare from "../components/fanfare";
import { useOptions } from "../provider/options";
import { useSoundTracker } from "../provider/sounds";

const Home: React.FC = () => {
  const [started, setStarted] = useState(false);
  const { getFontClass } = useOptions();
  const { completionCount } = useSoundTracker();

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [lastSeenCount, setLastSeenCount] = useState(completionCount);

  useEffect(() => {
    if (completionCount > 0 && completionCount > lastSeenCount) {
      setIsOverlayVisible(true);
      setLastSeenCount(completionCount);
    }
  }, [completionCount, lastSeenCount]);

  return (
    <div className={getFontClass()}>
      {isOverlayVisible && (
        <Fanfare
          completionCount={completionCount}
          onDismiss={() => setIsOverlayVisible(false)}
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
