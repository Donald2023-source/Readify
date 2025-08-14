"use client";
import Button from "@/app/Components/Button";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

const Page = () => {
  const [summary, setSummary] = useState("");
  const [searchQueries, setSearchQueries] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const handleUpload = async (
    e:
      | React.FormEvent
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent
  ) => {
    e.preventDefault();

    const fileInput = document.querySelector<HTMLInputElement>("#pdfFile");

    if (!fileInput?.files?.[0]) {
      alert("Please select a PDF file to upload.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    formData.append("prompt", prompt);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to process the PDF.");
      }

      const data = await res.json();
      setSummary(data?.summary || "No summary available.");
      setSearchQueries(data?.searchQueries || "No search queries available.");
      setPrompt("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while processing the PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpload(e);
    }
  };

  return (
    <div className="max-w-6xl flex flex-col mx-auto items-center h-screen">
      {/* Header */}
      <div className="flex items-center w-full justify-between py-4">
        <span className="flex items-center gap-2">
          <Image className="h-10 w-10" src={logo} alt="Readify Logo" />
          <h2 className="font-semibold tracking-wider">Readify</h2>
        </span>
        <Link href="/history">
          <Button className="md:flex" text="My Documents" />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex items-center w-[70%] flex-col justify-center h-full">
        <h2 className="text-xl">
          Hi, I'm Readify. Your document summary assistant
        </h2>
        <form onSubmit={handleUpload} className="w-full">
          <fieldset className="border flex items-center justify-between border-gray-300 py-5 w-full px-6 rounded-full outline-none my-6">
            <input
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
              placeholder="I'm here to help you summarize your documents"
              className="w-full outline-none"
              value={prompt}
              name="prompt"
              onKeyPress={handleKeyPress}
            />
            <input
              className="hidden"
              type="file"
              id="pdfFile"
              accept="application/pdf"
            />
            <label htmlFor="pdfFile">
              <FaPlus className="text-gray-600 text-xl cursor-pointer" />
            </label>
          </fieldset>
        </form>

        {/* Loading State */}
        {isLoading && (
          <div className="w-full flex justify-center my-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        
        {summary && !isLoading && (
          <div className="w-full bg-gray-100 rounded-lg p-4 my-4 mt-10 h-screen">
            <h3 className="font-semibold mb-2">Summary:</h3>
            <pre className="whitespace-pre-wrap">
               <ReactMarkdown>{summary}</ReactMarkdown>
            </pre>
            {searchQueries && (
              <>
                <h4 className="font-semibold mt-4">Search Queries:</h4>
                <p className="whitespace-pre-wrap">{searchQueries}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
