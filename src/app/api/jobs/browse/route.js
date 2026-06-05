import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Job from "@/models/Job";
import CandidateProfile from "@/models/CandidateProfile";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } =
      new URL(req.url);

    const candidateId =
      searchParams.get("candidateId");

    let candidateSkills = [];

    if (candidateId) {
      const profile =
        await CandidateProfile.findOne({
          candidateId,
        });

      candidateSkills =
        profile?.skills || [];
    }

    const jobs = await Job.find({
      status: "published",
    }).sort({
      createdAt: -1,
    });

    const sortedJobs =
      jobs.sort((a, b) => {
        const aMatch =
          a.skills?.filter(
            (skill) =>
              candidateSkills.includes(
                skill
              )
          ).length || 0;

        const bMatch =
          b.skills?.filter(
            (skill) =>
              candidateSkills.includes(
                skill
              )
          ).length || 0;

        return bMatch - aMatch;
      });

    return NextResponse.json({
      success: true,
      jobs: sortedJobs,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}