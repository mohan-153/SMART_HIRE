import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    userRole: {
      type: String,
      enum: ["candidate", "recruiter", "admin"],
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      enum: [
        "application",
        "job",
        "account",
        "system",
      ],
      default: "system",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Notification ||
  mongoose.model(
    "Notification",
    NotificationSchema
  );