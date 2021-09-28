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
  getTotalCount,
} = require("../controller/employeeController");

const {
  getEmployeeFilter,
  fetchUniqueStates,
  fetchUniqueCity,
  fetchUniqueDepartment,
  getFavarioteLocation,
  getFavarioteDepartmentLocation,
  getFavariotState,
  getGender
} = require("../controller/employeeFilters");

const Router = express.Router();

// Post requests
Router.post("/employees", insertManyEmployee);
Router.post("/employee", insertOneEmployee);
Router.post("/employeeLeaves", insertEmpLeaves);
Router.post("/employeeLocation", insertEmpLocation);
Router.post("/employeeFilters", getEmployeeFilter);

// Get request
Router.get("/employee/:id", getEmployeeById);
Router.get("/employee", getEmployee);
Router.get("/employeeLeaves", getEmployeeLeaves);
Router.get("/employeeLocation", getEmployeeLocation); //all active employee location
Router.get("/employeeLocation/:id", getEmployeeLocationById);
Router.get("/fetchUniquestates", fetchUniqueStates);
Router.get("/fetchUniqueCity", fetchUniqueCity);
Router.get("/fetchUniqueDepartment", fetchUniqueDepartment);
Router.get("/getfav", getFavarioteLocation);
Router.get("/getfavdep", getFavarioteDepartmentLocation);
<<<<<<< HEAD
Router.get("/getTotalCount", getTotalCount);
=======
Router.get("/getfavstate", getFavariotState);
Router.get("/getgen", getGender);

>>>>>>> 813a0e7b4a31897e69d69a8b15483041036b2f5a

// Put request
Router.put("/employeeLeaves", updateEmployeeLeavesStatusById);
Router.put("/employeeLocation/:id", updateEmployeeLocationStatusById);

module.exports = Router;
