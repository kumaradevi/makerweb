import React, { useState } from "react";
import Settings from "../icons/Settings";
import img from "../../assets/img.jpg";
import Notes from "../icons/Notes";
import Hearts from "../icons/Hearts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PostFeed = () => {
  const [postData,setPostData]=useState([]);
 const[data,setData]=useState("")
 const[like,setLike]=useState(0)
 const[colorChange,setColorChange]=useState(false)
 const[error,setError]=useState({})
 const handleLikes=()=>{
    setLike((prevlike)=>prevlike+1)
    setColorChange(true)
 }
  const handleChange=(e)=>{
    setData(e.target.value)
  }
  const notify = () => toast("Your post has been submitted!");

  //post story and comments
  const handlePost=()=>{
    const isValid=Validation();
    if(isValid){
        setPostData([...postData,data]);
        notify()
        setData("");
        setError({})
    }
  
  }
  //validation
  const Validation=()=>{
    let newError={}
    if(!data){
  newError.data="story is not empty"
    }
    else if(!validData(data)){
 newError.data="story must be more than 3 characters"
    }
    setError(newError)
    return Object.keys(newError).length==0;
  }
  const validData=(data)=>{
     const reqRegex=/^.{3,}$/
     return reqRegex.test(data)
  }
  console.log("your data is",postData)
  return (
    <div className="bg-white shadow-sm rounded-md mt-5 p-2 ">
      
      <div className=" flex  justify-between px-3 ">
        
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
      <div className="mt-4">
        <h4 className="text-lg font-medium">Comments:</h4>
        {postData.length > 0 ? (
          <ul className="mt-2">
            {postData.map((post, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {post}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to post!</p>
        )}
      </div>
      <div className="flex justify-between h-[22px] border-b border-gray-200">
        <div className="text-red-600 cursor-pointer" style={{color:colorChange?"red":"gray"}}onClick={handleLikes}>
          <Hearts />
        </div>
        <div className="flex text-sm text-gray-400 gap-4">
          <p>{postData.length} comments</p>
          <p>{like} favourites</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 px-3 ">
        <div className="w-[30px] h-[30px]">
          <img src={img} alt="" className="w[100%] h-[100%] object-cover rounded-md"/>
        </div>
        <div className="w-[79%] ">
          <input type="text" placeholder="write a comment" className="outline-none border border-black w-[100%] rounded-full px-3 py-2" value={data} onChange={handleChange}/>
          {error&& <div className="text-red-600 text-sm">{error.data}</div>}
        </div>
       
        <div>
          <button className="px-3 py-2 bg-red-700 text-white" onClick={handlePost}>post</button>
        </div>
      </div>
    <ToastContainer/>
    </div>
  );
};

export default PostFeed;
