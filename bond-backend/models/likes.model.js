const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const likesSchema = new mongoose.Schema(
  {
    liker: {
      type: ObjectId,
      ref: "User",
    },
    parentpost: {
      type: ObjectId,
      ref: "User",
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

module.exports = mongoose.model("Likes", likesSchema);
