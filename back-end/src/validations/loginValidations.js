const emailRegex = require('../utils/emailValidate');

const emailAndPasswordExists = (email, password) => {
  if (!email || !password) {
    return {
      status: 400,
      message: 'Email and password are required',
    };
}
};

const emailIsValid = (email) => {
  if (!emailRegex.test(email)) {
    return {
      status: 400,
      message: 'Email is not valid',
    };
  }
};

  const passwordIsSmallerThanSix = (password) => {
    if (password.length < 6) {
      return {
        status: 400,
        message: 'Password must be at least 6 characters long',
      };
    }
  };

  module.exports = {
    emailAndPasswordExists,
    emailIsValid,
    passwordIsSmallerThanSix,
  };
