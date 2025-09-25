const express = require("express");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

// Enroll a student in a course
router.post("/", async (req, res) => {
  const { studentId, courseId } = req.body;
  const enrollment = new Enrollment({ studentId, courseId });
  await enrollment.save();
  res.json(enrollment);
});

// Get all enrollments
router.get("/", async (req, res) => {
  const enrollments = await Enrollment.find();
  res.json(enrollments);
});

// Get enrollments by student
router.get("/student/:studentId", async (req, res) => {
  const enrollments = await Enrollment.find({ studentId: req.params.studentId });
  res.json(enrollments);
});

// Get enrollments by course
router.get("/course/:courseId", async (req, res) => {
  const enrollments = await Enrollment.find({ courseId: req.params.courseId });
  res.json(enrollments);
});

// Delete an enrollment
router.delete("/:id", async (req, res) => {
  const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
  if (!enrollment) return res.status(404).json({ error: "Enrollment not found" });
  res.json({ message: "Enrollment removed" });
});

module.exports = router;
