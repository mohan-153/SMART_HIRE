import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import connectDB from "@/lib/db";
import Candidate from "@/models/Candidate";
import Recruiter from "@/models/Recruiter";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    let user;

    

    if (decoded.role === "candidate") {
      user = await Candidate.findById(
        decoded.id
      ).select("-password");
    }

    else if (decoded.role === "recruiter") {
      user = await Recruiter.findById(
        decoded.id
      ).select("-password");
    }

    else if (decoded.role === "admin") {
      user = {
        username:
          process.env.ADMIN_USERNAME,
      };
    }

    return NextResponse.json({
      success: true,
      role: decoded.role,
      user,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }
}