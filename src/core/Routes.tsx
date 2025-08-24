import type React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Default";
import { Menu } from "../pages/Menu";
import { About } from "../pages/About/About";
import { DexScreen } from "../pages/DexScreen/DexScreen";
import { experienceData, projectData } from "./config/about";
import { ExperienceDetails } from "../pages/DexScreen/Experience";
import { ProjectDetails } from "../pages/DexScreen/Projects";
import { Options } from "../pages/Options";

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
