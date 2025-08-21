import type React from "react";
import { HashRouter } from "react-router-dom";
import { OptionsProvider } from "./components/options";

import "./App.css";
import "./assets/index.scss";
import Home from "./layout/home";
import { SoundTrackerProvider } from "./components/sounds";

const App: React.FC = () => {
  return (
    <OptionsProvider>
      <SoundTrackerProvider>
        <HashRouter>
          <Home />
        </HashRouter>
      </SoundTrackerProvider>
    </OptionsProvider>
  );
};

export default App;
