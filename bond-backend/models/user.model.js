const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

//lets create a schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      minlength: 3,
    },
    lastname: {
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
    about: String,
    posts: [
      {
        type: ObjectId,
        ref: "Post",
      },
    ],
    likes: [
      {
        type: ObjectId,
        ref: "Likes",
      },
    ],
    replies: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
