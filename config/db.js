const { Sequelize } = require('sequelize');
require("dotenv").config({path:"./.env"});

const sequelize = new Sequelize('sql_fitness_macros', 'root', process.env.PWDB, {
    host: 'localhost',
    dialect: 'mysql'
    });
    
module.exports = sequelize;

