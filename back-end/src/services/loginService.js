  const crypto = require('crypto');
const { emailAndPasswordExists,
  emailIsValid,
  passwordIsSmallerThanSix } = require('../validations/loginValidations');

  const { user } = require('../database/models');

  const validatePassword = async (email, password) => {
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const findUser = await user.findOne({ where: { email } });
    console.log(email, password);
    if (findUser.password !== hash) {
      return {
        status: 400,
        message: 'invalid password',
      };
      }
        return {
          status: 200,
          message: {
           email: findUser.email,
            id: findUser.id,
            name: findUser.name,
            role: findUser.role,
          },
        };
    };

  const userExists = async (email, password) => {
    const findUser = await user.findOne({ where: { email } });
    if (!findUser) {
      return {
        status: 404,
        message: 'User not found',
      };
    }
    return validatePassword(email, password);
  };

const validateLogin = (email, password) => {
if (emailAndPasswordExists(email, password)
  && emailIsValid(email)
  && passwordIsSmallerThanSix(password)) {
    return {
      status: 400,
      message: 'Login failed',
    };
} 
 return userExists(email, password);
};

  module.exports = { validateLogin };
