import type React from "react";

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100] bg-pattern-block">
      <i className="nes-pokeball is-large animate-spin-nes"></i>
    </div>
  );
};
