const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema(
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
    comments: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    createdAt: String,
    updatedAt: String,
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
