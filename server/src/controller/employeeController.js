const {
  Employee,
} = require("../model");

const { SUCCESS, FAILED } = require("../constant/CommonConstants");

exports.insertEmployee = async (req, res) => {
  const { data } = req.body;

  let empData = [];

  data &&
    data.map((emp, index) => {
      empData.push({
        emp_id: emp.id,
        first_name: emp.first_name,
        last_name: emp.last_name,
        emp_email: emp.email,
        emp_gender: emp.gender,
        address_pincode: emp.address_pincode,
        address_state: emp.address_state,
        address_city: emp.address_city,
        emp_department: emp.department,
      });
    });

  Employee.insertMany(empData, { upsert: true })
    .then((result) => {
      res.json({
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

exports.getEmployee = (req, res) => {
  Employee.find()
    .then((result) => {
      res.status(200).json({
        result,
        message: SUCCESS,
      });
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.json({
          message: FAILED,
        });
      }
    });
};