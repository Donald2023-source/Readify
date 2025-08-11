"use client";
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { RiChatAiLine } from "react-icons/ri";
import { LuPencilLine, LuPhoneMissed } from "react-icons/lu";
import { IoMdPaper } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import frame from "@/public/Frame 105.png";
import { motion } from "framer-motion";
import Himage from "@/public/Frame 111.png";
const page = () => {
  return (
    <div>
      <div className="fixed top-0 bg-white/ rounded-xl backdrop-blur-lg left-0 w-full z-10">
        <Navbar />
      </div>
      <div className=" flex flex-col items-center mx-auto justify-center w-full ">
        <div className="h-[95vh] mx-auto my-5 flex items-center flex-col bg-gradient-to-b w-full from-white to to-[#0036a1] from-30%">
          <Hero />
        </div>

        {/* features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          id="features"
          className="md:mt-38 py-5"
        >
          <div>
            <h2 className="md:text-3xl text-2xl py-3 font-bold md:w-[55%] leading-12 flex mx-auto text-center mb-3">
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
          <Image className="my-10" src={frame} alt="frame" />
        </motion.div>

        {/* How it works */}
        <motion.div
          id="how-it-works"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center py-5 justify-center gap-10"
        >
          <h2 className="font-bold text-2xl md:text-4xl text-center mx-auto w-[85%] md:w-[40%]">
            Launch Your AI Assistant In Just 3 Simple Steps
          </h2>

          <Image
            className="md:w-[80%] w-[90%] mx-auto"
            src={Himage}
            alt="How it works"
          />
        </motion.div>

        {/* Pricing */}
      </div>
    </div>
  );
};

export default page;
