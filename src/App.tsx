import type React from "react";
import { BrowserRouter } from "react-router-dom";

import { OptionsProvider } from "./components/options";
import Router from "./router/routes";

import "./App.css";
import "./assets/portfolio.scss";
import LoadingScreen from "./components/loading";

const App: React.FC = () => {
  return (
    <OptionsProvider>
      <BrowserRouter>
        <LoadingScreen>
          <Router />
        </LoadingScreen>
      </BrowserRouter>
    </OptionsProvider>
  );
};

export default App;
