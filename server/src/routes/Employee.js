const express = require('express');

const {
    insertEmployee,
    getEmployeeById,
    getEmployee
  } = require('../controller/employeeController');
const Router = express.Router();

// Post requests
Router.post('/employee', insertEmployee);
Router.get('/employee', getEmployee);

// Get request
Router.get('/employee/:id',getEmployeeById);

module.exports = Router;
