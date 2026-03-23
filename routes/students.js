const express = require("express");
const router = express.Router();

const StudetnController = require("../controllers/index");

router.get("/", StudetnController.getAllStudents);

router.get("/:id", StudetnController.getSingleStudent);

router.post("/", StudetnController.createStudent);

module.exports = router;