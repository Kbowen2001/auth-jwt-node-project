
const mongodb = require("../db/connect");
const objectId = require("mongodb").ObjectId;

const awesomeFunction = (req, res) => {
  res.send("Awesome Name!");
};

const tooeleTechFunction = (req, res) => {
  res.send("Tooele Tech is Awesome!");
};

const getAllStudents =  async (req, res) => {
  try{
    const result = await mongodb.getDb().db().collection("students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  }
   catch (err) {
    res.status(500).json(error);
  }
};





/** const awesomeFunction = (Req, res) => {
  res.send("Hello World!");
};

const tooeleTech = (Req, res) => {
  res.send("Tooele Tech is Awesome!");
};

module.exports = { awesomeFunction, tooeleTech };
*/ 