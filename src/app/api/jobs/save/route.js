import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import SavedJob from "@/models/SavedJob";
import Job from "@/models/Job";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const exists =
      await SavedJob.findOne({
        candidateId:
          body.candidateId,
        jobId: body.jobId,
      });

    if (!exists) {
      await SavedJob.create(body);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } =
      new URL(req.url);

    const candidateId =
      searchParams.get(
        "candidateId"
      );

    const savedJobs =
      await SavedJob.find({
        candidateId,
      });

    const jobIds =
      savedJobs.map(
        (item) => item.jobId
      );

    const jobs =
      await Job.find({
        _id: {
          $in: jobIds,
        },
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
      {
        status: 500,
      }
    );
  }
}