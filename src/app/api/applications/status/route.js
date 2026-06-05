import { NextResponse } from "next/server";

import connectDB from "@/lib/db";

import Application from "@/models/Application";
import Candidate from "@/models/Candidate";

import { sendEmail } from "@/lib/mail";

export async function PUT(req) {
  try {
    await connectDB();

    const {
      applicationId,
      status,
    } = await req.json();

    const application =
      await Application.findById(
        applicationId
      );

    if (!application) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Application not found",
        },
        { status: 404 }
      );
    }

    application.status = status;

    await application.save();

    const candidate =
      await Candidate.findById(
        application.candidateId
      );

    if (candidate) {
      await sendEmail(
        candidate.email,
        "Application Status Updated",
        `
          <h2>Application Status Updated</h2>

          <p>Your application status is now:</p>

          <h3>${status}</h3>
        `
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Application status updated",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}