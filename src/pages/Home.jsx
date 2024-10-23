import React from "react";
import Contact from "../components/Contact/Contact";
import Input from "../components/Feed/Input";
import NewsFeed from "../components/Feed/NewsFeed";
import Boards from "../components/Board/Boards";
import Progress from "../components/Board/Progress";
import Tasks from "../components/Board/Tasks";
import Followers from "../components/followers/Followers";
import People from "../components/followers/People";
import Projects from "../components/Contact/Projects";
import Album from "../components/Contact/Album";
import Organizations from "../components/Contact/Organizations";
import Respondent from "../components/Feed/Respondent";
import PostFeed from "../components/Feed/PostFeed";



const Home = () => {
  return (
    <>
      <div className="flex justify-between bg-[#EAEDF1] gap-3">
        {/* left */}

        <div className="flex-shrink  w-1/4 mb-20 hidden lg:block">
          <Contact/>
         <Projects/>
          <Album/>
          <Organizations/>
          <Followers/>
          <People/>
        </div>

        {/* center */}

        <div className="w-[80%] mx-auto flex-grow mb-8">
         <div>
         <Input/>
         <NewsFeed/>
         <PostFeed/>
         <Respondent/>
         <PostFeed/>
        
         </div>
        <div className="flex justify-center items-center mt-12">
        <button className="text-white bg-blue-950 px-3 py-2">Load More...</button>
        </div>
        </div>
        {/* right */}
        <div className="flex-shrink  w-1/4 hidden lg:block">
          <Boards/>
          <Progress/>
          <Tasks/>
         
        </div>
        
      </div>
    </>
  );
};

export default Home;
