import React from "react";
import { data } from "../data/data";

const Projects = () => {
  const project = data;
  return (
    <div
      name="projects" id="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 pt-40 md:p-24 flex flex-col w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-4">Check out some of my projects</p>
        </div>

        {/* container for projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-96">
          {/* Gird Item */}
          {project.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "contain",
              }}
              className="md:w-96 h-20 shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href="/" target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-pink-600 text-gray-300 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href="/" target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-pink-600 text-gray-300 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
