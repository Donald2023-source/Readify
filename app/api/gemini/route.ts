import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.entry";

GlobalWorkerOptions.workerSrc = pdfWorker;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const prompt = (formData.get("prompt") as string) || "";

    if (!file) {
      return NextResponse.json({ error: "No PDF uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const typedArray = new Uint8Array(arrayBuffer);
    const pdf = await getDocument({ data: typedArray }).promise;

    let fullText = "";
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const pageText = content.items.map((item: any) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const summaryResponse = await model.generateContent(
      `${prompt}\n\n${fullText}`
    );

    const summary =
      summaryResponse.response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No summary generated.";

    const searchQueryResponse = await model.generateContent(
      `From the summary below, generate 5 Google search queries to find similar content:\n\n${summary}`
    );

    const searchQueries =
      searchQueryResponse.response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No search queries generated.";

    const { MongoClient } = await import("mongodb");
    const client = new MongoClient(process.env.MONGO_URI!);
    await client.connect();
    const db = client.db(process.env.MONGO_DB || "readify");
    const collection = db.collection("summaries");
    await collection.insertOne({
      summary,
      searchQueries,
      createdAt: new Date(),
      fileName: `Summary of ${file.name}`,
    });

    return NextResponse.json({ summary, searchQueries });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
