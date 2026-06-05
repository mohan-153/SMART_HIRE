import { NextResponse } from "next/server";
import Candidate from "@/models/Candidate";
import connectDB from "@/lib/db";
import Job from "@/models/Job";
import Application from "@/models/Application";

export async function GET() {
  try {
    await connectDB();

    const postedJobs = await Job.countDocuments();

    const totalApplicants =
      await Application.countDocuments();

    const shortlisted =
      await Application.countDocuments({
        status: "Shortlisted",
      });

    const pendingReview =
      await Application.countDocuments({
        status: "Applied",
      });

    const recentApplicants =
      await Application.find()
        .populate(
          "candidateId",
          "firstName lastName"
        )
        .populate("jobId", "jobTitle")
        .sort({ createdAt: -1 })
        .limit(10);

    return NextResponse.json({
      success: true,
      stats: {
        postedJobs,
        totalApplicants,
        shortlisted,
        pendingReview,
      },
      recentApplicants,
    });
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