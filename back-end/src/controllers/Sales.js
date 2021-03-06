const Sequelize = require('sequelize');
const Sales = require('../services/Sales');
const config = require('../database/config/config');

const db = new Sequelize(config.development);

const createSale = async (req, res, _next) => {
  const t = await db.transaction();
  try {
    const { uId, sId, price, address, addressNum, prods } = req.body;
    const sale = await Sales.createSale({ uId, sId, price, address, addressNum, t });
    const requests = [];

    await prods.forEach(async (prod) => {
      requests.push(Sales.createSaleProduct({ product: prod, currSale: sale, t }));
    });

    await Promise.all(requests);

    await t.commit();
    return res.status(201).json(sale);
  } catch (error) {
    await t.rollback();
    console.log(error);
    return res.status(500).json(error);
  }
};

const getSaleById = async (req, res, _next) => {
  const { saleId } = req.params;
  console.log(saleId);
  const sale = await Sales.getSaleById({ saleId });
  return res.status(200).json({ sale });
};

module.exports = {
  createSale,
  getSaleById,
};
