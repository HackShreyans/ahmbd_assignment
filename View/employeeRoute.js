const express = require("express");
const {
  AddEmployee,
  FindEmployee,
  updateEmployee,
  deleteEmployee
} = require("../Controllers/employeeController");

const router = express.Router();

router.post("/employee/api/post", AddEmployee);
router.get("/employee/api/get", FindEmployee);
router.put("/employee/api/put/:id", updateEmployee);
router.delete("/employee/api/deletd/:id", deleteEmployee);

module.exports = router;
