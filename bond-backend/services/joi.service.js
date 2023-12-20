const Joi = require("joi");

//check the user schema fields against pre-set conditions
const userSchema = Joi.object({
  fullName: Joi.string().required,
  username: Joi.string().required().lowercase(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
});

// Checking the postit schema fields against pre-set conditions
const postSchema = Joi.object({
  content: Joi.string().required(),
});

// Checking the comment schema fields against pre-set conditions
const commentSchema = Joi.object({
  content: Joi.string().required(),
});

module.exports = { userSchema, postSchema, commentSchema };
