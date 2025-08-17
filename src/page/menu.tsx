import type React from "react";
import { useNavigate } from "react-router";

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="nes-container with-title is-dark bg-pattern-block">
      <p className="title">Main Menu</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <button
          type="button"
          className="nes-btn is-primary h-24"
          onClick={() => {
            navigate("experience");
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <i className="nes-icon trophy is-medium"></i>
            <span className="mt-2">Experience</span>
          </div>
        </button>
        <button
          type="button"
          className="nes-btn is-success h-24"
          onClick={() => {
            navigate("projects");
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <i className="nes-icon star is-medium"></i>
            <span className="mt-2">Projects</span>
          </div>
        </button>
        <button
          type="button"
          className="nes-btn is-warning h-24"
          onClick={() => {
            navigate("about");
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <i className="nes-ash is-medium"></i>
            <span className="mt-2">Trainer Card</span>
          </div>
        </button>
        <button
          type="button"
          className="nes-btn h-24"
          onClick={() => {
            navigate("options");
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <i className="snes-jp-logo is-medium"></i>
            <span className="mt-2">Options</span>
          </div>
        </button>
      </div>
    </div>
  );
};
