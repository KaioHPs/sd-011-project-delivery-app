const RegisterService = require('../services/registerService');

const register = async (req, res) => {
  const { email, password, name } = req.body;
  const { code, message, user } = await RegisterService.create({ email, password, name });

  if (!user) return res.status(code).json({ message });

  res.status(code).json(user);
};

module.exports = {
  register,
};
