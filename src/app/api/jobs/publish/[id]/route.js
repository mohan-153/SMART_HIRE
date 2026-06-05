import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Job from "@/models/Job";

export async function PUT(
  req,
  context
) {
  try {
    await connectDB();

    const { id } =
      await context.params;

    const job =
      await Job.findByIdAndUpdate(
        id,
        {
          status: "published",
        },
        { new: true }
      );

    return NextResponse.json({
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}