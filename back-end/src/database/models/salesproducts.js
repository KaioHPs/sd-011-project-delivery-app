const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    saleId: { type: DataTypes.INTEGER, field: 'sale_id' },
    productId: { type: DataTypes.INTEGER, field: 'product_id' },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  salesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return salesProduct;
};

module.exports = salesProduct;
