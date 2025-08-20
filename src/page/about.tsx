import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { aboutData } from "../constants/about";
import { CloseButton } from "../components/closebutton";
import { Typewriter } from "../components/typewriter";
import { UniversityDetails } from "../components/university";
import { useAppSound } from "../hooks/useAppSound";
import { COIN, REGISTER, POP_CLICK } from "../constants/sounds";

export const About: React.FC = () => {
  const navigate = useNavigate();
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [pop0] = useAppSound(POP_CLICK[0]);
  const [register] = useAppSound(REGISTER);
  const [coin] = useAppSound(COIN, { interrupt: false });

  return (
    <>
      <p className="title">PLAYER INFO</p>
      {showEducation ? (
        <div className="nes-container with-title is-dark is-rounded p-4">
          <p className="title">Education</p>
          <CloseButton
            onClick={() => {
              pop0();
              setShowEducation(false);
            }}
          />
          <UniversityDetails items={aboutData.education} />
        </div>
      ) : (
        <>
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
                <div className="bg-white py-3 px-2 nes-field flex justify-between items-center gap-8.5">
                  <label htmlFor="name_field">NAME</label>
                  <span id="name_field">{aboutData.name}</span>
                </div>
                <div className="bg-white py-3 px-2 nes-field flex justify-between items-center gap-6">
                  <label htmlFor="title_field">TITLE</label>
                  <span id="title_field">{aboutData.title}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 items-stretch text-sm! sm:text-lg!">
                  <button
                    type="button"
                    className="nes-badge flex-1 flex items-center justify-center outline-0! min-w-20"
                    onClick={() => {
                      pop0();
                      setShowSkills(!showSkills);
                    }}
                  >
                    <span className="is-warning right-0 min-w-full">
                      {showSkills ? "Bio" : "Skills"}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="nes-badge is-success flex-1 flex items-center justify-center outline-0! min-w-30"
                    onClick={() => {
                      pop0();
                      setShowEducation(true);
                    }}
                  >
                    <span className="is-primary right-0 min-w-full">
                      Education
                    </span>
                  </button>
                  <a
                    href={aboutData.resumeLink}
                    download
                    target="_blank"
                    className="nes-badge is-warning is-icon flex-1 flex items-center justify-center outline-0! min-w-30"
                    onClick={() => register()}
                    onMouseEnter={() => coin()}
                  >
                    <span className="is-warning">
                      <i className="nes-icon is-coin is-small"></i>
                    </span>
                    <span className="is-success min-w-full">Resume</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="nes-container with-title mt-4 moving-squares--orange">
              <p className="title">{showSkills ? "Skills" : "Bio"}</p>
              <div className="min-h-[6rem]  text-white text-sm! sm:text-sm!">
                {showSkills ? (
                  <Typewriter
                    key={aboutData.id}
                    categories={aboutData.skills}
                  />
                ) : (
                  <Typewriter key={aboutData.id + 1} text={aboutData.bio} />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
