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
        {!started ? (
          <StartScreen onStart={() => setStarted(true)} />
        ) : (
          <LoadingScreen>
            <Router />
          </LoadingScreen>
        )}
      </BrowserRouter>
    </OptionsProvider>
  );
};

export default App;
