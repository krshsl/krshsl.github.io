import type React from "react";

export const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="absolute top-2 right-2 z-10" style={{ paddingTop: "2px" }}>
    <button type="button" className="nes-btn is-error" onClick={onClick}>
      X
    </button>
  </div>
);
