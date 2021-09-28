const mongoose = require("mongoose");

module.exports = mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@xethoncluster.gg1lm.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
);
