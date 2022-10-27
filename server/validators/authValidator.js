const { check, validationResult } = require('express-validator');

const validateSignUpRequest = [
  check('firstName').notEmpty().withMessage('First Name is required field'),
  check('lastName').notEmpty().withMessage('Last Name is required field'),
  check('username')
    .notEmpty()
    .withMessage('Username is required field')
    .isLength({ min: 3 })
    .withMessage('Username should have more than 3 characters'),
  check('password')
    .notEmpty().bail()
    .withMessage('Password is required field').bail()
    .isLength({ min: 6 })
    .withMessage('Password should be at least 6 characters').bail()
    .matches(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/)
    .withMessage('Password should contains numbers and letters').bail(),
  check('email')
    .notEmpty()
    .withMessage('Email is required field')
    .isEmail()
    .withMessage('Enter a Valid email address'),
  check('contactNo')
    .notEmpty()
    .withMessage('Contact Number is required field')
    .isLength({ min: 10, max: 10 }),
];

const isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors.errors);
  if (errors.errors.length) {
    return res.status(400).json({ errors:errors.errors });
  }
  return res.json({ status: 'Negative' });
  // next();
};

module.exports = { validateSignUpRequest, isRequestValidated };
