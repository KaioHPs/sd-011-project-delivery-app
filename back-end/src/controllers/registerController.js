const { create } = require("../services/registerService");


const register = async (req, res) => {
  const {email, password, name} = req.body;
  const {status, message} = create({ email, password, name })
  return res.status(status).json(message);
}

module.exports = {
  register
}
