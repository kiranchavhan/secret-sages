const { Employee, EmployeeLeaves, EmployeeLocation } = require("../model");

const { SUCCESS, FAILED } = require("../constant/CommonConstants");

const { idGenerator } = require("../utils/EmployeeIdGenerator");

const { getEmployee } = require("./employeeController");

exports.getFavarioteLocation =  (req, res) => {
 Employee.aggregate([
    { $unwind: "$address_city" },
    { $sortByCount: "$address_city" },
  ]).then((result) => {
    res.status(200).json({
      result,
      message: SUCCESS,
    });
  })
  .catch((err) => {
    console.log(err);
    res.json({
      message: FAILED,
    });
  });
};
exports.getFavariotState = (req, res) => {
  Employee.aggregate([
    { $unwind: "$address_state" },
    { $sortByCount: "$address_state" },
  ])
    .then((result) => {
      res.status(200).json({
        result,
        message: SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: FAILED,
      });
    });

};

exports.getFavarioteDepartmentLocation =  (req, res) => {
Employee.aggregate([
    { $unwind: "$emp_department" },
    { $sortByCount: "$emp_department" },
  ]).then((result) => {
    res.status(200).json({
      result,
      message: SUCCESS,
    });
  })
  .catch((err) => {
    console.log(err);
    res.json({
      message: FAILED,
    });
  });
};
