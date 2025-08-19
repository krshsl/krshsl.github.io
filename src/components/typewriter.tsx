import type React from "react";
import { useEffect, useState } from "react";
import { useOptions } from "../provider/options";
import useSound from "use-sound";
import { SKIP, TYPING } from "../constants/sounds";

export const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const { options, getSpeed } = useOptions();
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const [skip] = useSound(SKIP);
  const [play] = useSound(TYPING.url, {
    sprite: TYPING.sprite,
    volume: 0.5,
  });

  useEffect(() => {
    setCharIndex(0);
    setIsTyping(true);
  }, [text, options]);

  useEffect(() => {
    if (!isTyping) return;

    const timerId = setTimeout(() => {
      if (charIndex < text.length) {
        const char = text[charIndex];
        if (char === " ") {
          play({ id: "space" });
        } else {
          const randomKey = Math.floor(Math.random() * TYPING.keys) + 1;
          play({ id: String(randomKey) });
        }
        setCharIndex((prev) => prev + 1);
      } else {
        setIsTyping(false);
        play({ id: "end" });
      }
    }, getSpeed());

    return () => clearTimeout(timerId);
  }, [charIndex, isTyping, text, getSpeed, play]);

  const handleSkip = () => {
    skip();
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
