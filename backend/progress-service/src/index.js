import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import progressRoutes from "./routes/progress.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/progress", progressRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://mongo-progress:27017/progressdb")
  .then(() => console.log("✅ Progress Service connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  console.log(`🚀 Progress Service running on port ${PORT}`);
});
