const { body } = require("express-validator");

const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

const registerValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .matches(passwordPattern)
    .withMessage(
      "Password must be at least 8 chars, contain 1 uppercase letter and 1 number"
    ),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

const loginValidator = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = {
  registerValidator,
  loginValidator
};
