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
import PricingCard from "@/app/Components/PriceCard";
import PriceCard from "@/app/Components/PriceCard";
const page = () => {
  const Starter = [
    "Basic Ai Chatbot Functionality",
    "50 Chatbot Interactions",
    "Limited Intergration",
    "Preset Chatbot templates",
    "Commuity Support",
    "Basic analytics Dashboards",
    "Standard respionsive speed",
    "Email Support",
    "1 Chatbot Instance",
  ];

  const Professional = [
    "5,000 chatbot intergration",
    "Multi-channel intergration",
    "Custom Ai training and response",
    "Advanced Analytics & insights",
    "Community Support",
    "Email Support",
    "Faster response speed",
    "3 Chatbot intergration",
    "Preset Chatbot templates",
  ];

  const Buisiness = [
    "Unlimited Chatbot integration",
    "Omini Channel Support",
    "AI Powered lead generation and Intergration",
    "Team Collaboration and multi-agent Support",
    "Priority AI response speed",
    "API access for custom intergration",
    "Dedicated Amount manager",
    "10 AI bot instances",
  ];
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
          className="md:mt-96 py-10"
        >
          <div>
            <h2 className="md:text-3xl text-2xl p-3 font-bold md:w-[55%] leading-12 flex mx-auto text-center mb-3">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          id="pricing"
          className="max-w-6xl mx-auto flex md:flex-row gap-10 justify-center flex-col items-center w-full"
        >
          <PriceCard
            planData={Starter}
            name="Starter"
            price="Free"
            className="md:w-[30%] flex items-start flex-col h-[34rem] w-[80%] shadow bg-[#E5E7EB] rounded-xl p-4"
          />
          <PriceCard
            planData={Professional}
            price="$25"
            name="Professional"
            className="md:w-[30%] h-[34rem] w-[80%] bg-[#111827] text-gray-300 shadow rounded-xl p-4"
          />
          <PriceCard
            planData={Buisiness}
            price="$45"
            name="Buisiness"
            className="md:w-[30%] h-[34rem] w-[80%] shadow bg-[#E5E7EB] rounded-xl p-4"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
