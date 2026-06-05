import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Application from "@/models/Application";

export async function GET(
  req,
  context
) {
  try {
    await connectDB();

    const { candidateId } =
      await context.params;

    const applications =
      await Application.find({
        candidateId,
      }).sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      applications,
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