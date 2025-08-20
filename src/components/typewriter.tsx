import type React from "react";
import { useEffect, useState } from "react";
import { useOptions } from "../provider/options";
import { SKIP_BUTTON, TYPING } from "../constants/sounds";
import { useAppSound } from "../hooks/useAppSound";

export const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const { options, getSpeed } = useOptions();
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const sprite_len = TYPING.keys
    ? TYPING.keys
    : Object.keys(TYPING.sprite).length;

  const [skip] = useAppSound(SKIP_BUTTON);
  const [play] = useAppSound(
    TYPING.url,
    {
      sprite: TYPING.sprite,
    },
    0.4,
  );

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
          const randomKey = Math.floor(Math.random() * sprite_len) + 1;
          play({ id: String(randomKey) });
        }
        setCharIndex((prev) => prev + 1);
      } else {
        setIsTyping(false);
        play({ id: "end" });
      }
    }, getSpeed());

    return () => clearTimeout(timerId);
  }, [charIndex, isTyping, text, getSpeed, play, sprite_len]);

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
