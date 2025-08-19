import type React from "react";
import { useEffect, useState } from "react";
import BatteryIcon from "./battery";
import useSound from "use-sound";
import { POP_CLICK } from "../constants/sounds";

export const TopBar: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [pop3] = useSound(POP_CLICK[0]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#212529] text-white p-2 flex justify-between items-center z-50 border-b-4 border-gray-600 cursor">
      <span>
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </span>
      <div className="flex items-center space-x-4 mr-1">
        <a
          href="https://www.linkedin.com/in/krshsl"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pop3()}
        >
          <i className="nes-icon linkedin"></i>
        </a>
        <a
          href="https://github.com/krshsl"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pop3()}
        >
          <i className="nes-icon github"></i>
        </a>
        <a href="mailto:krishna.sl@rutgers.edu" onClick={() => pop3()}>
          <i className="nes-icon gmail"></i>
        </a>
        <BatteryIcon />
      </div>
    </div>
  );
};
