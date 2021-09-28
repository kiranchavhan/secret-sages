const { Employee, EmployeeLeaves, EmployeeLocation } = require("../model");

const { SUCCESS, FAILED } = require("../constant/CommonConstants");

const { idGenerator } = require("../utils/EmployeeIdGenerator");

const { getEmployee } = require("./employeeController");

exports.getFavarioteLocation = async(req, res) => {
  const arr =await Employee.aggregate([
    { $unwind: "$address_city" },
    { $sortByCount: "$address_city" },
  ])
  var view = 0;
  for (var i = 3; i < arr.length; i++) {
    view = view + arr[i].count;
  }
  var result=[];
  result.push(arr[0],arr[1],arr[2]);
  result.push({_id:'Other',count:view});
  res.json(result);
};
exports.getFavariotState = async(req, res) => {
 
  const arr = await Employee.aggregate([
    { $unwind: "$address_state" },
    { $sortByCount: "$address_state" },
  ])
  var view = 0;
  for (var i = 3; i < arr.length; i++) {
    view = view + arr[i].count;
  }
  var result=[];
  result.push(arr[0],arr[1],arr[2]);
  result.push({_id:'Other',count:view});
  res.json(result);
};

exports.getFavarioteDepartmentLocation = async (req, res) => {
  const arr = await Employee.aggregate([
    { $unwind: "$emp_department" },
    { $sortByCount: "$emp_department" },
  ]);
  var view = 0;
  for (var i = 3; i < arr.length; i++) {
    view = view + arr[i].count;
  }
  var result=[];
  result.push(arr[0],arr[1],arr[2]);
  result.push({_id:'Other',count:view});
  res.json(result);
};
