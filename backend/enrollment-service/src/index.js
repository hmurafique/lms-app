const express = require("express");
const mongoose = require("mongoose");
const enrollmentRoutes = require("./routes/enrollment");

const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://mongo-enrollment:27017/enrollmentdb")
  .then(() => console.log("Enrollment DB connected"))
  .catch(err => console.error(err));

// Routes
app.use("/enrollments", enrollmentRoutes);

app.listen(4003, () => console.log("Enrollment service running on 4003"));
