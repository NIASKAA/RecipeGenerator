const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, username: this.username },
    process.env.JWTPRIVATEKEY,
    { expiresIn: "2h" }
  );
};

// next.js builds everything and tries to recreate models, so check for existing models
module.exports = mongoose.models.User || mongoose.model("User", userSchema, "User");
