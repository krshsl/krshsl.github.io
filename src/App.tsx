import type React from "react";
import { HashRouter } from "react-router-dom";
import { OptionsProvider } from "./components/options";

import "./App.css";
import "./assets/index.scss";
import Home from "./layout/home";

const App: React.FC = () => {
  return (
    <OptionsProvider>
      <HashRouter>
        <Home />
      </HashRouter>
    </OptionsProvider>
  );
};

export default App;
