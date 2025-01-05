import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.resolve("./public", "cv.pdf");
  const fileBuffer = fs.readFileSync(filePath);
  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
