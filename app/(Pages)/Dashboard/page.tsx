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
  const [prompt, setPrompt] = useState("")
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileInput = document.querySelector<HTMLInputElement>("#pdfFile");
    if (!fileInput?.files?.[0]) return;

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    formData.append("prompt", prompt)

    const res = await fetch("/api/gemini", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setSummary(data?.summary);
    setSearchQueries(data?.searchQueries);
  };

  document.addEventListener("onKeyPress", (e:React.FormEvent) => {
    handleUpload(e);
  });

  return (
    <div className="max-w-6xl  flex flex-col   mx-auto items-center h-screen">
      <div className="flex items-center w-full justify-between py-4 ">
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
        <form onSubmit={handleUpload} className="w-full">
          <fieldset className="border flex items-center justify-between border-gray-300 py-5 w-full px-6 rounded-full outline-none my-6">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
              type="text"
              placeholder="I'm Here to help you summarize your documents"
              className="w-full outline-none"
              value={prompt}
              name="prompt"
            />
            <input className="hidden" type="file" name="file" id="pdfFile" />
            <label htmlFor="pdfFile">
              <FaPlus className="text-gray-600 text-xl cursor-pointer" />
            </label>
            <Button type="submit" text="Summarize" className="ml-4" />
          </fieldset>
        </form>
        {summary && (
          <div className="w-full bg-gray-100 rounded-lg p-4 my-4">
            <h3 className="font-semibold mb-2">Summary:</h3>
            <p>{summary}</p>
            {searchQueries && (
              <>
          <h4 className="font-semibold mt-4">Search Queries:</h4>
          <p>{searchQueries}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
