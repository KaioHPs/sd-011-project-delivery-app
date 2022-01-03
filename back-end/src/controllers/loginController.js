const {validateLogin} = require('../services/loginService');


const login = async (req, res) => {
  const {email, password} = req.body;
  const {status, message} = validateLogin(email, password);
  return res.status(status).json(message);
}

module.exports = {
  login
}
