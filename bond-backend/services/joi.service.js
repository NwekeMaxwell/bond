const Joi = require("joi");

//check the user schema fields against pre-set conditions
const userSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  username: Joi.string().required().lowercase(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
  avatar: Joi.string().optional(),
  role: Joi.string().optional(),
  phone: Joi.string().optional(),
  about: Joi.string().optional(),
});

// Checking the postit schema fields against pre-set conditions
const postSchema = Joi.object({
  content: Joi.string().required(),
  image1: Joi.string().optional(),
  image2: Joi.string().optional(),
  image3: Joi.string().optional(),
  image4: Joi.string().optional(),
});

// Checking the comment schema fields against pre-set conditions
const commentSchema = Joi.object({
  content: Joi.string().required(),
});

module.exports = { userSchema, postSchema, commentSchema };
