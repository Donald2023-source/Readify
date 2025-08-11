"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import chrome from "@/public/Chrome.png";
import product from "@/public/product.png";
import { FaStar } from "react-icons/fa6";
import heroImg from "@/public/Hero-image 1.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="h-full max-w-6xl flex items-center flex-col pt-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center w-[95%] mt-6 mb-1  md:w-[50%] justify-center mx-auto flex-col gap-4 text-center"
      >
        <h2 className="md:text-4xl text-3xl font-bold leading-12">
          Transform Your Conversions{" "}
          <span className="text-[#0157FF]">Readify AI</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="md:w-[70%] md:text-lg text-sm w-[85%] text-gray-400 text-center mx-auto py-5  flex leading-8">
          Discover the power of Readify - your ultimate personal AI document
          summarizer, designed to enhance communication and supercharge your
          productivity.
        </p>
        <Button
          className="block md:flex items-center justify-center mx-auto"
          text="Try 7-day free trial"
        />
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center mt-4 px-4 gap-12 md:gap-20"
      >
        <div className="flex items-center gap-4 mt-6 mx-auto">
          <Image
            className="md:h-fit md:w-fit h-10 w-10"
            src={chrome}
            alt="Chrome"
          />
          <div className="flex flex-col items-left">
            <div className="flex items-center md:gap-2 gap-1 font-semibold">
              <h2 className="text-sm ">4.9/5.0</h2>
              <div className="text-xs">
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
              </div>
            </div>
            <p className=" text-gray-700 text-xs py-1 md:text-lg">
              On chrome store
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6 mx-auto">
          <Image
            className="md:h-fit md:w-fit h-10 w-10"
            src={product}
            alt="product"
          />
          <div className="flex flex-col items-left">
            <div className="flex items-center md:gap-2 gap-1 font-semibold">
              <h2 className="text-sm">4.6/5.0</h2>
              <div className="text-xs">
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
              </div>
            </div>
            <p className=" text-gray-700 text-xs py-1 md:text-lg">
              On Product Hunt
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={heroImg}
          alt="Hero Image"
          className="md:my-10 w-[80%] mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
