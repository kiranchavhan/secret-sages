const express = require("express");

const {
  insertManyEmployee,
  insertOneEmployee,
  getEmployeeById,
  getEmployee,
  insertEmpLeaves,
  getEmployeeLeaves,
  updateEmployeeLeavesStatusById,
  insertEmpLocation,
  getEmployeeLocationById,
  getEmployeeLocation,
  updateEmployeeLocationStatusById,
} = require("../controller/employeeController");
const Router = express.Router();

// Post requests
Router.post("/employees", insertManyEmployee);
Router.post("/employee", insertOneEmployee);
Router.post("/employeeLeaves", insertEmpLeaves);
Router.post("/employeeLocation", insertEmpLocation);

// Get request
Router.get("/employee/:id", getEmployeeById);
Router.get("/employee", getEmployee);
Router.get("/employeeLeaves", getEmployeeLeaves);
Router.get("/employeeLocation", getEmployeeLocation);
Router.get("/employeeLocation/:id", getEmployeeLocationById);
// Put request
Router.put("/employeeLeaves", updateEmployeeLeavesStatusById);
Router.put("/employeeLocation/:id", updateEmployeeLocationStatusById);

module.exports = Router;
