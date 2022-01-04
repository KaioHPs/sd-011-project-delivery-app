const { emailAndPasswordExists,
  emailIsValid,
  passwordIsSmallerThanSix } = require('../validations/loginValidations');

  const { user } = require('../database/models');

const validateLogin = (email, password) => {
 const getUser = user.findOne({ email });

if (emailAndPasswordExists(email, password)
  && emailIsValid(email)
  && passwordIsSmallerThanSix(password)) {
  return {
    status: 200,
    message: 'Login successful',
  };
} if (!getUser) {
  return {
    status: 404,
    message: 'Not found',
  };
} 
  return {
    status: 400,
    message: 'Login failed',
  };
};

  module.exports = { validateLogin };
