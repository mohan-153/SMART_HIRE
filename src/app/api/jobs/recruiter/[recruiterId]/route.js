import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Job from "@/models/Job";

export async function GET(
  request,
  context
) {
  try {
    await connectDB();

    const { recruiterId } =
      await context.params;

    const jobs =
      await Job.find({
        recruiterId,
        status: "published",
      });

    return NextResponse.json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch jobs",
      },
      { status: 500 }
    );
  }
}