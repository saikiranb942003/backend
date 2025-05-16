
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with explicit dialect
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,  
    port: process.env.DB_PORT
  }
);

const User = require('./user')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);

// Set up associations 
User.hasMany(Order, {
  foreignKey: 'userId',
  as: 'orders'
});

Order.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

module.exports = {
  sequelize,
  User,
  Order
};
