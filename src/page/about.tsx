import type React from "react";
import { useNavigate } from "react-router";

import { aboutData } from "../constants/about";
import { CloseButton } from "../components/closebutton";
import { Typewriter } from "../components/typewriter";

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="title">TRAINER'S CARD</p>
      <CloseButton
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="bg-[#f7941d] p-4 rounded-lg text-black mt-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="nes-container with-title mt-4 moving-squares--orange">
            {/*Copyright Nintendo*/}
            <i className="nes-mario"></i>
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
        <div className="nes-container with-title mt-4 moving-squares--orange">
          <p className="title">Bio</p>
          <div className="text-sm min-h-[6rem] overflow-y-auto text-white">
            <Typewriter text={aboutData.bio} />
          </div>
        </div>
      </div>
    </>
  );
};
