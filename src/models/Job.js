import mongoose from "mongoose";

const JobSchema =
  new mongoose.Schema(
    {
      recruiterId: {
        type:
          mongoose.Schema.Types
            .ObjectId,
        ref: "Recruiter",
      },

      jobTitle: String,
      jobType: String,
      experience: String,
      salary: String,
      location: String,
      workMode: String,

      skills: [String],

      education: String,

      description: String,

      responsibilities:
        String,

      benefits: String,

      deadline: Date,

      status: {
        type: String,
        enum: [
          "draft",
          "published",
        ],
        default: "draft",
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.models
  .Job ||
  mongoose.model(
    "Job",
    JobSchema
  );