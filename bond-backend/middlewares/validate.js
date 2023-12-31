const {
  userSchema,
  postSchema,
  commentSchema,
} = require("../services/joi.service");

// Catching required fields errors when creating a user
const validateUserInputs = (req, res, next) => {
  try {
    const validateInput = userSchema.validate(req.body);

    if (validateInput.error)
      return res.status(400).json({
        success: false,
        errormessage: validateInput.error.details[0].message,
      });

    console.log("User input validated successfully");
    next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
      success: false,
    });
  }
};

// Catching required fields errors when creating a user
const validatePostInputs = (req, res, next) => {
  try {
    const validateInput = postSchema.validate(req.body);

    if (validateInput.error)
      return res.status(400).json({
        success: false,
        errormessage: validateInput.error.details[0].message,
      });

    console.log("Post input validated successfully");
    next();
  } catch (err) {
    return res.status(400).json({
      message: err,
      success: false,
    });
  }
};

// Catching required fields errors when creating a user
const validateCommentInputs = (req, res, next) => {
  try {
    const validateInput = commentSchema.validate(req.body);

    if (validateInput.error)
      return res.status(400).json({
        success: false,
        errormessage: validateInput.error.details[0].message,
      });
    console.log("Comment input validated successfully");
    next();
  } catch (err) {
    return res.status(400).json({
      message: err,
      success: false,
    });
  }
};

module.exports = {
  validateUserInputs,
  validatePostInputs,
  validateCommentInputs,
};
