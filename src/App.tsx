import type React from "react";
import { HashRouter } from "react-router-dom";

import "./App.css";
import "./assets/styles/index.scss";
import { SoundsTrackerProvider } from "./core/context/sounds-provider";
import { OptionsProvider } from "./core/context/options-provider";
import Home from "./components/layout/Home";

const App: React.FC = () => {
  return (
    <OptionsProvider>
      <SoundsTrackerProvider>
        <HashRouter>
          <Home />
        </HashRouter>
      </SoundsTrackerProvider>
    </OptionsProvider>
  );
};

export default App;
