import type React from "react";
import type { JSX } from "react";
import { useBattery } from "@uidotdev/usehooks";

const BatteryIcon: React.FC = () => {
  const { loading, level } = useBattery();

  const bars = Math.ceil((!loading && level ? level : 1) * 3);

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
  return (
    <svg
      width="20"
      height="40"
      viewBox="0 0 20 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="2" width="8" height="2" fill="lightgray" />
      <rect x="2" y="6" width="16" height="2" fill="lightgray" />
      <rect x="2" y="34" width="16" height="2" fill="lightgray" />
      <rect x="0" y="8" width="2" height="26" fill="lightgray" />
      <rect x="18" y="8" width="2" height="26" fill="lightgray" />
      {bars >= 3 && (
        <PixelatedBar x={4} y={10} width={12} height={6} fill="green" />
      )}
      {bars >= 2 && (
        <PixelatedBar x={4} y={18} width={12} height={6} fill="green" />
      )}
      {bars >= 1 && (
        <PixelatedBar x={4} y={26} width={12} height={6} fill="green" />
      )}
    </svg>
  );
};

export default BatteryIcon;
