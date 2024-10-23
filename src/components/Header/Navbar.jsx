import React from "react";
import Notifications from "../icons/Notifications";
import img from "../../assets/img.jpg"
import Envelope from "../icons/Envelope";
import Bolt from "../icons/Bolt";
import Bars from "../icons/Bars";
import Star from "../icons/Star";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-5 shadow-md p-2 bg-white">
        <div className="flex gap-8 justify-center items-center">
          {/* logo */}
          <div><p>logo</p></div>
          <div className="lg:flex justify-center items-center gap-5 hidden ">
            <ul className="flex justify-center items-center gap-5">
              <li>My Apps</li>
              <li>Home</li>
              <li>Explore</li>
            </ul>
            <div className="border rounded-md px-3 py-2">
             
              <input
                type="search"
                name=""
                id=""
                placeholder="search for contacts and projects" className="bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
         {/* right side */}
        <div className="lg:flex items-center gap-5 hidden">
          <div className="flex gap-2 items-center">
            {/* bell icon */}
            <Notifications/>
            <div className="bg-gray-500 px-2 py-1 rounded-lg text-white w-[23px] h-[23px] flex justify-center items-center">11</div>
          </div>
          <div>
            <Envelope/>
          </div>
          <div  className="flex gap-2 items-center">
            <Bolt/>
            <div className="bg-gray-500 px-2 py-1 rounded-lg text-white w-[23px] h-[23px] flex justify-center items-center">14</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[35px] h-[35px]">
              <img src={img} alt="" className="w-full h-full object-cover rounded-md"/>
            </div>
            <h6>Yael Adamson-Brown</h6>
          </div>
          <div>
            <button className="bg-red-500 text-white px-3 py-1 font-medium rounded-md"> + Create</button>
          </div>
          <div>
            <button className="border  px-3 py-1 font-medium rounded-md"><Star/> Upgrade</button>
          </div>
          <div>
            <button className="border  px-3 py-1 font-medium rounded-md"><Bars/> More</button>
          </div>
        </div>
       <div className="lg:hidden"> <Bars/></div>
      </div>
    </>
  );
};

export default Navbar;
