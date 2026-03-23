
const mongodb = require("../routes/db/connect");
const ObjectId = require("mongodb").ObjectId;

const awesomeFunction = (req, res) => {
  res.send("Update part3 of the API Project! /students to see student list ");
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
 

//GET single student

const getSingleStudent = async (req, res) => {
  try {
    const userID = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .collection("students")
      .find({_id: userID});
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};


//CREATE student

const createStudent = async (req, res) => {
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };
    const response = await mongodb
      .getDb()
      .collection("students")
      .insertOne(student);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || "Some error occurred while creating the student.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//Update One Student
const updateStudent = async (req, res) => {
  try {
    const userID = new ObjectId(req.params.id);
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };
    const response = await mongodb
      .getDb()
      .collection("students")
      .updateOne({ _id: userID }, { $set: student });
    if (response.acknowledged) {
      res.status(200).json(response);
    } else {
      res.status(500).json(response.error || "Some error occurred while updating the student.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//Delete One Student
const deleteStudent = async (req, res) => {
  try {
    const userID = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .collection("students")
      .deleteOne({ _id: userID }); 
    console.log(response);
    if (response.acknowledged) {
      res.status(200).json(response);
    } else {
      res.status(500).json(response.error || "Some error occurred while deleting the student.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};



module.exports = {
  awesomeFunction,
  tooeleTechFunction,
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
}