import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectDB from "@/lib/db";
import Candidate from "@/models/Candidate";
import Recruiter from "@/models/Recruiter";

import { sendEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      role,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,

      mobile,
      designation,
      companyName,
      companyWebsite,
      companyLocation,
      companyDescription,
      sector,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Passwords do not match",
        },
        { status: 400 }
      );
    }

    const candidateExists =
      await Candidate.findOne({ email });

    const recruiterExists =
      await Recruiter.findOne({ email });

    if (candidateExists || recruiterExists) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 400 }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    // =========================
    // Candidate Registration
    // =========================

    if (role === "candidate") {
      await Candidate.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: "candidate",
      });

      try {
        await sendEmail(
          email,
          "Welcome to SmartHire",
          `
          <h2>Welcome to SmartHire 🎉</h2>

          <p>Hello ${firstName},</p>

          <p>Your candidate account has been created successfully.</p>

          <p>You can now login, upload your resume and apply for jobs.</p>

          <br/>

          <p>Team SmartHire</p>
          `
        );
      } catch (mailError) {
        console.log(
          "Candidate email error:",
          mailError
        );
      }

      return NextResponse.json(
        {
          success: true,
          message:
            "Candidate registered successfully",
        },
        { status: 201 }
      );
    }

    // =========================
    // Recruiter Registration
    // =========================

    if (role === "recruiter") {
      if (
        !mobile ||
        !designation ||
        !companyName ||
        !companyLocation ||
        !companyDescription ||
        !sector
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "All recruiter fields are required",
          },
          { status: 400 }
        );
      }

      await Recruiter.create({
        firstName,
        lastName,
        email,
        mobile,
        designation,
        companyName,
        companyWebsite,
        companyLocation,
        companyDescription,
        sector,
        password: hashedPassword,
        role: "recruiter",
      });

      try {
        await sendEmail(
          email,
          "Recruiter Registration Successful",
          `
          <h2>Welcome to SmartHire Recruiter Portal</h2>

          <p>Hello ${firstName},</p>

          <p>Your recruiter account has been created successfully.</p>

          <p>Your account is currently awaiting admin verification.</p>

          <p>Once verified, you will be able to post jobs.</p>

          <br/>

          <p>Team SmartHire</p>
          `
        );
      } catch (mailError) {
        console.log(
          "Recruiter email error:",
          mailError
        );
      }

      return NextResponse.json(
        {
          success: true,
          message:
            "Recruiter registered successfully",
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid role",
      },
      { status: 400 }
    );
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