import { NextResponse } from "next/server";

import connectDB from "@/lib/db";

import Recruiter from "@/models/Recruiter";
import Job from "@/models/Job";

export async function GET() {
  try {
    await connectDB();

    const recruiters =
      await Recruiter.find()
        .select("-password")
        .sort({
          createdAt: -1,
        });

    const recruitersWithJobs =
      await Promise.all(
        recruiters.map(
          async (recruiter) => {
            const jobsCount =
              await Job.countDocuments({
                recruiterId:
                  recruiter._id,
              });

            return {
              ...recruiter.toObject(),
              jobsCount,
            };
          }
        )
      );

    return NextResponse.json({
      success: true,
      recruiters:
        recruitersWithJobs,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch recruiters",
      },
      {
        status: 500,
      }
    );
  }
}