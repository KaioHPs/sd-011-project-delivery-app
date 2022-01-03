const emailRegex = require("../utils/emailValidate");

const validateLogin = (email, password) => {
  if (!email || !password) {
    return {
      status: 400,
      message: 'Email and password are required'
    };
  }else if (!emailRegex.test(email)) {
      return {
        status: 400,
        message: 'Invalid email'
      };
     }else if(password.length < 6) {
      return {
        status: 400,
        message: 'Password must be at least 6 characters'
      };
    }else{
      return {
        status: 200,
        message: 'Login successful'
      };
    }
    }

    module.exports = {validateLogin};
