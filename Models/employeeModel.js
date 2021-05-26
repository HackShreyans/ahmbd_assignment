const mongoose = require("mongoose");
//const { ObjectId } = mongoose.Schema;
const EmployeeModel = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  } //,
  // userid: {
  //type: ObjectId,
  //required: true
  // }
});
module.exports = mongoose.model("employee", EmployeeModel);
