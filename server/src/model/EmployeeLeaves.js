const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeLeaves = new Schema(
  {
    emp_id: {
      type: Number,
      required: true,
    },
    is_recent_record: {
      type: Boolean,
      default: true,
    },
    emp_leave_startDate: {
      type: String,
      required: true,
    },
    emp_leave_endDate: {
      type: String,
      required: true,
    },
    emp_leave_reason: {
      type: String,
      default: null,
    },
    is_approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("employeeLeaves", EmployeeLeaves);
