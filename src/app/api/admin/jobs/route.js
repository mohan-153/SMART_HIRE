import { NextResponse } from "next/server";

import connectDB from "@/lib/db";

import Job from "@/models/Job";
import Recruiter from "@/models/Recruiter";

export async function GET() {
  try {
    await connectDB();

    const jobs =
      await Job.find()
        .sort({
          createdAt: -1,
        });

    const jobsWithCompany =
      await Promise.all(
        jobs.map(
          async (job) => {
            const recruiter =
              await Recruiter.findById(
                job.recruiterId
              );

            return {
              ...job.toObject(),
              companyName:
                recruiter
                  ?.companyName ||
                "Company",
            };
          }
        )
      );

    return NextResponse.json({
      success: true,
      jobs: jobsWithCompany,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch jobs",
      },
      {
        status: 500,
      }
    );
  }
}