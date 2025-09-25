const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/course");

const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://mongo-course:27017/coursedb")
  .then(() => console.log("Course DB connected"))
  .catch(err => console.error(err));

// Routes
app.use("/courses", courseRoutes);

app.listen(4002, () => console.log("Course service running on 4002"));
