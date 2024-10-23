import React from "react";
import img from "../../assets/img.jpg";
const Contact = () => {
  return (
    <>
      <div className="bg-white shadow-sm rounded-md mt-5 p-2 ">
        <div className="flex justify-between h-[45px] items-center border-b border-gray-200 ">
          <h3 className="text-blue-500">15 Contacts</h3>
          <button className="bg-[#2D77B6] px-3 py-1 text-white rounded-md font-medium">
            + New Contact
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <div className="w-[40px] h-[40px] flex gap-4">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover" />
            <p>Hery</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
              <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                <p className="text-xs">M</p>
              </div>
            </div>
            <p>Siyamadit</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
              <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                <p className="text-xs">M</p>
              </div>
            </div>
            <p>Claire</p>
          </div>
          <p className="text-right text-blue-400">Show All</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
