const { sale } = require('../database/models/index');

const getAll = async () => {
  const sales = await sale.findAll();

  return sales;
}

module.exports = {
  getAll,
};
