import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Job from "@/models/Job";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const job = await Job.create(body);

    return NextResponse.json({
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create job",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const jobs = await Job.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      jobs,
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