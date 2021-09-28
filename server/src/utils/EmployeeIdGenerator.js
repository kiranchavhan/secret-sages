const { Employee } = require("../model");

exports.idGenerator = async () => {
  const idGen = await Employee.find({}).sort({ _id: -1 }).limit(1);

  return idGen[0].emp_id + 1;
};
