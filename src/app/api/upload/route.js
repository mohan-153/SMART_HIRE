import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const data = await req.formData();

    const file = data.get("resume");

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume is required",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(
      process.cwd(),
      "public/uploads/resumes"
    );

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, {
        recursive: true,
      });
    }

    const fileName = `${Date.now()}-${file.name}`;

    const filePath = path.join(
      uploadDir,
      fileName
    );

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      fileUrl: `/uploads/resumes/${fileName}`,
      message: "Resume uploaded successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Upload failed",
      },
      { status: 500 }
    );
  }
}