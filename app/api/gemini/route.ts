import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import pdfParse from "pdf-parse"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if(!file) {
      return NextResponse.json({ error: "No PDF uploaded"}, { status: 400})
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const pdfData = await pdf
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
  } catch (err) {
    return NextResponse.json({ error: "Failed to generate Content" });
  }
}
