import type React from "react";
import { useEffect, useState } from "react";
import { POP_CLICK, REGISTER } from "../../core/config/sounds";
import { useAppSound } from "../../core/hooks/use-app-sound";
import { aboutData } from "../../core/config/about";
import { SoundIcon } from "../ui/icons/Sound";
import BatteryIcon from "../ui/icons/Battery";

export const TopBar: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [pop1] = useAppSound(POP_CLICK[0]);
  const [pop2] = useAppSound(POP_CLICK[1]);
  const [pop3] = useAppSound(POP_CLICK[2]);
  const [register] = useAppSound(REGISTER);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#212529] text-white p-2 flex justify-between items-center z-50 border-b-4 border-gray-600">
      <span>
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </span>
      <div className="flex items-center space-x-2 sm:space-x-4 mr-0!">
        <a
          href={aboutData.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => register()}
        >
          <i className="nes-icon nes-text-file-icon -mt-2 scale-90 pr-2 right-1"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/krshsl"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pop1()}
        >
          <i className="nes-icon linkedin"></i>
        </a>
        <a
          href="https://github.com/krshsl"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pop2()}
        >
          <i className="nes-icon github"></i>
        </a>
        <a
          href={`mailto:krishna.sl@rutgers.edu?subject=Connecting%20via%20Portfolio&body=Hi%20Krishna,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%20and%20talk%20regarding...%0D%0A%0D%0ARegards,%0D%0A`}
          onClick={() => pop3()}
        >
          <i className="nes-icon gmail"></i>
        </a>
        <div className="outline-none! flex-shrink-0">
          <SoundIcon is_persist={true} />
        </div>
        <div className="flex-shrink-0">
          <BatteryIcon />
        </div>
      </div>
    </div>
  );
};
