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
      
    </div>
  );
};

export default page;
