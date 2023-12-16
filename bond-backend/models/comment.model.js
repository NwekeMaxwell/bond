const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema(
  {
    author: {
      type: ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 300,
    },
    parentpost: {
      type: ObjectId,
      ref: "Post",
    },
    createdAt: String,
    updatedAt: String,
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
