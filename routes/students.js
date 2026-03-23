const express = require("express");
const router = express.Router();

const StudetnController = require("../controllers/index");

router.get("/", StudetnController.getAllStudents);

router.get("/:id", StudetnController.getSingleStudent);

router.post("/", StudetnController.createStudent);

router.put("/:id", StudetnController.updateStudent);

router.delete("/:id", StudetnController.deleteStudent);

module.exports = router;