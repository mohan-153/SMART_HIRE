import mongoose from "mongoose";

const RecruiterSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },

    companyName: {
      type: String,
      required: true,
    },

    companyWebsite: {
      type: String,
      default: "",
    },

    companyLocation: {
      type: String,
      required: true,
    },

    companyDescription: {
      type: String,
      required: true,
    },

    sector: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "recruiter",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Recruiter ||
  mongoose.model("Recruiter", RecruiterSchema);