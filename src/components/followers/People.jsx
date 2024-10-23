import React from "react";
import img from "../../assets/img.jpg"
const People = () => {
  return (
    <>
      <div className="bg-white shadow-sm mt-4 h-[170px] rounded-md p-3">
        <div className="h-[30px] border-b border-gray-200">
          <h6 className="text-blue-400">People You Follow</h6>
        </div>
        <div className="flex gap-4 items-center mt-8">
          
          <div className="w-[40px] h-[40px] ">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover rounded-full"/>
          </div>
          <div className="w-[40px] h-[40px] ">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover rounded-full"/>
          </div>
          <div className="w-[40px] h-[40px] ">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover rounded-full"/>
          </div>
          <div className="w-[40px] h-[40px] ">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover rounded-full"/>
          </div>
          <div className="w-[40px] h-[40px] ">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover rounded-full"/>
          </div>
          <div className="w-[40px] h-[40px] ">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover rounded-full"/>
          </div>
          
        </div>
        <p className="text-right text-blue-500 mt-4">Show All</p>
      </div>
    </>
  );
};

export default People;
