import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Candidate from "@/models/Candidate";
import Application from "@/models/Application";
import Job from "@/models/Job";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } =
      new URL(req.url);

    const recruiterId =
      searchParams.get("recruiterId");

    console.log(
      "Recruiter ID:",
      recruiterId
    );

    const allApplications =
      await Application.find();

    console.log(
      "Total Applications:",
      allApplications.length
    );

    console.log(
      "First Application:",
      allApplications[0]
    );

    const applications =
      await Application.find({
        recruiterId,
      })
        .populate("candidateId")
        .populate("jobId")
        .sort({
          createdAt: -1,
        });

    console.log(
      "Applications Found:",
      applications.length
    );

    console.log(
      applications
    );

    return NextResponse.json({
      success: true,
      applications,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}