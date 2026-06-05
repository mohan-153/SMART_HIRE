import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import Candidate from "@/models/Candidate";

export async function GET() {
  try {
    await connectDB();

    const candidates =
      await Candidate.find()
        .select("-password")
        .sort({
          createdAt: -1,
        });

    return NextResponse.json({
      success: true,
      candidates,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch candidates",
      },
      {
        status: 500,
      }
    );
  }
}