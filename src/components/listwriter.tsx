import type React from "react";
import { useState, useEffect } from "react";
import { useOptions } from "../provider/options";

export const ListWriter: React.FC<{ items: string[] }> = ({ items }) => {
  const { getSpeed, isSmallScreen } = useOptions();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
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
        setCharIndex(charIndex + 1);
      } else {
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
  }, [lineIndex, charIndex, items, getSpeed, isTyping]);

  const handleSkip = () => {
    const len = items.length;
    setLineIndex(len);
    setCharIndex(items[len - 1].length);
    setIsTyping(false);
  };

  if (!items.length) return;
  else
    return (
      <div className="relative">
        <div className="flex flex-col space-y-2">
          <>
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
          </>
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
