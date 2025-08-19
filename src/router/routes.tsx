import type React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { About } from "../page/about";
import { Menu } from "../page/menu";
import { Options } from "../page/options";
import Layout from "../layout/default";
import { ExperienceDetails } from "../components/experience";
import { DexScreen } from "../page/dexScreen";
import { ProjectDetails } from "../components/projects";
import { experienceData, projectData } from "../constants/about";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route
          path="experience"
          element={
            <DexScreen
              title="Experience"
              data={experienceData}
              DetailsComponent={ExperienceDetails}
            />
          }
        />
        <Route
          path="projects"
          element={
            <DexScreen
              title="Projects"
              data={projectData}
              DetailsComponent={ProjectDetails}
            />
          }
        />
        <Route path="options" element={<Options />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default Router;
