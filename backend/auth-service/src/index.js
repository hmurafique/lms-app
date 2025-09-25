const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo-auth:27017/authdb")
  .then(() => console.log("Auth DB connected"))
  .catch(err => console.error(err));

app.use("/auth", authRoutes);

app.listen(4001, () => console.log("Auth service running on 4001"));
