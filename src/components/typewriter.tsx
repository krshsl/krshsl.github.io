import React, { useEffect, useState } from "react";

export const Typewriter: React.FC<{
  text: string;
  speed: "slow" | "mid" | "fast";
}> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const speedMap: { slow: number; mid: number; fast: number } = {
    slow: 80,
    mid: 40,
    fast: 15,
  };
  const delay = speedMap[speed] || 40;

  useEffect(() => {
    const timerId = setTimeout(() => {
      const len = displayText.length;
      if (isTyping && len < text.length) {
        setDisplayText(text.slice(0, len + 1));
      } else {
        setIsTyping(false);
      }
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [displayText, delay, speed, isTyping, text]);

  const handleSkip = () => {
    setDisplayText(text);
    setIsTyping(false);
  };

  return (
    <div className="relative">
      <p>{displayText}</p>
      {isTyping && (
        <button
          onClick={handleSkip}
          className="nes-btn is-small absolute bottom-0 right-0"
        >
          Skip
        </button>
      )}
    </div>
  );
};
