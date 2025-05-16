module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    Order.associate = models => {
      // Order belongs to one User
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',  // alias for association
      });
    };
  
    return Order;
};
  