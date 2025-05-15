const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const User = require('./user')(sequelize, DataTypes);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = User;

module.exports = db;
