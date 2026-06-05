import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import connectDB from "@/lib/db";
import Candidate from "@/models/Candidate";
import Recruiter from "@/models/Recruiter";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // Admin Login

if (
  email === process.env.ADMIN_USERNAME &&
  password === process.env.ADMIN_PASSWORD
) {
  const token = jwt.sign(
    {
      role: "admin",
      email: process.env.ADMIN_USERNAME,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  const response =
    NextResponse.json({
      success: true,
      message: "Admin Login Successful",
      role: "admin",
    });

  response.cookies.set(
    "token",
    token,
    {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge:
        60 * 60 * 24 * 7,
      path: "/",
    }
  );

  return response;
}

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    let user = await Candidate.findOne({ email });

    let role = "candidate";

    if (!user) {
      user = await Recruiter.findOne({ email });
      role = "recruiter";
    }

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 401 }
      );
    }

    if (user.isBlocked) {
      return NextResponse.json(
        {
          success: false,
          message: "Account has been blocked",
        },
        { status: 403 }
      );
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      role,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}