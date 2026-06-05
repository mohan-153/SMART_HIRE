import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Job from "@/models/Job";

export async function GET(
  request,
  context
) {
  try {
    await connectDB();

    const { id } =
      await context.params;

    const job =
      await Job.findById(id);

    return NextResponse.json({
      success: true,
      job,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}