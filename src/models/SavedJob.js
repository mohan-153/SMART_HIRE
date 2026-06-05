import mongoose from "mongoose";

const SavedJobSchema =
  new mongoose.Schema(
    {
      candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    },
    {
      timestamps: true,
    }
  );

export default
  mongoose.models.SavedJob ||
  mongoose.model(
    "SavedJob",
    SavedJobSchema
  );