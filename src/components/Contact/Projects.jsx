import React from "react";
import Settings from "../icons/Settings";
const Projects = () => {
  return (
    <>
      <div className="bg-white shadow-sm rounded-md mt-5 p-2 ">
        <div className="flex justify-between h-[45px] items-center border-b border-gray-200 ">
          <h3 className="text-blue-500">Projects</h3>
          <button className="bg-[#2D77B6] px-3 py-1 text-white rounded-md font-medium">
            + New Project
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
                <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                  <p className="text-xs">M</p>
                </div>
              </div>
              <p>4359 test</p>
            </div>
            <div className="text-[#24628F]">
              <Settings/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
                <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                  <p className="text-xs">M</p>
                </div>
              </div>
              <p>a test 5146</p>
            </div>
            <div className="text-[#24628F]">
              <Settings/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
                <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                  <p className="text-xs">M</p>
                </div>
              </div>
              <p>A Training Project</p>
            </div>
            <div className="text-[#24628F]">
              <Settings/>
            </div>
          </div>
        </div>
        <p className="text-right text-blue-400 mt-4">Show All</p>
      </div>
    </>
  );
};

export default Projects;
