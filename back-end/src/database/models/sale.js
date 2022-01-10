const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, {
    timestamps: true,
    createdAt: 'sale_date',
    updatedAt: false,
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
