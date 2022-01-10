const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, {
    timestamps: true,
    createdAt: 'sale_date',
    updatedAt: false,
    underscored: true,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user,
      { foreignKey: 'user_id', as: 'buyer' });
    sale.belongsTo(models.user,
      { foreignKey: 'seller_id', as: 'seller' });
  };

  return sale;
};

module.exports = sale;