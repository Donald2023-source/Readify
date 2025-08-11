import React from "react";
import Button from "./Button";
import Image from "next/image";
import chrome from "@/public/Chrome.png";
import product from "@/public/product.png"
import { FaStar } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="h-full max-w-6xl flex items-center flex-col pt-10">
      <div className="flex items-center w-[55%] justify-center mx-auto flex-col gap-4 text-center">
        <h2 className="text-4xl font-bold leading-12">
          Transform Your Conversions With{" "}
          <span className="text-[#0157FF]">Readify AI</span>
        </h2>
      </div>

      <div>
        <p className="w-[70%] text-gray-400 text-center mx-auto py-5  flex leading-8">
          Discover the power of Readify - your ultimate personal AI document
          summarizer, designed to enhance communication and supercharge your
          productivity.
        </p>
        <Button
          className="block md:flex items-center justify-center mx-auto"
          text="Try 7-day free trial"
        />
      </div>

      <div className="flex items-center justify-center gap-20 mt-10">
        <div className="flex items-center gap-4 mt-10 mx-auto">
          <Image src={chrome} alt="Chrome" />
          <div className="flex flex-col items-left">
            <div className="flex items-center gap-2 font-semibold">
              <h2>4.9 / 5.0</h2>
              <div>
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
              </div>
            </div>
            <p className=" text-gray-700">On chrome store</p>
          </div>
        </div>

         <div className="flex items-center gap-4 mt-10 mx-auto">
          <Image src={product} alt="product" />
          <div className="flex flex-col items-left">
            <div className="flex items-center gap-2 font-semibold">
              <h2>4.6 / 5.0</h2>
              <div>
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
                <FaStar className="text-yellow-400 inline" />
              </div>
            </div>
            <p className=" text-gray-700">On Product Hunt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
