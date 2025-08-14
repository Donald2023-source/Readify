"use client";
import Button from "@/app/Components/Button";
import { GoogleGenAI } from "@google/genai";
import React, { useState } from "react";
import logo from "@/public/Logo.png";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
const page = () => {
  const [summary, setSummary] = useState("");
  const [searchQueries, setSearchQueries] = useState("");
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileInput = document.querySelector<HTMLInputElement>("#pdfFile");
    if (!fileInput?.files?.[0]) return;

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const res = await fetch("/api/gemini", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setSummary(data?.summary);
    setSearchQueries(data?.searchQueries);
  };

  return (
    <div className="max-w-6xl  flex flex-col border mx-auto items-center h-screen">
      <div className="flex items-center w-full justify-between">
        <span className="flex items-center gap-2">
          <Image className="h-10 w-10" src={logo} alt="logo" />
          <h2 className="font-semibold tracking-wider">Readify</h2>
        </span>
        <Button className="md:flex" text="My Documents" />
      </div>

      <div className="flex items-center w-[70%] flex-col justify-center h-full">
        <h2 className="text-xl ">
          Hi, I'm Readify. Your document summary Assistant
        </h2>
        <fieldset className="border flex items-center justify-between  border-gray-300 py-5 w-full px-6 rounded-full outline-none my-6">
          <input
            type="text"
            placeholder="I'm Here to help you summarize your documents"
            className="w-full outline-none"
          />
          <FaPlus className="text-gray-600" />
        </fieldset>
      </div>
    </div>
  );
};

export default page;
