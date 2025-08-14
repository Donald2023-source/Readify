import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const prompt = formData.get("string") as String;

    if (!file) {
      return NextResponse.json({ error: "No PDF uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const typedArray = new Uint8Array(arrayBuffer);

    // Load PDF
    const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

    let fullText = "";
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const pageText = content.items.map((item: any) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    // Summarize PDF
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const summaryResponse = await model.generateContent(
      prompt === ""
        ? `Summarize the following document in a way that is both concise and detailed. Include the main points, key arguments, important facts, and any notable conclusions or recommendations. Avoid unnecessary repetition, but ensure that no important detail is left out. Present the summary in clear, well-structured paragraphs. Put the name of the summary as first sentence. After the summary, provide a bullet-point list of the most critical points from the document for quick reference:\n\n${fullText}`
        : "prompt"
    );
    const summary = summaryResponse.response.text();

    // Generate related search queries
    const searchQueryResponse = await model.generateContent(
      `From the summary below, generate 5 Google search queries to find similar content:\n\n${summary}`
    );
    const searchQueries = searchQueryResponse.response.text();
    // Save response to MongoDB
    const { MongoClient } = await import("mongodb");

    const client = new MongoClient(process.env.MONGO_URI!);
    await client.connect();
    const db = client.db(process.env.MONGODB_DB || "readify");
    const collection = db.collection("summaries");
    await collection.insertOne({
      summary,
      searchQueries,
      createdAt: new Date(),
      fileName: `Summary of ${file.name}`,
    });
    await client.close();
    return NextResponse.json({
      summary,
      searchQueries,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
