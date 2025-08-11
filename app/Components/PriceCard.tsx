import React from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  planData: string[];
  name: string;
  price: string;
}
const PriceCard = ({ className, planData, name, price }: CardProps) => {
  return (
    <div className={(twMerge("py-2"), className)}>
      <div>
        <p className="font-bold underline">{name}</p>
        <h2 className="font-bold text-xl">{price}</h2>
        <p className="text-gray-500 py-2">
          Perfect For individuals Just starting
        </p>
        {planData.map((item) => (
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 font-bold" />
            <p className="font-sans py-2 text-gray-600">{item}</p>
          </div>
        ))}
      </div>
      <Button text={"Try the 7-day Free Trial"} />
    </div>
  );
};

export default PriceCard;
