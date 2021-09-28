const { Employee, EmployeeLeaves, EmployeeLocation } = require("../model");

const { SUCCESS, FAILED } = require("../constant/CommonConstants");

const { idGenerator } = require("../utils/EmployeeIdGenerator");

const { getEmployee } = require("./employeeController");

exports.getFavarioteLocation = (req, res) => {
  Employee.aggregate([
    { $unwind: "$address_city" },
    { $sortByCount: "$address_city" },
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

exports.getFavarioteDepartmentLocation = (req, res) => {
  Employee.aggregate([
    { $unwind: "$emp_department" },
    { $sortByCount: "$emp_department" },
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

//# filter
{
  exports.getEmployeeFilter = (req, res) => {
    const { address_state, address_city, emp_department } = req.body;
    if (!address_state && !address_city && !emp_department) {
      Employee.find({})
        .then((result) => {
          res.status(200).json({
            result,
            message: SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            res.json({
              message: FAILED,
            });
          }
        });
    } else if (!address_state && !address_city) {
      Employee.find({
        emp_department: emp_department,
      })
        .then((result) => {
          res.status(200).json({
            result,
            message: SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            res.json({
              message: FAILED,
            });
          }
        });
    } else if (!address_state && !emp_department) {
      Employee.find({
        address_city: address_city,
      })
        .then((result) => {
          res.status(200).json({
            result,
            message: SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            res.json({
              message: FAILED,
            });
          }
        });
    } else if (!address_city && !emp_department) {
      Employee.find({
        address_state: address_state,
      })
        .then((result) => {
          res.status(200).json({
            result,
            message: SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            res.json({
              message: FAILED,
            });
          }
        });
    } else if (!address_city) {
      Employee.find({
        emp_department: emp_department,
        address_state: address_state,
      })
        .then((result) => {
          res.status(200).json({
            result,
            message: SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            res.json({
              message: FAILED,
            });
          }
        });
    } else if (!address_state) {
      Employee.find({
        emp_department: emp_department,
        address_city: address_city,
      })
        .then((result) => {
          res.status(200).json({
            result,
            message: SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            res.json({
              message: FAILED,
            });
          }
        });
    } else if (!emp_department) {
      Employee.find({
        address_state: address_state,
        address_city: address_city,
      })
        .then((result) => {
          res.status(200).json({
            result,
            message: SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            res.json({
              message: FAILED,
            });
          }
        });
    } else {
      Employee.find({
        address_state: address_state,
        address_city: address_city,
        emp_department: emp_department,
      })
        .then((result) => {
          res.status(200).json({
            result,
            message: SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            res.json({
              message: FAILED,
            });
          }
        });
    }
  };
}
//# fetch states for drop down
{
  exports.fetchUniqueStates = (req, res) => {
    Employee.distinct("address_state")
      .then((result) => {
        res.status(200).json({
          result,
          message: SUCCESS,
        });
      })
      .catch((err) => {
        if (err) {
          res.json({
            message: FAILED,
          });
        }
      });
  };
  exports.fetchUniqueCity = (req, res) => {
    Employee.distinct("address_city")
      .then((result) => {
        res.status(200).json({
          result,
          message: SUCCESS,
        });
      })
      .catch((err) => {
        if (err) {
          res.json({
            message: FAILED,
          });
        }
      });
  };
  exports.fetchUniqueDepartment = (req, res) => {
    Employee.distinct("emp_department")
      .then((result) => {
        res.status(200).json({
          result,
          message: SUCCESS,
        });
      })
      .catch((err) => {
        if (err) {
          res.json({
            message: FAILED,
          });
        }
      });
  };
}
