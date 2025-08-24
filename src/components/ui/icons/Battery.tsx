import type React from "react";
import type { JSX } from "react";
import { useBattery } from "@uidotdev/usehooks";
import { useState, useEffect, useMemo } from "react";
import { BATTERY, CHARGING } from "../../../core/config/sounds";
import { useAppSound } from "../../../core/hooks/use-app-sound";
import { useOptions } from "../../../core/context/options";

const BatteryIcon: React.FC = () => {
  const { loading, charging, level, supported } = useBattery();
  const { isSmallScreen } = useOptions();
  const [isOpen, setIsOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const soundOptions = useMemo(() => {
    return supported ? {} : { volume: 0 };
  }, [supported]);

  const [chargingOn] = useAppSound(CHARGING.ON, soundOptions);
  const [chargingOff] = useAppSound(CHARGING.OFF, soundOptions);
  const [play, { stop }] = useAppSound(BATTERY);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  useEffect(() => {
    if (supported === false) {
      chargingOn();
      chargingOff();
    }
  }, [supported, chargingOn, chargingOff]);

  useEffect(() => {
    if (supported && !loading) {
      if (charging) {
        chargingOn();
      } else {
        chargingOff();
      }
    }
  }, [charging]);

  const bars = Math.ceil((!loading && level ? level : 0) * 3);

  type PixelatedBarProps = {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
  };

  const PixelatedBar = ({
    x,
    y,
    width,
    height,
    fill,
  }: PixelatedBarProps): JSX.Element => (
    <g fill={fill}>
      <rect x={x + 1} y={y} width={width - 2} height={1} />
      <rect x={x} y={y + 1} width={width} height={height - 2} />
      <rect x={x + 1} y={y + height - 1} width={width - 2} height={1} />
    </g>
  );

  const toggleSmall = () => {
    if (!(isTouch || isSmallScreen)) {
      return;
    }

    if (!isOpen) play();
    else stop();
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="group flex items-center nes-pointer pb-2"
      onMouseEnter={() => !(isTouch || isSmallScreen) && play()}
      onMouseLeave={() => !(isTouch || isSmallScreen) && stop()}
    >
      <button
        onClick={toggleSmall}
        className="!outline-none relative flex items-center"
      >
        <svg
          width="20"
          height="36"
          viewBox="0 0 20 36"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <rect x="6" y="2" width="8" height="2" fill="lightgray" />
          <rect x="2" y="6" width="16" height="2" fill="lightgray" />
          <rect x="2" y="34" width="16" height="2" fill="lightgray" />
          <rect x="0" y="8" width="2" height="26" fill="lightgray" />
          <rect x="18" y="8" width="2" height="26" fill="lightgray" />
          {bars >= 3 && (
            <PixelatedBar x={4} y={10} width={12} height={6} fill="#76c442" />
          )}
          {bars >= 2 && (
            <PixelatedBar
              x={4}
              y={18}
              width={12}
              height={6}
              fill={level && level <= 0.4 ? "#f7d51d" : "#76c442"}
            />
          )}
          {bars >= 1 && (
            <PixelatedBar
              x={4}
              y={26}
              width={12}
              height={6}
              fill={
                level && level <= 0.4
                  ? level <= 0.2
                    ? "#e76e55"
                    : "#f7d51d"
                  : "#76c442"
              }
            />
          )}
        </svg>

        {!supported ? (
          <div className="nes-question-icon absolute left-0.5 mt-1 scale-75"></div>
        ) : (
          charging && (
            <div className="nes-thunder-icon absolute top-1 -translate-x-[17%] scale-90"></div>
          )
        )}
      </button>

      {isTouch || isSmallScreen ? (
        isOpen && (
          <div className="ml-3 text-white mt-1" onClick={toggleSmall}>
            {level ? `${Math.round(level * 100)}%` : "xx%"}
          </div>
        )
      ) : (
        <div className="ml-3 text-xs text-white hidden group-hover:block mt-1">
          {level ? `${Math.round(level * 100)}%` : "xx%"}
        </div>
      )}
    </div>
  );
};

export default BatteryIcon;
