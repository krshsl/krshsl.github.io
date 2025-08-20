import type React from "react";
import { useState, useEffect } from "react";
import { useOptions } from "../provider/options";
import { SKIP_BUTTON, TYPING } from "../constants/sounds";
import { useAppSound } from "../hooks/useAppSound";

export const ListWriter: React.FC<{ items: string[] }> = ({ items }) => {
  const { getSpeed, isSmallScreen } = useOptions();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const sprite_len = TYPING.keys
    ? TYPING.keys
    : Object.keys(TYPING.sprite).length;

  const [skip] = useAppSound(SKIP_BUTTON);
  const [playTyping] = useAppSound(
    TYPING.url,
    {
      sprite: TYPING.sprite,
    },
    0.4,
  );

  const spacingClass = isSmallScreen
    ? "-tracking-[0.5rem]"
    : "-tracking-[0.75rem]";

  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setIsTyping(true);
  }, [items]);

  useEffect(() => {
    if (!isTyping || lineIndex >= items.length) {
      return;
    }

    const currentLine = items[lineIndex];

    const timer = setTimeout(() => {
      if (charIndex < currentLine.length) {
        const char = currentLine[charIndex];

        if (char === " ") {
          playTyping({ id: "space" });
        } else {
          const randomKey = Math.floor(Math.random() * sprite_len) + 1;
          playTyping({ id: String(randomKey) });
        }

        setCharIndex((prev) => prev + 1);
      } else {
        playTyping({ id: "end" });
        const nextLineIndex = lineIndex + 1;
        if (nextLineIndex < items.length) {
          setLineIndex(nextLineIndex);
          setCharIndex(0);
        } else {
          setIsTyping(false);
        }
      }
    }, getSpeed());

    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, items, getSpeed, isTyping, playTyping, sprite_len]);

  const handleSkip = () => {
    const len = items.length;
    skip();
    setLineIndex(len);
    setCharIndex(items[len - 1].length);
    setIsTyping(false);
  };

  if (!items.length) return null;

  return (
    <div className="relative">
      <div className="flex flex-col space-y-2">
        {items.slice(0, lineIndex).map((line, index) => (
          <p key={index}>
            <span className={spacingClass}>{`<>`}</span>
            {` ${line}`}
          </p>
        ))}
        {lineIndex < items.length && (
          <p>
            <span className={spacingClass}>{`<>`}</span>
            {` ${items[lineIndex].slice(0, charIndex)}`}
          </p>
        )}
      </div>
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
