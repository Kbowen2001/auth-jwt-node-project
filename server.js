
const express = require("express");
const cors = require("cors");
const mongodb = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()).use("/", require ("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log (
      "\x1b[34m%s\x1b[0m",
      `connected to DB and listening on ${PORT} `
    );
  }
});

























/** require("dotenv").config();
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

*/