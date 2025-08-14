  "use client";
import Button from "@/app/Components/Button";
import { GoogleGenAI } from "@google/genai";
import React, { useState } from "react";
import logo from "@/public/Logo.png"
import Image from "next/image";
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
    <div className="max-w-6xl flex mx-auto border justify-center">
        <div >
            <Image className="h-10 w-10" src={logo} alt="logo" />
        </div>
    </div>
  );
};

export default page;
