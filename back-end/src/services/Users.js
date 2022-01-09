const { user } = require('../database/models');

const getAllSellers = async () => {
  const sellers = await user.findAll({
      attributes: ['id', 'name', 'role'],
      where: {
        role: 'seller',
      }
    }
  );

  return sellers;
};

module.exports = {
  getAllSellers,
};
