import type React from "react";
import { useEffect, useState } from "react";

import { useOptions } from "../provider/options";

export const Typewriter: React.FC<{
  text: string;
}> = ({ text }) => {
  const { options, getSpeed } = useOptions();
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setCharIndex(0);
    setIsTyping(true);
  }, [text, options]);

  useEffect(() => {
    if (!isTyping) {
      return;
    }

    const timerId = setTimeout(() => {
      if (isTyping && charIndex < text.length) {
        setCharIndex(charIndex + 1);
      } else {
        setIsTyping(false);
      }
    }, getSpeed());

    return () => {
      clearTimeout(timerId);
    };
  }, [charIndex, isTyping, text, getSpeed]);

  const handleSkip = () => {
    setCharIndex(text.length);
    setIsTyping(false);
  };

  return (
    <div className="relative whitespace-pre-wrap">
      <p>{text.slice(0, charIndex)}</p>
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
