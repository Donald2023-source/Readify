'use client'
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  text: string;
}
const Button = ({ className, text }: Props) => {
  return (
    <button
      className={twMerge(
        "bg-[#0157FF] md:hidden py-3 shadow-xl text-sm cursor-pointer hover:scale-95 transition px-7 rounded-full text-white",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
