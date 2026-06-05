import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Recruiter from "@/models/Recruiter";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const recruiterId =
      searchParams.get("recruiterId");

    const recruiter =
      await Recruiter.findById(
        recruiterId
      );

    if (!recruiter) {
      return NextResponse.json(
        {
          success: false,
          message: "Recruiter not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      profile: recruiter,
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

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      recruiterId,
      mobile,
      designation,
      companyName,
      companyWebsite,
      companyLocation,
      companyDescription,
      sector,
    } = body;

    const recruiter =
      await Recruiter.findByIdAndUpdate(
        recruiterId,
        {
          mobile,
          designation,
          companyName,
          companyWebsite,
          companyLocation,
          companyDescription,
          sector,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    return NextResponse.json({
      success: true,
      profile: recruiter,
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