const { Sequelize } = require('sequelize');

require('dotenv').config();
// loads environment variables from env file into process.env 
// this allows us to securly store db credentials like db_name etc 
// this values will be accessble as process.env.db_name 

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

/*
-> this initializes a sequelize instance (a connection to our database) 
-> configuration object : 
host : where our database server is hosted (localhost) 
dialect : type of database we are using ( postgres, mysql)  
logging : false : disables sql query logs in the console for cleaner output 




*/

module.exports = sequelize;
// this exports sequelize instance so we can use it in other files 

