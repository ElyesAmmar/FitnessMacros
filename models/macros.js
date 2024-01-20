const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db");

const Macros = sequelize.define('Macros', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true    
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

module.exports = Macros;