const mongoose = require("mongoose");
const { EMPLOYEE } = require("../constant/model");

const { Schema } = mongoose;

const Employee = new Schema(
  {
    emp_id: {
      type: Number,
      required: true,
    },
    emp_email: {
      type: String,
      default: null,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      default: null,
    },
    emp_gender: {
      type: String,
      default: null,
    },
    address_pincode: {
      type: Number,
      default: null,
    },
    address_state: {
      type: String,
      default: null,
    },
    address_city: {
      type: String,
      default: null,
    },
    employee_department: {
      type: String,
      default: null,
    },
    is_trashed: {
      type: Boolean,
      default: false,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    is_active: {
      type: Boolean,
      deault: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(EMPLOYEE, Employee);
