import type React from "react";
import { useEffect, useState } from "react";

import { useOptions } from "../provider/options";

export const Typewriter: React.FC<{
  text: string;
}> = ({ text }) => {
  const { getSpeed } = useOptions();
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayText("");
    setIsTyping(true);
  }, [text]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const len = displayText.length;
      if (isTyping && len < text.length) {
        setDisplayText(text.slice(0, len + 1));
      } else {
        setIsTyping(false);
      }
    }, getSpeed());

    return () => {
      clearTimeout(timerId);
    };
  }, [displayText, text, getSpeed, isTyping]);

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
