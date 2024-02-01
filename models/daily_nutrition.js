const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db");

const Daily_Nutrition = sequelize.define('Daily_Nutrition', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false  
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    protein: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    carbohydrates: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fat: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Daily_Nutrition;