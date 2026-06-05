import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import Candidate from "@/models/Candidate";
import Recruiter from "@/models/Recruiter";

export async function POST(req) {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    const candidate =
      await Candidate.findOne({ email });

    const recruiter =
      await Recruiter.findOne({ email });

    if (!candidate && !recruiter) {
      return NextResponse.json(
        {
          success: false,
          message: "Email not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email verified",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}