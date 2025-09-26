import type React from "react";
import { preload } from "react-dom";
import { HashRouter } from "react-router-dom";

import "./App.css";
import "./assets/styles/index.scss";
import { SoundsTrackerProvider } from "./core/context/sounds-provider";
import { OptionsProvider } from "./core/context/options-provider";
import { AchievementsProvider } from "./core/context/achievements-provider";
import Home from "./components/layout/Home";
import { aboutData, experienceData, projectData } from "./core/config/about";

const App: React.FC = () => {
  // pre-fetch my images
  preload(aboutData.icon, { as: "image" });
  aboutData.education.forEach((data) => {
    preload(data.icon, { as: "image" });
  });
  experienceData.forEach((data) => {
    preload(data.icon, { as: "image" });
  });
  projectData.forEach((data) => {
    preload(data.icon, { as: "image" });
  });

  return (
    <OptionsProvider>
      <HashRouter>
        <AchievementsProvider>
          <SoundsTrackerProvider>
            <Home />
          </SoundsTrackerProvider>
        </AchievementsProvider>
      </HashRouter>
    </OptionsProvider>
  );
};

export default App;
