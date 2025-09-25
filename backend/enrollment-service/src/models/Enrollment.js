const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  studentId: String,   // User ID (student)
  courseId: String,    // Course ID
  enrolledAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
