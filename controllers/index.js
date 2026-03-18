
const mongodb = require("../routes/db/connect");
const objectId = require("mongodb").ObjectId;

const awesomeFunction = (req, res) => {
  res.send("Hello World This is part 2 of the Student API Project!");
};

const tooeleTechFunction = (req, res) => {
  res.send("Tooele Tech is Awesome!");
};

const getAllStudents =  async (req, res) => {
  try{
    const result = await mongodb.getDb().collection("students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  }
   catch (err) {
    res.status(500).json(err);
  }
};
 


module.exports = {
  awesomeFunction,
  tooeleTechFunction,
  getAllStudents,
}