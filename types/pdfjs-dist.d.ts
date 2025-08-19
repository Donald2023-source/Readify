declare module "pdfjs-dist/build/pdf" {
  export * from "pdfjs-dist/types/src/display/api"; // re-use official types
}

declare module "pdfjs-dist/build/pdf.worker.entry" {
  const worker: string;
  export default worker;
}
