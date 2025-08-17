import type React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { About } from "../page/about";
import { DexListScreen } from "../page/dexScreen";
import { Menu } from "../page/menu";
import { Options } from "../page/options";
import { experienceData, projectData } from "../constants/about";
import Main from "../layout/main";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route
          path="experience"
          element={<DexListScreen title="Experience" data={experienceData} />}
        />
        <Route
          path="projects"
          element={<DexListScreen title="Projects" data={projectData} />}
        />
        <Route path="options" element={<Options />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default Router;
