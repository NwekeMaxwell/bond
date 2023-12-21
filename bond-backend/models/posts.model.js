const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const postsSchema = new mongoose.Schema(
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
    comments: {
      type: ObjectId,
      ref: "Comment",
    },
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postsSchema);
