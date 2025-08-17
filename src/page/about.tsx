import { useNavigate } from "react-router";
import { aboutData } from "../constants/about";
import type React from "react";
import { CloseButton } from "../components/closeButton";
import type { SpeedOptions } from "../interfaces/options";
import { Typewriter } from "../components/typewriter";

export const TrainerCard: React.FC<{ textSpeed: SpeedOptions }> = ({
  textSpeed,
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative nes-container with-title is-dark is-rounded bg-pattern-block">
      <p className="title">TRAINER'S CARD</p>
      <CloseButton
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="bg-[#f7941d] p-4 rounded-lg text-black mt-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="nes-container is-dark with-title mt-4 bg-pattern-dotted">
            <p className="title text-white">Photo</p>
            <img
              src={aboutData.avatar}
              alt="Avatar"
              className="w-22 h-22 object-cover pixelated-image"
            />
          </div>
          <div className="flex-grow w-full space-y-2">
            <div className="bg-white py-3 px-2 nes-field flex justify-between items-center">
              <label htmlFor="name_field">NAME</label>
              <span id="name_field">{aboutData.name}</span>
            </div>
            <div className="bg-white py-3 px-2 nes-field flex justify-between items-center">
              <label htmlFor="title_field">TITLE</label>
              <span id="title_field">{aboutData.title}</span>
            </div>
          </div>
        </div>
        <div className="nes-container is-dark with-title mt-4 bg-pattern-dotted">
          <p className="title">Bio</p>
          <div className="text-sm min-h-[6rem] overflow-y-auto">
            <Typewriter text={aboutData.bio} speed={textSpeed} />
          </div>
        </div>
      </div>
    </div>
  );
};
