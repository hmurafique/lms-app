const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// Create course
router.post("/", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});

// Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Get single course by ID
router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
});

// Update course
router.put("/:id", async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
});

// Delete course
router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json({ message: "Course deleted" });
});

module.exports = router;
