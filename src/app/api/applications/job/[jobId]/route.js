import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Application from "@/models/Application";

export async function GET(
  req,
  { params }
) {
  try {
    await connectDB();

    const applications =
      await Application.find({
        jobId: params.jobId,
      });

    return NextResponse.json({
      success: true,
      applications,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}