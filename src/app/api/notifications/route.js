import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import Notification from "@/models/Notification";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const userId =
      searchParams.get("userId");

    const notifications =
      await Notification.find({
        userId,
      }).sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      notifications,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch notifications",
      },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    await connectDB();

    const { notificationId } =
      await req.json();

    await Notification.findByIdAndUpdate(
      notificationId,
      {
        isRead: true,
      }
    );

    return NextResponse.json({
      success: true,
      message: "Marked as read",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Update failed",
      },
      { status: 500 }
    );
  }
}