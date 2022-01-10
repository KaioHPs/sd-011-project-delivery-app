const { validateLogin } = require('../services/loginService');
const { createToken } = require('../middlewares/jwtValidation');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = createToken(email);
  const { message, status } = await validateLogin(email, password);
  message.token = token;
  return res.status(status).json(message);
};

module.exports = {
  login,
};
