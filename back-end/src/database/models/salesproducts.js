const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false
  });

  salesProduct.associate = (models) => {
    salesProduct.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    salesProduct.belongsToMany(models.product, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return salesProduct;
};

module.exports = salesProduct;