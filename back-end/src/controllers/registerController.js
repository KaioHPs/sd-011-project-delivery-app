const RegisterService = require('../services/registerService');
const { createToken } = require('../middlewares/jwtValidation');

const register = async (req, res) => {
  const { email, password, name, role } = req.body;
  const token = createToken(email);
  const { code, message, user } = await RegisterService.create({ email, password, name, role });

  if (!user) return res.status(code).json({ message });
  delete user.id;
  delete user.password;
  user.token = token;
  res.status(code).json(user);
};

module.exports = {
  register,
};
