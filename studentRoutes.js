const express = require("express");
const router = express.Router();
const students = require("../data/students");

// GET /students - get all students
router.get("/", (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id - get one student by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// POST /students - add a new student
router.post("/", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ message: "Name and course are required" });
  }

  // new id = last id + 1 (so ids do not repeat after deleting)
  const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

  const newStudent = { id: newId, name, course };
  students.push(newStudent);

  res.status(201).json(newStudent);
});

// PUT /students/:id - update a student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, course } = req.body;

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (!name || !course) {
    return res.status(400).json({ message: "Name and course are required" });
  }

  student.name = name;
  student.course = course;

  res.status(200).json(student);
});

// DELETE /students/:id - delete a student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deleted = students.splice(index, 1);

  res.status(200).json({ message: "Student deleted", student: deleted[0] });
});

module.exports = router;