const { emailAndPasswordExists,
  emailIsValid,
  passwordIsSmallerThanSix } = require('../validations/loginValidations');

const validateLogin = (email, password) => {
if (!emailAndPasswordExists(email, password)
  && !emailIsValid(email)
  && !passwordIsSmallerThanSix(password)) {
  return {
    status: 200,
    message: 'Login successful',
  };
}
  return {
    status: 400,
    message: 'Login failed',
  };
};

  module.exports = { validateLogin };
