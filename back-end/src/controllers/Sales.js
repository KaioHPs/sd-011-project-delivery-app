const Sales = require('../services/Sales');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const db = new Sequelize(config.development);

const createSale = async (req, res, _next) => {
  const t = await db.transaction();
  try {
    const { uId, sId, price, address, addressNum, prods } = req.body;
    const sale = await Sales.createSale({ uId, sId, price, address, addressNum, t });

    for await (const prod of prods) {
      await Sales.createSaleProduct({ product: prod, sale, t });
    }

    await t.commit();
    return res.status(201).json(sale);
  } catch (error) {
    await t.rollback();
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  createSale,
};
