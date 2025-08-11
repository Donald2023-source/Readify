import React from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
}
const PriceCard = ({ className }: CardProps) => {
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
  return (
    <div className={(twMerge("py-2"), className)}>
      <div>
        <p className="font-bold underline">Starter</p>
        <h2 className="font-bold text-xl">Free</h2>
        <p className="text-gray-500 py-2">
          Perfect For individuals Just starting
        </p>
        {Starter.map((item) => (
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 font-bold" />
            <p className="font-sans text-gray-500">{item}</p>
          </div>
        ))}
      </div>
      <Button text={"Try the 7-day Free Trial"} />
    </div>
  );
};

export default PriceCard;
