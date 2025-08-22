import type React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
import { useOptions } from "../provider/options";
import { SKIP_BUTTON, TYPING } from "../constants/sounds";
import { useAppSound } from "../hooks/useAppSound";

type Category = { category: string; technologies: string[] };
type TypewriterProps =
  | { text: string; onSkip?: () => void; isSkipped?: boolean }
  | { categories: Category[]; onSkip?: () => void; isSkipped?: boolean }
  | { list: string[]; onSkip?: () => void; isSkipped?: boolean };

export const Typewriter: React.FC<TypewriterProps> = (props) => {
  const { getSpeed, getFontClass, isSmallScreen, options } = useOptions();
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const { onSkip, isSkipped } = props;

  const getSpeedRef = useRef(getSpeed);
  useEffect(() => {
    getSpeedRef.current = getSpeed;
  });

  const sprite_len = TYPING.keys
    ? TYPING.keys
    : Object.keys(TYPING.sprites).length;

  const [skip] = useAppSound(SKIP_BUTTON);
  const [playTyping] = useAppSound(TYPING, {
    volume: options.volume * 0.2,
  });

  const redPixelify = getFontClass().includes("pixelify") ? 0.3 : 0;
  const spacingClass = isSmallScreen
    ? `-tracking-[${0.5 - redPixelify}rem]`
    : `-tracking-[${0.75 - redPixelify}rem]`;

  const items = useMemo(() => {
    if ("text" in props) return [{ text: props.text }];
    if ("categories" in props)
      return props.categories.flatMap((cat) => [
        { text: `${cat.category}: `, className: "nes-text is-success" },
        { text: cat.technologies.join(" | ") },
      ]);
    if ("list" in props) return props.list.map((line) => ({ text: line }));
    return [];
  }, [props]);

  useEffect(() => {
    if (!isTyping || itemIndex >= items.length) return;

    const currentItem = items[itemIndex];

    const timer = setTimeout(() => {
      if (charIndex < currentItem.text.length) {
        const char = currentItem.text[charIndex];
        if (char === " ") {
          playTyping({ id: "space" });
        } else {
          const randomKey = Math.floor(Math.random() * sprite_len) + 1;
          playTyping({ id: String(randomKey) });
        }
        setCharIndex((prev) => prev + 1);
      } else if (itemIndex < items.length - 1) {
        setItemIndex((prev) => prev + 1);
        setCharIndex(0);
      } else {
        playTyping({ id: "end" });
        setIsTyping(false);
      }
    }, getSpeedRef.current());

    return () => clearTimeout(timer);
  }, [charIndex, itemIndex, isTyping, items, playTyping, sprite_len]);

  useEffect(() => {
    if (isSkipped) {
      setItemIndex(items.length - 1);
      setCharIndex(items[items.length - 1]?.text.length || 0);
      setIsTyping(false);
    }
  }, [isSkipped, items]);

  const handleSkip = () => {
    skip();
    if (onSkip) {
      onSkip();
    } else {
      setItemIndex(items.length - 1);
      setCharIndex(items[items.length - 1]?.text.length || 0);
      setIsTyping(false);
    }
  };

  if (!items.length) return null;

  return (
    <div className="relative whitespace-pre-wrap">
      {items.slice(0, itemIndex).map((item, idx) => (
        <p key={idx} className={item.className}>
          {"list" in props ? (
            <span className={spacingClass}>{"<>"}</span>
          ) : null}
          {` ${item.text}`}
        </p>
      ))}
      {itemIndex < items.length && (
        <p className={items[itemIndex].className}>
          {"list" in props ? (
            <span className={spacingClass}>{"<>"}</span>
          ) : null}
          {` ${items[itemIndex].text.slice(0, charIndex)}`}
        </p>
      )}
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
