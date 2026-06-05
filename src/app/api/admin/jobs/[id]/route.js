import { NextResponse } from "next/server";

import connectDB from "@/lib/db";

import Job from "@/models/Job";

export async function GET(
  req,
  { params }
) {
  try {
    await connectDB();

    const { id } =
      await params;

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
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req,
  { params }
) {
  try {
    await connectDB();

    const { id } =
      await params;

    await Job.findByIdAndDelete(
      id
    );

    return NextResponse.json({
      success: true,
      message:
        "Job Deleted",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  req,
  { params }
) {
  try {
    await connectDB();

    const { id } =
      await params;

    const job =
      await Job.findById(id);

    job.status =
      job.status ===
      "published"
        ? "draft"
        : "published";

    await job.save();

    return NextResponse.json({
      success: true,
      status: job.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}