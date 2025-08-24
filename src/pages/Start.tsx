import type React from "react";
import { useNavigate } from "react-router-dom";
import { STARTUP } from "../core/config/sounds";
import { useAppSound } from "../core/hooks/use-app-sound";

const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const navigate = useNavigate();
  const [turnOn, { sound }] = useAppSound(STARTUP);

  const handleStart = () => {
    if (sound?.context?.state === "suspended") {
      sound.context.resume();
    }
    turnOn();
    onStart();
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-pattern-block text-center">
      <i className="nes-pokeball is-large animate-spin-nes mb-6"></i>

      <h1 className="text-3xl text-white mb-4 pixel-font">Welcome, Trainer!</h1>
      <p className="text-white mb-8 animate-pulse">
        Press Start to Begin Your Journey
      </p>

      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="nes-btn is-success"
          onClick={() => {
            handleStart();
            navigate("/about");
          }}
        >
          Start
        </button>
        <button
          type="button"
          className="nes-btn is-warning"
          onClick={() => {
            handleStart();
            navigate("/options");
          }}
        >
          Options
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
