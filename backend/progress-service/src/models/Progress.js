import mongoose from "mongoose";

const ProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    completedLessons: {
      type: Number,
      default: 0,
    },
    totalLessons: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Progress", ProgressSchema);
