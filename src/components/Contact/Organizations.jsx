import React from "react";
import img from "../../assets/img.jpg";
import Settings from "../icons/Settings";
const Organizations = () => {
  return (
    <>
      <div className="bg-white shadow-sm rounded-md mt-5 p-2 ">
        <div className="flex justify-between h-[45px] items-center border-b border-gray-200 ">
          <h3 className="text-blue-500">Organizations</h3>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="w-[50px] h-[50px]">
                <img
                  src={img}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-blue-500 text-sm">An Organization Demo</p>
                <p className="text-gray-500">Admin</p>
              </div>
            </div>
            <div className="text-[#24628F]">
              <Settings />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="w-[70px] h-[50px]">
                <img
                  src={img}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-blue-500 text-sm">
                  A Showcase International Development Education Charity
                </p>
                <p className="text-gray-500">Member</p>
              </div>
            </div>
            <div className="text-[#24628F]">
              <Settings />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="w-[50px] h-[50px] ">
                <img
                  src={img}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-blue-500 text-sm">Oak Tree Secondary School</p>
                <p className="text-gray-500">Admin</p>
              </div>
            </div>
            <div className="text-[#24628F]">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organizations;
