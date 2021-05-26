const mongoose = require("mongoose");
//const { ObjectId } = mongoose.Schema;
const CompanyModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  } //,
  // userid: {
  //type: ObjectId,
  //required: true
  // }
});
module.exports = mongoose.model("company", CompanyModel);
