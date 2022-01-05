const { user } = require('../database/models');
const emailRegex = require('../utils/emailValidate');

const checkEmail = async (email) => {
  if (!email || typeof email !== 'string') {
    return { code: 400, message: '"email" is required' };
  }
  if (!emailRegex.test(email)) {
    return { code: 400, message: '"email" must be a valid email' };
  }
  
  const emailExists = await user.findOne({ where: { email } });
  if (emailExists) {
    return { code: 409, message: 'User already registered' };
  }
  return null;
};

const checkName = async (name) => {
  if (!name || typeof name !== 'string' || name.length < 12) {
    return { code: 400, message: '"displayName" length must be at least 12 characters long' };
  }
  const nameExists = await user.findOne({ where: { name } });
  if (nameExists) {
    return { code: 409, message: 'User already registered' };
  }
  return null;
};

const checkPassword = (password) => {
  if (!password || typeof password !== 'string') {
    return { code: 400, message: '"password" is required' };
  }
  if (password.length < 6) {
    return { code: 400, message: '"password" length must be at least 6 characters long' };
  }
  return null;
};

module.exports = async ({ name, email, password }) => {
  if (checkName(name)) return checkName(name);
  const passwordCheck = await checkPassword(password);
  if (passwordCheck) return passwordCheck;
  const emailCheck = await checkEmail(email);
  if (emailCheck) return emailCheck;
  return null;
};