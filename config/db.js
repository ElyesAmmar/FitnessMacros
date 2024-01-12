const { Sequelize } = require('sequelize');
require("dotenv").config({path:"./.env"});

const sequelize = new Sequelize('sql_fitness_macros', 'root', process.env.PWDB, {
    host: 'localhost',
    dialect: 'mysql'
    });
const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;