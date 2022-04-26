const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.MONGOKEY || 'mongodb://localhost:27017/RecipeGenerator');
  return handler(req, res);
};

module.exports = connectDB;

