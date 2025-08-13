"use client";
import Button from "@/app/Components/Button";
import { GoogleGenAI } from "@google/genai";
import React from "react";

const page = () => {
  const chatBot = async () => {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "When i give you something, and there's probably a spelling error. Check for a similar word closest to that spelling. Are we clear?." }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center flex-col">
      This is the chatbot page
      <button className="py-3 px-10 rounded-xl border" onClick={chatBot}>
        Run Chatbot
      </button>
    </div>
  );
};

export default page;
