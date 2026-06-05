import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectDB from "@/lib/db";
import Candidate from "@/models/Candidate";
import Recruiter from "@/models/Recruiter";

export async function POST(req) {
  try {
    await connectDB();

    const {
      email,
      password,
      confirmPassword,
    } = await req.json();

    if (
      !email ||
      !password ||
      !confirmPassword
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Passwords do not match",
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
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    if (candidate) {
      candidate.password =
        hashedPassword;
      await candidate.save();
    }

    if (recruiter) {
      recruiter.password =
        hashedPassword;
      await recruiter.save();
    }

    return NextResponse.json({
      success: true,
      message:
        "Password updated successfully",
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