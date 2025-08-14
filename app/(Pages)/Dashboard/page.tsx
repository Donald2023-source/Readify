"use client";
import Button from "@/app/Components/Button";
import { GoogleGenAI } from "@google/genai";
import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleUpload} action="">
        <input type="file" id="pdfFile" accept="application/pdf" />
        <button className="py-4 px-10 bg-blue-400 text-white hover:scale-95 cursor-pointer">Upload & Summarize</button>

        {summary && (
          <div>
            <h3>{summary}</h3>
            <h4>{searchQueries}</h4>
          </div>
        )}
      </form>
    </div>
  );
};

export default page;
