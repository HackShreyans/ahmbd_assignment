const express = require("express");
const {
  AddCompany,
  FindCompany,
  updateCompany,
  deleteCompany
} = require("../Controllers/companiesController");

const router = express.Router();

router.post("/company/api/post", AddCompany);
router.get("/company/api/get", FindCompany);
router.put("/company/api/put/:id", updateCompany);
router.delete("/company/api/deletd/:id", deleteCompany);

module.exports = router;
