const emailRegex = require('../utils/emailValidate');

const SIX = 6;
const TWELVE = 12;

const checkEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return true;
  }
  if (!emailRegex.test(email)) {
    return true;
  }

  return null;
};

const checkName = (name) => {
  if (!name || typeof name !== 'string' || name.length < TWELVE) {
    return true;
  }
  return null;
};

const checkPassword = (password) => {
  if (!password || typeof password !== 'string') {
    return true;
  }
  if (password.length < SIX) {
    return true;
  }
  return null;
};

module.exports = ({ name, email, password }) => {
  if (checkName(name)) return false;
  if (checkPassword(password)) return false;
  if (checkEmail(email)) return false;
  return true;
};
