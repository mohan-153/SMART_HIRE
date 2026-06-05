import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import Recruiter from "@/models/Recruiter";

export async function GET(
  req,
  { params }
) {
  try {
    await connectDB();

    const { id } =
      await params;

    const recruiter =
      await Recruiter.findById(id)
        .select("-password");

    return NextResponse.json({
      success: true,
      recruiter,
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

    await Recruiter.findByIdAndDelete(
      id
    );

    return NextResponse.json({
      success: true,
      message:
        "Recruiter Deleted",
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

    const recruiter =
      await Recruiter.findById(id);

    recruiter.isBlocked =
      !recruiter.isBlocked;

    await recruiter.save();

    return NextResponse.json({
      success: true,
      isBlocked:
        recruiter.isBlocked,
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