import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import Candidate from "@/models/Candidate";

export async function GET(
  req,
  { params }
) {
  try {
    await connectDB();

    const { id } =
      await params;

    const candidate =
      await Candidate.findById(id)
        .select("-password");

    return NextResponse.json({
      success: true,
      candidate,
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

    await Candidate.findByIdAndDelete(
      id
    );

    return NextResponse.json({
      success: true,
      message:
        "Candidate Deleted",
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

    const candidate =
      await Candidate.findById(id);

    candidate.isBlocked =
      !candidate.isBlocked;

    await candidate.save();

    return NextResponse.json({
      success: true,
      isBlocked:
        candidate.isBlocked,
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