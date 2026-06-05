import { NextResponse } from "next/server";

import connectDB from "@/lib/db";

import Application from "@/models/Application";
import Candidate from "@/models/Candidate";
import Job from "@/models/Job";

export async function GET(req, context) {
  try {
    await connectDB();

    // `context.params` may be a Promise in some Next.js versions — await to unwrap.
    const params = await context.params;
    const { id } = params || {};

    if (!id) {
      return NextResponse.json({ success: false, message: "Missing id" }, { status: 400 });
    }

    const application = await Application.findById(id)
      .populate("candidateId")
      .populate("jobId");

    if (!application) {
      return NextResponse.json({ success: false, message: "Application not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}
