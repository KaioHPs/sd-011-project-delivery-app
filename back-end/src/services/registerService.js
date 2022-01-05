const crypto = require('crypto');
const { user } = require('../database/models');
const validateRegister = require('../helpers/validateRegister');

const create = async (object) => {
  const validation = validateRegister(object);

  if (validation) return validation;

  const hash = crypto.createHash('md5').update(object.password).digest('hex');

  const newUser = {
    ...object,
    password: hash,
    role: 'customer',
  };

  const { dataValues } = await user.create(newUser);

  return { code: 201, user: dataValues };
};

module.exports = { create };