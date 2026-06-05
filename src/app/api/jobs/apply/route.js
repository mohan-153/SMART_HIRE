import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Application from "@/models/Application";
import Job from "@/models/Job";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const job = await Job.findById(
      body.jobId
    );

    if (!job) {
      return NextResponse.json(
        {
          success: false,
          message: "Job not found",
        },
        {
          status: 404,
        }
      );
    }

    await Application.create({
      candidateId: body.candidateId,

      recruiterId:
        job.recruiterId,

      jobId: body.jobId,

      jobTitle:
        job.jobTitle,

      companyName:
        job.companyName,

      location:
        job.location,

      salary:
        job.salary,

      status: "Applied",

      firstName:
        body.firstName,

      lastName:
        body.lastName,

      email:
        body.email,

      mobile:
        body.mobile,

      gender:
        body.gender,

      college:
        body.college,

      type:
        body.type,

      passoutYear:
        body.passoutYear,

      domain:
        body.domain,

      course:
        body.course,

      specialization:
        body.specialization,

      programme:
        body.programme,

      duration:
        body.duration,

      resume:
        body.resume,
    });

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