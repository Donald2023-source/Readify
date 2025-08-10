import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-full max-w-6xl flex items-center flex-col pt-10">
      <div className="flex items-center w-[55%] justify-center mx-auto flex-col gap-4 text-center">
        <h2 className="text-4xl font-bold leading-12">
          Transform Your Conversions With {" "}
          <span className="text-[#0157FF]">Readify AI</span>
        </h2> 
      </div>

      <div>
        <p className="w-[70%] text-gray-400 text-center mx-auto py-5  flex leading-8">
          Discover the power of Readify - your ultimate personal AI document
          summarizer, designed to enhance communication and supercharge your
          productivity.
        </p>
        <Button text="Try 7-day Free trial" />
      </div>
    </div>
  );
};

export default Hero;
