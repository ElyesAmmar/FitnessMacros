const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db");

const Favorite_Food = sequelize.define('Favorite_Food', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false  
    },
    food_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Favorite_Food;