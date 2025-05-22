const { DataTypes } = require('sequelize');
// DataTypes is an object that contains all the datatypes Sequelize supports (like STRING, INTEGER, BOOLEAN) 
// we will use these to define the structure of our model fields 

const sequelize = require('../config/database');

const User = sequelize.define('User', { // defines a sequelize model named "user" 
   // it tells sequelize to create or interact with Users table in the database(pluralized by default)   
   // the second argument is the schema defination (columns) 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobileNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
