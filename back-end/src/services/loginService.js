const { emailAndPasswordExists,
  emailIsValid,
  passwordIsSmallerThanSix } = require('../validations/loginValidations');

const validateLogin = (email, password) => {
  const getUser = user.findOne({ email: email})

if (emailAndPasswordExists(email, password)
  && emailIsValid(email)
  && passwordIsSmallerThanSix(password)) {
  return {
    status: 200,
    message: 'Login successful',
  };
} else if (!getUser) {
  return {
    status: 404,
    message: 'Not found',
  };
} else {
  return {
    status: 400,
    message: 'Login failed',
  };
}};

  module.exports = { validateLogin };
