const express = require("express");
const EmployeeModel = require("../Models/employeeModel");
const mongoose = require("mongoose");

exports.AddEmployee = (req, res) => {
  const { firstname, lastname, company, designation, email, phone } = req.body;
  const users = new EmployeeModel({
    firstname,
    lastname,
    company,
    designation,
    email,
    phone
  });
  users
    .save()
    .then(() => {
      return res.status(200).json({
        message: "saved !!"
      });
    })
    .catch(e => {
      return res.status(400).json({
        message: e
      });
    });
};
exports.FindEmployee = (req, res) => {
  EmployeeModel.find({})
    .then(data => {
      return res.status(200).json({ data });
    })
    .catch(e => {
      return res.status(400).json({
        message: e
      });
    });
};

exports.updateEmployee = (req, res) => {
  const Userid = new mongoose.Types.ObjectId(req.params.id);
  const { firstname, lastname, company, designation, email, phone } = req.body;
  EmployeeModel.findByIdAndUpdate(
    { _id: Userid },
    { firstname, lastname, company, designation, email, phone }
  ).then(() => {
    return res.status(200).json({
      message: "updated user"
    });
  });
};
exports.deleteEmployee = (req, res) => {
  const userid = new monggose.Types.ObjectId(req.params.id);
  EmployeeModel.findByIdAndDelete({ _id: userid })
    .then(() => {
      return res.status(200).json({
        message: "user deleted !!"
      });
    })
    .catch(e => {
      return res.status(400).json({
        message: e
      });
    });
};
