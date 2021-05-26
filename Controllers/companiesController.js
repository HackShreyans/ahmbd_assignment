const express = require("express");
const CompanyModel = require("../Models/companiesModel");
const mongoose = require("mongoose");

exports.AddCompany = (req, res) => {
  const { name, email, logo, website } = req.body;
  const users = new CompanyModel({
    name,
    email,
    logo,
    website
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
exports.FindCompany = (req, res) => {
  CompanyModel.find({})
    .then(data => {
      return res.status(200).json({ data });
    })
    .catch(e => {
      return res.status(400).json({
        message: e
      });
    });
};

exports.updateCompany = (req, res) => {
  const Userid = new mongoose.Types.ObjectId(req.params.id);
  const { name, email, logo, website } = req.body;
  CompanyModel.findByIdAndUpdate(
    { _id: Userid },
    { name, email, logo, website }
  ).then(() => {
    return res.status(200).json({
      message: "updated user"
    });
  });
};
exports.deleteCompany = (req, res) => {
  const userid = new monggose.Types.ObjectId(req.params.id);
  CompanyModel.findByIdAndDelete({ _id: userid })
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
