import React from "react";

const Progress = () => {
  return (
    <>
      <div className="bg-white shadow-sm p-3 mt-4 rounded-md h-[250px]">
        <div className="flex justify-between h-[40px] border-b border-gray-200 ">
          <h6>Personal Progress</h6>
          <p>Go to Board</p>
        </div>
        <div className="mt-3 flex justify-between ">
            <div className="w-[40px] h-[40px] bg-[#E66B41] rounded-full shadow-md"></div>
           <div className="w-[200px]">
           <p className="text-xs text-gray-500 mb-1">Are either of your parents living?</p>
            <div className="w-[100%] h-[14px] bg-gray-100 rounded-sm shadow-md ">
               
                <div className="bg-[#226C61] w-[70%] h-full rounded-sm text-white flex justify-center items-center text-xs shadow-md">7</div>
            </div>
           </div>
            <div className="bg-black text-white px-2 py-1">+</div>
        </div>
        <div className="mt-3 flex justify-between ">
            <div className="w-[40px] h-[40px] bg-[#3596D6] rounded-full shadow-md"></div>
           <div className="w-[200px]">
           <p className="text-xs text-gray-500 mb-1">Do you belong to any groups in whi...</p>
            <div className="w-[100%] h-[14px] bg-gray-100 rounded-sm shadow-md ">
               
                <div className="bg-[#3596D6] w-[60%] h-full rounded-sm text-white flex justify-center items-center text-xs shadow-md">6</div>
            </div>
           </div>
            <div className="bg-black text-white px-2 py-1">+</div>
        </div>
        <div className="mt-3 flex justify-between ">
            <div className="w-[40px] h-[40px] bg-[#F7299B] rounded-full shadow-md"></div>
           <div>
           <p className="text-xs text-gray-500 mb-1">1-2-1 Events</p>
            <div className="w-[200px] h-[14px] bg-gray-100 rounded-sm shadow-md ">
               
                <div className="bg-[#F92915] w-[27%] h-full rounded-sm text-white flex justify-center items-center text-xs shadow-md">27</div>
            </div>
           </div>
            <div className="bg-black text-white px-2 py-1">+</div>
        </div>
        <p className="text-right text-blue-500 mt-3">show All</p>
      </div>
    </>
  );
};

export default Progress;
