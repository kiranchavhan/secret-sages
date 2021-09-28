const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeLocation = new Schema(
  {
    is_current_location: {
      type: Boolean,
      default: true,
    },
    emp_id: {
      type: Number,
    },
    longitude: {
      type: String,
      default: "28.7041° N",
    },
    latitude: {
      type: String,
      default: "77.1025° E",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("employeeLocation", EmployeeLocation);
