import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { RiChatAiLine } from "react-icons/ri";
import { LuPencilLine, LuPhoneMissed } from "react-icons/lu";
import { IoMdPaper } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col items-center mx-auto justify-center w-full ">
        <div className="h-[95vh] mx-auto my-5 flex items-center flex-col bg-gradient-to-b w-full from-white to to-[#0036a1] from-30%">
          <Hero />
        </div>

        {/* features */}
        <div className="mt-38 py-5">
          <div>
            <h2 className="text-3xl font-bold w-[60%] flex mx-auto text-center mb-3">
              Your All-In-One AI Powered Assitant For Instant Support,
              Productivity & Automation!
            </h2>
            <div className="flex items-center font-semibold text-gray-400 text-sm justify-center gap-10 flex-wrap">
              <span className="flex items-center gap-2 text-[#0157FF] font-bold">
                <RiChatAiLine />
                <p>AI chat</p>
              </span>
              <span className="flex items-center gap-2">
                <LuPencilLine />
                <p>AI Writter</p>
              </span>
              <span className="flex items-center gap-2">
                <IoMdPaper />
                <p>AI Summary</p>
              </span>
              <span className="flex items-center gap-2">
                <FaSearch />
                <p>AI Search</p>
              </span>
              <span className="flex items-center gap-2">
                <RiChatAiLine />
                <p>AI chat</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
