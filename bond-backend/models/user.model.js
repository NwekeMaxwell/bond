const mongoose = require("mongoose");

//lets create a schema
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
    minlength: 3,
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
    minlength: 2,
  },
  avatar: String,
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: String,
  phone: String,
  About: String,
  updatedAt: {
    type: String,
    default: Date.now,
  },
  createdAt: String,
  deleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
