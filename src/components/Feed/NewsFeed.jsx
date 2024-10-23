import React, { useState } from "react";
import Settings from "../icons/Settings";
import img from "../../assets/img.jpg";
import Notes from "../icons/Notes";
import Hearts from "../icons/Hearts";

const NewsFeed = () => {
  const [postData,setPostData]=useState("");
 const[data,setData]=useState("")
  const handleChange=(e)=>{
    setData(e.target.value)
  }

  const handlePost=()=>{
    setPostData(data)
  }
  console.log(postData)
  return (
    <div className="bg-white shadow-sm rounded-md mt-5 p-2 ">
      <div className="h-[30px] border-b border-gray-200"><h3>NewsFeed</h3></div>
      <div className=" flex  justify-between px-3 mt-3">
        
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="w-[60px] h-[60px]">
            <img
              src={img}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-md"
            />
          </div>
          <div className="">
            <h6 className="text-blue-500 text-xl">Yael Adamson-Brown</h6>
            <p className="mt-1 text-gray-600 ">
              Actively happened on 4th Dec 2023
            </p>
            <p className="mt-1 text-gray-600 ">
              First posted on 16:13 on 11th December 2023
            </p>
            <p className="mt-1 text-gray-600 ">
              Last edited on 16:13 on 11th December 2023
            </p>
            <div className="bg-[#3595D5] rounded-full text-white px-3 py-1 text-sm mt-3 font-medium">
              <p className="flex gap-1 items-center">
                <Notes />
                Stories-spreadsheet-import-at-10-43-on-11th-december-2023{" "}
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-1 text-gray-600 ">Edited 1 day ago</p>
        </div>
        <div className="text-[#3595D5]">
          <Settings />
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        New Update by Yael Adamson-Brown working on the Using footbal to teach
        life skills to children for An organisation Demo with
      </p>
      <div className="flex justify-center items-center mt-2">
        <button className="bg-[#5CB85C] text-white px-3 py-2 rounded-md">
          Expand Story
        </button>
      </div>

      <div className="flex justify-between h-[22px] border-b border-gray-200">
        <div className="text-red-600">
          <Hearts />
        </div>
        <div className="flex text-sm text-gray-400 gap-4">
          <p>0 comments</p>
          <p>0 favourites</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 px-3 ">
        <div className="w-[30px] h-[30px]">
          <img src={img} alt="" className="w[100%] h-[100%] object-cover rounded-md"/>
        </div>
        <div className="border border-black w-[75%] rounded-full px-3 py-2">
          <input type="text" placeholder="write a comment" className="outline-none border-none"  onChange={handleChange}/>
        </div>
        <div>
          <button className="px-3 py-2 bg-red-700 text-white" onClick={handlePost}>post</button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
