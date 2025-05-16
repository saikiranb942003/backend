module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    User.associate = models => {
      // One User has many Orders
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'orders', // alias for association
      });
    };
  
    return User;
};
  