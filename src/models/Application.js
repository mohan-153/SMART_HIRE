import mongoose from "mongoose";

const ApplicationSchema =
  new mongoose.Schema(
    {
      jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },

      recruiterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recruiter",
      },

      candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
      },

      firstName: String,
      lastName: String,
      email: String,
      mobile: String,
      gender: String,

      location: String,

      college: String,

      type: String,

      passoutYear: String,

      domain: String,

      course: String,

      specialization: String,

      programme: String,

      duration: String,

      resume: String,

      jobTitle: String,
      companyName: String,
      salary: String,
      status: {
        type: String,
        default: "Applied",
      },
    },
    {
      timestamps: true,
    }
  );

export default
  mongoose.models.Application ||
  mongoose.model(
    "Application",
    ApplicationSchema
  );