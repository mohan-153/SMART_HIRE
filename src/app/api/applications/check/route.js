import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Application from "@/models/Application";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } =
      new URL(req.url);

    const candidateId =
      searchParams.get(
        "candidateId"
      );

    const jobId =
      searchParams.get(
        "jobId"
      );

    const application =
      await Application.findOne({
        candidateId,
        jobId,
      });

    return NextResponse.json({
      applied: !!application,
    });
  } catch (error) {
    return NextResponse.json(
      {
        applied: false,
      },
      {
        status: 500,
      }
    );
  }
}