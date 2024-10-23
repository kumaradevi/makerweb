import React from "react";
import Linkedin from "../icons/Linkedin";
import YouTube from "../icons/Youtube";
import Twitter from "../icons/Twitter";
import Camera from "../icons/Camera";
import Facebook from "../icons/Facebook";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[400px]">
        <div className="mx-auto flex flex-col md:flex-row justify-between p-2 ">
          <div>
            <h3 className="mb-2 text-2xl bg-gradient-to-r from-pink-500  via-red-500 to-yellow-500 bg-clip-text text-transparent font-medium">
              Makerble
            </h3>
            <ul className="text-sm text-gray-500 flex flex-col gap-3">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Cookies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Organizations</h3>
            <ul className="text-sm text-gray-500 flex flex-col gap-3">
              <li>Control Panel</li>
              <li>Discover the Marketplace</li>
              <li>Create Organization Account</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Your Account</h3>
            <ul className="text-sm text-gray-500 flex flex-col gap-3">
              <li>Library</li>
              <li>Profile</li>
              <li>Projects</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Explore</h3>
            <ul className="text-sm text-gray-500 flex flex-col gap-3">
              <li>Metrics</li>
              <li>Networks</li>
              <li>Strategies</li>
              <li>Projects</li>
              <li>Studies</li>
              <li>Surveys</li>
              <li>Tips</li>
              <li>Vouchers</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-2">
              Follow the Makerble Story
            </h2>
            <div className="flex gap-2 items-center">
              <div className="w-[35px] h-[35px] rounded-full bg-blue-600 flex justify-center items-center text-white ">
                <Linkedin />
              </div>
              <div className="w-[35px] h-[35px] rounded-full bg-red-600 flex justify-center items-center text-white ">
                <YouTube />
              </div>
              <div className="w-[35px] h-[35px] rounded-full bg-[#BE0564] flex justify-center items-center text-white ">
                <Camera />
              </div>
              <div className="w-[35px] h-[35px] rounded-full bg-[#24628F] flex justify-center items-center text-white">
                <Twitter />
              </div>
              <div className="w-[35px] h-[35px] rounded-full bg-[#058B7A] flex justify-center items-center text-white">
                <Facebook />
              </div>
            </div>
          </div>
        </div>

        <div className="p-3" >
          <h6>Contact Us:</h6>
          <div className="flex gap-16 mt-4 text-gray-600">
            <div className="flex gap-3 items-center">
              <Mail />
              <p>Contact@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
                <Phone/>
              <p>020 8123 6253</p>
            </div>
          </div>
          <span className="text-gray-400 ">&copy;makerble 2023</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
