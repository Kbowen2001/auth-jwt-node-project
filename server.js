require("dotenv").config();
const express = require("express");
const connectDB = require("./routes/db/connect");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", require("./routes"));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Test server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
