import React from "react";

const Boards = () => {
  return (
    <>
      <div className="bg-white shadow-sm rounded-md mt-5 p-2 ">
        <div className="flex justify-between h-[45px] border-b border-gray-200 items-center ">
          <h3>Boards</h3>
          <button className="bg-[#2D77B6] px-3 py-1 text-white rounded-md font-medium">
            + New Board
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <div className="flex gap-4 items-center">
            <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
              <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                <p className="text-xs">M</p>
              </div>
            </div>
            <p  className="text-blue-400">Angola Production</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
              <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                <p className="text-xs">M</p>
              </div>
            </div>
            <p className="text-blue-400">Attendance Reporting</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
              <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                <p className="text-xs">M</p>
              </div>
            </div>
            <p  className="text-blue-400">CHIVA RYH</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boards;
