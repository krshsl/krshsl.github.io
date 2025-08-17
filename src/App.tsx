import type React from "react";
import { BrowserRouter } from "react-router-dom";

import { OptionsProvider } from "./components/options";
import Router from "./router/routes";

import "./App.css";

const App: React.FC = () => {
  return (
    <OptionsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </OptionsProvider>
  );
};

export default App;
