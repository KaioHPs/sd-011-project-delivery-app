const { sale } = require('../database/models/index');

const getAll = async () => {
  const sales = await sale.findAll();

  return sales;
};

const getById = async (id) => {
  const selectedSale = await sale.findByPk({ id });

  return selectedSale;
}

module.exports = {
  getAll,
  getById,
};
