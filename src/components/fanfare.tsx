import React from "react";

interface FanfareProps {
  onDismiss: () => void;
  completionCount: number;
}

const Fanfare: React.FC<FanfareProps> = ({ onDismiss, completionCount }) => {
  const achievementText =
    completionCount > 1
      ? `You have achieved this ${completionCount} times!`
      : "You've discovered all the sounds in the Portfolio-Déx!";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
      <div className="nes-dialog is-dark is-rounded max-w-md mx-4">
        <form method="dialog">
          <p className="title">Congratulations!</p>
          <div className="flex flex-0">
            <i className="nes-octocat animate mr-20"></i>
            <p>{achievementText}</p>
          </div>
          <menu className="dialog-menu">
            <button className="nes-btn is-primary" onClick={onDismiss}>
              Awesome!
            </button>
          </menu>
        </form>
      </div>
    </div>
  );
};

export default Fanfare;
