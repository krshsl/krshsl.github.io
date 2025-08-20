import type React from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { OptionsProvider } from "./components/options";
import Router from "./router/routes";

import "./App.css";
import "./assets/portfolio.scss";
import LoadingScreen from "./components/loading";
import StartScreen from "./page/start";

const App: React.FC = () => {
  const [started, setStarted] = useState(false);

  return (
    <OptionsProvider>
      <BrowserRouter>
        <>
          {!started ? (
            <StartScreen onStart={() => setStarted(true)} />
          ) : (
            <LoadingScreen>
              <Router />
            </LoadingScreen>
          )}
          <footer className="text-center text-xs text-gray-400 p-2 fixed bottom-0 w-full bg-[#212529] z-50">
            Made with <i className="nes-icon is-small heart"></i> by Krishna
            Sathyamurthy
          </footer>
        </>
      </BrowserRouter>
    </OptionsProvider>
  );
};

export default App;
