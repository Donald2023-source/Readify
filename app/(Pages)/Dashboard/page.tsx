"use client";
import Button from "@/app/Components/Button";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";
import { FaPlus, FaFilePdf } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";

const Page = () => {
  const [summary, setSummary] = useState("");
  const [searchQueries, setSearchQueries] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      alert("Please select a PDF file to upload.");
    
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("prompt", prompt);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to process the PDF.");

      const data = await res.json();
      setSummary(data?.summary || "No summary available.");
      setSearchQueries(data?.searchQueries || "No search queries available.");
      setPrompt("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error(error);
      alert("Error processing PDF.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto h-screen flex flex-col px-4">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-4 bg-white shadow fixed top-0 left-0 right-0 px-4 md:px-8 z-10">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Readify Logo" className="h-10 w-10" />
          <h2 className="font-semibold text-lg">Readify</h2>
        </div>
        <button className="bg-[#0157FF] py-2 px-6 rounded-full text-white shadow hover:scale-95 transition">
          New Document
        </button>
      </header>

      {/* Content */}
      <main className="flex flex-col items-center w-full mt-24 flex-1">
        <form
          onSubmit={handleUpload}
          className="w-full max-w-2xl flex flex-col items-center"
        >
          <div className="border-2 border-dashed border-gray-300 rounded-xl w-full p-6 flex flex-col items-center justify-center gap-3 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <input
              type="file"
              ref={fileInputRef}
              id="pdfFile"
              className="hidden"
              accept="application/pdf"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
            <label
              htmlFor="pdfFile"
              className="flex flex-col items-center gap-2"
            >
              <FaPlus className="text-gray-500 text-2xl" />
              <span className="text-sm text-gray-600">
                {fileName || "Click to upload or drag & drop a PDF"}
              </span>
            </label>
          </div>

          <div className="mt-6 w-full">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a prompt for your document..."
              className="w-full px-4 py-3 border rounded-full border-gray-400 outline-none "
            />
          </div>

          <div className="absolute bg-white/20 w-full border backdrop-blur-lg">
            
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#0157FF] cursor-pointer text-white py-3 px-8 rounded-full shadow hover:scale-95 transition"
          >
            Summarize Document
          </button>
        </form>

        {isLoading && (
          <div className="mt-6 flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Summary */}
        {summary && !isLoading && (
          <div className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow p-6 overflow-auto">
            <h3 className="font-semibold mb-2 text-lg">Summary</h3>
            <div className="prose prose-sm text-gray-700">
              <ReactMarkdown>{summary}</ReactMarkdown>
            </div>
            {searchQueries && (
              <>
                <h4 className="font-semibold mt-4">Search Queries</h4>
                <p className="text-gray-600">{searchQueries}</p>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
