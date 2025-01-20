const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/MERN";

function connectDB() {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Connection error", err));
}

module.exports = connectDB;
