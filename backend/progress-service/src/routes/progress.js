import express from "express";
import Progress from "../models/Progress.js";

const router = express.Router();

// Create progress record
router.post("/", async (req, res) => {
  try {
    const progress = new Progress(req.body);
    await progress.save();
    res.status(201).json(progress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get progress by user & course
router.get("/:userId/:courseId", async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const progress = await Progress.findOne({ userId, courseId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update progress
router.put("/:id", async (req, res) => {
  try {
    const updated = await Progress.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
