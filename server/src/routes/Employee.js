const express = require('express');

const {
    insertEmployee,
  } = require('../controller/employeeController');
const Router = express.Router();

// Post equests
Router.post('/employee', insertEmployee);

module.exports = Router;
