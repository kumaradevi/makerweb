import React from "react";
import Settings from "../icons/Settings";
import img from "../../assets/img.jpg";
import Notes from "../icons/Notes";
import Hearts from "../icons/Hearts";

const Respondent = () => {
  return (
    <div className="bg-white shadow-sm rounded-md mt-5 p-2">
      <div className="flex  justify-between px-3">
        <div className="flex gap-2">
         
          <div className="border-2 rounded-t-md rounded-b-3xl border-black w-[40px] h-[40px] flex justify-center items-center">
                <div className="w-[20px] h-[20px] border-2 border-dotted border-red-500 rounded-full flex justify-center items-center ">
                  <p className="text-xs">M</p>
                </div>
              </div>
         
          <div className="">
            <h6 className="text-blue-500 text-xl">Respondent</h6>
            
            <p className="mt-1 text-gray-600 ">
              First posted on 16:13 on 11th December 2023
            </p>
            <p className="mt-1 text-gray-600 ">
              Last edited on 16:13 on 11th December 2023
            </p>
            <div className="bg-pink-800 rounded-full text-white px-3 py-1 text-sm mt-3 font-medium w-[150px]">
              <p className="flex gap-1 items-center">
                <Notes />
                Weekly Register
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-1 text-gray-600 ">Edited 5 days ago</p>
        </div>
        <div className="text-[#3595D5]">
          <Settings />
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
       <span className="text-blue-400"> New Update</span> by <span className="text-blue-400">Respondent</span> working at Money Management starting
       at 14:30 on 28th November 2023 on <span className="text-blue-400">Using football to teach life skills to children</span> 
       for <span className="text-blue-400">an organization demo</span>with <span className="text-blue-400">All Frank</span>
      
      </p>
      <div className="flex justify-center items-center mt-2">
        <button className="bg-[#5CB85C] text-white px-3 py-2 rounded-md">
          Expand Story
        </button>
      </div>
 <p>yes</p>
      <div className="flex justify-between h-[22px] border-b border-gray-200">
        <div className="text-red-600">
          <Hearts />
        </div>
        <div className="flex text-sm text-gray-400 gap-4">
          <p>0 comments</p>
          <p>0 favourites</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 px-3">
        <div className="w-[30px] h-[30px]">
          <img src={img} alt="" className="w[100%] h-[100%] object-cover rounded-md"/>
        </div>
        <div className="border border-black w-[75%] rounded-full px-3 py-2">
          <input type="text" placeholder="write a comment" className="outline-none border-none"/>
        </div>
        <div>
          <button className="px-3 py-2 bg-red-700 text-white">post</button>
        </div>
      </div>
    </div>
  );
};

export default Respondent;
