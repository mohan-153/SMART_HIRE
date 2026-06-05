import { NextResponse } from "next/server";

import connectDB from "@/lib/db";

import Application from "@/models/Application";
import Candidate from "@/models/Candidate";
import Job from "@/models/Job";

import { sendEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    await connectDB();

    const {
      candidateId,
      jobId,
      recruiterId,
    } = await req.json();

    if (
      !candidateId ||
      !jobId ||
      !recruiterId
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const alreadyApplied =
      await Application.findOne({
        candidateId,
        jobId,
      });

    if (alreadyApplied) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You have already applied for this job",
        },
        { status: 400 }
      );
    }

    const application =
      await Application.create({
        candidateId,
        jobId,
        recruiterId,
      });

    const candidate =
      await Candidate.findById(
        candidateId
      );

    const job =
      await Job.findById(jobId);

    if (candidate && job) {
      await sendEmail(
        candidate.email,
        "Application Submitted",
        `
          <h2>Application Submitted Successfully</h2>

          <p>You applied for:</p>

          <h3>${job.jobTitle}</h3>

          <p>Company: ${job.companyName}</p>
        `
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Application submitted successfully",
      application,
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