const { validateLogin } = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { message, status } = await validateLogin(email, password);
  console.log(message);
  return res.status(status).json(message);
};

module.exports = {
  login,
};
