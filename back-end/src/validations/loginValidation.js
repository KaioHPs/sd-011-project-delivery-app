const emailRegex = require("../utils/emailValidate");

const validateEmail = (email) => {
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Invalid email'
    };
}
}

const emailAndPasswordAreRequired = (email, password) => {
  if (!email || !password) {
    return {
      success: false,
      message: 'Email and password are required'
    };
    }
  }

const passwordIsAtLeast6Characters = (password) => {
  if (password.length < 6) {
    return {
      success: false,
      message: 'Password must be at least 6 characters'
    };
  }
}


    module.exports = {validateEmail, emailAndPasswordAreRequired, passwordIsAtLeast6Characters};
