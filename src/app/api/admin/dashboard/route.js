import { NextResponse } from "next/server";

import connectDB from "@/lib/db";

import Candidate from "@/models/Candidate";
import Recruiter from "@/models/Recruiter";
import Job from "@/models/Job";
import Application from "@/models/Application";

export async function GET() {
  try {
    await connectDB();

    const totalCandidates =
      await Candidate.countDocuments();

    const totalRecruiters =
      await Recruiter.countDocuments();

    const totalJobs =
      await Job.countDocuments();

    const totalApplications =
      await Application.countDocuments();

    const activeJobs =
      await Job.countDocuments({
        status: "published",
      });

    return NextResponse.json({
      success: true,

      stats: {
        totalCandidates,
        totalRecruiters,
        totalJobs,
        totalApplications,
        activeJobs,
      },
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to load dashboard",
      },
      {
        status: 500,
      }
    );
  }
}