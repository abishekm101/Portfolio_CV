import React from "react";
import html from "../assets/html-logo.png";
import css from "../assets/css-logo.png";
import js from "../assets/js-logo.png";
import react from "../assets/react-logo.png";
import redux from "../assets/redux-logo.png";
import github from "../assets/github-mark-white.png";
import tailwind from "../assets/tailwind-logo.png";

const Skills = () => {
  return (
    <div
      name="skills" id="skills"
      className="bg-[#0a192f] md:bg-[#0a192f] text-gray-300 pb-20 w-full h-screen"
    >
      {/* Container */}
      <div className=" mx-auto  bg-[#0a192f]  w-full max-w-[1000px] md:p-24">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 text-center place-content-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 h-12 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 h-12 mx-auto" src={css} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 h-12 mx-auto" src={js} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 h-12 mx-auto" src={react} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 h-12 mx-auto" src={redux} alt="HTML icon" />
            <p className="my-4">REDUX</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 h-12  mx-auto" src={github} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-14 h-12 mx-auto h-w-14"
              src={tailwind}
              alt="HTML icon"
            />
            <p className="my-4">TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
